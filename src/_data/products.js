/**
 * Eigene Produkte (§ 3 der Leistungs- und Projektübersicht, Stand August 2026).
 *
 * Inhalte 1:1 aus der freigegebenen Übersicht übernommen — bewusst keine
 * Ausschmückung. Wo dort keine Angabe steht (Preise, Roadmap, Betriebsstatus),
 * steht hier auch keine.
 *
 * status: nur gesetzt, wo die Übersicht eine Aussage trifft. null bedeutet
 * „keine Angabe" — nicht „im Einsatz".
 */
module.exports = [
  {
    nummer: "01",
    slug: "voice-agent",
    kurz: "Nimmt Anrufe an, beantwortet Standardfragen und übergibt Anliegen strukturiert an Ihr Team.",
    name: "aivance Voice Agent",
    tags: ["Telefonie", "Kundenservice", "Terminannahme"],
    status: null,
    text:
      "Geht ans Telefon, wenn Ihr Team keine Hand frei hat. Der Voice Agent beantwortet wiederkehrende Fragen aus Ihrer Wissensbasis, nimmt Termin- und Rückrufwünsche auf, leitet Sonderfälle nach festen Regeln weiter und dokumentiert jedes Gespräch.",
    en: {
      tags: ["Telephony", "Customer service", "Appointments"],
      status: null,
      kurz: "Answers calls, handles routine questions and hands requests over to your team in a structured way.",
      text:
        "Picks up when your team has no hands free. The Voice Agent answers recurring questions from your knowledge base, takes appointment and callback requests, routes exceptions according to defined rules and documents every conversation."
    }
  },
  {
    nummer: "02",
    slug: "iris",
    kurz: "Dokumente automatisch erfassen, ablegen und mit Quellenverweis abfragen.",
    name: "aivance Iris",
    tags: ["Finanzberatung", "OCR", "RAG"],
    status: null,
    text:
      "Erfasst und archiviert Dokumente und legt sie automatisch im richtigen Ordner ab. Inhalte bleiben mit Quellenverweis abfragbar; zusätzlich erkennt Iris Vertragsfristen und erstellt Briefings sowie Produktempfehlungen.",
    en: {
      tags: ["Financial advisory", "OCR", "RAG"],
      status: null,
      kurz: "Capture, file and query documents automatically — with a source reference.",
      text:
        "Captures and archives documents and files them in the right folder automatically. Contents stay queryable with a source reference; Iris also detects contract deadlines and produces briefings and product recommendations."
    }
  },
  {
    nummer: "03",
    slug: "boarding",
    kurz: "Onboarding mit Aufgabenlisten und einem AI Buddy für Wissen und Termine.",
    name: "aivance Boarding",
    tags: ["HR", "Microsoft 365"],
    status: null,
    text:
      "Begleitet neue Mitarbeitende mit individuellen Aufgabenlisten und einem AI Buddy, der Wissen, Termine und Vorbereitungshinweise bündelt.",
    en: {
      tags: ["HR", "Microsoft 365"],
      status: null,
      kurz: "Onboarding with task lists and an AI buddy for knowledge and appointments.",
      text:
        "Guides new hires with individual task lists and an AI buddy that bundles knowledge, appointments and preparation notes."
    }
  },
  /* Zurückgestellt am 13.08.2026 — noch nicht öffentlich zeigen.
     Zum Wiederaufnehmen: Kommentar entfernen und die Nummern unten anpassen.
    {
      nummer: "03",
      slug: "verifly",
      kurz: "Prüft vor der Behandlung, ob die Versicherung die Leistung deckt.",
      name: "aivance Verifly",
      tags: ["Gesundheitswesen", "Eligibility"],
      status: "In Entwicklung",
      text:
        "Prüft vor einer Behandlung, ob die Leistung durch die vorliegende Versicherung gedeckt ist.",
      en: {
        tags: ["Healthcare", "Eligibility"],
        status: "In development",
        kurz: "Checks before treatment whether insurance covers the service.",
        text:
          "Checks before treatment whether the service is covered by the patient's insurance."
      }
    },
  */
  {
    nummer: "04",
    slug: "radar",
    kurz: "Findet passende öffentliche Ausschreibungen und stellt sie priorisiert zu.",
    name: "aivance Radar",
    tags: ["Vertrieb", "Ausschreibungen"],
    status: null,
    text:
      "Pflegt Suchprofile und findet öffentlich ausgeschriebene Aufträge. Passende Ausschreibungen werden priorisiert und zugestellt.",
    en: {
      tags: ["Sales", "Public tenders"],
      status: null,
      kurz: "Finds matching public tenders and delivers them by priority.",
      text:
        "Maintains search profiles and finds publicly tendered contracts. Matching tenders are prioritised and delivered."
    }
  }
];
