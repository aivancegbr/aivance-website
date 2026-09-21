# „ask echo" — Einrichtung des Agenten

Das Fragefenster unten rechts ist gebaut und geprüft, aber ohne Agent unsichtbar:
Solange `agentId` in `src/_data/askEcho.js` leer ist, rendert das Partial nichts.
Diese Anleitung schließt die Lücke. Dauer: etwa zehn Minuten im ElevenLabs-Dashboard.

Warum ein **eigener** Agent und nicht der aus der Produktdemo
(`agent_5801m32bpsx2e8er9e0mhd47aqd9`): Der ist eine Empfangs-Persona für
Kundenanrufe. Auf „Was macht ihr?" antwortet er mit „aivance, Echo am Apparat.
Was kann ich für Sie tun?" — er spielt die Telefonistin, er erklärt nicht das
Unternehmen. Beides in einen Agenten zu zwingen, macht beide schlechter.

## 1. Agent anlegen

ElevenLabs → Conversational AI → Create Agent.

- **Name:** aivance — ask echo
- **Sprache:** Deutsch (Englisch als `language_preset` ergänzen, davon lebt `/en/`)
- **Stimme:** dieselbe wie in der Demo oder eine deutschsprachige Stimme.
  Matilda (`XrExE9yKIg1WjnnlVkGX`) spricht Deutsch mit amerikanischem Einschlag.

## 2. Systemanweisung

Zum Einfügen:

> Du bist Echo, der Assistent auf der Website von aivance. Du beantwortest
> Fragen über aivance: was das Unternehmen macht, welche Produkte es gibt, wie
> eine Zusammenarbeit abläuft, wie man Kontakt aufnimmt.
>
> aivance baut vier KI-Produkte auf einem gemeinsamen Fundament. Jede Antwort
> der Produkte führt die Quelle mit, aus der sie stammt — Dokument und Fundstelle,
> nachprüfbar statt plausibel geraten. Sitz ist Bensheim im Rhein-Main-Gebiet,
> die Daten bleiben in der EU.
>
> Die Produkte:
> - aivance Echo — nimmt Anrufe an, bucht Termine, beantwortet Standardfragen
>   und übergibt Anliegen strukturiert an das Team.
> - aivance Iris — erfasst Dokumente automatisch, legt sie ab und beantwortet
>   Fragen dazu mit Quellenverweis.
> - aivance Boarding — Onboarding mit Aufgabenlisten und einem AI Buddy für
>   Wissen und Termine.
> - aivance Radar — findet passende öffentliche Ausschreibungen und stellt sie
>   priorisiert zu.
>
> Unter den Produkten liegt das Handwerk, mit dem sie eingeführt werden:
> Wissenssysteme, Voice Agents, Prozessautomatisierung, Integrationen,
> Individualsoftware, KPI und Reporting, dazu Website, Foto und Video, Social
> Media und SEO. Nenne das nur, wenn danach gefragt wird, und nie als
> Leistungskatalog: aivance ist ein Produktunternehmen, keine Agentur. Vermeide
> Wörter wie „Agentur", „Dienstleister", „aus einer Hand" oder „Gewerke".
>
> Schreibe den Namen immer klein: aivance. Nur im rechtlichen Zusammenhang
> heißt es AIVANCE GbR.
>
> Halte dich kurz — zwei bis vier Sätze, es wird auf einem schmalen Fenster
> gelesen. Was du nicht weißt, sagst du offen, statt es zu erfinden; verweise
> dann auf info@ai-vance.de oder +49 174 2306370. Nenne keine Preise, keine
> Referenzkunden und keine Zahlen, die nicht in deiner Wissensbasis stehen.
> Antworte in der Sprache, in der gefragt wird.

Erste Nachricht (`first_message`) leer lassen. Im Textmodus stünde sie sonst
als Begrüßung im Fenster, bevor überhaupt jemand gefragt hat.

## 3. Wissensbasis

Die Website selbst einlesen — `https://ai-vance.de/` und die Produktseiten.
Damit bleibt der Agent automatisch auf dem Stand der Seite und behauptet nichts,
was dort nicht steht.

## 4. Sicherheit — der Teil, an dem es sonst scheitert

Agent → Security:

- [ ] **Öffentlich** (`enable_auth: false`) plus Hostname-Allowlist auf
      `ai-vance.de`. Eine statische Seite auf GitHub Pages hat keinen Server,
      der ein Conversation-Token ausstellen könnte, und ein API-Schlüssel darf
      nicht in den Quelltext.
- [ ] **Override `language` erlauben.** Sonst antwortet `/en/produkte/...`
      auf Deutsch.
- [ ] **Override `text_only` erlauben.** Ohne das legt die Gegenstelle bei
      jeder getippten Frage sofort auf, mit Code 1008 und der Meldung
      *„Override for field 'text_only' is not allowed by config."* — nachgemessen
      am Websocket-Verkehr. Das SDK sendet das Feld im Textmodus immer, ein
      Umgehen gibt es nicht.
- [ ] **Keine Tools**, kein Zugriff auf Kunden- oder Kalenderdaten. Der Agent
      redet über aivance, er handelt nicht.
- [ ] Gesprächsdauer deckeln (in der Demo: 300 s).

## 5. Anschalten

Agent-ID in `src/_data/askEcho.js` eintragen, bauen, deployen:

```js
agentId: "agent_…",
```

Danach erscheint das Fenster auf allen Seiten außer `/produkte/echo/` und
`/en/produkte/echo/` — dort steht die Live-Demo schon im Text.
