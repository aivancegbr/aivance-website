/**
 * Mockup-Sequenzen (Modul F).
 *
 * Die Texte standen bis zur Interaktions-Überarbeitung doppelt in
 * /js/hero.js (de + en). Seitdem die Mockup-Engine gerendertes Markup
 * abspielt statt es zu erzeugen, liegen sie hier — einmal, neben den
 * übrigen Inhaltsdaten.
 *
 * Regel für Produkt-Mockups: keine erfundenen Zahlen und keine Funktion,
 * die products.js nicht belegt. Jede Aussage trägt ihre Quellenzeile.
 */

/* Taktung wie bisher im Hero: nach einer Nutzerzeile kurz, nach einer
   Antwort länger. Der letzte Schritt braucht keine Pause. */
const KURZ = 600;
const LANG = 1600;

module.exports = {
  hero: {
    de: [
      { kind: "user", text: "Unsere Website ist veraltet und das Telefon steht nicht still. Wo fangen wir an?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", pause: LANG,
        text: "Mit einem <strong>Digital-Audit</strong>: Wir sehen uns Website, Anfragen und Abläufe an — und starten mit dem Schritt, der am meisten entlastet.",
        source: "Quelle · /kontakt · kostenlos & unverbindlich",
      },
      { kind: "user", text: "Und wer koordiniert Website, Fotos und Technik?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", evidenced: true, pause: 0,
        text: "<strong>Ein Ansprechpartner</strong> bei AIVANCE. Website, Bildmaterial und Automatisierung aus einer Hand — abgestimmt statt zusammengestückelt.",
        source: "Quelle · /ueber-uns · fester Ansprechpartner",
      },
    ],
    en: [
      { kind: "user", text: "Our website is outdated and the phone won't stop ringing. Where do we start?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", pause: LANG,
        text: "With a <strong>digital audit</strong>: we look at your website, inquiries and workflows — and start with the step that relieves the most pressure.",
        source: "Source · /en/contact · free, no strings",
      },
      { kind: "user", text: "And who coordinates the website, photos and tech?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", evidenced: true, pause: 0,
        text: "<strong>One point of contact</strong> at AIVANCE. Website, visuals and automation from a single team — coordinated instead of pieced together.",
        source: "Source · /en/about · one named contact",
      },
    ],
  },

  /* Echo — annehmen, beantworten, strukturiert übergeben (products.js #echo) */
  echo: {
    de: [
      { kind: "call", label: "Eingehender Anruf", who: "Unbekannte Nummer · 9:41", pause: 900 },
      { kind: "transcript", label: "Live-Transkript", text: "„Guten Tag, ich hätte gern einen Termin.“", pause: 1200 },
      { kind: "typing", delay: 900 },
      { kind: "assistant", text: "Gern. Ich nehme Ihren Terminwunsch auf und gebe ihn ans Team weiter.", pause: 1400 },
      {
        kind: "handoff", pause: 0,
        rows: [["Anliegen", "Terminwunsch"], ["Rückruf", "gewünscht"], ["Gespräch", "dokumentiert"]],
        source: "Quelle · /produkte/#echo · annehmen, weiterleiten, dokumentieren",
      },
    ],
    en: [
      { kind: "call", label: "Incoming call", who: "Unknown number · 9:41", pause: 900 },
      { kind: "transcript", label: "Live transcript", text: "“Hello, I'd like to book an appointment.”", pause: 1200 },
      { kind: "typing", delay: 900 },
      { kind: "assistant", text: "Of course. I'll note your request and pass it to the team.", pause: 1400 },
      {
        kind: "handoff", pause: 0,
        rows: [["Request", "Appointment"], ["Callback", "requested"], ["Call", "documented"]],
        source: "Source · /en/produkte/#echo · answer, route, document",
      },
    ],
  },

  /* Iris — Beleg per WhatsApp, Ablage per OCR, Abfrage mit Quellenverweis */
  iris: {
    de: [
      { kind: "document", name: "Police_Mueller.pdf", via: "per WhatsApp", pause: 900 },
      { kind: "field", key: "Dokumenttyp", val: "Police", pause: 450 },
      { kind: "field", key: "Kunde", val: "Müller", pause: 450 },
      { kind: "field", key: "Ablage", val: "Kunden / Müller / Verträge", pause: 1000 },
      { kind: "user", text: "Was steht in der Police?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", evidenced: true, pause: 0,
        text: "Eine Haftpflichtversicherung, jährlich verlängert. Die Kündigungsfrist steht auf Seite 2, Absatz 3.",
        source: "Quelle · Police_Mueller.pdf · Seite 2",
      },
    ],
    en: [
      { kind: "document", name: "Policy_Mueller.pdf", via: "via WhatsApp", pause: 900 },
      { kind: "field", key: "Document", val: "Policy", pause: 450 },
      { kind: "field", key: "Client", val: "Müller", pause: 450 },
      { kind: "field", key: "Filed to", val: "Clients / Müller / Contracts", pause: 1000 },
      { kind: "user", text: "What does the policy say?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", evidenced: true, pause: 0,
        text: "A liability policy, renewed annually. The notice period is on page 2, paragraph 3.",
        source: "Source · Policy_Mueller.pdf · page 2",
      },
    ],
  },

  /* Boarding — Aufgabenliste plus AI Buddy für Wissen und Termine */
  boarding: {
    de: [
      { kind: "task", text: "Arbeitsvertrag unterschrieben", pause: 500 },
      { kind: "task", text: "Zugänge eingerichtet", pause: 500 },
      { kind: "task", text: "Einführungstermin offen", open: true, pause: 1000 },
      { kind: "user", text: "Wo finde ich die Reisekostenrichtlinie?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", pause: 0,
        text: "Im Handbuch unter „Reisekosten“. Ich habe dir den Abschnitt herausgesucht.",
        source: "Quelle · /produkte/#boarding · AI Buddy für Wissen und Termine",
      },
    ],
    en: [
      { kind: "task", text: "Employment contract signed", pause: 500 },
      { kind: "task", text: "Accounts set up", pause: 500 },
      { kind: "task", text: "Intro session still open", open: true, pause: 1000 },
      { kind: "user", text: "Where do I find the travel expense policy?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", pause: 0,
        text: "In the handbook under “Travel expenses”. I've pulled up the section for you.",
        source: "Source · /en/produkte/#boarding · AI buddy for knowledge and appointments",
      },
    ],
  },
};
