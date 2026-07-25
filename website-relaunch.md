# AIVANCE Website-Relaunch — Implementierungsbriefing

**Version:** 1.0
**Datum:** 25. Juli 2026
**Repository:** ai-vance.de (statisches HTML)
**Adressat:** Claude Code

---

## 0. Auftrag in einem Satz

Die bestehende Website ist als Produktseite für RAG-Systeme und Voice Agents gebaut. Sie wird zur Website einer **Digitalisierungsagentur** umgebaut, die sieben Leistungen über vier Branchen anbietet — ohne dabei wie ein Bauchladen zu wirken und **ohne die bestehende Designsprache zu verändern**.

### Nicht verhandelbar

1. Farbwelt, Typografie, Kartenradien, Animationslogik und Button-Stile bleiben **unverändert**. Es wird keine neue Designsprache eingeführt.
2. Deutsch wird Primärsprache. Englisch bleibt als Zweitsprache unter `/en/`.
3. Die drei Leitplanken **Datenschutz, Qualität, Geschwindigkeit** sind auf jeder Seite präsent — nicht nur auf einer.
4. Keine unbelegbaren Trust-Signale (siehe § 9, Bugfix B1). Das ist ein Rechtsrisiko, kein Designthema.

---

## 1. Positionierung

### Bisher
> „RAG systems & AI Voice Agents — your knowledge, always on call."

Produktzentriert, englisch, adressiert Tech-Käufer.

### Neu
> **Digitalisierung aus einer Hand — von der Website bis zur Automatisierung.**
> Ein Partner statt fünf Dienstleistern.

Das Kernversprechen ist nicht Breite, sondern **Integration**. Der Schmerzpunkt der Zielgruppe ist nicht „mir fehlt eine Website", sondern „mein Webdesigner, mein Fotograf, meine Social-Media-Agentur und meine IT reden nicht miteinander, und ich koordiniere das nebenbei".

### Das Bauchladen-Problem und seine Auflösung

Sieben Leistungen auf einer Startseite wirken unseriös. Die Architektur löst das:

- **Branchenseiten tragen den Fokus.** Ein Zahnarzt landet auf „Digitalisierung für Praxen" und sieht dort genau die drei Leistungen, die für ihn relevant sind.
- **Leistungsseiten tragen die Breite.** Wer gezielt sucht, findet Tiefe.
- **Die Startseite verkauft weder noch** — sie verkauft den einen Ansprechpartner und leitet in die passende Branche.

Regel für alle Texte: Auf keiner Seite steht eine Aufzählung aller sieben Leistungen im Fließtext.

---

## 2. Leistungsstruktur — drei Cluster

Sieben Einzelleistungen werden zu drei Clustern gebündelt. Das ist die zentrale strukturelle Entscheidung.

| Cluster | Verspricht | Unterseiten |
|---|---|---|
| **Sichtbarkeit** | Außenwirkung und Marke | Website & Webdesign · Foto, Video & Schnitt · Social-Media-Management |
| **Software & Systeme** | Individuelle Lösungen | Individualsoftware · Wissenssysteme (RAG/DMS) · Voice Agents |
| **Automatisierung** | Prozesse und Daten | Prozessautomatisierung · KPI & Reporting · Integrationen & API |

Jedes Cluster erhält eine Übersichtsseite. Jede Unterseite erhält eine eigene Detailseite.

---

## 3. Informationsarchitektur & Routing

### Seitenbaum

```
/                                       Startseite
/leistungen/                            Übersicht aller drei Cluster
  /leistungen/sichtbarkeit/             Clusterseite
    /leistungen/website-webdesign/
    /leistungen/foto-video/
    /leistungen/social-media/
  /leistungen/software/                 Clusterseite
    /leistungen/individualsoftware/
    /leistungen/wissenssysteme/
    /leistungen/voice-agents/
  /leistungen/automatisierung/          Clusterseite
    /leistungen/prozessautomatisierung/
    /leistungen/reporting/
    /leistungen/integrationen/
/branchen/
  /branchen/medizin/
  /branchen/steuer-finanzberatung/
  /branchen/gastronomie/
  /branchen/mittelstand/
/projekte/                              filterbare Übersicht
  /projekte/[slug]/                     Einzelne Case Study
/datensicherheit/                       NEU — inhaltliche Datenschutzseite
/ueber-uns/                             Team, Prinzip, Programme
/kontakt/
/datenschutz/                           bestehend (rechtlich)
/impressum/                             bestehend
/en/                                    englische Spiegelstruktur
```

