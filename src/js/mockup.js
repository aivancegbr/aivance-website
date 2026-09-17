/* ═══════════════════════════════════════════════════════════════════════════
   Mockup-Engine — Modul F
   Spielt eine Schrittfolge ab, die bereits als Markup im Dokument steht.

   Bewusste Abweichung vom Handoff: Die Engine erzeugt die Schritte nicht mehr
   aus einem JS-Objekt, sondern nimmt das gerenderte Markup entgegen und deckt
   es nur noch auf. Das erfüllt drei Zusagen aus Modul F, die eine JS-Fabrik
   nicht halten kann — der Inhalt ist ohne JS vorhanden, per Textsuche
   auffindbar und für Vorleseprogramme lesbar — und erspart die doppelte
   Pflege der Texte in JS und Template. Neue Schritttypen brauchen dadurch
   keine Erweiterung hier, sondern nur eigenes Markup.

   Markup-Vertrag:
     <div class="chat-messages" data-mockup
          data-mockup-start="1000"        Vorlauf bis zum ersten Schritt
          data-mockup-restart="17000">    0 = kein Neustart
       <div class="msg" data-pause="600">…</div>
       <div class="typing" data-delay="900" aria-hidden="true">…</div>
     </div>
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var containers = document.querySelectorAll("[data-mockup]");
  if (!containers.length) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function reveal(el) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add("visible"); });
    });
  }
  function isTyping(el) { return el.classList.contains("typing"); }

  Array.prototype.forEach.call(containers, function (container) {
    var steps = Array.prototype.slice.call(container.children);
    if (!steps.length) return;

    var startDelay = parseInt(container.dataset.mockupStart, 10);
    if (isNaN(startDelay)) startDelay = 1000;
    var restartMs = parseInt(container.dataset.mockupRestart, 10) || 0;

    /* ── Reduzierte Bewegung: Endzustand, nur der Tippindikator entfällt ── */
    if (reducedMotion) {
      steps.forEach(function (el) {
        if (isTyping(el)) el.remove();
        else el.classList.add("visible");
      });
      return;
    }

    var timers = [];
    var restartTimer = null;
    var idx = 0;
    var running = false;

    function later(fn, ms) {
      var id = setTimeout(function () {
        var i = timers.indexOf(id);
        if (i !== -1) timers.splice(i, 1);
        fn();
      }, ms);
      timers.push(id);
      return id;
    }

    function clearAll() {
      steps.forEach(function (el) {
        el.classList.remove("visible");
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      idx = 0;
    }

    function play() {
      if (idx >= steps.length) return;
      var el = steps[idx++];
      container.appendChild(el);
      reveal(el);
      container.scrollTop = container.scrollHeight;

      if (isTyping(el)) {
        later(function () {
          el.classList.remove("visible");
          if (el.parentNode) el.parentNode.removeChild(el);
          play();
        }, parseInt(el.dataset.delay, 10) || 900);
        return;
      }
      var pause = parseInt(el.dataset.pause, 10);
      if (isNaN(pause)) pause = 1600;
      later(play, steps[idx] ? pause : 0);
    }

    function start() {
      if (running) return;
      running = true;
      clearAll();
      later(play, startDelay);
      if (restartMs > 0) {
        restartTimer = setInterval(function () {
          clearAll();
          later(play, 400);
        }, restartMs);
      }
    }

    function stop() {
      if (!running) return;
      running = false;
      timers.forEach(clearTimeout);
      timers = [];
      if (restartTimer) { clearInterval(restartTimer); restartTimer = null; }
    }

    /* ── Läuft nur im Bild und nur im Vordergrund ── */
    var inView = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        inView && !document.hidden ? start() : stop();
      }, { threshold: 0.2 }).observe(container);
    } else {
      inView = true;
      start();
    }
    document.addEventListener("visibilitychange", function () {
      document.hidden ? stop() : (inView && start());
    });
  });
})();
