# Logo-Assets

`nvidia-inception-*`, `aws-activate-*`, `microsoft-startups-*` und `elevenlabs-grants-dark.webp` sind die offiziellen Logos
(als PNG in ein SVG-Wrapper eingebettet, Hintergrund entfernt, freigestellt).

`elevenlabs-grants-dark.webp` ist das unveränderte offizielle „ElevenLabs Grants“-Logo
aus dem ElevenLabs-Grant-Announcement:
`https://eleven-public-cdn.elevenlabs.io/payloadcms/8xden71nndm-ElevenLabs_Grants_Dark.webp`.

Das Grant-Badge muss ab der offiziellen Zusage mindestens zwölf Monate im Footer
bleiben. Das genaue Entfernungsdatum ist anhand der Acceptance-E-Mail noch zu bestätigen.

Pro Programm zwei Varianten:
- `*-dark.svg` — dunkles Logo für hellen Hintergrund (Default)
- `*-light.svg` — helles Logo für Dark Mode (`prefers-color-scheme: dark`)

## Markenrichtlinien (§ 5 des Briefings)

Alle drei Programme haben verbindliche Richtlinien (Mindestabstände, keine Verzerrung, keine Einfärbung).
Die Graustufen-Darstellung im Ruhezustand ist bei NVIDIA und Microsoft grenzwertig —
**vor Livegang prüfen**; im Zweifel in `main.css` bei `.programme-item` den
`filter: grayscale(1)` entfernen und nur `opacity: 0.7` verwenden.

## Stack-Logos (`stack/`)

Monochrome Logo-Varianten der eingesetzten Technologien (20 px Höhe im Einsatz).
Offizielle Marken-SVGs der Anbieter verwenden, einfarbig dunkel.