### Redirects (301, zwingend)

| Alt | Neu |
|---|---|
| `/index.html` | `/` |
| `/projekte.html` | `/projekte/` |
| `/datenschutz.html` | `/datenschutz/` |
| `/impressum.html` | `/impressum/` |
| `/#features` | `/leistungen/` |
| `/#usecases` | `/branchen/` |
| `/#integrations` | `/leistungen/integrationen/` |

Alte Anker-URLs sind extern verlinkt und in Suchindizes. Sie dürfen nicht ins Leere laufen.

### Umsetzungshinweis

Die Seite ist aktuell statisches HTML mit sehr viel Duplikation (Header, Footer, Trust-Bar in jeder Datei). Bei 20+ Seiten wird das unwartbar.

**Empfehlung:** Auf einen statischen Generator mit Partials umstellen (Eleventy oder Astro). Falls das nicht gewünscht ist, mindestens Header, Nav, Trust-Bar, Footer und CTA-Block als HTML-Partials auslagern und im Build injizieren. Kein Copy-Paste über 20 Dateien.

Wenn dieser Punkt eine Grundsatzentscheidung erfordert: **nachfragen, nicht selbst entscheiden.**

---

## 4. Navigation

### Desktop

Maximal fünf Punkte. Mehr kippt das Mega-Menü.

```
[Logo]   Leistungen ▾   Branchen ▾   Projekte   Über uns        DE|EN   [Kontakt]
```

**„Leistungen" öffnet ein Mega-Menü** mit drei Spalten (je ein Cluster). Pro Spalte: Cluster-Titel als Link, darunter die drei Unterseiten. Rechte Randspalte: ein Teaser auf die aktuellste Case Study.

**„Branchen" öffnet ein einfaches Dropdown** mit vier Einträgen.

`[Kontakt]` ist der einzige farblich abgesetzte Button in der Navigation.

### Mobil

Vollbild-Overlay, Cluster als Akkordeon aufklappbar. Sprachumschalter und Kontakt-Button unten fixiert. Kein horizontales Scrollen, keine Hover-abhängigen Interaktionen.

### Verhalten

- Aktiver Zustand: Cluster bleibt markiert, wenn man auf einer seiner Unterseiten ist.
- Sticky-Header ab 80 px Scroll, mit Hintergrund-Blur — Verhalten wie bisher.
- Tastaturbedienbar: Mega-Menü öffnet mit `Enter`/`Space`, schließt mit `Escape`, Fokusfalle innerhalb des Menüs.

---

## 5. Trust-Bar — Redesign

Dies ist der explizit angeforderte Umbau. Die aktuelle Umsetzung ist der textlastigste Abschnitt der gesamten Seite.

### Was falsch ist

1. Jedes der drei Programme hat einen vollständigen Absatz Fließtext (~25 Wörter). Niemand liest das.
2. Der Programmname steht dreimal pro Badge: in der Überschrift, im Fließtext und im „Verified"-Pill.
3. Die drei offiziellen Programme (NVIDIA, AWS, Microsoft) stehen gleichrangig neben einer reinen Textliste von Tech-Partnern (OpenAI, LangChain, Pinecone …). Das entwertet die Programme, die euer stärkstes Differenzierungsmerkmal gegenüber lokalen Agenturen sind.
4. Die Logos sind PNGs mit ungleichen Höhen und wahrscheinlich weißem Hintergrund — im Dark Mode problematisch.

### Neue Struktur: zwei getrennte Ebenen

#### Ebene A — Offizielle Programme

Position: unmittelbar unter dem Hero. Bleibt dort.

