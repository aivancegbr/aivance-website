/* ═══════════════════════════════════════════════════════════════════════════
   Hero-Gerät — Szene für three.js.
   Die Geometrie ist selbst gebaut (keine fremden Modelle): abgerundeter
   Metallrahmen, schwarze Front, generische Tasten. Kein Herstellerdesign,
   keine Insel, kein Logo, keine Kamerainsel.

   Zwei Ebenen, weil der Bildschirm echtes DOM bleibt:
     body  — Rahmen, Front, Tasten, Schatten → Canvas HINTER dem Chat
     glass — Spiegelung und Glaskante       → Canvas ÜBER dem Chat
   Beide Kameras bilden exakt die CSS-Perspektive der Bühne nach, damit der
   Chat (per matrix3d) pixelgenau auf der Front sitzt.
   Einheiten: 1 = 1 CSS-Pixel. y zeigt nach oben, z zum Betrachter.
   ═══════════════════════════════════════════════════════════════════════════ */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Shape, ExtrudeGeometry,
  ShapeGeometry, PlaneGeometry, MeshPhysicalMaterial, MeshBasicMaterial, ShaderMaterial,
  DirectionalLight, PMREMGenerator, CanvasTexture, Matrix4, Vector3, Color,
  NeutralToneMapping, SRGBColorSpace,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/* Maße des Geräts — identisch zu .phone im CSS (300 × 620, Radius 46) */
export const DEVICE = { w: 300, h: 620, r: 46, depth: 28, rim: 4.5 };
/* CSS-Perspektive der Lagen (--phone-persp in main.css): 1200px, Ursprung 150px / 248px */
export const PERSPECTIVE = 1200;
export const ORIGIN = { x: 150, y: 248 };

/* Canvas-Ausschnitte relativ zur Bühne (CSS-Pixel). Der Körper braucht Rand
   für Seitenwände und Schatten, das Glas nur für die Perspektive. */
export const BOX_BODY = { left: -100, top: -70, width: 500, height: 840 };
const SHADOW_Z = 170; // Abstand der Schattenebene hinter der Front
export const BOX_GLASS = { left: -40, top: -40, width: 380, height: 700 };

function roundedRect(w, h, r) {
  /* Kreisbögen statt Bézier: schlichte, generische Ecken */
  const s = new Shape(), x = w / 2 - r, y = h / 2 - r, q = Math.PI / 2;
  s.moveTo(-x, -h / 2);
  s.lineTo(x, -h / 2);
  s.absarc(x, -y, r, -q, 0);
  s.lineTo(w / 2, y);
  s.absarc(x, y, r, 0, q);
  s.lineTo(-x, h / 2);
  s.absarc(-x, y, r, q, 2 * q);
  s.lineTo(-w / 2, -y);
  s.absarc(-x, -y, r, 2 * q, 3 * q);
  return s;
}

/* Weicher Schatten als vorgerechnete Textur: verwischtes Rundrechteck in
   Gerätegröße plus ein flacher Bodenschatten darunter (wie bisher im CSS). */
const SHADOW_TEX = { w: 256, h: 560, core: { x: 48, y: 48, w: 160, h: 416 } };
function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = SHADOW_TEX.w; c.height = SHADOW_TEX.h;
  const g = c.getContext("2d");
  const k = SHADOW_TEX.core;
  /* Weichzeichnen über shadowBlur statt ctx.filter (Safari kennt filter auf
     Canvas 2D nicht): Form außerhalb zeichnen, nur ihr Schatten fällt hinein. */
  const soft = (sigma, alpha, shape) => {
    g.save();
    g.shadowColor = `rgba(22,22,20,${alpha})`;
    g.shadowBlur = sigma * 2;
    g.shadowOffsetX = 2000;
    g.translate(-2000, 0);
    g.beginPath();
    shape();
    g.fill();
    g.restore();
  };
  soft(15, 1, () => g.roundRect(k.x, k.y, k.w, k.h, 26));
  soft(9, 0.5, () => g.ellipse(128, 506, 62, 9, 0, 0, Math.PI * 2));
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

/* Kamera, deren Projektion der CSS-Perspektive entspricht. Der volle Kegel ist
   symmetrisch um den Perspektiv-Ursprung; der Canvas ist ein Ausschnitt daraus. */
function cssCamera(box) {
  const A = 2000;
  const fov = (2 * Math.atan(A / PERSPECTIVE) * 180) / Math.PI;
  const cam = new PerspectiveCamera(fov, 1, 1, 6000);
  cam.position.set(0, 0, PERSPECTIVE);
  cam.setViewOffset(2 * A, 2 * A, A + box.left - ORIGIN.x, A + box.top - ORIGIN.y, box.width, box.height);
  return cam;
}

/* Glas: flache Scheibe, Spiegelung eines Studio-Lichts nach Fresnel plus eine
   feine Lichtkante an der gerundeten Glaskante. Alpha bleibt klein, damit der
   Chat lesbar bleibt. Ausgabe vormultipliziert. */
