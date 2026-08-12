/* ═══════════════════════════════════════════════════════════════════════════
   Hero — Punktraster-Canvas, Wechselbegriff, Telefon-Mockup.
   Das Punktraster stammt aus der Brand Identity: diagonale Bänder aus
   Ink-Punkten, die zur Bildmitte dichter werden; der Zeiger hebt lokal an
   und zieht eine abklingende Spur.
   ═══════════════════════════════════════════════════════════════════════════ */

var heroReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─── BACKGROUND CANVAS — Punktraster ─── */
(function () {
  const cv = document.getElementById("bg-canvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const hero = cv.closest(".hero") || cv.parentElement;

  const isNarrow = window.matchMedia("(max-width: 767px)").matches;
  /* Randloser Hero: auf sehr breiten Schirmen etwas größerer Abstand, damit die
     Punktzahl pro Bild nicht mitwächst — optisch identisch. */
  const SPACING = isNarrow ? 13 : (window.innerWidth > 1700 ? 12 : 10);
  const REACH = 240; // Radius der Zeiger-Anhebung

  let w = 0, h = 0, cols = 0, rows = 0, trail = null;
  let mx = -1, my = -1, mw = 0;
  let raf = null, visible = true;

  function resize() {
    const r = cv.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, Math.round(r.width));
    h = Math.max(1, Math.round(r.height));
    cv.width = w * dpr;
    cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / SPACING) + 1;
    rows = Math.ceil(h / SPACING) + 1;
    trail = new Float32Array(cols * rows);
  }

  /* Vier Bänder: zwei tragende, zwei feine Gegenläufer. */
  const bands = [
    { ax: 0.86, ay: 0.52, off: -0.34, width: 0.20, gain: 1.00, amp: 0.055, freq: 1.7, ph: 0.0, par: 1.00 },
    { ax: 0.72, ay: -0.62, off: 0.30, width: 0.26, gain: 0.85, amp: 0.070, freq: 1.2, ph: 2.1, par: 0.78 },
    { ax: 0.90, ay: 0.44, off: 0.62, width: 0.10, gain: 0.34, amp: 0.045, freq: 2.4, ph: 4.2, par: 1.22 },
    { ax: 0.66, ay: -0.70, off: -0.70, width: 0.09, gain: 0.26, amp: 0.050, freq: 2.0, ph: 1.1, par: 0.62 },
  ];

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#FAFAF8";
    ctx.fillRect(0, 0, w, h);

    for (let iy = 0; iy < rows; iy++) {
      const py = iy * SPACING;
      const ny = py / h - 0.5;
      for (let ix = 0; ix < cols; ix++) {
        const px = ix * SPACING;
        const nx = px / w - 0.5;

        let v = 0;
        for (let b = 0; b < bands.length; b++) {
          const B = bands[b];
          const along = nx * B.ay - ny * B.ax;
          const across = nx * B.ax + ny * B.ay;
          const wave =
            Math.sin(along * Math.PI * 2 * B.freq + t * 0.0003 * B.par + B.ph) * B.amp +
            Math.sin(along * Math.PI * 4.3 * B.freq - t * 0.00017 * B.par + B.ph * 1.7) * B.amp * 0.45;
          const u = across - B.off - wave - Math.sin(t * 0.00007 * B.par + B.ph) * 0.16;
          const d = Math.abs(u) / B.width;
          if (d < 1) {
            const f = 1 - d;
            v += B.gain * f * f * (0.74 + 0.26 * Math.sin(along * 9 + t * 0.0005 * B.par));
          }
        }

        // Zur Mitte hin dichter, an den Rändern ausgedünnt
        const cx = nx / 0.4, cy = ny / 0.34;
        const centre = Math.min(1, Math.sqrt(cx * cx + cy * cy));
        v *= 0.16 + 0.84 * Math.pow(centre, 1.9);
        /* Seitlich nur ein ganz schmaler Auslauf, damit das Raster bis an die
           Bildschirmkanten trägt; oben/unten weiter weich, damit es in die
           angrenzenden Sektionen übergeht. */
        const edge =
          Math.min(1, Math.min(px, w - px) / (w * 0.05)) *
          Math.min(1, Math.min(py, h - py) / (h * 0.14));
        v *= 0.58 + 0.42 * edge;

        let near = 0;
        if (mw > 0) {
          const ddx = px - mx, ddy = py - my;
          const dd = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dd < REACH) near = (1 - dd / REACH) * mw;
        }

        const ti = iy * cols + ix;
        let tr = trail[ti] * 0.994;
        if (near * 0.42 > tr) tr = near * 0.42;
        trail[ti] = tr;

        if (v <= 0.012 && near <= 0.02 && tr <= 0.02) continue;

        let a = Math.min(0.62, v * 0.72);
        let rad = 0.5 + Math.min(1.5, v * 1.9);
        if (near > 0 || tr > 0) {
          a = Math.min(1, a + near * 1.15 + tr * 0.7);
          rad += Math.max(near, tr * 0.6) * 2.1;
        }
        ctx.fillStyle = "rgba(22,22,20," + a.toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(px, py, rad, 0, 6.2832);
        ctx.fill();
      }
    }
  }

  resize();

  if (heroReducedMotion) {
    draw(0);
    window.addEventListener("resize", function () { resize(); draw(0); }, { passive: true });
    return;
  }

  /* Zeiger nur auf Geräten mit echtem Cursor */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    window.addEventListener("pointermove", function (e) {
      const r = cv.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (x < -REACH || y < -REACH || x > r.width + REACH || y > r.height + REACH) { mw = 0; return; }
      mx = x; my = y; mw = 1;
    }, { passive: true });
    window.addEventListener("pointerleave", function () { mw = 0; }, { passive: true });
  }

  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(resize).observe(cv);
  } else {
    window.addEventListener("resize", resize, { passive: true });
  }

  /* Außerhalb des Viewports rechnet nichts weiter. */
  function loop(ts) { draw(ts); raf = requestAnimationFrame(loop); }
  function start() { if (!raf) raf = requestAnimationFrame(loop); }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

  if ("IntersectionObserver" in window && hero) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0 }).observe(hero);
  }
  document.addEventListener("visibilitychange", function () {
    document.hidden || !visible ? stop() : start();
  });
  start();
})();