- **Eyebrow:** „Offizielle Programme" — 12 px, `letter-spacing: 0.09em`, gedämpfte Textfarbe, zentriert, 24 px Abstand nach unten.
- **Layout:** dreispaltiges Grid, `repeat(3, minmax(0, 1fr))`, vertikal zentriert. Zwischen den Spalten je eine 0.5 px Haarlinie als `border-left`/`border-right` an der mittleren Spalte. **Keine Karten, keine Rahmen um die einzelnen Items.**
- **Pro Item:**
  - Logo, optisch normiert auf 30 px Höhe in einem Flex-Container (`object-fit: contain`), Breite automatisch.
  - Darunter, 12 px Abstand: **maximal drei Wörter** Label mit vorangestelltem Häkchen-Icon (15 px, Akzentfarbe).
    - „Inception Member"
    - „Activate Startup"
    - „Founders Hub"
  - Kein Fließtext. Die vollständige Erläuterung wandert in `title` und `aria-label` des umschließenden Elements.
- **Ruhezustand:** `filter: grayscale(1); opacity: 0.55;`
- **Hover / Fokus:** `filter: grayscale(0); opacity: 1;` mit `transition: 200ms ease-out`. Bei `prefers-reduced-motion: reduce` ohne Transition, aber mit Zustandswechsel.
- **Verlinkung:** Jedes Item verlinkt auf die jeweilige offizielle Programmseite, `target="_blank" rel="noopener"`.

#### Ebene B — Technologie im Einsatz

Position: **nicht** neben Ebene A. Verschieben nach unten, direkt über den Footer oder auf `/leistungen/software/`.

- **Eyebrow:** „Technologie im Einsatz".
- **Layout:** horizontale Endlos-Laufschrift (Marquee). Zwei identische Tracks nebeneinander, `animation: scroll 40s linear infinite`, `translateX(-50%)`. Nahtlose Schleife.
- Logos monochrom, 20 px Höhe, `opacity: 0.4`. Kein Text.
- **Randabblendung:** `mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)`.
- **Pause on hover:** `animation-play-state: paused`.
- **`prefers-reduced-motion: reduce`:** Animation aus, stattdessen statischer, umbrechender Flex-Container.

### Dark Mode — kritisch

Die aktuellen PNGs funktionieren im Dark Mode nicht. `filter: brightness(0) invert(1)` zerstört das NVIDIA-Grün und die vierfarbigen Microsoft-Quadrate.

**Lösung:** pro Logo zwei Dateivarianten, Umschaltung über `<picture>`:

```html
<picture>
  <source srcset="/images/logos/nvidia-inception-light.svg"
          media="(prefers-color-scheme: dark)">
  <img src="/images/logos/nvidia-inception-dark.svg"
       alt="NVIDIA Inception" width="140" height="30" loading="lazy">
</picture>
```

### Benötigte Asset-Dateien

Bestehende PNGs durch SVG ersetzen. Falls SVG nicht verfügbar: PNG mit transparentem Hintergrund und mindestens 2× Auflösung.

```
/images/logos/nvidia-inception-{light,dark}.svg
/images/logos/aws-activate-{light,dark}.svg
/images/logos/microsoft-startups-{light,dark}.svg
/images/logos/stack/{anthropic,openai,supabase,n8n,qdrant,deepgram,aws,twilio,hetzner}.svg
```

**Wichtig:** Alle drei Programme haben verbindliche Markenrichtlinien zur Logo-Nutzung (Mindestabstände, keine Verzerrung, keine Einfärbung). Die Graustufen-Darstellung im Ruhezustand ist bei NVIDIA und Microsoft grenzwertig. **Vor dem Livegang prüfen** — im Zweifel Ruhezustand auf `opacity: 0.7` ohne Graustufenfilter setzen.

### Ersatzloses Streichen

- Alle Fließtextabsätze in der Trust-Bar.
- Die separaten „Verified"-Pills (redundant zum Häkchen im Label).
- Die reine Textliste der Tech-Partner (wird durch Ebene B ersetzt).
- LangChain und Pinecone aus der Liste, sofern nicht mehr im Einsatz — die aktuelle Liste widerspricht dem eigenen Stack (Qdrant statt Pinecone).

---

## 6. Startseite — Sektionsfolge

