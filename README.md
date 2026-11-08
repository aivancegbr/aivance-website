# ai-vance.de

Statische Website (Eleventy 3, Nunjucks, Tailwind 3). Deploy über GitHub Pages bei
jedem Push auf `main` (`.github/workflows/deploy.yml`).

```bash
npm ci
npm run build   # _site/
npm run dev     # lokaler Server mit Live-Reload
```

## Hero-Gerät (3D)

Das Telefon im Hero der Startseite (DE und EN) ist auf Desktop eine three.js-Szene,
überall sonst ein statisches Rendering derselben Szene.

**Modell: selbst gebaut, keine fremden Assets.** Die Geometrie entsteht zur Laufzeit
aus Code (`src/js3d/phone-scene.js`): Rahmen mit flachen Seiten und polierter Fase,
schmale gleichmäßige Ränder, Ecken als Superellipse (Exponent 2.8, konzentrisch zur
Bildschirmecke), rechts eine Seitentaste, links Aktionstaste und zwei
Lautstärketasten. Die Kameraaussparung ist eine Pille in eigenen Proportionen
(88 × 28 px, rund ein Drittel der Bildschirmbreite), CSS in `.notch` (`main.css`);
die Statusleiste liegt links und rechts daneben. Kein heruntergeladenes Modell,
keine Herstellerdaten, -maße oder -renderings, kein Logo, keine Rückkamera, keine
Marke.
Reflexionen kommen aus `RoomEnvironment` von three.js, nicht aus einer HDR-Datei.
Es gibt deshalb keine Modelldatei und nichts, was Draco oder Meshopt komprimieren
müssten.

| Bestandteil | Quelle | Lizenz |
|---|---|---|
| Geometrie, Materialien, Glas-Shader, Schatten | eigener Code in `src/js3d/` | wie dieses Repository |
| three.js 0.187 (inkl. `RoomEnvironment`, `RoundedBoxGeometry` aus `examples/jsm`) | npm `three`, https://github.com/mrdoob/three.js | MIT, Copyright © 2010–2026 three.js authors; Lizenzhinweis bleibt im Bundle erhalten |
| Statische Renderings `src/images/hero-device/*.webp` | aus derselben Szene gebacken (`npm run bake:hero3d`) | wie dieses Repository |

**Aufbau.** Der Bildschirm bleibt echtes DOM (Chat aus `src/_data/mockups.js`,
abgespielt von `mockup.js`), damit Text scharf, ohne JS lesbar und in DE/EN gepflegt
bleibt. Fünf Lagen übereinander: Körper-Canvas bzw. -Bild → Chat → Glas-Canvas bzw.
-Bild → Badges. Die Perspektive (1200px, Ursprung 150px/248px) steckt als
`--phone-persp` in der Transformation jeder DOM-Lage, nicht als `perspective` am
Elternteil; das ist gleichwertig und unabhängig davon, wie die Engine
Elternperspektiven zusammensetzt. Die three.js-Kamera bildet dieselbe Projektion
exakt nach; Chat und Badges bekommen pro Bild dieselbe Pose als `matrix3d`. Maße, Perspektive und Canvas-Ausschnitte stehen in
`phone-scene.js` und `main.css` und müssen zusammenpassen.

**Wann was läuft** (Entscheidung in `src/js/hero.js`):

| Situation | Darstellung |
|---|---|
| Desktop, Maus (`hover: hover`, `pointer: fine`, ab 900 px) | three.js, nachgeladen nach `load`, wenn der Hero sichtbar ist und der Browser frei ist; Überblendung vom Standbild |
| Touch, schmaler als 900 px, ≤ 4 Kerne, ≤ 4 GB RAM, Save-Data | Standbild, Schweben per CSS |
| WebGL fehlt, Software-Renderer, Kontextverlust, < ~24 fps in den ersten 2 s | Standbild, Schweben per CSS |
| `prefers-reduced-motion: reduce` | Standbild, still; three.js wird nicht geladen |
| ohne JS | Standbild, still; Chat vollständig sichtbar |

Der Schatten wird mit `shadowBlur` weichgezeichnet, nicht mit `ctx.filter`
(Safari unterstützt `filter` auf Canvas 2D nicht).

Pixel-Ratio maximal 2. Die Schleife pausiert außerhalb des Viewports und bei
verborgenem Tab.

**Standbilder neu backen** nach jeder Änderung an Szene, Pose oder Maßen:

```bash
npm run bake:hero3d   # braucht Google Chrome und cwebp (brew install webp)
```