const glassVert = /* glsl */ `
  varying vec3 vWorld;
  varying vec2 vLocal;
  void main() {
    vLocal = position.xy;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
const glassFrag = /* glsl */ `
  uniform vec3 uNormal;
  uniform vec2 uHalf;
  uniform float uRadius;
  uniform vec2 uPointer;
  uniform float uOpacity;
  varying vec3 vWorld;
  varying vec2 vLocal;
  float sdRound(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  void main() {
    float d = sdRound(vLocal, uHalf, uRadius);
    float inside = 1.0 - smoothstep(-0.6, 0.6, d);
    if (inside <= 0.0) discard;
    vec3 V = normalize(vWorld - cameraPosition);
    vec3 N = normalize(uNormal);
    vec3 R = reflect(V, N);
    float cosT = clamp(dot(-V, N), 0.0, 1.0);
    float fres = 0.04 + 0.96 * pow(1.0 - cosT, 5.0);
    /* Studio-Licht als Funktion der Spiegelrichtung. In Ruhepose liegt R.xy
       auf der Front etwa in x −0.68…−0.59, y 0.03…0.36. s läuft diagonal von
       unten rechts (−) nach oben links (+). Jede Neigung verschiebt R doppelt
       so stark wie den Winkel — der Streifen wandert über das Glas, der
       Zeiger schiebt leicht nach. */
    vec2 r2 = R.xy + uPointer * vec2(0.03, -0.03);
    float s = -(r2.x + 0.63) * 3.0 + (r2.y - 0.2) * 1.1;
    float streak = exp(-pow((s - 0.13) / 0.05, 2.0)) + 0.5 * exp(-pow((s - 0.25) / 0.014, 2.0));
    float wash = smoothstep(-0.05, 0.4, s);
    float shade = 1.0 - smoothstep(-0.3, 0.05, s);
    float k = 0.85 + fres * 3.0;
    float hi = (streak * 0.12 + wash * 0.05) * k;
    float dark = shade * 0.035;
    /* Glaskante: schmaler Saum innen an der Kontur, heller dort, wo die Kante
       zum Licht zeigt (oben links). */
    float edge = smoothstep(-2.6, -0.3, d) * inside;
    vec2 en = normalize(vLocal + 1e-4);
    float lit = 0.25 + 0.75 * max(0.0, dot(en, normalize(vec2(-0.6, 0.8))));
    hi = clamp(hi + edge * lit * 0.42, 0.0, 0.5);
    float m = inside * uOpacity;
    /* vormultipliert: Licht hellt auf, der Schatten dunkelt leicht ab */
    gl_FragColor = vec4(vec3(hi), hi + dark * (1.0 - hi)) * m;
  }`;

export function createPhoneScene({ bodyCanvas, glassCanvas, pixelRatio }) {
  const mk = (canvas, box) => {
    const r = new WebGLRenderer({ canvas, alpha: true, antialias: true, premultipliedAlpha: true, powerPreference: "default" });
    r.setPixelRatio(pixelRatio);
    r.setSize(box.width, box.height, false);
    r.setClearColor(0x000000, 0);
    return r;
  };
  const bodyR = mk(bodyCanvas, BOX_BODY);
  bodyR.toneMapping = NeutralToneMapping;
  bodyR.toneMappingExposure = 1.0;
  const glassR = glassCanvas ? mk(glassCanvas, BOX_GLASS) : null;

  /* ─── Körper ─── */
  const scene = new Scene();
  const pmrem = new PMREMGenerator(bodyR);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.85;
  pmrem.dispose();

  const key = new DirectionalLight(0xffffff, 1.6); key.position.set(-0.6, 1, 0.9);
  const fill = new DirectionalLight(0xfff4e8, 0.5); fill.position.set(1, 0.1, 0.7);
  const rim = new DirectionalLight(0xffffff, 2.4); rim.position.set(0.9, 0.7, -1);
  scene.add(key, fill, rim);

  const { w, h, r, depth, rim: rimW } = DEVICE;
  const bevel = 3.2;
  const device = new Group();
  device.matrixAutoUpdate = false;

  /* Rahmen: extrudiertes Rundrechteck mit runder Kante; Front bei z = 0 */
  const frameGeo = new ExtrudeGeometry(roundedRect(w - 2 * bevel, h - 2 * bevel, r - bevel), {
    depth: depth - 2 * bevel, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel,
    bevelSegments: 6, curveSegments: 28,
  });
  frameGeo.translate(0, 0, -depth + bevel - 0.25);
  const metal = new MeshPhysicalMaterial({
    color: new Color("#5a5752"), metalness: 1, roughness: 0.34,
    clearcoat: 0.4, clearcoatRoughness: 0.35,
  });
  device.add(new Mesh(frameGeo, metal));

  /* Front: schwarzes Deckglas innerhalb des Rahmens, liegt unter dem Chat */
  const front = new Mesh(
    new ShapeGeometry(roundedRect(w - 2 * rimW, h - 2 * rimW, r - rimW), 28),
    new MeshPhysicalMaterial({ color: new Color("#050505"), metalness: 0, roughness: 0.6, envMapIntensity: 0.25 }),
  );
  front.position.z = -0.05;
  device.add(front);

  /* Tasten: rechts eine, links zwei — generisch, ohne Vorbild */
  const keyMat = new MeshPhysicalMaterial({ color: new Color("#5a5752"), metalness: 1, roughness: 0.3 });
  const btn = (x, y, len) => {
    const m = new Mesh(new RoundedBoxGeometry(4, len, 9, 2, 1.6), keyMat);
    m.position.set(x, y, -depth / 2);
    device.add(m);
  };
  btn(w / 2 + 0.6, 120, 62);
  btn(-w / 2 - 0.6, 150, 40);
  btn(-w / 2 - 0.6, 96, 40);

  /* Kamera der Front: kleines, rundes Loch im Chat-Kopf übernimmt der DOM-Teil
     (.notch). Hier nichts weiter — der Bildschirm ist DOM. */

  scene.add(device);

  /* Schatten auf der Seitenebene hinter dem Gerät */
  const shadow = new Mesh(
    new PlaneGeometry(1, 1),
    new MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false, opacity: 0.3 }),
  );
  shadow.renderOrder = -1;
  scene.add(shadow);

  const bodyCam = cssCamera(BOX_BODY);

  /* ─── Glas ─── */
  let glassScene = null, glassCam = null, glassMesh = null, glassMat = null;
  if (glassR) {
    glassScene = new Scene();
    glassMat = new ShaderMaterial({
      vertexShader: glassVert, fragmentShader: glassFrag,
      uniforms: {
        uNormal: { value: new Vector3(0, 0, 1) },
        uHalf: { value: [(w - 2 * rimW) / 2, (h - 2 * rimW) / 2] },
        uRadius: { value: r - rimW },
        uPointer: { value: [0, 0] },
        uOpacity: { value: 1 },
      },
      transparent: true, premultipliedAlpha: true, depthTest: false, depthWrite: false,
    });
    glassMesh = new Mesh(new PlaneGeometry(w, h), glassMat);
    glassMesh.matrixAutoUpdate = false;
    glassScene.add(glassMesh);
    glassCam = cssCamera(BOX_GLASS);
  }

  /* Gerätemitte relativ zum Perspektiv-Ursprung (y nach oben) */
  const center = new Matrix4().makeTranslation(w / 2 - ORIGIN.x, -(h / 2 - ORIGIN.y), 0);
  const flip = new Matrix4().makeScale(1, -1, 1);
  const local = new Matrix4(), world = new Matrix4(), glassLocal = new Matrix4();
  const normal = new Vector3();

  /* cssMatrix: DOMMatrix der Pose in CSS-Koordinaten (y nach unten).
     pointer: geglätteter Zeiger, je Achse −1…1 */
  function render(cssMatrix, pointer = [0, 0]) {
    local.fromArray(cssMatrix.toFloat64Array());
    local.premultiply(flip).multiply(flip); // CSS (y↓) → three (y↑)
    world.multiplyMatrices(center, local);
    device.matrix.copy(world);
    device.matrixWorldNeedsUpdate = true;

    /* Spiegelungen wandern mit dem Zeiger: Umgebung leicht mitdrehen */
    scene.environmentRotation.set(pointer[1] * -0.12, pointer[0] * 0.35, 0);

    /* Schatten: bleibt auf der Seitenebene, wird beim Schweben weicher und
       folgt der Drehung nur gedämpft. */
    const e = local.elements; // e[13] = Schwebehöhe
    /* Kern der Textur = Gerätegröße, auf die Tiefe der Ebene hochgerechnet */
    const depthScale = (PERSPECTIVE + SHADOW_Z) / PERSPECTIVE;
    const sx = (w * depthScale) / SHADOW_TEX.core.w, sy = (h * depthScale) / SHADOW_TEX.core.h;
    const coreCy = SHADOW_TEX.h / 2 - (SHADOW_TEX.core.y + SHADOW_TEX.core.h / 2); // Kern über der Texturmitte
    shadow.scale.set(SHADOW_TEX.w * sx * (0.6 + 0.4 * Math.abs(e[0])), SHADOW_TEX.h * sy, 1);
    shadow.position.set(
      (e[12] * 0.6 + 10) * depthScale,
      (-(h / 2 - ORIGIN.y) - 26 + e[13] * 0.4) * depthScale - coreCy * sy,
      -SHADOW_Z,
    );
    shadow.material.opacity = 0.3 - e[13] * 0.01;

    bodyR.render(scene, bodyCam);

    if (glassR) {
      glassLocal.copy(world).multiply(new Matrix4().makeTranslation(0, 0, 0.6));
      glassMesh.matrix.copy(glassLocal);
      glassMesh.matrixWorldNeedsUpdate = true;
      normal.set(0, 0, 1).transformDirection(world);
      glassMat.uniforms.uNormal.value.copy(normal);
      glassMat.uniforms.uPointer.value = pointer;
      glassR.render(glassScene, glassCam);
    }
  }

  function dispose() {
    bodyR.dispose();
    if (glassR) glassR.dispose();
  }

  return { render, dispose, renderers: [bodyR, glassR].filter(Boolean) };
}
