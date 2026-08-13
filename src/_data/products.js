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
    nummer: "02",
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