| # | Sektion | Neu / Bleibt | Inhalt |
|---|---|---|---|
| 1 | Hero | **Neu getextet** | Agentur-Klammer statt RAG-Botschaft. Zwei CTAs: „Kostenloses Erstgespräch" (primär), „Leistungen ansehen" (sekundär). Bestehende Animation bleibt. |
| 2 | Trust-Bar Ebene A | **Redesign** | Siehe § 5. |
| 3 | Das Problem | **Neu** | Drei Sätze über fünf Dienstleister, die nicht miteinander reden. Kein Feature-Talk. |
| 4 | Die drei Cluster | **Neu** | Drei große Karten, je drei Stichpunkte, Link ins Cluster. Ersetzt das bisherige Sechser-Feature-Grid. |
| 5 | Das AIVANCE-Prinzip | **Neu** | Datenschutz · Qualität · Geschwindigkeit als drei belegte Säulen. Siehe § 8. |
| 6 | Branchen-Selector | **Neu** | Vier Kacheln. Wichtigster Klick der Seite. |
| 7 | Referenzen | **Ausbauen** | Zwei bis drei echte Teaser mit Zahlen. Aktuell steht dort nur ein Link ohne Inhalt. |
| 8 | Ablauf | **Neu** | Erstgespräch → Digital-Audit → Umsetzung → Betreuung. Vier Schritte. Nimmt konservativen Branchen die Angst. |
| 9 | Team | Bleibt | Auf Deutsch übersetzen, Rollenbeschreibungen an die neue Struktur anpassen. |
| 10 | FAQ | **Neu getextet** | Agenturfragen statt reiner RAG-Fragen. Siehe § 10. |
| 11 | Trust-Bar Ebene B | **Neu positioniert** | Tech-Stack-Marquee. |
| 12 | Kontakt | **Anpassen** | Branchen-Dropdown korrigieren (siehe Bugfix B5). |

### Entfernen von der Startseite

- **„Control Center / One dashboard"** — produktspezifisch, gehört auf `/leistungen/wissenssysteme/`. Für eine Agenturstartseite verwirrend.
- **„Powerful integrations, effortless setup"** — der komplette Integrationsblock inklusive Code-Beispiel gehört auf `/leistungen/integrationen/`.

Beide Sektionen sind gut gebaut. Sie werden nicht gelöscht, sondern verschoben.

---

## 7. Seiten-Templates

Vier Templates decken alle neuen Seiten ab.

### T1 — Clusterseite (`/leistungen/[cluster]/`)

1. Hero (kompakt): Cluster-Titel, ein Satz Versprechen.
2. Drei Leistungskarten mit Link auf die Detailseiten.
3. „Warum aus einer Hand" — Absatz über die Verzahnung mit den anderen zwei Clustern.
4. Referenzen, gefiltert auf dieses Cluster.
5. Leitplanken-Streifen (kompakte Variante).
6. CTA-Block.

### T2 — Leistungsdetailseite (`/leistungen/[leistung]/`)

1. Hero (kompakt).
2. „Für wen das ist" — drei Bullet-Punkte.
3. Leistungsumfang — konkrete Liste, keine Adjektive.
4. Ablauf und Zeitrahmen — die „Geschwindigkeit"-Leitplanke wird hier konkret.
5. Eine Referenz zu genau dieser Leistung.
6. Zwei bis drei FAQ, spezifisch für diese Leistung (dient dem Rich Snippet).
7. Querverweise: „Wird oft kombiniert mit …" (zwei bis drei andere Leistungen).
8. CTA-Block.

### T3 — Branchenseite (`/branchen/[branche]/`)

Das wichtigste Template. Nur Sektion 3 unterscheidet sich strukturell zwischen den Branchen.

1. Hero: „Digitalisierung für [Branche]".
2. **Branchenspezifische Schmerzpunkte** — drei bis vier, in der Sprache der Branche. Nicht „Prozessineffizienz", sondern „Rezeption nimmt Terminanfragen zwischen zwei Patienten an".
3. **Rechtsrahmen-Block** — der wichtigste Absatz der Seite:
   - Medizin: § 203 StGB (Schweigepflicht), Anforderungen an Auftragsverarbeiter, DSGVO Art. 9 (Gesundheitsdaten).
   - Steuer- & Finanzberatung: § 62 StBerG, § 203 StGB Abs. 1 Nr. 3, DSGVO.
   - Gastronomie: DSGVO bei Reservierungs- und Gästedaten, Kassensicherungsverordnung wo relevant.
   - Mittelstand: DSGVO, branchenüblich.
