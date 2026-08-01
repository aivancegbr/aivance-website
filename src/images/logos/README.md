# Logo-Assets

`nvidia-inception-*`, `aws-activate-*` und `microsoft-startups-*` sind die offiziellen Logos
(als PNG in ein SVG-Wrapper eingebettet, Hintergrund entfernt, freigestellt).

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
