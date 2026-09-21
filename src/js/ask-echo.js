/**
 * aivance — „ask echo": das Fragefenster unten rechts.
 *
 * Getippt oder gesprochen, beides fuehrt zu demselben Agenten. Getippt laeuft
 * ueber WebSocket ganz ohne Mikrofon (textOnly), gesprochen ueber WebRTC wie
 * die Demo auf der Produktseite. Gewechselt wird, indem die eine Sitzung
 * geschlossen und die andere geoeffnet wird — der Verlauf im Fenster bleibt
 * dabei stehen, die Sitzung darunter nicht.
 *
 * Bis zur ersten Frage geht nichts an ElevenLabs: weder das SDK (gut ein
 * Megabyte) noch eine Verbindung. Das haelt das JS-Budget der Seite und die
 * Datenschutzlage sauber, denn ohne Handlung des Besuchers wird kein Dritter
 * kontaktiert. Alle Texte stehen als data-Attribute im Markup, damit die
 * englischen Seiten dieselbe Datei benutzen.
 */
(function () {
  "use strict";

  var root = document.querySelector("[data-ask-echo]");
  if (!root) return;

  var agentId = root.getAttribute("data-agent-id");
  var sdkUrl = root.getAttribute("data-sdk-url");
  if (!agentId || !sdkUrl) return;

  function el(sel) { return root.querySelector(sel); }

  var launchBtn = el("[data-ask-open]");
  var panel = el("[data-ask-panel]");
  var closeBtn = el("[data-ask-close]");
  var form = el("[data-ask-form]");
  var input = el("[data-ask-input]");
  var voiceBtn = el("[data-ask-voice]");
  var voiceBar = el("[data-ask-voicebar]");
  var hangupBtn = el("[data-ask-hangup]");
  var muteBtn = el("[data-ask-mute]");
  var threadEl = el("[data-ask-thread]");
  var idleEl = el("[data-ask-idle]");
  var noteEl = el("[data-ask-note]");
  var statusEl = el("[data-ask-status]");
  var waveEl = el("[data-ask-wave]");
  if (!launchBtn || !panel || !form || !input || !threadEl) return;

  /* getAttribute schreibt den Namen klein — "faultConnection" wuerde also auf
     data-t-faultconnection zeigen und nie auf data-t-fault-connection. Deshalb
     hier von Binnenversalien auf Bindestriche umschreiben. */
  function say(key) {
    return root.getAttribute("data-t-" + key.replace(/[A-Z]/g, function (c) {
      return "-" + c.toLowerCase();
    })) || "";
  }

  var sdk = null;
  var conversation = null;
  var modus = "";          /* "", "text" oder "stimme" */
  var imAufbau = "";
  var busy = false;
  var offen = false;
  var stumm = false;
  var spricht = false;
  var wechsel = false;     /* eine Trennung, die wir selbst ausgeloest haben */
  var wartet = "";         /* Frage, die vor dem Verbinden getippt wurde */

  /* ── Pegelanzeige ─────────────────────────────────────────────────────────
     Dieselbe Rechnung wie in der Produktdemo, nur mit weniger Strichen: zur
     Mitte gespiegelt, aussen die tiefen Frequenzen. Wer Bewegung abbestellt
     hat, bekommt eine ruhende Silhouette statt eines Zappelns. */
  var bars = waveEl ? waveEl.children : [];
  var barCount = bars.length;
  var ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var frame = null;

  function abstand(i) { return Math.abs(i - (barCount - 1) / 2) / ((barCount - 1) / 2); }

  function setzeBalken(i, h) {
    bars[i].style.transform = "scaleY(" + Math.min(1, Math.max(0.06, h)).toFixed(3) + ")";
  }

  function wellenRuhe() { for (var i = 0; i < barCount; i++) setzeBalken(i, 0.06); }

  function wellenStandbild() {
    for (var i = 0; i < barCount; i++) setzeBalken(i, 0.1 + Math.pow(1 - abstand(i), 1.5) * 0.55);
  }

  function wellenBild() {
    var daten;
    try {
      daten = spricht ? conversation.getOutputByteFrequencyData() : conversation.getInputByteFrequencyData();
    } catch (e) { daten = null; }
    var laenge = daten ? daten.length : 0;
    for (var i = 0; i < barCount; i++) {
      var d = abstand(i);
      var pegel = laenge ? daten[Math.floor((1 - d) * (laenge - 1))] / 255 : 0;
      setzeBalken(i, 0.06 + pegel * (1 - d * 0.55) * 1.5);
    }
    frame = requestAnimationFrame(wellenBild);
  }

  function wellenStart() {
    if (!barCount) return;
    if (ruhig) { wellenStandbild(); return; }
    if (frame === null) frame = requestAnimationFrame(wellenBild);
  }

  function wellenStop() {
    if (frame !== null) { cancelAnimationFrame(frame); frame = null; }
    spricht = false;
    if (waveEl) waveEl.classList.remove("is-speaking");
    wellenRuhe();
  }

  /* ── Anzeige ────────────────────────────────────────────────────────────── */

  function setStatus(text, aktiv) {
    statusEl.textContent = text;
    root.classList.toggle("is-live", !!aktiv);
  }

  function setNote(text) {
    if (!noteEl) return;
    noteEl.textContent = text || "";
    noteEl.hidden = !text;
  }

  function addTurn(rolle, text) {
    if (!text) return;
    if (idleEl) idleEl.hidden = true;
    var row = document.createElement("p");
    row.className = "ask-echo-turn ask-echo-turn--" + rolle;
    var who = document.createElement("span");
    who.className = "ask-echo-who";
    who.textContent = rolle === "caller" ? say("caller") : say("echo");
    var body = document.createElement("span");
    body.className = "ask-echo-text";
    body.textContent = text;
    row.appendChild(who);
    row.appendChild(body);
    threadEl.appendChild(row);
    threadEl.scrollTop = threadEl.scrollHeight;
  }

  /* Im Sprachmodus tritt die Pegelanzeige mit Auflegen und Stumm an die
     Stelle des Eingabefelds — beides zugleich waere nur Gedraenge. */
  function zeigeSprache(an) {
    form.hidden = an;
    if (voiceBar) voiceBar.hidden = !an;
    if (waveEl) waveEl.hidden = !an;
  }

  /* ── Sitzung ────────────────────────────────────────────────────────────── */

  function loadSdk() {
    if (sdk) return Promise.resolve(sdk);
    if (window.ElevenLabsClient) { sdk = window.ElevenLabsClient; return Promise.resolve(sdk); }
    return new Promise(function (resolve, reject) {
      var tag = document.createElement("script");
      tag.src = sdkUrl;
      tag.async = true;
      tag.onload = function () {
        sdk = window.ElevenLabsClient;
        sdk ? resolve(sdk) : reject(new Error("sdk"));
      };
      tag.onerror = function () { reject(new Error("sdk")); };
      document.head.appendChild(tag);
    });
  }

  /* Schliesst die laufende Sitzung, ohne die Oberflaeche zurueckzusetzen —
     genau das braucht der Wechsel zwischen Tippen und Sprechen. */
  function trenne() {
    if (!conversation) return;
    wechsel = true;
    try { conversation.endSession(); } catch (e) { /* schon getrennt */ }
    conversation = null;
    modus = "";
    wellenStop();
  }

  function zurueck(hinweis) {
    conversation = null;
    modus = "";
    imAufbau = "";
    busy = false;
    stumm = false;
    wartet = "";
    wellenStop();
    zeigeSprache(false);
    setStatus(say("ready"), false);
    setNote(hinweis);
    if (muteBtn) {
      muteBtn.setAttribute("aria-pressed", "false");
      muteBtn.textContent = say("mute");
    }
  }

  function verbinde(ziel) {
    if (busy) return;
    busy = true;
    imAufbau = ziel;
    setNote("");
    setStatus(say("connecting"), false);

    /* Beim Sprechen das Mikrofon zuerst selbst erfragen: eine Ablehnung soll
       als klarer Satz dastehen und nicht als abgebrochene Verbindung. */
    var vorlauf = ziel === "stimme"
      ? navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          stream.getTracks().forEach(function (t) { t.stop(); });
        })
      : Promise.resolve();

    vorlauf.then(loadSdk).then(function (lib) {
      var config = {
        agentId: agentId,
        /* Liefert das Sitzungsobjekt, bevor startSession sein Versprechen
           einloest — und damit bevor onConnect feuert. Ohne diesen Haken
           liefe die vorgemerkte Frage gegen ein noch leeres `conversation`. */
        onConversationCreated: function (sitzung) { conversation = sitzung; },
        onConnect: function () {
          busy = false;
          modus = imAufbau;
          imAufbau = "";
          if (modus === "stimme") {
            setStatus(say("call"), true);
            wellenStart();
          } else {
            setStatus(say("live"), true);
          }
          if (wartet) { schicke(wartet); wartet = ""; }
        },
        onModeChange: function (payload) {
          spricht = !!payload && payload.mode === "speaking";
          if (waveEl) waveEl.classList.toggle("is-speaking", spricht);
          if (modus === "text") setStatus(spricht ? say("thinking") : say("live"), true);
        },
        onDisconnect: function (details) {
          if (wechsel) { wechsel = false; return; }
          /* Alles ausser einem sauberen Schluss (Code 1000) meldet das SDK als
             reason "error" — etwa wenn der Agent einen Override nicht erlaubt.
             Das als "Gespraech beendet" auszugeben, waere gelogen. */
          zurueck(details && details.reason === "error" ? say("faultConnection") : say("ended"));
        },
        onError: function () {
          if (wechsel) { wechsel = false; return; }
          zurueck(say("faultConnection"));
        },
        onMessage: function (payload) {
          if (!payload || !payload.message) return;
          /* Getippte Fragen stehen schon im Verlauf — nur das Gesprochene
             kommt als Transkript zurueck und muss ergaenzt werden. */
          if (payload.source === "user" && modus !== "stimme") return;
          addTurn(payload.source === "user" ? "caller" : "echo", payload.message);
        }
      };

      var agent = {};
      var lang = root.getAttribute("data-lang");
      if (lang) agent.language = lang;
      /* Die API erwartet prompt als Objekt, nicht als Zeichenkette — eine
         Zeichenkette faellt schon an der Formatpruefung durch. */
      var prompt = root.getAttribute("data-prompt");
      if (prompt) agent.prompt = { prompt: prompt };
      /* Nur beim Sprechen: im Textfenster soll Echo nicht von selbst
         anfangen, bevor ueberhaupt jemand gefragt hat. */
      var gruss = root.getAttribute("data-first-message");
      if (gruss && ziel === "stimme") agent.firstMessage = gruss;
      else if (prompt) agent.firstMessage = "";
      if (ziel === "text") {
        /* Das SDK traegt daraus selbst `conversation.text_only` in die
           Eroeffnung ein — nachgemessen am Websocket-Verkehr. Ein eigener
           Override waere doppelt. */
        config.textOnly = true;
      } else {
        config.connectionType = "webrtc";
      }
      config.overrides = { agent: agent };

      return lib.Conversation.startSession(config);
    }).then(function (session) {
      conversation = session;
    }).catch(function (error) {
      var grund = error && error.name === "NotAllowedError" ? say("faultMic")
        : error && error.message === "sdk" ? say("faultSdk")
        : say("faultConnection");
      zurueck(grund);
    });
  }

  function schicke(text) {
    try { conversation.sendUserMessage(text); }
    catch (e) { setNote(say("faultConnection")); }
  }

  function frage(text) {
    text = (text || "").trim();
    if (!text) return;
    addTurn("caller", text);
    if (modus === "text" && conversation) { schicke(text); return; }
    /* Noch keine Textsitzung: Frage vormerken und verbinden. Eine laufende
       Sprachsitzung bleibt, wie sie ist — dort wird gesprochen, nicht getippt. */
    wartet = text;
    if (modus !== "stimme") verbinde("text");
  }

  /* ── Fenster ────────────────────────────────────────────────────────────── */

  function oeffne() {
    if (offen) return;
    offen = true;
    panel.hidden = false;
    root.classList.add("is-open");
    launchBtn.setAttribute("aria-expanded", "true");
    input.focus();
  }

  function schliesse() {
    if (!offen) return;
    offen = false;
    /* Ein offenes Gespraech soll nicht unsichtbar weiterlaufen — erst recht
       nicht mit heissem Mikrofon. */
    if (conversation) {
      wechsel = true;
      try { conversation.endSession(); } catch (e) { /* schon getrennt */ }
      wechsel = false;
    }
    zurueck("");
    panel.hidden = true;
    root.classList.remove("is-open");
    launchBtn.setAttribute("aria-expanded", "false");
    launchBtn.focus();
  }

  launchBtn.addEventListener("click", function () { offen ? schliesse() : oeffne(); });
  if (closeBtn) closeBtn.addEventListener("click", schliesse);

  form.addEventListener("submit", function (ereignis) {
    ereignis.preventDefault();
    var text = input.value;
    input.value = "";
    frage(text);
  });

  root.addEventListener("click", function (ereignis) {
    var chip = ereignis.target.closest ? ereignis.target.closest("[data-ask-prompt]") : null;
    if (chip) frage(chip.textContent);
  });

  if (voiceBtn) {
    voiceBtn.addEventListener("click", function () {
      if (modus === "stimme" || imAufbau === "stimme") return;
      trenne();
      busy = false;
      zeigeSprache(true);
      verbinde("stimme");
    });
  }

  if (hangupBtn) {
    hangupBtn.addEventListener("click", function () {
      trenne();
      wechsel = false;
      zurueck(say("ended"));
      input.focus();
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener("click", function () {
      if (!conversation) return;
      stumm = !stumm;
      try { conversation.setMicMuted(stumm); } catch (e) { return; }
      muteBtn.setAttribute("aria-pressed", stumm ? "true" : "false");
      muteBtn.textContent = stumm ? say("unmute") : say("mute");
    });
  }

  /* Escape schliesst — das Fenster liegt ueber der Seite, also muss man ohne
     Maus wieder herauskommen. Der Rest der Seite bleibt bedienbar, deshalb
     kein Fokus-Kaefig. */
  document.addEventListener("keydown", function (ereignis) {
    if (offen && ereignis.key === "Escape") schliesse();
  });

  window.addEventListener("pagehide", function () {
    if (conversation) { try { conversation.endSession(); } catch (e) { /* egal */ } }
  });

  zurueck("");
  wellenRuhe();
})();
