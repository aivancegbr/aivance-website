# „ask echo" — ein Agent, und die Lücke, die zu schließen ist

## Die Lücke

Der Agent `agent_5801m32bpsx2e8er9e0mhd47aqd9` ist öffentlich erreichbar. Das ist bei einer
statischen Seite auf GitHub Pages unvermeidlich: Es gibt keinen Server, der ein
Conversation-Token ausstellen könnte, und ein API-Schlüssel darf nicht in den
Quelltext. Die Hostname-Allowlist ist **keine** Sicherheitsgrenze — sie prüft den
`Origin`-Header, und den setzt ein Skript außerhalb des Browsers frei.
Nachgewiesen am 21.09.2026: Ein Node-Skript mit `Origin: https://ai-vance.de` kam
von 127.0.0.1 ohne weiteres durch.

Damit kann jeder, der die ID im Quelltext liest, Gespräche führen und Credits
verbrauchen. Das ist hinnehmbar und nur mit einem eigenen Server zu ändern.

**Nicht hinnehmbar ist die zweite Schicht:** Solange der Override `prompt`
freigegeben ist, kann derselbe Fremde die Systemanweisung ersetzen. Aus dem
Agenten wird dann ein beliebiges Sprachmodell mit Sprachausgabe auf fremde
Rechnung — und man kann dem Agenten von aivance beliebige Sätze in den Mund legen
und das mitschneiden. Das ist ein Unterschied in der Art, nicht im Grad.

## Warum ein Agent genügt

Echo spielt keine zwei Rollen. Auf der Produktseite meldet er sich als Empfang
von aivance — am eigenen Beispiel vorgeführt. Im Fragefenster ist er der Assistent
von aivance. Dieselbe Rolle, zwei Fenster. Eine Anweisung deckt beides ab; getestet
am laufenden Agenten mit Website-Fragen und mit Termin- und Rückrufwünschen.

Damit entfällt der Grund, warum die Website den Prompt überhaupt überschreibt.

## Zielzustand

| Override | danach | warum |
|---|---|---|
| `prompt` | **AUS** | die eigentliche Lücke |
| `first_message` | AN | siehe unten |
| `text_only` | AN | wählt nur den Textmodus, keine Angriffsfläche |
| `language` | AN | trägt die englische Fassung |

`first_message` bleibt bewusst offen. Nachgemessen: Der Agent schickt seine
Begrüßung auch im Textmodus. Ohne den Override stünde sie im Fragefenster **nach**
der ersten Frage — erst die Frage, dann „Was kann ich für Sie tun?", dann die
Antwort. Ein Fremder gewinnt damit einen einzigen Satz in seiner eigenen Sitzung,
mehr nicht; alles danach gibt die Anweisung vor. Das ist eine Abwägung, keine
Notwendigkeit — soll auch dieser Schalter zu, baue ich die Begrüßung im
Textfenster stattdessen im Code weg.

## Schritt 1 — Anweisung in den Agenten

Agent `agent_5801m32bpsx2e8er9e0mhd47aqd9` → System prompt. Den Text unten **vollständig**
einsetzen und den bisherigen ersetzen.

<details>
<summary>Deutsch (Grundsprache)</summary>

```
Du bist Echo, der Assistent von aivance. Du begegnest Besuchern an zwei Stellen und verhältst dich an beiden gleich: im Fragefenster der Website und in der Vorführung auf der Produktseite, wo du zugleich zeigst, was Echo am Telefon kann. Du beantwortest Fragen über aivance — was das Unternehmen macht, welche Produkte es gibt, wie eine Zusammenarbeit abläuft, wie man Kontakt aufnimmt. Will jemand einen Termin, einen Rückruf oder das Team sprechen, nimmst du das auf wie am Empfang: Anliegen, Name, Erreichbarkeit — und sagst zu, dass sich jemand meldet. Du bist nicht die Telefonzentrale einer fremden Firma.

aivance baut vier KI-Produkte auf einem gemeinsamen Fundament. Jede Antwort der Produkte führt die Quelle mit, aus der sie stammt — Dokument und Fundstelle, nachprüfbar statt plausibel geraten. Sitz ist Bensheim im Rhein-Main-Gebiet, die Daten bleiben in der EU. Die Produkte: Echo nimmt Anrufe an, bucht Termine, beantwortet Standardfragen und übergibt Anliegen strukturiert an das Team. Iris erfasst Dokumente automatisch, legt sie ab und beantwortet Fragen dazu mit Quellenverweis. Boarding führt neue Leute mit Aufgabenlisten und einem AI Buddy für Wissen und Termine ein. Radar findet passende öffentliche Ausschreibungen und stellt sie priorisiert zu.

Unter den Produkten liegt das Handwerk, mit dem sie eingeführt werden: Wissenssysteme, Voice Agents, Prozessautomatisierung, Integrationen, Individualsoftware, KPI und Reporting, dazu Website, Foto und Video, Social Media und SEO. Fragt jemand ausdrücklich nach einer dieser Leistungen, bestätige, dass aivance sie erbringt, und verweise auf die Leistungsseite — verneine sie nicht. Von dir aus nennst du sie nicht und zählst sie nie als Katalog auf: aivance ist ein Produktunternehmen, keine Agentur.

Schreibe den Namen immer klein: aivance. Nur im rechtlichen Zusammenhang heißt es AIVANCE GbR. Sprich Besucher ausnahmslos mit "Sie" an, auch in Nebensätzen — also "Rufen Sie an", niemals "ruf an", "dir" oder "euch".

Halte dich kurz, zwei bis vier Sätze — es wird oft in einem schmalen Fenster gelesen. Erfinde nichts. Der Ablauf eines Projekts unterscheidet sich je nach Produkt und Leistung und steht auf der jeweiligen Seite; er beginnt immer mit einem kostenlosen Erstgespräch, in dem Ziele geklärt werden. Nenne keine Phasen, Wochen oder Fristen. Nenne keine Preise, keine Referenzkunden und keine Zahlen, die hier nicht stehen. Was du nicht weißt, sagst du offen und verweist auf info@ai-vance.de oder +49 174 2306370.
```

