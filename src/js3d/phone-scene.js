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
  ShapeGeometry, PlaneGeometry, BufferGeometry, Float32BufferAttribute, MeshPhysicalMaterial, MeshBasicMaterial, ShaderMaterial,
  DirectionalLight, PMREMGenerator, CanvasTexture, Matrix4, Vector3, Color,
  NeutralToneMapping, SRGBColorSpace,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/* Maße. Die Bühne ist 300 × 620 (= .phone im CSS), der Bildschirm (.phone-inner)
   sitzt 13 px eingerückt. Das Gehäuse ist 3 px kleiner als die Bühne, damit die
   Ränder schmal werden, ohne dass der Chat sich bewegt. Alle Ecken folgen
   derselben Superellipse (Exponent SQ_N) und liegen konzentrisch zur
   Bildschirmecke in main.css (clip-path der .phone-inner, Ausdehnung 44 px). */
export const DEVICE = { w: 294, h: 614, depth: 28, rim: 2.2 };
const SCREEN_INSET = 13 - 3;        // Bildschirmkante ab Gehäusekante
const SCREEN_CORNER = 44;           // = clip-path in main.css
export const SQ_N = 2.8;            // Superellipse: weicher Übergang als ein Kreisbogen
/* CSS-Perspektive der Lagen (--phone-persp in main.css): 1200px, Ursprung 150px / 248px */
export const PERSPECTIVE = 1200;
export const ORIGIN = { x: 150, y: 248 };

/* Canvas-Ausschnitte relativ zur Bühne (CSS-Pixel). Der Körper braucht Rand
   für Seitenwände und Schatten, das Glas nur für die Perspektive. */
export const BOX_BODY = { left: -100, top: -70, width: 500, height: 840 };
const SHADOW_Z = 170; // Abstand der Schattenebene hinter der Front
export const BOX_GLASS = { left: -40, top: -40, width: 380, height: 700 };

/* Rechteck mit Superellipsen-Ecken (Ausdehnung r je Ecke). Fein unterteilt,
   weil die Kanten flach schattiert werden. */
function squircleRect(w, h, r, segs = 40) {
  const s = new Shape(), cx = w / 2 - r, cy = h / 2 - r, e = 2 / SQ_N;
  const pts = [];
  for (const [sx, sy, a0] of [[1, -1, -Math.PI / 2], [1, 1, 0], [-1, 1, Math.PI / 2], [-1, -1, Math.PI]]) {
    for (let i = 0; i <= segs; i++) {
      const t = a0 + (i / segs) * (Math.PI / 2), c = Math.cos(t), si = Math.sin(t);
      pts.push([sx * cx + Math.sign(c) * Math.abs(c) ** e * r, sy * cy + Math.sign(si) * Math.abs(si) ** e * r]);
    }
  }
  s.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0], pts[i][1]);
  s.closePath();
  return s;
}

/* Teilt eine Extrusion nach Flächenneigung in drei Gruppen: Deckflächen (0),
   flache Seitenwand (1), Fase (2) — damit die Fase poliert glänzen kann. */
