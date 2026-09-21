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
    kurz: "Nimmt Anrufe an, bucht Termine, beantwortet Standardfragen und übergibt Anliegen strukturiert an Ihr Team.",
    name: "aivance Echo",
    tags: ["Telefonie", "Kundenservice", "Terminannahme"],
    status: null,
    text:
      "Geht ans Telefon, wenn Ihr Team keine Hand frei hat. In Ihrer Installation bucht und verschiebt Echo Termine direkt im verbundenen Kalender, beantwortet wiederkehrende Fragen aus Ihrer Wissensbasis, nimmt Rückrufwünsche auf, leitet Sonderfälle nach festen Regeln weiter und dokumentiert jedes Gespräch.",
    /* Eigene Hero-Sektion für die Produktseite (Bildvorlage vom 21.08.2026) —
       nutzt dieselbe Punktraster-Canvas + denselben Eyebrow-/Badge-Baukasten
       wie die Startseite (main.css / hero.js), keine neue Optik erfunden. */
    hero: {
      eyebrow: "Telefonassistent",
      headlineLines: ["Jeder Anruf", "Beantwortet"],
      sub: "Erreichbar, wenn Ihr Team nicht abnehmen kann.",
      /* Zweiter, kleinerer Absatz wie in der Vorlage vom 21.09.2026 — nennt
         konkret, was Echo am Telefon tut, statt es nur zu behaupten. */
      lead: "Bucht und verwaltet Termine, beantwortet wiederkehrende Fragen, nimmt Rückrufwünsche auf und leitet komplexe Anliegen an Ihr Team weiter.",
      nodeLabel: "Anruf angenommen",
      labels: ["Annehmen", "Weiterleiten", "Dokumentieren"]
    },
    /* Live-Demo: der Besucher spricht im Browser mit demselben Agenten, der
       am Telefon abnimmt. Der Agent gehört aivance und kennt bewusst nur das
       eigene Haus — er hat keinen Zugriff auf Kunden-, Kalender- oder
       Vertragsdaten, weil die Demo oeffentlich erreichbar ist. */
    demo: {
      eyebrow: "Live-Demo",
      headline: "Sprechen Sie mit Echo.",
      text: "Das hier ist keine Aufzeichnung. Sie sprechen mit demselben Assistenten, der bei unseren Kunden ans Telefon geht — nur beantwortet er Fragen zu aivance statt zu deren Betrieb.",
      prompts: [
        "Was macht aivance eigentlich?",
        "Ich hätte gern einen Termin für ein Erstgespräch.",
        "Können Sie mich zurückrufen?",
        "Wie erreiche ich jemanden persönlich?"
      ],
      hinweis: "Beim Start wird das Mikrofon freigegeben und eine Verbindung zu ElevenLabs aufgebaut, unserem Anbieter für Sprachagenten. Vorher verlässt nichts Ihren Browser. Das Gespräch wird nicht zu Werbezwecken ausgewertet.",
      ohneJs: "Die Live-Demo braucht JavaScript und ein Mikrofon. Ohne beides beschreibt dieser Abschnitt, was Echo am Telefon übernimmt."
    },
    features: [
      {
        titel: "Termine buchen und verschieben",
        text: "Echo sieht die freien Zeiten im verbundenen Kalender, schlägt sie am Telefon vor und trägt den Termin ein. Absagen und Verschiebungen laufen denselben Weg."
      },
      {
        titel: "Antworten aus Ihrer Wissensbasis",
        text: "Öffnungszeiten, Leistungen, Anfahrt, Zuständigkeiten: Echo beantwortet, was hinterlegt ist — und sagt es, wenn etwas nicht hinterlegt ist, statt zu raten."
      },
      {
        titel: "Rückrufwünsche mit Anliegen",
        text: "Wo ein Mensch übernehmen muss, nimmt Echo Name, Nummer und Anliegen auf und legt den Rückruf dort an, wo Ihr Team ohnehin arbeitet."
      },
      {
        titel: "Weiterleiten nach festen Regeln",
        text: "Wer wann durchgestellt wird, legen Sie fest — Notfall, Bestandskunde, Beschwerde. Echo hält sich an die Regel und erfindet keine Ausnahme."
      },
      {
        titel: "Jedes Gespräch dokumentiert",
        text: "Nach dem Auflegen stehen Transkript, Zusammenfassung und Ergebnis bereit. Nachvollziehbar, wer was wann gesagt hat."
      }
    ],
    en: {
      tags: ["Telephony", "Customer service", "Appointments"],
      status: null,
      kurz: "Answers calls, books appointments, handles routine questions and hands requests over to your team in a structured way.",
      text:
        "Picks up when your team has no hands free. In your installation Echo books and reschedules appointments directly in the connected calendar, answers recurring questions from your knowledge base, takes callback requests, routes exceptions according to defined rules and documents every conversation.",
      demo: {
        eyebrow: "Live demo",
        headline: "Talk to Echo.",
        text: "This is not a recording. You are talking to the same assistant that picks up the phone for our clients — except it answers questions about aivance rather than about their business.",
        prompts: [
          "What does aivance actually do?",
          "I'd like to book an intro call.",
          "Could someone call me back?",
          "How do I reach a person directly?"
        ],
        hinweis: "Starting the demo grants microphone access and opens a connection to ElevenLabs, our voice-agent provider. Nothing leaves your browser before that. The conversation is not mined for marketing.",
        ohneJs: "The live demo needs JavaScript and a microphone. Without them, this section describes what Echo handles on the phone."
      },
      features: [
        {
          titel: "Books and reschedules appointments",
          text: "Echo reads the free slots in the connected calendar, offers them on the call and enters the appointment. Cancellations and changes take the same route."
        },
        {
          titel: "Answers from your knowledge base",
          text: "Opening hours, services, directions, responsibilities: Echo answers what has been filed — and says so when something has not, rather than guessing."
        },
        {
          titel: "Callback requests with context",
          text: "Where a person has to take over, Echo captures name, number and request and files the callback where your team already works."
        },
        {
          titel: "Routing by defined rules",
          text: "You decide who gets put through and when — emergency, existing client, complaint. Echo follows the rule and invents no exception."
        },
        {
          titel: "Every conversation documented",
          text: "Transcript, summary and outcome are ready once the call ends. Who said what, and when, stays traceable."
        }
      ],
      hero: {
        eyebrow: "Voice Agent",
        headlineLines: ["Every call", "Answered"],
        sub: "Be available when your team can't pick up.",
        lead: "Books and manages appointments, answers common questions, captures callbacks and routes complex requests to your team.",
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
