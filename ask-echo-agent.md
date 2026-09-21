# „ask echo" — Agentenkonfiguration und die Lücke, die zu schließen ist

## Stand heute (live, funktioniert, aber offen)

Das Fragefenster läuft über **denselben Agenten wie die Live-Demo**
(`agent_5801m32bpsx2e8er9e0mhd47aqd9`). Damit er auf der Produktseite
Telefonzentrale bleibt und im Fenster über aivance spricht, überschreibt die
Website seine Systemanweisung beim Verbinden. Dafür sind im Dashboard die
Overrides `prompt`, `first_message`, `text_only` und `language` freigegeben.

Das funktioniert — und ist zugleich das Problem.

## Die Lücke

Zwei Schichten, die auseinanderzuhalten sind.

**Schicht 1 — der Agent ist öffentlich.** `enable_auth: false` ist bei einer
statischen Seite auf GitHub Pages unvermeidlich: Es gibt keinen Server, der ein
Conversation-Token ausstellen könnte, und ein API-Schlüssel darf nicht in den
Quelltext. Die Hostname-Allowlist ist **keine** Sicherheitsgrenze, sondern eine
Bequemlichkeitsschranke — sie prüft den `Origin`-Header, und den setzt ein
Skript außerhalb des Browsers frei. Vorgeführt am 21.09.2026: Ein Node-Skript
mit `Origin: https://ai-vance.de` kam ohne weiteres durch, obwohl es von
127.0.0.1 lief.

**Schicht 2 — der Prompt ist überschreibbar.** Das ist die eigentliche Lücke.
Solange nur `language` freigegeben war, konnte ein Fremder mit der Agent-ID
höchstens ein Gespräch mit einer Empfangs-Persona führen: Credits weg, sonst
nichts. Mit freigegebenem `prompt` ist der Agent ein beliebiges Sprachmodell
mit Sprachausgabe, abgerechnet über das aivance-Konto. Das ist attraktiv genug,
dass es jemand tut, der die ID im Quelltext findet. Dazu kommt der Rufschaden:
Man kann „den Agenten von aivance" beliebige Dinge sagen lassen und das
mitschneiden.

Schicht 1 lässt sich ohne Server nicht schließen. **Schicht 2 schon** — und
zwar vollständig, indem die Anweisung im Agenten steht statt in der Website.

## Der Zielzustand

Zwei Agenten, keiner von beiden mit überschreibbarem Prompt.

| | Demo-Agent (bestehend) | ask-echo-Agent (neu) |
|---|---|---|
| Rolle | Empfang, auf `/produkte/echo/` | Auskunft über aivance |
| Systemanweisung | im Agenten | im Agenten |
| Begrüßung | im Agenten, klein geschrieben | leer |
| Erlaubte Overrides | `language` | `language`, `text_only` |
| Website sendet | nur `language` | nur `language` |

Danach kann ein Fremder mit einer der beiden IDs nur noch genau das tun, wofür
der Agent gebaut ist. Credits kosten kann er weiterhin — das ist Schicht 1 —,
aber er kann den Agenten nicht umwidmen und ihm nichts in den Mund legen.

## Schritt 1 — neuen Agenten anlegen

ElevenLabs → Conversational AI → Create Agent.

- **Name:** aivance — ask echo
- **Systemanweisung:** wörtlich der Text aus `prompt.de` in
  `src/_data/askEcho.js`
- **Sprachen:** Deutsch als Grundsprache, Englisch als `language_preset` mit
  dem Text aus `prompt.en`
- **Erste Nachricht:** leer lassen. Im Textfenster stünde sie sonst als
  Begrüßung da, bevor überhaupt jemand gefragt hat.
- **Wissensbasis:** `https://ai-vance.de/` und die Produktseiten einlesen.
  Damit bleibt der Agent automatisch auf dem Stand der Seite — das kann die
  heutige Überschreibungs-Lösung nicht, dort weiß er nur, was in der Anweisung
  steht.
- **Stimme:** wie beim Demo-Agenten
- **Security:** `enable_auth: false`, Allowlist `ai-vance.de` und
  `www.ai-vance.de`, Gesprächsdauer deckeln (Demo: 300 s), **keine Tools**.
  Overrides: **nur** `language` und `text_only`.
  `prompt` und `first_message` bleiben zu.

## Schritt 2 — Demo-Agenten wieder zumachen

Am bestehenden Agenten:

- **Begrüßung im Agenten** auf die kleine Schreibweise ändern:
  `aivance, Echo am Apparat. Was kann ich für Sie tun?`
  (englisches Preset: `aivance, Echo speaking. How can I help you?`)
  Heute setzt die Website das per Override — nach diesem Schritt nicht mehr.
- **Overrides `prompt`, `first_message` und `text_only` wieder abschalten.**
  Übrig bleibt `language`.

## Schritt 3 — Website umstellen

Drei kleine Änderungen, die ich mache, sobald Schritt 1 und 2 stehen:

- `src/_data/askEcho.js`: neue `agentId` eintragen, `prompt` und
  `firstMessage` leeren
- `src/_data/echoDemo.js`: `firstMessage` entfernen
- `src/_includes/partials/echo-demo.njk` und `src/js/echo-demo.js`: den
  `first_message`-Override wieder ausbauen

Der Code trägt beide Wege schon: Sind `prompt` und `firstMessage` leer, sendet
die Website nur noch `language`.

## Was danach immer noch offen bleibt

Schicht 1. Wer eine der Agent-IDs kennt, kann Gespräche führen und Credits
verbrauchen. Dagegen hilft nur eines: ein Endpunkt, der den API-Schlüssel
serverseitig hält und signierte Conversation-Tokens ausstellt — eine
Cloudflare- oder Netlify-Funktion genügt, die Seite selbst bliebe statisch.
Das ist ein eigener Umbau und keine Dashboard-Einstellung.

Bis dahin: Nutzungsgrenze im ElevenLabs-Konto setzen, damit ein Missbrauch
gedeckelt ist statt unbemerkt zu laufen.