4. **Ausgewählte Leistungen** — nur die drei bis vier für diese Branche relevanten. **Nie alle sieben.**
5. Referenz aus dieser Branche.
6. Branchenspezifische FAQ.
7. CTA-Block.

**Rechtlicher Hinweis für die Umsetzung:** Der Rechtsrahmen-Block beschreibt, welche technischen und vertraglichen Maßnahmen AIVANCE trifft. Er ist keine Rechtsberatung und darf nicht als solche formuliert werden. Formulierung: „Wir stellen sicher, dass …", nicht „Sie müssen …". Vor Livegang anwaltlich prüfen lassen.

### T4 — Projektseite (`/projekte/[slug]/`)

Struktur der bestehenden Case Studies auf `projekte.html` ist gut und wird als Vorlage übernommen: Ausgangslage → Lösung → „Was wir gebaut haben" → Tech-Tags → Messbare Ergebnisse → Zitat.

Neu hinzu: Tags für **Branche** und **Leistungscluster** im Frontmatter, damit die Übersichtsseite filtern kann.

---

## 8. Die drei Leitplanken belegbar machen

Als Behauptung sind die Begriffe wertlos. Als Beweis sind sie das Verkaufsargument.

### Datenschutz — eigene Seite `/datensicherheit/`

Getrennt von der rechtlichen Datenschutzerklärung. Inhalt:

- Hosting-Standorte namentlich mit Region (Hetzner Deutschland, AWS `eu-central-1`).
- AVV-Muster nach Art. 28 DSGVO als PDF-Download.
- TOMs nach Art. 32 DSGVO — als aufklappbare Liste, nicht als PDF-Wall.
- „Keine Modelltrainings auf Kundendaten" — mit Nennung der konkreten Anbieterklauseln, die das garantieren.
- Löschkonzept und Aufbewahrungsfristen.
- Ansprechpartner für Datenschutz.
- **Berufsgeheimnisträger-Abschnitt:** Ärzte (§ 203 StGB) und Steuerberater (§ 62 StBerG) dürfen Dienstleister nur unter erweiterten Bedingungen einbinden. Wer das nachweisbar adressiert statt nur „DSGVO-konform" zu schreiben, gewinnt das Gespräch vor dem ersten Call. Keine Agentur vergleichbarer Größe macht das.

Diese Seite wird aus dem Footer, aus jedem Leitplanken-Streifen und aus jeder Branchenseite verlinkt.

### Qualität — messbar statt adjektivisch

- Referenzen mit Vorher-/Nachher-Zahlen (existieren bereits, gut).
- Definierter Prozess mit benannten Phasen.
- SLA und Reaktionszeiten, konkret in Stunden.
- Benannte Ansprechpartner statt „unser Team".

### Geschwindigkeit — Sprint-Modell pro Leistung

„Live in 2–4 Wochen" und „Ø 17 Tage bis Go-Live" sind stark und bleiben. Aber sie gelten aktuell nur für RAG-Systeme. Jede Leistungsdetailseite bekommt einen eigenen, ehrlichen Zeitrahmen. Eine Website ist nicht in 17 Tagen live, wenn der Kunde Inhalte liefern muss — das offen zu sagen, ist glaubwürdiger als eine Pauschalzahl.

### Leitplanken-Streifen als Komponente

Kompakte dreispaltige Komponente, die auf jeder Cluster-, Leistungs- und Branchenseite eingebunden wird. Drei Icons, drei Kurzlabels, Link auf `/datensicherheit/` bzw. den jeweiligen Beleg.

---

## 9. Bugfixes — vor allem anderen erledigen

### B1 — ISO 27001 und SOC 2 Badges entfernen (kritisch)

In der Features-Sektion, Karte „Data Privacy", stehen die Badges `GDPR`, `ISO 27001`, `SOC 2`.

**Wenn AIVANCE nicht auditiert und zertifiziert ist, ist das ein Verstoß gegen § 5 UWG und abmahnfähig.** Ausgerechnet im Vertrauensthema, gegenüber einer Zielgruppe, die genau darauf achtet.

