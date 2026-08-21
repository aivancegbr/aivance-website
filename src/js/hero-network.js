/* ═══════════════════════════════════════════════════════════════════════════
   Produkt-Hero „Anruf-Netz" (Echo) — generative Fein-Punkt-Grafik: viele
   dünne graue Signalpfade laufen aus der unteren/linken Fläche zusammen,
   färben sich beim Zusammenlaufen amber und enden in einem Knoten rechts.
   Darunter/links ein paar wellenförmige Bänder als ruhige Gegenfläche.
   Statisch (kein RAF-Loop) — reines Layout-Element, seed-fest, damit sich
   die Grafik nicht bei jedem Reload sichtbar verändert.
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  const cv = document.getElementById("hero-network-canvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");

  function rng(seed) {
    let s = seed >>> 0;
    return function () {
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function cssVar(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function hexToRgb(hex) {
    const m = hex.replace("#", "");
    const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
    const n = parseInt(full, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const GRAY = hexToRgb(cssVar("--ink-muted", "#8a8a82"));
  const AMBER = hexToRgb(cssVar("--amber", "#9c4b00"));
  const mix = (a, b, t) => [0, 1, 2].map((i) => Math.round(a[i] + (b[i] - a[i]) * t));
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const clampPx = (frac, min, max, base) => Math.min(max, Math.max(min, frac * base));

  let W = 0, H = 0;

  function dot(x, y, r, rgb, a) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
    ctx.fill();
  }

  function ring(cx, cy, r, rgb, a, count) {
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2;
      dot(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, 0.7, rgb, a);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const rand = rng(1337);

    /* Beleg-Knoten: rechte Bildkante, Position folgt derselben Formel wie
       die CSS-Position von .hero-node (top: 46%, right: clamp(24px,9vw,110px)). */
    const cy = 0.46 * H;
    const cx = W - clampPx(0.09, 24, 110, W);

    /* ─── wellenförmige Bänder (ruhige Fläche unten/links) ─── */
    const clusters = [
      { baseY: 0.62, amp: 0.075, freq: 2.1, x1: 0.0, x2: 0.62 },
      { baseY: 0.8, amp: 0.09, freq: 1.5, x1: 0.0, x2: 0.98 },
      { baseY: 0.94, amp: 0.06, freq: 2.6, x1: 0.02, x2: 0.86 },
    ];
    clusters.forEach((c) => {
      const lines = 5;
      for (let li = 0; li < lines; li++) {
        const phase = rand() * Math.PI * 2;
        const ampJ = c.amp * (0.7 + rand() * 0.6);
        const freqJ = c.freq * (0.85 + rand() * 0.3);
        const yOff = (li - (lines - 1) / 2) * 0.018;
        const baseA = 0.07 + rand() * 0.08 + (li === Math.floor(lines / 2) ? 0.05 : 0);
        const samples = 180;
        for (let s = 0; s <= samples; s++) {
          const t = s / samples;
          if (rand() < 0.12) continue;
          const x = (c.x1 + (c.x2 - c.x1) * t) * W;
          const y = (c.baseY + yOff + ampJ * Math.sin(freqJ * t * Math.PI * 2 + phase) * (0.4 + 0.6 * Math.sin(t * Math.PI))) * H;
          dot(x, y, 0.55 + rand() * 0.3, GRAY, baseA);
        }
      }
    });

    /* ─── zusammenlaufende Signalpfade ─── */
    const flowCount = 34;
    for (let i = 0; i < flowCount; i++) {
      const x0 = rand() * 0.58 * W;
      const y0 = (0.26 + rand() * 0.72) * H;
      const amp = (0.05 + rand() * 0.09) * H;
      const freq = 1.1 + rand() * 1.6;
      const phase = rand() * Math.PI * 2;
      const humpAmp = (rand() - 0.5) * 0.14 * H;
      const humpCenter = 0.35 + rand() * 0.3;
      const baseA = 0.1 + rand() * 0.14;
      const samples = 160;
      for (let s = 0; s <= samples; s++) {
        const t = s / samples;
        if (rand() < 0.1) continue;
        const te = Math.pow(t, 0.82);
        const decay = Math.pow(1 - t, 1.3);
        const hump = humpAmp * decay * Math.exp(-Math.pow((t - humpCenter) / 0.16, 2));
        const x = x0 + (cx - x0) * te;
        const y = y0 + (cy - y0) * te + amp * decay * Math.sin(freq * t * Math.PI * 2 + phase) + hump;
        const colorT = smooth(0.8, 1, t);
        const rgb = mix(GRAY, AMBER, colorT);
        const a = baseA * (1 - colorT) + baseA * 1.8 * colorT;
        dot(x, y, 0.5 + colorT * 0.4, rgb, Math.min(0.85, a));
      }
    }

    /* ─── verstreute Knoten (einige mit auslaufendem Ring) ─── */
    const nodes = [
      [0.06, 0.8, true], [0.24, 0.63, false], [0.37, 0.71, false],
      [0.47, 0.9, false], [0.56, 0.55, false], [0.66, 0.78, false],
      [0.73, 0.6, true], [0.9, 0.86, true],
    ];
    nodes.forEach(([nx, ny, hasRing]) => {
      const px = nx * W, py = ny * H;
      dot(px, py, 2.6, GRAY, 0.5);
      if (hasRing) {
        ring(px, py, 8, GRAY, 0.22, 16);
        ring(px, py, 15, GRAY, 0.13, 22);
      }
    });

    /* ─── Beleg-Knoten: solider Amber-Kern + auslaufende Ringe ─── */
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 26);
    glow.addColorStop(0, "rgba(" + AMBER[0] + "," + AMBER[1] + "," + AMBER[2] + ",0.18)");
    glow.addColorStop(1, "rgba(" + AMBER[0] + "," + AMBER[1] + "," + AMBER[2] + ",0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, 26, 0, Math.PI * 2);
    ctx.fill();

    ring(cx, cy, 12, AMBER, 0.45, 26);
    ring(cx, cy, 19, AMBER, 0.28, 30);
    ring(cx, cy, 27, AMBER, 0.16, 36);
    dot(cx, cy, 6.5, AMBER, 1);
  }

  function resize() {
    const r = cv.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  let resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
  resize();
})();
