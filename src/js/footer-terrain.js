/* ═══════════════════════════════════════════════════════════════════════════
   Fußzeile — Punktlandschaft.

   Dasselbe Punktraster wie im Hero, nur in die Tiefe gelegt: Reihen laufen
   auf einen Horizont zu, werden dabei enger, kleiner und blasser. Darüber
   eine ruhige Welle. Der Zeiger hebt die Landschaft lokal an und färbt sie
   amber — Amber trägt hier also nur, was gerade berührt wird, sonst nichts.

   Die Fußzeile steht auf Ink, die Punkte sind deshalb hell. Gezeichnet wird
   nur, solange der Abschnitt im Bild ist; am Seitenfuß ist das selten, und
   ein Raster von einigen tausend Punkten soll nicht im Hintergrund laufen.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var cv = document.getElementById("footer-terrain");
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext("2d");
  var band = cv.parentElement;

  var REIHEN = 34;          /* Tiefenstufen vom Horizont bis zur Vorderkante */
  var REICHWEITE = 145;     /* Radius der Zeiger-Anhebung, in Bildpunkten */

  var w = 0, h = 0, spalten = 0, spur = null;
  var mx = -1, my = -1, mw = 0;
  var raf = null, sichtbar = false;
  var ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function messen() {
    var r = cv.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = Math.max(1, Math.round(r.width));
    h = Math.max(1, Math.round(r.height));
    cv.width = w * dpr;
    cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    /* Punktabstand an der Vorderkante rund 15 px — auf breiten Schirmen
       etwas weiter, damit die Punktzahl pro Bild nicht mitwächst. */
    spalten = Math.min(150, Math.max(28, Math.round(w / (w > 1700 ? 17 : 14))));
    spur = new Float32Array(spalten * REIHEN);
  }

  /* Höhenfeld: zwei lange Wellen und eine kurze quer dazu. Bewusst flach —
     es soll eine Landschaft sein, kein Gebirge. */
  function hoehe(u, t, zeit) {
    return (
      Math.sin(u * 2.3 + t * 1.9 - zeit * 0.00032) * 0.72 +
      Math.sin(u * 1.1 - t * 3.1 + zeit * 0.00019) * 0.46 +
      Math.sin(u * 5.6 + t * 0.8 + zeit * 0.00044) * 0.17
    );
  }

  function zeichne(zeit) {
    ctx.clearRect(0, 0, w, h);
    var horizont = h * 0.12;
    var tiefe = h - horizont;

    for (var j = 0; j < REIHEN; j++) {
      var t = j / (REIHEN - 1);
      /* Quadratisch gestaffelt: nah liegen die Reihen weit auseinander,
         zum Horizont hin rücken sie zusammen. Das ist die ganze Perspektive. */
      var naehe = t * t * 0.93 + t * 0.07;
      var yr = horizont + tiefe * naehe;
      var weite = 0.52 + 1.06 * naehe;
      var radius = 0.45 + naehe * 1.35;
      var grund = (0.07 + naehe * 0.40);

      for (var i = 0; i < spalten; i++) {
        var u = i / (spalten - 1) - 0.5;
        var x = w * 0.5 + u * w * weite;
        if (x < -8 || x > w + 8) continue;

        var y = yr - hoehe(u * 2, t, zeit) * naehe * h * 0.17;

        var nah = 0;
        if (mw > 0) {
          var dx = x - mx, dy = y - my;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < REICHWEITE) nah = (1 - d / REICHWEITE) * mw;
        }

        var si = j * spalten + i;
        /* Die Spur klingt zügig ab: Sie soll die Bewegung nachzeichnen, nicht
           eine Fläche einfärben. */
        var tr = spur[si] * 0.965;
        if (nah * 0.45 > tr) tr = nah * 0.45;
        spur[si] = tr;

        var an = Math.max(nah, tr);
        if (an > 0) y -= an * an * 20;

        var a = grund + an * 0.5;
        var r = radius + an * 1.6;

        /* Amber wird eingeblendet, nicht geschaltet: Der Kern unter dem Zeiger
           ist amber, der Rand bleibt Papierton. Sonst läge eine amberne Fläche
           auf dem Fuß, und Amber trägt in dieser Marke nur das Berührte. */
        if (an > 0.02) {
          var k = Math.min(1, an * an * 2.4);
          ctx.fillStyle = "rgba(" + (237 + 3 * k).toFixed(0) + "," +
            (237 - 70 * k).toFixed(0) + "," + (235 - 143 * k).toFixed(0) + "," + a.toFixed(3) + ")";
        } else {
          ctx.fillStyle = "rgba(237,237,235," + a.toFixed(3) + ")";
        }

        if (r < 1.2) ctx.fillRect(x - r, y - r, r * 2, r * 2);
        else { ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill(); }
      }
    }
  }

  function bild(zeit) {
    zeichne(zeit);
    raf = sichtbar ? requestAnimationFrame(bild) : null;
  }

  function start() {
    if (ruhig || raf !== null) return;
    raf = requestAnimationFrame(bild);
  }

  function stop() {
    if (raf !== null) { cancelAnimationFrame(raf); raf = null; }
  }

  messen();
  zeichne(0);

  window.addEventListener("resize", function () {
    messen();
    if (!sichtbar || ruhig) zeichne(0);
  }, { passive: true });

  /* Nur rechnen, solange die Landschaft im Bild ist. */
  if (window.IntersectionObserver) {
    new IntersectionObserver(function (eintraege) {
      sichtbar = eintraege[0].isIntersecting;
      sichtbar ? start() : stop();
    }, { rootMargin: "120px" }).observe(band);
  } else {
    sichtbar = true;
    start();
  }

  /* Der Zeiger wird an der Fußzeile abgegriffen, nicht am Canvas: Über der
     Landschaft liegen Links, und die sollen anklickbar bleiben. */
  if (!ruhig && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var fuss = cv.closest("footer") || band;
    fuss.addEventListener("pointermove", function (e) {
      var r = cv.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      if (x < -REICHWEITE || x > r.width + REICHWEITE || y < -REICHWEITE || y > r.height + REICHWEITE) { mw = 0; return; }
      mx = x; my = y; mw = 1;
    }, { passive: true });
    fuss.addEventListener("pointerleave", function () { mw = 0; }, { passive: true });
  }
})();