Ersetzen durch belegbare Aussagen:
- „AVV nach Art. 28 DSGVO"
- „TOMs nach Art. 32 DSGVO"
- „Hosting in der EU"

**Vor Umsetzung beim Auftraggeber rückfragen**, ob eine Zertifizierung vorliegt. Nicht selbst entscheiden.

### B2 — Nullwerte auf der Projektseite

`projekte.html` zeigt „**0** Abgeschlossene Projekte" und „**0%** Zufrieden". Der Counter animiert offenbar per JS von 0 hoch und hat keinen serverseitigen Startwert.

Fix: Zielwert im HTML als Textinhalt setzen, JS animiert von dort aus oder überschreibt. Ohne JS, im Crawler und in Link-Previews muss die echte Zahl stehen.

Gleichzeitig: Der Wert „0 abgeschlossene Projekte" ist auch inhaltlich zu prüfen — es werden auf derselben Seite zwei abgeschlossene Projekte gezeigt.

### B3 — Copyright-Jahre

`index.html` zeigt „© 2025", `projekte.html` zeigt „© 2024". Beides auf das aktuelle Jahr, dynamisch generiert.

### B4 — Sprache

Startseite komplett Englisch, Projektseite Deutsch. Für die Zielgruppe (Ärzte, Steuerberater, Gastronomen im Rhein-Main-Gebiet) ist Englisch ein Conversion- und SEO-Killer.

Deutsch als Default unter `/`, Englisch unter `/en/`, `hreflang`-Tags in beide Richtungen, `<html lang="de">` korrekt setzen.

### B5 — Kontaktformular

Das Branchen-Dropdown enthält „Legal & Compliance", „E-Commerce", „Real Estate", „Manufacturing" — aber **weder Gastronomie noch Medizin**, also zwei der drei Kernbranchen.

Neue Optionen: Medizin & Gesundheitswesen · Steuer- & Finanzberatung · Gastronomie · Handwerk & Mittelstand · Sonstiges.

Zusätzlich ein Feld „Was interessiert Sie?" mit den drei Clustern als Auswahl — das qualifiziert Leads vor dem Erstgespräch.

### B6 — Leere Referenzen-Sektion

Die Sektion „Echte Ergebnisse für echte Unternehmen" auf der Startseite enthält außer der Überschrift und einem Link keinen Inhalt. Entweder mit Teaser-Karten füllen oder bis dahin ausblenden.

---

## 10. Texte und Tonalität

### Grundregeln

- **Deutsch, Sie-Form.** Die Zielgruppe ist konservativ.
- **Keine Anglizismen ohne Not.** „Wissenssystem" statt „Knowledge Engine". Wo der englische Begriff etabliert ist (Voice Agent, Social Media), bleibt er.
- **Keine Adjektive ohne Beleg.** Nicht „hochmodern", „innovativ", „nahtlos", „ganzheitlich". Stattdessen Zahlen, Zeiträume, konkrete Vorgänge.
- **Aktiv, Verb zuerst.** „Wir bauen …" statt „Es wird gebaut …".
- **Ein Gedanke pro Absatz.** Maximal drei Sätze.
- **Zielgruppensprache statt Systemsprache.** Nicht „Dokumentenklassifikation via OCR-Pipeline", sondern „Eingehende Post landet automatisch im richtigen Mandantenordner".

### FAQ — neue Fragen

Die bestehenden fünf Fragen sind alle RAG-spezifisch und passen nicht mehr. Neu:

1. Was macht AIVANCE genau — Agentur oder Softwareanbieter?
2. Warum sollte ich Website, Fotografie und Automatisierung bei einem Anbieter beauftragen?
3. Was kostet ein Projekt bei Ihnen?
4. Wie lange dauert die Umsetzung?
5. Wo liegen meine Daten und wer hat Zugriff darauf?
6. Arbeiten Sie auch mit Berufsgeheimnisträgern (Ärzte, Steuerberater)?
7. Was passiert nach dem Go-Live?

Die bisherigen RAG-Fragen wandern auf `/leistungen/wissenssysteme/`.

