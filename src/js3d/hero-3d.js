/* ═══════════════════════════════════════════════════════════════════════════
   Hero-Gerät in 3D — wird von /js/hero.js nachgeladen, nur auf Desktop mit
   Maus, ohne Reduced Motion, erst wenn der Hero sichtbar ist.
   Bis zum ersten Bild steht das statische Rendering desselben Geräts; danach
   blendet die Bühne über. Bei jedem Fehler bleibt das statische Bild.
   ═══════════════════════════════════════════════════════════════════════════ */
import { createPhoneScene, BOX_BODY, BOX_GLASS } from "./phone-scene.js";

const REST = { y: -20, x: 7, z: -2 }; // Ruhepose, wie bisher im CSS
const TILT = { y: 10, x: 6 };         // maximale Neigung zum Zeiger (Grad)
const FLOAT = { amp: 6, period: 6 };  // Schweben: 6 px Hub, 6 s — wie @keyframes float
const TAU_FOLLOW = 0.22, TAU_RETURN = 0.7; // Dämpfung in Sekunden
const PERSP = "translateY(-62px) perspective(1200px) translateY(62px) "; // = --phone-persp

(function () {
  const stage = document.querySelector(".phone-stage");
  if (!stage) return;
  const floatEl = stage.querySelector(".phone-float");
  const wrap = stage.querySelector(".phone-wrap");
  const badges = stage.querySelector(".phone-badges");
  const hero = stage.closest(".hero") || document.body;
  if (!floatEl || !wrap) return;

  const canvas = (cls, box) => {
    const c = document.createElement("canvas");
    c.className = "phone-gl " + cls;
    c.setAttribute("aria-hidden", "true");
    Object.assign(c.style, { left: box.left + "px", top: box.top + "px", width: box.width + "px", height: box.height + "px" });
    return c;
  };
  const bodyCanvas = canvas("phone-gl-body", BOX_BODY);
  const glassCanvas = canvas("phone-gl-glass", BOX_GLASS);

  let phone, raf = 0;
  try {
    floatEl.insertBefore(bodyCanvas, wrap);
    floatEl.insertBefore(glassCanvas, badges || null);
    phone = createPhoneScene({ bodyCanvas, glassCanvas, pixelRatio: Math.min(window.devicePixelRatio || 1, 2) });
    const gl = phone.renderers[0].getContext();
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const name = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    if (/swiftshader|llvmpipe|software/i.test(name)) throw new Error("software renderer");
  } catch (err) {
    fallback();
    return;
  }

  /* Rückfall: Canvas entfernen, statisches Bild und CSS-Schweben bleiben */
  function fallback() {
    stop();
    if (phone) phone.dispose();
    phone = null; // start() bleibt danach wirkungslos
    bodyCanvas.remove();
    glassCanvas.remove();
    stage.classList.remove("is-3d");
    stage.dataset.mode = "static";
    wrap.style.transform = "";
    if (badges) badges.style.transform = "";
  }
  bodyCanvas.addEventListener("webglcontextlost", fallback);
  glassCanvas.addEventListener("webglcontextlost", fallback);

  /* ─── Zeiger: nur echte Maus. Ziel −1…1 je Achse, 0 außerhalb des Hero ─── */
  let lastX = null, lastY = null, tx = 0, ty = 0, px = 0, py = 0;
  const clamp = (v) => Math.max(-1, Math.min(1, v));
  function aim() {
    if (lastX === null) { tx = ty = 0; return; }
    const hr = hero.getBoundingClientRect();
    if (lastX < hr.left || lastX > hr.right || lastY < hr.top || lastY > hr.bottom) { tx = ty = 0; return; }
    const sr = stage.getBoundingClientRect();
    tx = clamp((lastX - (sr.left + sr.width / 2)) / (hr.width * 0.45));
    ty = clamp((lastY - (sr.top + sr.height / 2)) / (hr.height * 0.5));
  }
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    lastX = e.clientX; lastY = e.clientY; aim();
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => { lastX = lastY = null; aim(); });
  window.addEventListener("blur", () => { lastX = lastY = null; aim(); });
  window.addEventListener("scroll", aim, { passive: true });

  /* ─── Schleife ─── */
  /* Phase aus der laufenden CSS-Animation übernehmen, damit das Schweben beim
     Überblenden nicht springt. */
  const cssFloat = floatEl.getAnimations ? floatEl.getAnimations()[0] : null;
  let t = cssFloat && typeof cssFloat.currentTime === "number" ? cssFloat.currentTime / 1000 : 0;
  let last = 0, frames = 0, slow = 0, weight = 0, started = false;
  const rad = Math.PI / 180;

  function pose(dt) {
    const k = 1 - Math.exp(-dt / (tx || ty ? TAU_FOLLOW : TAU_RETURN));
    px += (tx - px) * k;
    py += (ty - py) * k;
    weight = Math.min(1, weight + dt / 0.6); // Neigung erst nach dem Überblenden voll
    const lift = (FLOAT.amp / 2) * (1 - Math.cos((2 * Math.PI * t) / FLOAT.period));
    const swayY = 1.4 * Math.sin((2 * Math.PI * t) / 14);
    const swayX = 0.5 * Math.sin((2 * Math.PI * t) / 11 + 1);
    const ry = REST.y + swayY + px * TILT.y * weight;
    const rx = REST.x + swayX - py * TILT.x * weight;
    return new DOMMatrix()
      .translateSelf(0, -lift, 0)
      .rotateAxisAngleSelf(0, 1, 0, ry)
      .rotateAxisAngleSelf(1, 0, 0, rx)
      .rotateAxisAngleSelf(0, 0, 1, REST.z);
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = last ? Math.min((now - last) / 1000, 0.1) : 1 / 60;
    last = now;
    t += dt;
    const m = pose(dt);
    phone.render(m, [px * weight, py * weight]);
    const css = PERSP + m.toString(); // Perspektive je Lage, siehe main.css
    wrap.style.transform = css;
    if (badges) badges.style.transform = css;

    if (!started) {
      started = true;
      stage.classList.add("is-3d");
      stage.dataset.mode = "3d";
    }
    /* Leistungsprüfung in den ersten zwei Sekunden: bleibt die Bildrate unter
       ~24 fps, zurück zum statischen Bild. */
    if (frames < 120) {
      frames++;
      if (dt > 0.042) slow++;
      if (frames === 120 && slow > 60) fallback();
    }
  }
  function start() { if (!raf && phone) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }

  let onScreen = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      onScreen = entries[0].isIntersecting;
      onScreen && !document.hidden ? start() : stop();
    }).observe(stage);
  }
  document.addEventListener("visibilitychange", () => {
    document.hidden || !onScreen ? stop() : start();
  });
  start();
})();
