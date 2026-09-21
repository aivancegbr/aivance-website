# „ask echo" — was im ElevenLabs-Dashboard noch fehlt

Das Fragefenster unten rechts ist gebaut, geprüft und läuft über **denselben
Agenten wie die Live-Demo** auf der Produktseite
(`agent_5801m32bpsx2e8er9e0mhd47aqd9`). Damit er dort Telefonzentrale bleibt
und hier über aivance spricht, überschreibt die Website seine Systemanweisung
beim Verbinden — derselbe Mechanismus, über den auch die englische Sprache
umgeschaltet wird. Die Anweisung steht in `src/_data/askEcho.js`.

Dafür fehlen drei Freigaben. Nachgemessen am Websocket-Verkehr erlaubt der
Agent heute nur `language`; alles andere weist die Gegenstelle sofort ab.

## Agent → Security

- [ ] **Override `prompt` erlauben.**
      Sonst: `1008 — Override for field 'prompt' is not allowed by config.`
      Folge: Echo antwortet auf der Website als Empfangs-Persona.
- [ ] **Override `first_message` erlauben.**
      Sonst: `1008 — Override for field 'first_message' is not allowed by config.`
      Folge: Er begrüßt mit „Echo am Apparat" statt zu fragen, was man wissen will.
- [ ] **Override `text_only` erlauben.**
      Sonst: `1008 — Override for field 'text_only' is not allowed by config.`
      Folge: Tippen ist unmöglich, nur Sprechen geht. Das SDK meldet den
      Textmodus immer als Override an, umgehen lässt sich das nicht.

Danach ist nichts weiter zu tun — die Agent-ID steht schon in
`src/_data/askEcho.js`, das Fenster erscheint auf allen Seiten außer
`/produkte/echo/` und `/en/produkte/echo/`, wo die Live-Demo schon im Text steht.

## Der Preis dieser Bequemlichkeit

Ein öffentlich erreichbarer Agent, der Prompt-Überschreibungen zulässt, lässt
sich von jedem, der die ID im Quelltext liest, mit eigener Anweisung fahren —
auf Ihre Rechnung und unter Ihrem Namen. Die Hostname-Allowlist auf
`ai-vance.de` bremst normale Browser, ist aber keine harte Grenze: Sie stützt
sich auf einen Header, den ein Skript außerhalb des Browsers frei setzt.

Wer das nicht will, nimmt den Weg unten. Der Code trägt beides.

## Alternative: eigener Agent

Zweiten Agenten anlegen, `prompt` und `firstMessage` in
`src/_data/askEcho.js` **leeren** und nur die `agentId` austauschen. Dann bleibt
beim Demo-Agenten alles zu, und der neue Agent braucht nur `language` und
`text_only`.

- **Name:** aivance — ask echo
- **Systemanweisung:** der Text aus `prompt.de` in `src/_data/askEcho.js`
  (englische Fassung darunter als `language_preset`)
- **Erste Nachricht:** leer lassen
- **Wissensbasis:** `https://ai-vance.de/` und die Produktseiten einlesen —
  dann bleibt der Agent automatisch auf dem Stand der Seite. Das kann die
  Überschreibungs-Variante nicht, dort weiß er nur, was in der Anweisung steht.
- **Security:** öffentlich (`enable_auth: false`), Hostname-Allowlist auf
  `ai-vance.de`, Overrides `language` und `text_only`, keine Tools,
  Gesprächsdauer deckeln (in der Demo: 300 s)