/* ─── WECHSELBEGRIFF (mit Amber-Fußnotenlinie) ─── */
(function () {
  const texts = document.querySelectorAll(".cycling-text");
  if (!texts.length) return;
  const wrapper = document.getElementById("cycling-wrapper");
  if (!wrapper) return;
  let current = 0;

  /* Breite = längster Begriff, damit die Zeile beim Wechsel nicht springt.
     Nach der Messung bleiben KEINE Inline-Styles zurück: Sichtbarkeit steuern
     allein die Klassen .active / .exit — sonst überschreibt ein Inline-
     opacity:0 später das aktive Wort und die Zeile bleibt leer. */
  function measure() {
    let maxW = 0;
    wrapper.style.width = ""; // erst freigeben, sonst misst man die alte Breite
    texts.forEach(function (t) {
      t.style.transition = "none";
      t.style.position = "relative"; // in den Fluss, damit der Wrapper mitwächst
      t.style.opacity = "0";
      t.style.transform = "none";
      const w = t.offsetWidth;
      if (w > maxW) maxW = w;
      t.style.position = "";
      t.style.opacity = "";
      t.style.transform = "";
      void t.offsetWidth; // Reflow, bevor Transitions wieder greifen
      t.style.transition = "";
    });
    wrapper.style.width = Math.ceil(maxW) + "px";
  }

  texts[0].classList.add("active");
  measure();

  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 150);
  }, { passive: true });

  if (heroReducedMotion) return; // erster Begriff bleibt stehen

  setInterval(function () {
    const prev = texts[current];
    current = (current + 1) % texts.length;
    const next = texts[current];
    prev.classList.remove("active");
    prev.classList.add("exit");
    setTimeout(function () { prev.classList.remove("exit"); }, 400);
    next.classList.remove("exit"); // sonst überlagert .exit das aktive Wort
    next.classList.add("active");
  }, 3200);
})();

/* ─── CHAT-ANIMATION (Telefon-Mockup) ───────────────────────────────────────
   Jede Antwort führt ihren Beleg mit — dasselbe Prinzip wie auf der Seite. */