Frage 3 nicht ausweichen. „Auf Anfrage" ist die häufigste Absprungursache auf Agenturseiten. Mindestens eine Größenordnung nennen („Projekte starten typischerweise ab …").

---

## 11. SEO

### Meta-Angaben pro Seitentyp

| Seite | Title (≤ 60 Zeichen) | Description (≤ 155 Zeichen) |
|---|---|---|
| Startseite | AIVANCE — Digitalisierungsagentur Rhein-Main | Website, Foto & Video, Software und Automatisierung aus einer Hand. DSGVO-konform, für Praxen, Kanzleien und Gastronomie. |
| Cluster | [Cluster] — AIVANCE | Ein Satz Cluster-Versprechen plus Region. |
| Leistung | [Leistung] für Unternehmen — AIVANCE | Konkrete Leistung, Zielgruppe, Zeitrahmen. |
| Branche | Digitalisierung für [Branche] — AIVANCE | Branchenschmerz plus Rechtsrahmen plus Region. |
| Projekt | [Kunde/Branche]: [Ergebnis] — AIVANCE | Ergebniszahl in der Description. |

Die aktuellen Meta-Angaben beschreiben ausschließlich RAG und Voice Agents und müssen vollständig ersetzt werden.

### Strukturierte Daten (JSON-LD)

- Global: `Organization` mit `logo`, `sameAs`, `address`, `contactPoint`.
- Leistungsseiten: `Service` mit `provider`, `areaServed`, `serviceType`.
- Branchenseiten: `Service` mit `audience`.
- Projektseiten: `CreativeWork` oder `Article`.
- FAQ-Blöcke: `FAQPage`.
- Startseite: `BreadcrumbList` auf allen Unterseiten.

### Lokales SEO

Region ist Rhein-Main / Bergstraße / Rhein-Neckar. Der Ortsbezug gehört in H1 oder H2 der Branchenseiten, nicht nur ins Impressum. Google Business Profile anlegen, falls nicht vorhanden.

### Keyword-Matrix

Die Kombination Leistung × Branche ist der eigentliche Traffic-Hebel („Website für Zahnarztpraxis Darmstadt", „Automatisierung Steuerkanzlei"). **Aber:** nicht mit 36 Landingpages starten. Erst eine Kombination bauen, wenn dafür eine echte Referenz existiert. Leere Landingpages ohne Substanz schaden mehr, als sie nutzen.

### Technisch

- `sitemap.xml` automatisch generieren.
- `robots.txt` prüfen.
- Canonical-Tags auf jeder Seite.
- Bilder mit sprechenden Dateinamen und `alt`-Texten.

---

## 12. Technische Anforderungen

### Performance-Budget

| Metrik | Ziel |
|---|---|
| LCP | < 2,0 s |
| CLS | < 0,05 |
| INP | < 200 ms |
| JS gesamt (gzip) | < 120 kB |
| Bild größtes Element | < 200 kB |

Konkrete Maßnahmen:
- Alle Bilder als WebP mit `<picture>`-Fallback, `width`/`height` gesetzt (verhindert CLS), `loading="lazy"` außer im Hero.
- Foto/Video-Portfolio: Thumbnails, Vollbild erst bei Klick. Videos niemals mit `autoplay` und ohne `preload="none"`.
- Fonts selbst hosten, `font-display: swap`, nur die tatsächlich genutzten Schnitte.
- Keine Framework-Abhängigkeit für Animationen, die CSS lösen kann.

Das ist keine Kosmetik: „Geschwindigkeit" steht als eine von drei Leitplanken auf der Seite. Eine langsame Website macht dieses Versprechen unglaubwürdig.

### Barrierefreiheit (Mindeststandard)

- Kontrast mindestens 4.5:1 für Fließtext, 3:1 für große Schrift.
- Sichtbarer Fokusring auf allen interaktiven Elementen — nicht `outline: none`.
- Mega-Menü und mobile Navigation vollständig tastaturbedienbar.
- `prefers-reduced-motion: reduce` respektieren — betrifft Trust-Bar-Marquee, Zähler-Animationen, Scroll-Reveals.
- Semantisches HTML: eine `<h1>` pro Seite, korrekte Überschriftenhierarchie, `<nav>`, `<main>`, `<footer>`.
- Formularfelder mit `<label>`, Fehlermeldungen mit `aria-live`.

