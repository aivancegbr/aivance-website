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
    slug: "echo",
    kurzname: "Echo",
    kurz: "Nimmt Anrufe an, beantwortet Standardfragen und übergibt Anliegen strukturiert an Ihr Team.",
    name: "aivance Echo",
    tags: ["Telefonie", "Kundenservice", "Terminannahme"],
    status: null,
    text:
      "Geht ans Telefon, wenn Ihr Team keine Hand frei hat. Echo beantwortet wiederkehrende Fragen aus Ihrer Wissensbasis, nimmt Termin- und Rückrufwünsche auf, leitet Sonderfälle nach festen Regeln weiter und dokumentiert jedes Gespräch.",
    /* Eigene Hero-Sektion für die Produktseite (Bildvorlage vom 21.08.2026) —
       nutzt dieselbe Punktraster-Canvas + denselben Eyebrow-/Badge-Baukasten
       wie die Startseite (main.css / hero.js), keine neue Optik erfunden. */
    hero: {
      eyebrow: "Telefonassistent",
      headlineLines: ["Jeder Anruf", "Beantwortet"],
      sub: "Erreichbar, wenn Ihr Team nicht abnehmen kann.",
      nodeLabel: "Anruf angenommen",
      labels: ["Annehmen", "Weiterleiten", "Dokumentieren"]
    },
    en: {
      tags: ["Telephony", "Customer service", "Appointments"],
      status: null,
      kurz: "Answers calls, handles routine questions and hands requests over to your team in a structured way.",
      text:
        "Picks up when your team has no hands free. Echo answers recurring questions from your knowledge base, takes appointment and callback requests, routes exceptions according to defined rules and documents every conversation.",
      hero: {
        eyebrow: "Voice Agent",
        headlineLines: ["Every call", "Answered"],
        sub: "Be available when your team can't pick up.",
        nodeLabel: "Call answered",
        labels: ["Answer", "Route", "Document"]
      }
    }
  },
  {
    nummer: "02",
    slug: "iris",
    kurzname: "Iris",
    kurz: "Dokumente automatisch erfassen, ablegen und mit Quellenverweis abfragen.",
    name: "aivance Iris",
    tags: ["Finanzberatung", "OCR", "RAG"],
    status: null,
    text:
      "Erfasst und archiviert Dokumente und legt sie automatisch im richtigen Ordner ab. Inhalte bleiben mit Quellenverweis abfragbar; zusätzlich erkennt Iris Vertragsfristen und erstellt Briefings sowie Produktempfehlungen.",
    /* Features & Stack aus dem echten Projekt übernommen (Repo aivance-dms, README/CLAUDE.md,
       Stand August 2026) — bewusst keine Funktionen aufgeführt, die dort nicht belegt sind
       (z. B. Vertragsfristen/Briefings aus dem Absatz oben laufen unter separater Roadmap). */
    features: [
      {
        titel: "Beleg per WhatsApp",
        text: "Berater fotografieren oder scannen Dokumente und schicken sie per WhatsApp — ohne neue App, ohne Login."
      },
      {
        titel: "Automatische Ablage",
        text: "Iris erkennt Dokumenttyp und Kunde per OCR und legt die Datei automatisch im richtigen Google-Drive-Ordner ab."
      },
      {
        titel: "Abfragen in natürlicher Sprache",
        text: "Fragen wie „Welche Dokumente hat Müller?“ oder „Was steht in der Police?“ werden direkt per WhatsApp beantwortet — Inhalte per RAG, Struktur/Übersichten per direkter Datenbankabfrage."
      },
      {
        titel: "Synchron mit Google Drive",
        text: "Wird eine Datei umbenannt oder gelöscht oder ein neuer Kundenordner angelegt, zieht Iris automatisch nach — ohne doppelte Pflege."
      },
      {
        titel: "Stapelverarbeitung",
        text: "Im Fast-Modus lassen sich mehrere Dokumente hintereinander hochladen, ohne jede einzelne Datei einzeln bestätigen zu müssen."
      }
    ],
    stack: [
      { schicht: "Kommunikation", technologie: "WhatsApp Business API (Meta Cloud)" },
      { schicht: "Backend", technologie: "Supabase Edge Functions (TypeScript / Deno)" },
      { schicht: "Datenbank", technologie: "Supabase PostgreSQL + pgvector (EU Frankfurt)" },
      { schicht: "OCR", technologie: "Azure AI Document Intelligence (Frankfurt)" },
      { schicht: "LLM / Embeddings", technologie: "Azure OpenAI Service (GPT-4o + text-embedding-3-large)" },
      { schicht: "Dateispeicher", technologie: "Google Drive API v3" }
    ],
    en: {
      tags: ["Financial advisory", "OCR", "RAG"],
      status: null,
      kurz: "Capture, file and query documents automatically — with a source reference.",
      text:
        "Captures and archives documents and files them in the right folder automatically. Contents stay queryable with a source reference; Iris also detects contract deadlines and produces briefings and product recommendations.",
      features: [
        {
          titel: "Send it via WhatsApp",
          text: "Advisors photograph or scan documents and send them via WhatsApp — no new app, no login."
        },
        {
          titel: "Automatic filing",
          text: "Iris recognises the document type and the matching client via OCR and files it in the right Google Drive folder automatically."
        },
        {
          titel: "Ask in plain language",
          text: "Questions like “Which documents does Müller have?” or “What does the policy say?” are answered directly over WhatsApp — content queries via RAG, structural queries via direct database lookup."
        },
        {
          titel: "Stays in sync with Google Drive",
          text: "Rename or delete a file, or create a new client folder — Iris follows along automatically, no duplicate upkeep."
        },
        {
          titel: "Batch uploads",
          text: "Fast mode lets advisors send several documents back to back without confirming each one individually."
        }
      ]
    }
  },
  {
    nummer: "03",
    slug: "boarding",
    kurzname: "Boarding",
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
    kurzname: "Radar",
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
