/**
 * aivance Echo — Live-Demo auf der Produktseite.
 *
 * Bis der Besucher ausdruecklich auf "Gespraech starten" drueckt, geht nichts
 * an ElevenLabs: weder das SDK noch eine Verbindung, und das Mikrofon bleibt zu.
 * Das haelt zweierlei sauber — das JS-Budget der Seite (das SDK wiegt gut ein
 * Megabyte und wuerde jeden Erstaufruf belasten) und die Datenschutzlage: ohne
 * Handlung des Besuchers wird kein Dritter kontaktiert.
 *
 * Alle Texte stehen als data-Attribute im Markup, damit die englische
 * Spiegelseite dieselbe Datei benutzt.
 */
(function () {
  "use strict";

  var root = document.querySelector("[data-echo-demo]");
  if (!root) return;

  var agentId = root.getAttribute("data-agent-id");
  var sdkUrl = root.getAttribute("data-sdk-url");
  if (!agentId || !sdkUrl) return;

  var startBtn = root.querySelector("[data-echo-start]");
  var stopBtn = root.querySelector("[data-echo-stop]");
  var muteBtn = root.querySelector("[data-echo-mute]");
  var statusEl = root.querySelector("[data-echo-status]");
  var threadEl = root.querySelector("[data-echo-thread]");
  var idleEl = root.querySelector("[data-echo-idle]");
  var noteEl = root.querySelector("[data-echo-note]");
  var waveEl = root.querySelector("[data-echo-wave]");
  if (!startBtn || !stopBtn || !statusEl || !threadEl) return;

  function say(key) {
    return root.getAttribute("data-t-" + key) || "";
  }

  /* Die Demo ist erst ab hier bedienbar — ohne JS bleibt der Knopf deaktiviert
     und der Abschnitt liest sich als Beschreibung. */
  startBtn.disabled = false;
  root.classList.add("is-ready");

  var conversation = null;
  var sdk = null;
  var timer = null;
  var seconds = 0;
  var muted = false;
  var busy = false;
  var spricht = false;

  /* ── Pegelanzeige ─────────────────────────────────────────────────────────
     44 Haarlinien, zur Mitte gespiegelt: aussen die tiefen Frequenzen, innen
     die hohen. Solange Echo spricht, lesen wir den Ausgang, sonst das Mikrofon.
     Wer Bewegung abbestellt hat, bekommt eine ruhende Silhouette statt eines
     Zappelns — das Bild bleibt lesbar, nur eben als Standbild. */
  var bars = waveEl ? waveEl.children : [];
  var barCount = bars.length;
  var ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var frame = null;

  function abstand(i) {
    return Math.abs(i - (barCount - 1) / 2) / ((barCount - 1) / 2);
  }

  function setzeBalken(i, h) {
    bars[i].style.transform = "scaleY(" + Math.min(1, Math.max(0.06, h)).toFixed(3) + ")";
  }

  function wellenRuhe() {
    for (var i = 0; i < barCount; i++) setzeBalken(i, 0.06);
  }

  function wellenStandbild() {
    for (var i = 0; i < barCount; i++) setzeBalken(i, 0.1 + Math.pow(1 - abstand(i), 1.5) * 0.55);
  }

  function wellenBild() {
    var daten;
    try {
      daten = spricht ? conversation.getOutputByteFrequencyData() : conversation.getInputByteFrequencyData();
    } catch (e) {
      daten = null;
    }
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

  function setStatus(text, active) {
    statusEl.textContent = text;
    root.classList.toggle("is-live", !!active);
  }

  function setNote(text) {
    if (!noteEl) return;
    noteEl.textContent = text || "";
    noteEl.hidden = !text;
  }

  function tick() {
    seconds += 1;
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    setStatus(say("live") + " · " + m + ":" + (s < 10 ? "0" : "") + s, true);
  }

  function addTurn(role, text) {
    if (!text) return;
    if (idleEl) idleEl.hidden = true;
    var row = document.createElement("p");
    row.className = "echo-turn echo-turn--" + role;
    var who = document.createElement("span");
    who.className = "echo-turn-who";
    who.textContent = role === "caller" ? say("caller") : say("echo");
    var body = document.createElement("span");
    body.className = "echo-turn-text";
    body.textContent = text;
    row.appendChild(who);
    row.appendChild(body);
    threadEl.appendChild(row);
    threadEl.scrollTop = threadEl.scrollHeight;
  }

  function showControls(live) {
    startBtn.hidden = live;
    stopBtn.hidden = !live;
    if (muteBtn) muteBtn.hidden = !live;
  }

  function reset(note) {
    if (timer) { clearInterval(timer); timer = null; }
    seconds = 0;
    muted = false;
    busy = false;
    conversation = null;
    wellenStop();
    showControls(false);
    setStatus(say("ready"), false);
    setNote(note);
    if (muteBtn) {
      muteBtn.setAttribute("aria-pressed", "false");
      muteBtn.textContent = say("mute");
    }
  }

  /* Das SDK liegt als IIFE beim Paket-CDN und setzt window.ElevenLabsClient.
     Einmal geladen, bleibt es fuer weitere Gespraeche im Speicher. */
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

  function begin() {
    if (busy || conversation) return;
    busy = true;
    setNote("");
    threadEl.innerHTML = "";
    if (idleEl) idleEl.hidden = false;
    setStatus(say("connecting"), false);

    /* Das Mikrofon zuerst selbst erfragen: eine Ablehnung soll als klarer Satz
       dastehen und nicht als abgebrochene Verbindung. */
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function (stream) {
        stream.getTracks().forEach(function (t) { t.stop(); });
        return loadSdk();
      })
      .then(function (lib) {
        var config = {
          agentId: agentId,
          connectionType: "webrtc",
          onConnect: function () {
            busy = false;
            showControls(true);
            seconds = 0;
            setStatus(say("live") + " · 0:00", true);
            timer = setInterval(tick, 1000);
            wellenStart();
          },
          onModeChange: function (payload) {
            spricht = !!payload && payload.mode === "speaking";
            if (waveEl) waveEl.classList.toggle("is-speaking", spricht);
          },
          onDisconnect: function () { reset(say("ended")); },
          onError: function () { reset(say("faultConnection")); },
          onMessage: function (payload) {
            if (!payload || !payload.message) return;
            addTurn(payload.source === "user" ? "caller" : "echo", payload.message);
          }
        };
        /* Der Agent ist deutsch angelegt; die englische Seite schaltet um.
           Die Begruessung kommt dann aus der Sprachvoreinstellung des Agenten. */
        var lang = root.getAttribute("data-lang");
        if (lang) config.overrides = { agent: { language: lang } };
        return lib.Conversation.startSession(config);
      })
      .then(function (session) { conversation = session; })
      .catch(function (error) {
        var reason = error && error.name === "NotAllowedError" ? say("faultMic")
          : error && error.message === "sdk" ? say("faultSdk")
          : say("faultConnection");
        reset(reason);
      });
  }

  function end() {
    if (conversation) {
      try { conversation.endSession(); } catch (e) { /* schon getrennt */ }
    }
    reset(say("ended"));
  }

  startBtn.addEventListener("click", begin);
  stopBtn.addEventListener("click", end);

  if (muteBtn) {
    muteBtn.addEventListener("click", function () {
      if (!conversation) return;
      muted = !muted;
      try { conversation.setMicMuted(muted); } catch (e) { return; }
      muteBtn.setAttribute("aria-pressed", muted ? "true" : "false");
      muteBtn.textContent = muted ? say("unmute") : say("mute");
    });
  }

  /* Ein offenes Gespraech beim Verlassen der Seite sauber schliessen. */
  window.addEventListener("pagehide", function () {
    if (conversation) { try { conversation.endSession(); } catch (e) { /* egal */ } }
  });

  reset("");
})();
