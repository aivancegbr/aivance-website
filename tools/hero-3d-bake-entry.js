/* Bake-Einstieg: rendert die Hero-Szene in Ruhepose als Standbilder.
   Wird von tools/hero-3d-bake.mjs gebündelt und in Chrome ausgeführt. */
import { createPhoneScene, BOX_BODY, BOX_GLASS } from "../src/js3d/phone-scene.js";

const POSES = {
  desktop: { y: -20, x: 7, z: -2 }, // = CSS .phone-wrap
  mobile: { y: -14, x: 6, z: -2 },  // = CSS .phone-wrap unter 768px
};

window.bake = function () {
  const out = {};
  for (const [name, p] of Object.entries(POSES)) {
    for (const dpr of [1, 2]) {
      const bodyCanvas = document.createElement("canvas");
      const glassCanvas = document.createElement("canvas");
      const scene = createPhoneScene({ bodyCanvas, glassCanvas, pixelRatio: dpr });
      const m = new DOMMatrix()
        .rotateAxisAngleSelf(0, 1, 0, p.y)
        .rotateAxisAngleSelf(1, 0, 0, p.x)
        .rotateAxisAngleSelf(0, 0, 1, p.z);
      scene.render(m, [0, 0]);
      const sfx = dpr === 2 ? "@2x" : "";
      out[`body-${name}${sfx}`] = bodyCanvas.toDataURL("image/png");
      out[`glass-${name}${sfx}`] = glassCanvas.toDataURL("image/png");
      scene.dispose();
    }
  }
  return out;
};
window.bakeBoxes = { BOX_BODY, BOX_GLASS };
