# Produkt-Logos

Eigenständige Lockups (Signet + Wortmarke + Produktname) für aivance Echo, Iris,
Boarding und Radar — für Einsatz außerhalb der Website (Pitch Decks, Social Media,
E-Mail-Signaturen). Auf der Website selbst kommt stattdessen das Nunjucks-Macro
`brand.productLockup(...)` aus `src/_includes/partials/logo.njk` zum Einsatz, damit
Website und Standalone-Dateien nie auseinanderlaufen.

Pro Produkt zwei Varianten, gleiche Konvention wie bei den Partner-Logos:
- `*-dark.svg` — dunkles Logo für hellen Hintergrund (Default)
- `*-light.svg` — helles Logo für Dark Mode / dunklen Hintergrund

## Technischer Hinweis

Die Dateien sind valides SVG mit einem `<foreignObject>`, das exakt das gleiche
HTML/CSS enthält wie die Website (kein Nachbau in reinem SVG-Text mit
handgesetztem Kerning). Das hat einen Preis: Sie laden Instrument Sans und IBM
Plex Mono über einen `@import` von Google Fonts. Rendert korrekt in Browsern
und den meisten Design-Tools mit Internetzugriff (Figma, Browser-Vorschau);
in reinen Vektor-Editoren ohne CSS-Unterstützung (klassisches Illustrator,
PowerPoint-Import) kann es auf die Systemschrift zurückfallen.

Für einen Kanal ohne Internetzugriff: Datei einmal in einem Browser öffnen und
als PNG exportieren/screenshotten — dann ist die Schrift bereits gerastert.