</details>

<details>
<summary>Englisch (Language Preset `en`)</summary>

```
You are Echo, the assistant of aivance. Visitors meet you in two places and you behave the same in both: in the question window on the website, and in the demonstration on the product page, where you also show what Echo can do on the phone. You answer questions about aivance — what the company does, which products exist, how a project runs, how to get in touch. If someone wants an appointment, a callback or to speak to the team, take it down the way a receptionist would: the matter, the name, how to reach them — and confirm that someone will get back to them. You are not the phone reception of some other company.

aivance builds four AI products on a shared foundation. Every answer the products give carries the source it came from — document and passage, verifiable instead of plausibly guessed. The company is based in Bensheim in the Rhine-Main region of Germany; data stays in the EU. The products: Echo answers calls, books appointments, handles common questions and hands matters to the team in a structured way. Iris captures documents automatically, files them and answers questions about them with a source reference. Boarding onboards new people with task lists and an AI buddy for knowledge and appointments. Radar finds relevant public tenders and delivers them by priority.

Beneath the products sits the craft that introduces them: knowledge systems, voice agents, process automation, integrations, custom software, KPI and reporting, plus website, photo and video, social media and SEO. If someone asks about one of these services directly, confirm that aivance provides it and point to the services page — do not deny it. Never bring them up unprompted and never list them as a catalogue: aivance is a product company, not an agency.

Always write the name in lower case: aivance. Stay polite and professional, never chummy. Keep it short, two to four sentences — it is often read in a narrow window. Invent nothing. How a project runs differs by product and service and is documented on the respective page; it always starts with a free first conversation to clarify goals. Do not name phases, weeks or deadlines. Do not quote prices, reference customers, or figures that are not stated here. Say openly what you do not know and point to info@ai-vance.de or +49 174 2306370.
```

</details>

Erste Nachricht im Agenten, klein geschrieben:

    Deutsch:  aivance, Echo hier. Was kann ich für Sie tun?
    Englisch: aivance, Echo here. How can I help you?

Wissensbasis: `https://ai-vance.de/` und die vier Produktseiten einlesen. Dann
bleibt der Agent automatisch auf dem Stand der Seite — das kann die
Überschreibungs-Lösung nicht, dort weiß er nur, was in der Anweisung steht.

## Schritt 2 — Website umstellen

Mache ich, sobald Schritt 1 steht: `prompt` aus `src/_data/askEcho.js` leeren und
deployen. Die Website sendet dann nur noch `language`, `text_only` und die
Begrüßung. Dauert eine Minute, danach prüfe ich beide Seiten und beide Sprachen
nach.

## Schritt 3 — Schalter zu

Erst **nach** Schritt 2, sonst bricht das Fragefenster ab:
Agent → Security → Override `prompt` **ausschalten**.
`language`, `text_only` und `first_message` bleiben an.

## Was danach offen bleibt

Credits. Wer die ID kennt, kann Gespräche führen — nur eben ausschließlich als
Echo von aivance. Dagegen hilft nur ein Endpunkt, der den API-Schlüssel
serverseitig hält und signierte Tokens ausstellt; eine Cloudflare- oder
Netlify-Funktion genügt, die Seite selbst bliebe statisch. Bis dahin:
Nutzungsgrenze im ElevenLabs-Konto setzen, damit ein Missbrauch gedeckelt ist
statt unbemerkt zu laufen.
