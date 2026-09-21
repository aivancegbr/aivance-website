/* ═══════════════════════════════════════════════════════════════════════════
   Produkt-Hero „Anruf-Netz" (Echo) — generative Fein-Punkt-Grafik nach der
   Plakatvorlage vom 21.09.2026.

   Aufbau, von hinten nach vorn:
     1 Bänder   — Bündel eng nebeneinander laufender, gepunkteter Sinuskurven
                  in der unteren Hälfte. Sie tragen die Fläche.
     2 Pfade    — viele feine Signalwege, die aus der linken und unteren Fläche
                  kommen, sich an einem Sammelpunkt bündeln und von dort als
                  schmaler Strahl in den Knoten rechts laufen. Quadratische
                  Bézierkurve über den Sammelpunkt: dadurch schwingen die Wege
                  links noch aus und liegen rechts sauber übereinander.
     3 Marker   — verstreute graue Knoten, einige mit auslaufenden Ringen.
     4 Knoten   — der Beleg-Punkt: Amber-Kern, Ringe, gepunkteter Zulauf zum
                  Label „Anruf angenommen".

   Statisch, kein RAF-Loop: die Grafik ist ein Layout-Element, kein Effekt.
   Fester Seed, damit sie bei jedem Aufruf identisch aussieht.
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
  const rgba = (c, a) => "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  const mix = (a, b, t) => [0, 1, 2].map((i) => Math.round(a[i] + (b[i] - a[i]) * t));
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const clampPx = (frac, min, max, base) => Math.min(max, Math.max(min, frac * base));

  let W = 0, H = 0;

  /* Punkte dieser Größe sind als Quadrat nicht von einem Kreis zu unterscheiden,
     und fillRect ist um ein Vielfaches billiger als ein eigener arc-Pfad —
     bei rund 40 000 Punkten ist das der Unterschied zwischen ruckelfrei und
     spürbar. Kreise gibt es nur noch für die Ringe am Beleg-Knoten. */
  function px(x, y, r) {
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  function dot(x, y, r, rgb, a) {
    ctx.fillStyle = rgba(rgb, a);
    /* Unter ~1,2 px ist ein Quadrat von einem Kreis nicht zu unterscheiden und
       um ein Vielfaches billiger. Darueber sieht man die Ecken sofort. */
    if (r < 1.2) { px(x, y, r); return; }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  function ring(cx, cy, r, rgb, a, count) {
    ctx.fillStyle = rgba(rgb, a);
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2;
      px(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r, 0.75);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const rand = rng(1337);

    /* Beleg-Knoten: rechte Bildkante. Die Position folgt derselben Formel wie
       die CSS-Position von .hero-node, damit Label und Zeichnung zusammenpassen. */
    const nodeX = W - clampPx(0.09, 24, 110, W);
    const nodeY = 0.46 * H;
    /* Taille: hier ist der Faecher zusammengelaufen. Von dort bis zum Knoten
       liegen alle Wege als ein schmaler Strahl uebereinander — genau die
       Zweiteilung, die die Vorlage zeigt. */
    const waistX = nodeX - Math.min(0.20 * W, 280);
    const waistAnteil = 0.78;
    /* ── 1 · Bänder ──────────────────────────────────────────────────────────
       Je Bündel mehrere fast parallele Kurven mit geringem Abstand. Erst diese
       Enge macht aus Einzellinien ein Band. */
    /* Die Baender duerfen einander nicht ueberlappen: Amplitude plus halbe
       Buendelbreite muss kleiner bleiben als der Abstand zum naechsten Band,
       sonst wird aus drei Baendern ein grauer Nebel. */
    const bands = [
      { y: 0.57, amp: 0.034, freq: 1.75, x1: -0.03, x2: 0.46, strands: 10, spread: 0.034, a: 0.34 },
      { y: 0.79, amp: 0.044, freq: 1.20, x1: -0.03, x2: 0.97, strands: 13, spread: 0.042, a: 0.38 },
      { y: 0.99, amp: 0.032, freq: 2.05, x1: 0.03, x2: 0.80, strands: 10, spread: 0.032, a: 0.30 },
      { y: 0.64, amp: 0.028, freq: 1.70, x1: 0.60, x2: 1.03, strands: 8, spread: 0.028, a: 0.22 },
      { y: 0.30, amp: 0.020, freq: 2.30, x1: 0.70, x2: 1.03, strands: 7, spread: 0.022, a: 0.16 }
    ];
    bands.forEach((b) => {
      const phase = rand() * Math.PI * 2;
      const span = (b.x2 - b.x1) * W;
      const samples = Math.max(80, Math.round(span / 2.4));
      for (let li = 0; li < b.strands; li++) {
        const k = li / (b.strands - 1) - 0.5;          /* −0.5 … +0.5 quer zum Band */
        const yOff = k * b.spread * H;
        /* Nur ein Hauch Streuung. Groesserer Jitter als der Straehnenabstand
           laesst aus dem Band sofort eine unscharfe Wolke werden. */
        const ampJ = b.amp * (0.97 + rand() * 0.06);
        const freqJ = b.freq * (0.985 + rand() * 0.03);
        /* Die mittleren Strähnen tragen das Band, die äußeren laufen aus. */
        const alpha = b.a * (0.45 + 0.55 * Math.cos(k * Math.PI));
        ctx.fillStyle = rgba(GRAY, alpha);
        for (let s = 0; s <= samples; s++) {
          const t = s / samples;
          if (rand() < 0.16) continue;                  /* Lücken = gepunktet */
          const x = (b.x1 + (b.x2 - b.x1) * t) * W;
          /* Die Enden laufen aus, statt abgeschnitten dazustehen. */
          const taper = Math.sin(Math.min(1, Math.max(0, t)) * Math.PI);
          const y = (b.y + yOff / H) * H
            + ampJ * H * Math.sin(freqJ * t * Math.PI * 2 + phase) * (0.35 + 0.65 * taper);
          px(x, y, 0.58);
        }
      }
    });

    /* ── 2 · Zusammenlaufende Pfade ─────────────────────────────────────────
       Quadratische Bézierkurve Start → Sammelpunkt → Knoten. Alle Kurven enden
       exakt im Knoten; die Bündelung entsteht also von selbst, ohne dass die
       Streuung künstlich heruntergerechnet werden müsste. */
    const flows = 78;
    for (let i = 0; i < flows; i++) {
      /* Zwei Drittel kommen von links, ein Drittel von unten — so entsteht der
         steile Zulauf, der die Vorlage prägt. Die Textzone oben links bleibt
         dabei frei. */
      const vonUnten = rand() < 0.36;
      const x0 = (vonUnten ? 0.08 + rand() * 0.54 : -0.04 + rand() * 0.46) * W;
      const y0 = (vonUnten ? 0.76 + rand() * 0.36 : 0.28 + rand() * 0.74) * H;

      /* Durchhang: die Kurve bauscht sich in der Mitte aus und liegt an beiden
         Enden wieder auf der Geraden. Ueberwiegend nach oben, das ergibt den
         Schwung der Vorlage. */
      const bow = (rand() * 0.115 - 0.028) * H * (vonUnten ? -1 : 1);
      const wobbleAmp = (0.012 + rand() * 0.04) * H;
      const wobbleFreq = 1.0 + rand() * 1.9;
      const phase = rand() * Math.PI * 2;
      const baseA = 0.13 + rand() * 0.15;
      const samples = 220;

      for (let s = 0; s <= samples; s++) {
        const t = s / samples;
        if (rand() < 0.14) continue;
        /* Zwei Abschnitte: gerade Strecke vom Start zur Taille — daraus
           entsteht der Faecher von selbst, breit am Anfang, im Punkt zusammen —
           und von der Taille aus der Strahl zum Knoten. */
        let x, yGerade, decay;
        if (t <= waistAnteil) {
          const u = t / waistAnteil;
          x = x0 + (waistX - x0) * u;
          yGerade = y0 + (nodeY - y0) * u;
          decay = Math.pow(1 - u, 1.9);
        } else {
          const u = (t - waistAnteil) / (1 - waistAnteil);
          x = waistX + (nodeX - waistX) * u;
          yGerade = nodeY;
          /* Ein Rest Streuung, der im Knoten auf null laeuft: sonst ist der
             Strahl eine gezogene Linie statt eines Buendels. */
          decay = 0.06 * (1 - u);
        }
        const y = yGerade
          + bow * Math.sin(Math.PI * Math.min(1, t / waistAnteil))
          + wobbleAmp * decay * Math.sin(wobbleFreq * t * Math.PI * 2 + phase);

        const colorT = smooth(0.76, 1, t);
        const a = Math.min(0.9, baseA * (1 + colorT * 2.2));
        dot(x, y, 0.55 + colorT * 0.35, mix(GRAY, AMBER, colorT), a);
      }
    }

    /* ── 2b · Amber-Leitpfad ────────────────────────────────────────────────
       Eine einzelne Spur, die früher umschlägt als die übrigen: sie führt das
       Auge in den Knoten, so wie in der Vorlage. */
    (function leitpfad() {
      const x0 = 0.22 * W, y0 = 0.74 * H;
      const samples = 300;
      for (let s = 0; s <= samples; s++) {
        const t = s / samples;
        if (rand() < 0.1) continue;
        const u = Math.min(1, t / waistAnteil);
        const x = t <= waistAnteil
          ? x0 + (waistX - x0) * u
          : waistX + (nodeX - waistX) * ((t - waistAnteil) / (1 - waistAnteil));
        const y = (t <= waistAnteil ? y0 + (nodeY - y0) * u : nodeY)
          - 0.085 * H * Math.sin(Math.PI * u);
        const colorT = smooth(0.15, 0.7, t);
        dot(x, y, 0.62 + colorT * 0.4, mix(GRAY, AMBER, colorT), 0.26 + colorT * 0.5);
      }
    })();

    /* ── 3 · Verstreute Marker ──────────────────────────────────────────────
       Sitzen auf den Bändern, nicht daneben — sonst wirken sie aufgesetzt. */
    const markers = [
      [0.055, 0.815, true], [0.255, 0.615, false], [0.375, 0.705, false],
      [0.475, 0.905, false], [0.545, 0.575, true], [0.665, 0.795, false],
      [0.745, 0.625, false], [0.895, 0.845, true], [0.615, 0.335, false]
    ];
    markers.forEach(([nx, ny, hasRing]) => {
      const mx = nx * W, my = ny * H;
      dot(mx, my, 2.5, GRAY, 0.55);
      if (hasRing) {
        ring(mx, my, 9, GRAY, 0.26, 18);
        ring(mx, my, 16.5, GRAY, 0.15, 26);
      }
    });

    /* ── 4 · Beleg-Knoten ───────────────────────────────────────────────────
       Gepunkteter Zulauf nach links, dann Ringe und ein solider Kern. Der
       Zulauf endet dort, wo das Label „Anruf angenommen" beginnt — dessen
       CSS-Position rechnet mit derselben Länge (8.5vw). */
    const leadLen = 0.085 * W;
    ctx.fillStyle = rgba(AMBER, 0.32);
    for (let x = nodeX - 30; x > nodeX - leadLen; x -= 5) px(x, nodeY, 0.7);

    const glow = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, 34);
    glow.addColorStop(0, rgba(AMBER, 0.2));
    glow.addColorStop(1, rgba(AMBER, 0));
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(nodeX, nodeY, 34, 0, Math.PI * 2);
    ctx.fill();

    ring(nodeX, nodeY, 13, AMBER, 0.5, 28);
    ring(nodeX, nodeY, 21, AMBER, 0.3, 34);
    ring(nodeX, nodeY, 30, AMBER, 0.17, 40);

    ctx.fillStyle = rgba(AMBER, 1);
    ctx.beginPath();
    ctx.arc(nodeX, nodeY, 7, 0, Math.PI * 2);
    ctx.fill();
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
