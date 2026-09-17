/* ═══════════════════════════════════════════════════════════════════════════
   Scroll-Scrub-Engine — Modul A
   Rechnet je registriertem Element einen Scroll-Fortschritt 0…1 und schreibt
   ihn als CSS-Variable. Ersetzt jede Scroll-Bibliothek.

   Markup-Vertrag:
     <section data-scrub
              data-scrub-start="top bottom"   Element-Kante trifft Viewport-Kante
              data-scrub-end="bottom top"
              data-scrub-var="--p"            Default: --scrub
              data-scrub-index="3"            optional: diskrete Schritte
              data-scrub-latch>               Fortschritt fällt nie zurück
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var els = document.querySelectorAll("[data-scrub]");
  if (!els.length) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Kantenbegriffe auflösen ──
     Erster Begriff = Kante des Elements, zweiter = Kante des Viewports. */
  function elementEdge(rect, name) {
    if (name === "bottom") return rect.bottom;
    if (name === "center") return rect.top + rect.height / 2;
    return rect.top;
  }
  function viewportEdge(vh, name) {
    if (name === "top") return 0;
    if (name === "center") return vh / 2;
    return vh;
  }
  function parsePair(value, fallback) {
    var parts = String(value || fallback).trim().split(/\s+/);
    return { el: parts[0] || "top", vp: parts[1] || "bottom" };
  }

  /* ── Registrierung ── */
  var items = [];
  els.forEach(function (el) {
    items.push({
      el: el,
      start: parsePair(el.dataset.scrubStart, "top bottom"),
      end: parsePair(el.dataset.scrubEnd, "bottom top"),
      varName: el.dataset.scrubVar || "--scrub",
      steps: parseInt(el.dataset.scrubIndex, 10) || 0,
      latch: el.hasAttribute("data-scrub-latch"),
      active: false,
      lastP: -1,
      lastStep: -1,
    });
  });

  /* ── Reduzierte Bewegung: einmalig der sinnvolle Endzustand, kein Loop ── */
  if (reducedMotion) {
    items.forEach(function (it) {
      it.el.style.setProperty(it.varName, "1");
      if (it.steps > 0) {
        it.el.style.setProperty("--step", String(it.steps - 1));
        it.el.dispatchEvent(new CustomEvent("scrub:step", { detail: { step: it.steps - 1 } }));
      }
    });
    return;
  }

  /* ── Ein rAF-Loop für alle: erst lesen, dann schreiben (kein Layout-Thrashing) ── */
  var raf = null;
  var activeCount = 0;
  var frame = [];

  function tick(all) {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var i, it;

    // Lese-Batch
    frame.length = 0;
    for (i = 0; i < items.length; i++) {
      it = items[i];
      if (!all && !it.active) continue;
      var rect = it.el.getBoundingClientRect();
      var dStart = elementEdge(rect, it.start.el) - viewportEdge(vh, it.start.vp);
      var dEnd = elementEdge(rect, it.end.el) - viewportEdge(vh, it.end.vp);
      var span = dStart - dEnd;
      var p = span === 0 ? 1 : dStart / span;
      if (p < 0) p = 0; else if (p > 1) p = 1;
      /* „Weg zurückgelegt": einmal erreichte Schritte bleiben stehen. */
      if (it.latch && p < it.lastP) p = it.lastP;
      frame.push(it, p);
    }

    // Schreib-Batch
    for (i = 0; i < frame.length; i += 2) {
      it = frame[i];
      var prog = frame[i + 1];
      if (prog !== it.lastP) {
        it.lastP = prog;
        it.el.style.setProperty(it.varName, prog.toFixed(4));
      }
      if (it.steps > 0) {
        var step = Math.min(it.steps - 1, Math.floor(prog * it.steps));
        if (step !== it.lastStep) {
          it.lastStep = step;
          it.el.style.setProperty("--step", String(step));
          it.el.dispatchEvent(new CustomEvent("scrub:step", { detail: { step: step } }));
        }
      }
    }

    raf = !all && activeCount > 0 ? requestAnimationFrame(loop) : null;
  }

  /* rAF reicht der Funktion einen Zeitstempel — der Einmal-Durchlauf braucht
     deshalb einen eigenen Einstieg, sonst käme der Zeitstempel als Flag an. */
  function loop() { tick(false); }

  function start() { if (!raf && activeCount > 0 && !document.hidden) raf = requestAnimationFrame(loop); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  /* ── Außerhalb des Viewports rechnet nichts (wie im Hero-Canvas) ── */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var it = items.find(function (x) { return x.el === e.target; });
        if (!it || it.active === e.isIntersecting) return;
        it.active = e.isIntersecting;
        activeCount += e.isIntersecting ? 1 : -1;
      });
      activeCount > 0 ? start() : stop();
    }, { rootMargin: "20% 0px 20% 0px" });
    items.forEach(function (it) { io.observe(it.el); });
  } else {
    items.forEach(function (it) { it.active = true; });
    activeCount = items.length;
    start();
  }

  document.addEventListener("visibilitychange", function () {
    document.hidden ? stop() : start();
  });

  tick(true);
})();