### Neuer Seitentyp: Foto/Video-Portfolio

Existiert noch nicht und lässt sich mit dem aktuellen Textkarten-Format nicht abbilden.

- Masonry- oder gleichhohes Raster.
- Lightbox bei Klick, tastaturbedienbar (`Escape` schließt, Pfeiltasten navigieren).
- Showreel als Video oben, `preload="none"`, Poster-Bild, kein Autoplay mit Ton.
- Filter nach Branche.

Ohne sichtbare Beispiele verkauft sich diese Abteilung nicht.

---

## 13. Umsetzung in Phasen

### Phase 1 — Fundament (zuerst, blockierend)

- Bugfixes B1–B6.
- Deutsch als Primärsprache, `hreflang` einrichten.
- Umstellung auf Partials oder statischen Generator (§ 3).
- Redirects.

### Phase 2 — Struktur

- Neue Navigation inklusive Mega-Menü.
- Trust-Bar-Redesign (§ 5).
- Startseite nach neuer Sektionsfolge (§ 6).
- Drei Clusterseiten (T1).
- `/datensicherheit/`.

### Phase 3 — Tiefe

- Neun Leistungsdetailseiten (T2).
- Vier Branchenseiten (T3).
- Projektübersicht mit Filter, bestehende Cases migrieren (T4).
- Foto/Video-Portfolio.

### Phase 4 — Ausbau

- Englische Spiegelstruktur unter `/en/`.
- Keyword-Landingpages Leistung × Branche, sobald Referenzen vorliegen.
- Blog/Wissensbereich für die Content-Strategie.

---

## 14. Definition of Done

Vor dem Livegang muss jeder Punkt erfüllt sein:

- [ ] Keine unbelegten Zertifizierungsangaben auf der gesamten Seite.
- [ ] Keine Nullwerte, keine Platzhaltertexte, keine falschen Jahreszahlen.
- [ ] Jede Seite hat genau eine `<h1>`, eigenen Title und eigene Description.
- [ ] `hreflang` in beide Richtungen korrekt gesetzt, `<html lang>` stimmt.
- [ ] Alle alten URLs leiten per 301 weiter, keine 404 aus dem alten Index.
- [ ] Trust-Bar funktioniert in Light und Dark Mode ohne sichtbare Logo-Artefakte.
- [ ] Mega-Menü und mobile Navigation vollständig tastaturbedienbar.
- [ ] `prefers-reduced-motion` respektiert.
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO = 100 (mobil).
- [ ] Kontaktformular versendet korrekt, alle Branchen im Dropdown vorhanden.
- [ ] Auf keiner Seite steht eine Aufzählung aller sieben Leistungen im Fließtext.
- [ ] Datenschutzerklärung und Impressum an die neue Struktur angepasst.
- [ ] `/datensicherheit/` und Rechtsrahmen-Blöcke anwaltlich geprüft.

---

## 15. Offene Punkte — Rückfrage erforderlich

Diese Punkte darf Claude Code nicht selbst entscheiden:

1. **Zertifizierungen:** Liegt eine ISO-27001- oder SOC-2-Zertifizierung vor? (Bugfix B1)
2. **Technologie-Entscheidung:** Umstieg auf statischen Generator (Eleventy/Astro) oder Partials im bestehenden Setup? (§ 3)
3. **Preistransparenz:** Soll eine Preisgrößenordnung genannt werden, und wenn ja, welche? (§ 10, FAQ 3)
4. **Referenzen:** Gibt es Kundenfreigaben für namentliche Nennung, oder bleiben alle Cases anonym?
5. **Logo-Assets:** Liegen SVG-Varianten der Programm-Logos vor, oder müssen sie beschafft werden? (§ 5)
6. **Rechtsrahmen-Texte:** Wer prüft die Aussagen zu § 203 StGB und § 62 StBerG vor Livegang?
7. **Foto/Video-Material:** Existiert Portfolio-Material zum Zeigen, oder muss die Abteilung zunächst ohne Beispiele auskommen?