function splitByNormal(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  g.computeVertexNormals();
  const pos = g.attributes.position.array, nor = g.attributes.normal.array;
  const buckets = [[], [], []];
  for (let t = 0; t < pos.length / 9; t++) {
    const nz = Math.abs(nor[t * 9 + 2] + nor[t * 9 + 5] + nor[t * 9 + 8]) / 3;
    buckets[nz > 0.97 ? 0 : nz < 0.25 ? 1 : 2].push(t);
  }
  const P = [], N = [], out = new BufferGeometry();
  let start = 0;
  buckets.forEach((list, gi) => {
    for (const t of list) for (let k = 0; k < 9; k++) { P.push(pos[t * 9 + k]); N.push(nor[t * 9 + k]); }
    out.addGroup(start, list.length * 3, gi);
    start += list.length * 3;
  });
  out.setAttribute("position", new Float32BufferAttribute(P, 3));
  out.setAttribute("normal", new Float32BufferAttribute(N, 3));
  return out;
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
  uniform float uN;
  uniform vec2 uPointer;
  uniform float uOpacity;
  varying vec3 vWorld;
  varying vec2 vLocal;
  /* Abstand zu einem Rechteck mit Superellipsen-Ecken (p-Norm, genähert) */
  float sdRound(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    vec2 m = max(q, 0.0);
    return pow(pow(m.x, uN) + pow(m.y, uN), 1.0 / uN) + min(max(q.x, q.y), 0.0) - r;
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

  const { w, h, depth, rim: rimW } = DEVICE;
  const r = SCREEN_CORNER + SCREEN_INSET;          // Gehäuseecke, konzentrisch zum Bildschirm
  const rFront = SCREEN_CORNER + SCREEN_INSET - rimW;
  const chamfer = 1.3;
  const device = new Group();
  device.matrixAutoUpdate = false;

  /* Rahmen: flache Seitenwände, vorn und hinten eine schmale 45°-Fase.
     Seiten satiniert, Fase poliert. Front bei z = 0. */
  const frameGeo = splitByNormal(new ExtrudeGeometry(squircleRect(w - 2 * chamfer, h - 2 * chamfer, r - chamfer), {
    depth: depth - 2 * chamfer, bevelEnabled: true, bevelThickness: chamfer, bevelSize: chamfer, bevelSegments: 1,
  }));
  frameGeo.translate(0, 0, -depth + chamfer - 0.25);
  const satin = new MeshPhysicalMaterial({
    color: new Color("#5a5752"), metalness: 1, roughness: 0.42, clearcoat: 0.3, clearcoatRoughness: 0.45,
  });
  const polished = new MeshPhysicalMaterial({ color: new Color("#8d8a83"), metalness: 1, roughness: 0.12 });
  device.add(new Mesh(frameGeo, [satin, satin, polished]));

  /* Front: schwarzes Deckglas innerhalb des Rahmens, liegt unter dem Chat */
  const front = new Mesh(
    new ShapeGeometry(squircleRect(w - 2 * rimW, h - 2 * rimW, rFront)),
    new MeshPhysicalMaterial({ color: new Color("#050505"), metalness: 0, roughness: 0.6, envMapIntensity: 0.25 }),
  );
  front.position.z = -0.05;
  device.add(front);

  /* Tasten: rechts eine lange, links eine kurze Aktionstaste und zwei für die
     Lautstärke. Flach, knapp aus der Seitenwand stehend. */
  const keyMat = new MeshPhysicalMaterial({ color: new Color("#6a6760"), metalness: 1, roughness: 0.28 });
  const btn = (side, y, len) => {
    const m = new Mesh(new RoundedBoxGeometry(3, len, 7, 2, 1.2), keyMat);
    m.position.set(side * (w / 2 + 0.4), y, -depth / 2);
    device.add(m);
  };
  btn(1, 100, 78);   // Seitentaste
  btn(-1, 186, 26);  // Aktionstaste
  btn(-1, 126, 50);  // lauter
  btn(-1, 66, 50);   // leiser

  /* Kameraaussparung und Statusleiste gehören zum DOM-Bildschirm (.notch,
     .status-bar in main.css). */

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
        uRadius: { value: rFront },
        uN: { value: SQ_N },
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

  /* Gerätemitte (= Bühnenmitte 150/310) relativ zum Perspektiv-Ursprung, y nach oben */
  const STAGE = { w: 300, h: 620 };
  const center = new Matrix4().makeTranslation(STAGE.w / 2 - ORIGIN.x, -(STAGE.h / 2 - ORIGIN.y), 0);
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
      (-(STAGE.h / 2 - ORIGIN.y) - 26 + e[13] * 0.4) * depthScale - coreCy * sy,
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