(function () {
  const container = document.getElementById("hero-chat-messages");
  if (!container) return;

  const sequences = {
    de: [
      { type: "user", text: "Unsere Website ist veraltet und das Telefon steht nicht still. Wo fangen wir an?" },
      { type: "typing", delay: 900 },
      {
        type: "assistant",
        text: "Mit einem <strong>Digital-Audit</strong>: Wir sehen uns Website, Anfragen und Abläufe an — und starten mit dem Schritt, der am meisten entlastet.",
        source: "Quelle · /kontakt · kostenlos & unverbindlich",
      },
      { type: "user", text: "Und wer koordiniert Website, Fotos und Technik?" },
      { type: "typing", delay: 900 },
      {
        type: "assistant",
        evidenced: true,
        text: "<strong>Ein Ansprechpartner</strong> bei AIVANCE. Website, Bildmaterial und Automatisierung aus einer Hand — abgestimmt statt zusammengestückelt.",
        source: "Quelle · /ueber-uns · fester Ansprechpartner",
      },
    ],
    en: [
      { type: "user", text: "Our website is outdated and the phone won't stop ringing. Where do we start?" },
      { type: "typing", delay: 900 },
      {
        type: "assistant",
        text: "With a <strong>digital audit</strong>: we look at your website, inquiries and workflows — and start with the step that relieves the most pressure.",
        source: "Source · /en/contact · free, no strings",
      },
      { type: "user", text: "And who coordinates the website, photos and tech?" },
      { type: "typing", delay: 900 },
      {
        type: "assistant",
        evidenced: true,
        text: "<strong>One point of contact</strong> at AIVANCE. Website, visuals and automation from a single team — coordinated instead of pieced together.",
        source: "Source · /en/about · one named contact",
      },
    ],
  };
  const sequence = (document.documentElement.lang || "de").startsWith("en") ? sequences.en : sequences.de;
  const CHECK =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>';

  let idx = 0;

  function addMessage(item) {
    if (item.type === "typing") {
      const el = document.createElement("div");
      el.className = "typing";
      el.innerHTML = "<span></span><span></span><span></span>";
      container.appendChild(el);
      requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add("visible"); }); });
      return el;
    }

    const el = document.createElement("div");
    el.className = "msg";
    const bubble = document.createElement("div");
    bubble.className = "bubble " + item.type + (item.evidenced ? " evidenced" : "");
    bubble.innerHTML = item.text;
    el.appendChild(bubble);

    if (item.source) {
      const src = document.createElement("div");
      src.className = "msg-source";
      src.innerHTML = CHECK + "<span>" + item.source + "</span>";
      el.appendChild(src);
    }

    container.appendChild(el);
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add("visible"); }); });
    container.scrollTop = container.scrollHeight;
    return el;
  }

  function runSequence() {
    if (idx >= sequence.length) return;
    const item = sequence[idx++];
    if (item.type === "typing") {
      const typingEl = addMessage(item);
      setTimeout(function () { typingEl.remove(); runSequence(); }, item.delay);
    } else {
      addMessage(item);
      const next = sequence[idx];
      setTimeout(runSequence, next ? (item.type === "user" ? 600 : 1600) : 0);
    }
  }

  if (heroReducedMotion) {
    sequence.filter(function (s) { return s.type !== "typing"; }).forEach(addMessage);
    container.querySelectorAll(".msg").forEach(function (m) { m.classList.add("visible"); });
    return;
  }

  setTimeout(runSequence, 1000);
  setInterval(function () {
    container.innerHTML = "";
    idx = 0;
    setTimeout(runSequence, 400);
  }, 17000);
})();

/* ─── 3D-NEIGUNG DES TELEFONS ─── */
(function () {
  const wrap = document.querySelector(".phone-wrap");
  const hero = document.querySelector(".hero");
  if (!wrap || !hero) return;

  const isMobile = window.innerWidth < 768;
  const baseY = isMobile ? -14 : -20, baseX = isMobile ? 6 : 7, baseZ = -2;
  const scalePrefix = isMobile ? "scale(0.68) " : "";

  if (heroReducedMotion) {
    wrap.style.transform = isMobile
      ? "scale(0.68) rotateY(" + baseY + "deg) rotateX(" + baseX + "deg) rotateZ(" + baseZ + "deg)"
      : "none";
    return;
  }

  let rotY = baseY, rotX = baseX, rotZ = baseZ;
  let currentRotY = rotY, currentRotX = rotX, currentRotZ = rotZ;
  let targetMouseX = 0, targetMouseY = 0;

  document.addEventListener("mousemove", function (e) {
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    targetMouseX = ((e.clientX - cx) / rect.width) * 6;
    targetMouseY = ((e.clientY - cy) / rect.height) * -4;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  window.addEventListener("scroll", function () {
    const heroH = hero.offsetHeight;
    const progress = Math.min(window.scrollY / (heroH * 0.6), 1);
    const eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    rotY = lerp(baseY, 0, eased);
    rotX = lerp(baseX, 0, eased);
    rotZ = lerp(baseZ, 0, eased);
  }, { passive: true });

  (function animate() {
    currentRotY = lerp(currentRotY, rotY + targetMouseX, 0.06);
    currentRotX = lerp(currentRotX, rotX + targetMouseY, 0.06);
    currentRotZ = lerp(currentRotZ, rotZ, 0.06);
    wrap.style.transform =
      scalePrefix + "rotateY(" + currentRotY + "deg) rotateX(" + currentRotX + "deg) rotateZ(" + currentRotZ + "deg)";
    requestAnimationFrame(animate);
  })();
})();

/* ─── SCHWEBENDE BELEG-BADGES ─── */
setTimeout(function () {
  const b1 = document.getElementById("hero-badge1");
  if (b1) b1.classList.add("visible");
}, heroReducedMotion ? 0 : 1800);
setTimeout(function () {
  const b2 = document.getElementById("hero-badge2");
  if (b2) b2.classList.add("visible");
}, heroReducedMotion ? 0 : 2400);
