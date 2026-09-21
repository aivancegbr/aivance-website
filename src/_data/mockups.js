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
      { kind: "user", text: "Wann läuft der Vertrag von Müller aus?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", pause: LANG,
        text: "Am <strong>31. März 2027</strong>. Die Kündigungsfrist beträgt drei Monate, endet also am 31. Dezember 2026.",
        source: "Quelle · Police_Mueller.pdf · Seite 2",
      },
      { kind: "user", text: "Und wenn die Antwort nicht im Dokument steht?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", evidenced: true, pause: 0,
        text: "Dann sagen unsere Produkte das — statt zu raten. <strong>Ohne Fundstelle keine Antwort.</strong>",
        source: "Quelle · /produkte · Belegpflicht in jedem Produkt",
      },
    ],
    en: [
      { kind: "user", text: "When does the Müller contract expire?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", pause: LANG,
        text: "On <strong>31 March 2027</strong>. Notice period is three months, so the deadline is 31 December 2026.",
        source: "Source · Police_Mueller.pdf · page 2",
      },
      { kind: "user", text: "And if the answer isn't in the document?", pause: KURZ },
      { kind: "typing", delay: 900 },
      {
        kind: "assistant", evidenced: true, pause: 0,
        text: "Then our products say so instead of guessing. <strong>No source, no answer.</strong>",
        source: "Source · /en/produkte · every product cites its source",
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
