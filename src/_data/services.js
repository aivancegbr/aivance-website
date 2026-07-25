/**
 * Neun Leistungsdetailseiten (Template T2, § 7).
 * Zeitrahmen pro Leistung ehrlich und einzeln (§ 8 "Geschwindigkeit").
 */
module.exports = [
  /* ── Cluster: Sichtbarkeit ── */
  {
    slug: "website-webdesign",
    cluster: "sichtbarkeit",
    title: "Website & Webdesign",
    navTitle: "Website & Webdesign",
    card: "Eine Website, die Anfragen bringt — schnell, barrierearm und von Ihnen selbst pflegbar.",
    heroSatz: "Wir bauen Websites, die laden, gefunden werden und Anfragen erzeugen — nicht nur gut aussehen.",
    fuerWen: [
      "Ihre Website ist mehrere Jahre alt, auf dem Handy schwer bedienbar oder bringt keine Anfragen.",
      "Sie gründen oder positionieren sich neu und brauchen einen Auftritt, der zum Angebot passt.",
      "Sie wollen Texte und Bilder künftig selbst ändern können, ohne für jede Zeile eine Agentur zu beauftragen."
    ],
    umfang: [
      "Konzept und Seitenstruktur auf Basis Ihrer Zielgruppe",
      "Design und Umsetzung, mobil zuerst",
      "Texte in Zusammenarbeit mit Ihnen — in der Sprache Ihrer Kunden",
      "Suchmaschinen-Grundlagen: Meta-Angaben, strukturierte Daten, Sitemap",
      "Ladezeit-Optimierung: komprimierte Bilder, selbst gehostete Schriften",
      "DSGVO-konforme Einbindung von Formularen und Karten",
      "Einweisung, damit Sie Inhalte selbst pflegen können"
    ],
    ablauf: [
      { phase: "Erstgespräch & Konzept", dauer: "Woche 1", text: "Ziele, Zielgruppe, Seitenstruktur. Sie bekommen ein konkretes Angebot mit Festpreis." },
      { phase: "Design & Inhalte", dauer: "Woche 2–3", text: "Wir gestalten, Sie liefern Inhalte zu — oder wir erstellen sie gemeinsam, inklusive Fotos." },
      { phase: "Umsetzung & Test", dauer: "Woche 3–5", text: "Entwicklung, Test auf allen Geräten, Korrekturschleife mit Ihnen." },
      { phase: "Livegang & Einweisung", dauer: "ab Woche 5", text: "Umzug auf Ihre Domain, Einweisung, 30 Tage Nachbetreuung inklusive." }
    ],
    zeitrahmen: "Realistisch sind 4–6 Wochen bis zum Livegang. Der häufigste Verzögerungsgrund sind fehlende Inhalte — deshalb erstellen wir Texte und Fotos auf Wunsch mit.",
    faq: [
      {
        q: "Was passiert mit meiner bestehenden Website und Domain?",
        a: "Ihre Domain bleibt Ihre. Wir übernehmen den Umzug, richten Weiterleitungen von alten Adressen ein und stellen sicher, dass Ihre Platzierung in Suchmaschinen nicht verloren geht."
      },
      {
        q: "Kann ich Inhalte später selbst ändern?",
        a: "Ja. Wir bauen die Seite so, dass Sie Texte, Bilder und Öffnungszeiten selbst pflegen können, und weisen Sie ein. Für größere Änderungen sind wir weiter ansprechbar."
      },
      {
        q: "Wie lange dauert es wirklich?",
        a: "4–6 Wochen, wenn Inhalte rechtzeitig da sind. Wir sagen Ihnen in der ersten Woche, welcher Termin realistisch ist — und halten ihn."
      }
    ],
    kombiniert: ["foto-video", "social-media", "prozessautomatisierung"],
    meta: {
      title: "Website & Webdesign für Unternehmen — AIVANCE",
      description: "Websites für Praxen, Kanzleien und Betriebe im Rhein-Main-Gebiet: schnell, mobil, selbst pflegbar. Livegang realistisch in 4–6 Wochen."
    },
    en: {
      title: "Website & Web Design",
      navTitle: "Website & Web Design",
      card: "A website that generates inquiries — fast, accessible and easy to maintain yourself.",
      heroSatz: "We build websites that load fast, get found and generate inquiries — not just look good.",
      fuerWen: [
        "Your website is several years old, hard to use on a phone, or brings in no inquiries.",
        "You are founding or repositioning your business and need a presence that matches your offering.",
        "You want to edit texts and images yourself in future, without commissioning an agency for every line."
      ],
      umfang: [
        "Concept and page structure based on your target audience",
        "Design and implementation, mobile first",
        "Copy created together with you — in your customers' language",
        "SEO fundamentals: meta tags, structured data, sitemap",
        "Load-time optimization: compressed images, self-hosted fonts",
        "GDPR-compliant integration of forms and maps",
        "Training so you can maintain content yourself"
      ],
      ablauf: [
        { phase: "Introductory call & concept", dauer: "Week 1", text: "Goals, audience, page structure. You receive a concrete fixed-price offer." },
        { phase: "Design & content", dauer: "Weeks 2–3", text: "We design, you provide content — or we create it together, photos included." },
        { phase: "Implementation & testing", dauer: "Weeks 3–5", text: "Development, testing on all devices, a revision loop with you." },
        { phase: "Launch & handover", dauer: "from week 5", text: "Migration to your domain, training, 30 days of post-launch support included." }
      ],
      zeitrahmen: "Realistically, 4–6 weeks to launch. The most common cause of delay is missing content — which is why we create copy and photos with you on request.",
      faq: [
        {
          q: "What happens to my existing website and domain?",
          a: "Your domain stays yours. We handle the migration, set up redirects from old URLs and make sure your search engine rankings are not lost."
        },
        {
          q: "Can I edit content myself later?",
          a: "Yes. We build the site so you can maintain texts, images and opening hours yourself, and we show you how. For bigger changes we remain available."
        },
        {
          q: "How long does it really take?",
          a: "4–6 weeks, if content arrives on time. We tell you in the first week which launch date is realistic — and we keep it."
        }
      ],
      meta: {
        title: "Website & Web Design for Businesses — AIVANCE",
        description: "Websites for practices, firms and businesses in the Rhine-Main region: fast, mobile, easy to maintain yourself. Launch realistically in 4–6 weeks."
      }
    }
  },
  {
    slug: "foto-video",
    cluster: "sichtbarkeit",
    title: "Foto, Video & Schnitt",
    navTitle: "Foto, Video & Schnitt",
    card: "Echte Bilder aus Ihrem Betrieb statt Stockfotos — für Website, Social Media und Bewerbung.",
    heroSatz: "Wir fotografieren und filmen bei Ihnen vor Ort — und liefern Material, das Website und Social Media direkt verwenden können.",
    fuerWen: [
      "Ihre Website zeigt Stockfotos, die jeder Wettbewerber auch verwendet.",
      "Sie brauchen regelmäßig Material für Social Media, haben aber niemanden, der es produziert.",
      "Sie suchen Personal und wollen zeigen, wie es bei Ihnen wirklich aussieht."
    ],
    umfang: [
      "Foto-Termine bei Ihnen vor Ort: Team, Räume, Arbeitssituationen, Produkte",
      "Videoaufnahmen inklusive Ton — vom Imagefilm bis zum kurzen Social-Media-Clip",
      "Schnitt, Farbkorrektur und Untertitel",
      "Formate passend zum Kanal: Website-Header, Instagram, LinkedIn, Bewerbungsseite",
      "Übergabe aller Dateien mit Nutzungsrechten — das Material gehört Ihnen"
    ],
    ablauf: [
      { phase: "Briefing", dauer: "Woche 1", text: "Was soll das Material zeigen, wo wird es eingesetzt? Wir planen Motive und Drehorte." },
      { phase: "Aufnahmetermin", dauer: "nach Absprache", text: "Ein halber bis ganzer Tag bei Ihnen vor Ort — so geplant, dass Ihr Betrieb weiterläuft." },
      { phase: "Auswahl & Bearbeitung", dauer: "1–2 Wochen danach", text: "Sie wählen aus einer Vorauswahl, wir bearbeiten und schneiden final." }
    ],
    zeitrahmen: "Vom Briefing bis zur Übergabe vergehen in der Regel 2–3 Wochen — abhängig vom Termin, der in Ihren Betrieb passt.",
    faq: [
      {
        q: "Wem gehören die Bilder und Videos?",
        a: "Ihnen. Sie erhalten alle finalen Dateien mit uneingeschränkten Nutzungsrechten für Ihre Unternehmenskommunikation."
      },
      {
        q: "Was ist mit Einwilligungen von Mitarbeitern und Patienten?",
        a: "Wir bringen Einwilligungsvorlagen mit und fotografieren so, dass keine Personen ohne Einwilligung erkennbar sind — in Praxen und Kanzleien planen wir Aufnahmen außerhalb der Sprechzeiten."
      }
    ],
    kombiniert: ["website-webdesign", "social-media"],
    portfolio: true,
    meta: {
      title: "Foto, Video & Schnitt für Unternehmen — AIVANCE",
      description: "Foto- und Videoproduktion vor Ort im Rhein-Main-Gebiet: Team, Räume, Arbeitsalltag. Material für Website, Social Media und Personalgewinnung."
    },
    en: {
      title: "Photo, Video & Editing",
      navTitle: "Photo, Video & Editing",
      card: "Real images from your business instead of stock photos — for your website, social media and recruiting.",
      heroSatz: "We photograph and film on site at your business — and deliver material your website and social media can use right away.",
      fuerWen: [
        "Your website shows stock photos that every competitor uses too.",
        "You need regular material for social media, but have nobody to produce it.",
        "You are hiring and want to show what working at your business is really like."
      ],
      umfang: [
        "Photo sessions on site at your business: team, premises, work situations, products",
        "Video recordings including sound — from image films to short social media clips",
        "Editing, color grading and subtitles",
        "Formats matched to each channel: website header, Instagram, LinkedIn, careers page",
        "Handover of all files with usage rights — the material belongs to you"
      ],
      ablauf: [
        { phase: "Briefing", dauer: "Week 1", text: "What should the material show, where will it be used? We plan motifs and locations." },
        { phase: "Shoot day", dauer: "by arrangement", text: "Half a day to a full day on site — planned so your business keeps running." },
        { phase: "Selection & editing", dauer: "1–2 weeks after", text: "You choose from a pre-selection, we do the final editing and cut." }
      ],
      zeitrahmen: "From briefing to handover usually takes 2–3 weeks — depending on a shoot date that fits your business.",
      faq: [
        {
          q: "Who owns the photos and videos?",
          a: "You do. You receive all final files with unrestricted usage rights for your corporate communications."
        },
        {
          q: "What about consent from employees and patients?",
          a: "We bring consent form templates and shoot so that nobody is identifiable without consent — in practices and firms we schedule shoots outside consultation hours."
        }
      ],
      meta: {
        title: "Photo, Video & Editing for Businesses — AIVANCE",
        description: "On-site photo and video production in the Rhine-Main region: team, premises, everyday work. Material for your website, social media and recruiting."
      }
    }
  },
  {
    slug: "social-media",
    cluster: "sichtbarkeit",
    title: "Social-Media-Management",
    navTitle: "Social Media",
    card: "Regelmäßige, geplante Beiträge mit echtem Material aus Ihrem Betrieb — ohne dass Sie täglich posten müssen.",
    heroSatz: "Wir planen, produzieren und veröffentlichen Ihre Social-Media-Beiträge — Sie geben frei, mehr nicht.",
    fuerWen: [
      "Ihr letzter Beitrag ist Monate alt, weil im Alltag niemand Zeit dafür hat.",
      "Sie wollen sichtbar sein, wo Ihre Kunden und Bewerber suchen — ohne selbst zu produzieren.",
      "Sie haben schon Kanäle, aber keine Linie: mal Angebote, mal Fotos, lange nichts."
    ],
    umfang: [
      "Kanalstrategie: welche Plattformen sich für Ihre Zielgruppe lohnen — und welche nicht",
      "Redaktionsplan pro Monat, von Ihnen freigegeben",
      "Produktion der Beiträge mit Material aus unseren Foto-/Videoterminen",
      "Veröffentlichung und Community-Betreuung nach vereinbarten Reaktionszeiten",
      "Monatlicher Bericht: Reichweite, Anfragen, was funktioniert hat"
    ],
    ablauf: [
      { phase: "Strategie & Einrichtung", dauer: "Woche 1–2", text: "Kanäle festlegen, Profile aufräumen, ersten Redaktionsplan erstellen." },
      { phase: "Laufender Betrieb", dauer: "monatlich", text: "Produktion, Freigabe durch Sie, Veröffentlichung, Bericht am Monatsende." }
    ],
    zeitrahmen: "Start innerhalb von 2 Wochen. Social Media wirkt über Monate, nicht über Nacht — wir sagen Ihnen ehrlich, was in welchem Zeitraum erreichbar ist.",
    faq: [
      {
        q: "Muss ich selbst etwas tun?",
        a: "Eine Freigabe pro Monat und gelegentlich fünf Minuten für Abstimmungen. Aufnahmen entstehen bei geplanten Terminen vor Ort — Ihr Alltag liefert die Inhalte, wir machen den Rest."
      },
      {
        q: "Welche Plattformen betreuen Sie?",
        a: "Instagram, Facebook, LinkedIn und Google-Unternehmensprofil. Welche davon sinnvoll sind, hängt von Ihrer Zielgruppe ab — das klären wir im Erstgespräch, bevor Kosten entstehen."
      }
    ],
    kombiniert: ["foto-video", "website-webdesign"],
    meta: {
      title: "Social-Media-Management für Unternehmen — AIVANCE",
      description: "Planung, Produktion und Veröffentlichung Ihrer Social-Media-Beiträge mit echtem Material aus Ihrem Betrieb. Für Unternehmen im Rhein-Main-Gebiet."
    },
    en: {
      title: "Social Media Management",
      navTitle: "Social Media",
      card: "Regular, planned posts with real material from your business — without you having to post daily.",
      heroSatz: "We plan, produce and publish your social media posts — you approve them, that's all.",
      fuerWen: [
        "Your last post is months old, because nobody has time for it in the daily routine.",
        "You want to be visible where your customers and applicants are looking — without producing content yourself.",
        "You already have channels but no consistent line: offers one day, photos the next, then nothing for weeks."
      ],
      umfang: [
        "Channel strategy: which platforms are worth it for your audience — and which are not",
        "Monthly editorial plan, approved by you",
        "Production of the posts with material from our photo/video sessions",
        "Publishing and community management with agreed response times",
        "Monthly report: reach, inquiries, what worked"
      ],
      ablauf: [
        { phase: "Strategy & setup", dauer: "Weeks 1–2", text: "Define channels, tidy up profiles, create the first editorial plan." },
        { phase: "Ongoing operation", dauer: "monthly", text: "Production, your approval, publishing, report at the end of each month." }
      ],
      zeitrahmen: "Start within 2 weeks. Social media works over months, not overnight — we tell you honestly what is achievable in which timeframe.",
      faq: [
        {
          q: "Do I have to do anything myself?",
          a: "One approval per month and occasionally five minutes for alignment. Footage is captured during scheduled on-site sessions — your everyday work provides the content, we do the rest."
        },
        {
          q: "Which platforms do you manage?",
          a: "Instagram, Facebook, LinkedIn and Google Business Profile. Which of them make sense depends on your audience — we clarify that in the introductory call, before any costs arise."
        }
      ],
      meta: {
        title: "Social Media Management for Businesses — AIVANCE",
        description: "Planning, production and publishing of your social media posts with real material from your business. For companies in the Rhine-Main region."
      }
    }
  },

  /* ── Cluster: Software & Systeme ── */
  {
    slug: "individualsoftware",
    cluster: "software",
    title: "Individualsoftware",
    navTitle: "Individualsoftware",
    card: "Maßgeschneiderte Anwendungen für die Fälle, die keine Standardsoftware abdeckt.",
    heroSatz: "Wenn Excel-Listen und Standardsoftware nicht mehr reichen, bauen wir das Werkzeug, das zu Ihrem Ablauf passt.",
    fuerWen: [
      "Ein zentraler Ablauf in Ihrem Unternehmen lebt in Excel-Tabellen, die nur eine Person versteht.",
      "Ihre Standardsoftware kann 80 % — und die restlichen 20 % kosten jede Woche Stunden an Handarbeit.",
      "Sie brauchen ein internes Werkzeug: Planung, Verwaltung, Portal für Kunden oder Mitarbeiter."
    ],
    umfang: [
      "Anforderungsaufnahme an Ihrem echten Ablauf — wir schauen zu, bevor wir bauen",
      "Klick-Prototyp vor der Entwicklung, damit Sie früh sehen, was entsteht",
      "Entwicklung in überschaubaren Etappen mit Zwischenständen",
      "Anbindung an Ihre bestehenden Systeme",
      "Betrieb auf Servern in Deutschland oder der EU, Wartung und Weiterentwicklung"
    ],
    ablauf: [
      { phase: "Analyse & Prototyp", dauer: "Woche 1–3", text: "Wir erfassen den Ablauf, bauen einen Klick-Prototyp und legen den Umfang der ersten Version fest." },
      { phase: "Entwicklung", dauer: "ab Woche 4", text: "Umsetzung in Etappen von 2–3 Wochen. Nach jeder Etappe sehen Sie einen nutzbaren Zwischenstand." },
      { phase: "Einführung & Betrieb", dauer: "projektabhängig", text: "Testphase mit Ihrem Team, Schulung, Übergabe in den laufenden Betrieb mit vereinbarten Reaktionszeiten." }
    ],
    zeitrahmen: "Eine erste nutzbare Version liegt je nach Umfang nach 4–10 Wochen vor. Den konkreten Rahmen nennen wir nach der Analyse — nicht vorher.",
    faq: [
      {
        q: "Gehört mir die Software am Ende?",
        a: "Ja. Sie erhalten den Quellcode und die Dokumentation. Sie sind nicht an uns gebunden — auch wenn die meisten Kunden die Weiterentwicklung bei uns lassen."
      },
      {
        q: "Was kostet Individualsoftware?",
        a: "Das hängt vom Umfang ab. Nach der Analysephase erhalten Sie ein Festpreisangebot für die erste Version — keine offene Abrechnung nach Stunden ohne Limit."
      }
    ],
    kombiniert: ["prozessautomatisierung", "integrationen", "wissenssysteme"],
    meta: {
      title: "Individualsoftware für Unternehmen — AIVANCE",
      description: "Maßgeschneiderte Anwendungen statt Excel-Chaos: Analyse, Prototyp, Entwicklung in Etappen. Betrieb auf Servern in Deutschland oder der EU."
    },
    en: {
      title: "Custom Software",
      navTitle: "Custom Software",
      card: "Tailor-made applications for the cases no off-the-shelf software covers.",
      heroSatz: "When spreadsheets and standard software are no longer enough, we build the tool that fits your workflow.",
      fuerWen: [
        "A core process in your company lives in Excel sheets that only one person understands.",
        "Your standard software covers 80% — and the remaining 20% costs hours of manual work every week.",
        "You need an internal tool: planning, administration, a portal for customers or employees."
      ],
      umfang: [
        "Requirements gathering on your actual workflow — we watch before we build",
        "Clickable prototype before development, so you see early what is being built",
        "Development in manageable stages with interim releases",
        "Integration with your existing systems",
        "Operation on servers in Germany or the EU, maintenance and further development"
      ],
      ablauf: [
        { phase: "Analysis & prototype", dauer: "Weeks 1–3", text: "We map the workflow, build a clickable prototype and define the scope of the first version." },
        { phase: "Development", dauer: "from week 4", text: "Implementation in stages of 2–3 weeks. After each stage you see a usable interim version." },
        { phase: "Rollout & operation", dauer: "project-dependent", text: "Test phase with your team, training, handover into ongoing operation with agreed response times." }
      ],
      zeitrahmen: "A first usable version is ready after 4–10 weeks, depending on scope. We give you the concrete timeframe after the analysis — not before.",
      faq: [
        {
          q: "Do I own the software in the end?",
          a: "Yes. You receive the source code and the documentation. You are not tied to us — even though most clients keep further development with us."
        },
        {
          q: "What does custom software cost?",
          a: "That depends on the scope. After the analysis phase you receive a fixed-price offer for the first version — no open-ended hourly billing without a cap."
        }
      ],
      meta: {
        title: "Custom Software for Businesses — AIVANCE",
        description: "Tailor-made applications instead of Excel chaos: analysis, prototype, development in stages. Hosted on servers in Germany or the EU."
      }
    }
  },
  {
    slug: "wissenssysteme",
    cluster: "software",
    title: "Wissenssysteme (RAG/DMS)",
    navTitle: "Wissenssysteme",
    card: "Ihre Dokumente, Verträge und Richtlinien — durchsuchbar in Sekunden statt in Aktenordnern.",
    heroSatz: "Wir machen Ihr Firmenwissen abrufbar: Mitarbeiter fragen in normaler Sprache, das System antwortet aus Ihren echten Dokumenten.",
    fuerWen: [
      "Ihr Team beantwortet dieselben Fragen immer wieder — zu Verträgen, Richtlinien, Abläufen.",
      "Wissen steckt in PDF-Ordnern, E-Mail-Postfächern und den Köpfen einzelner Mitarbeiter.",
      "Neue Mitarbeiter brauchen Wochen, bis sie wissen, wo etwas steht."
    ],
    umfang: [
      "Anbindung Ihrer Quellen: Dateiablagen, DMS, Wikis, E-Mail-Archive",
      "KI-gestützte Suche, die aus Ihren Dokumenten antwortet — mit Quellenangabe pro Antwort",
      "Antworten nur aus Ihren Daten: Wenn die Antwort nicht in Ihren Unterlagen steht, sagt das System das",
      "Rechte- und Rollenkonzept: Wer darf was sehen",
      "Steuerungsoberfläche: Nutzung, Qualität und Quellen im Blick",
      "Betrieb in Ihrer Umgebung oder auf EU-Servern — Ihre Daten trainieren keine KI-Modelle"
    ],
    ablauf: [
      { phase: "Erstgespräch & Datencheck", dauer: "Woche 1", text: "Welche Quellen, welche Fragen, welche Nutzer? Wir prüfen, ob Ihre Daten dafür bereit sind." },
      { phase: "Aufbau & Indexierung", dauer: "Woche 2–3", text: "Anbindung der Quellen, Aufbau des Systems, erste Testfragen mit Ihrem Team." },
      { phase: "Test & Livegang", dauer: "Woche 3–4", text: "Ihr Team testet mit echten Fragen, wir justieren nach. Danach Go-Live und Einweisung." }
    ],
    zeitrahmen: "Ø 17 Tage bis zum Go-Live in unseren bisherigen Projekten. Bei vielen Quellsystemen oder komplexem Rechtekonzept eher 4–6 Wochen — das sagen wir Ihnen nach dem Datencheck.",
    faq: [
      {
        q: "Was ist ein RAG-System?",
        a: "Retrieval-Augmented Generation: Das System sucht zuerst die relevanten Stellen in Ihren Dokumenten und formuliert erst dann eine Antwort — mit Quellenangabe. Es erfindet keine Inhalte, sondern belegt jede Antwort."
      },
      {
        q: "Werden meine Daten für KI-Training verwendet?",
        a: "Nein. Ihre Daten bleiben in Ihrer Umgebung und werden nicht für Modelltraining genutzt. Wir setzen Anbieter mit vertraglichen No-Training-Klauseln ein — Details auf unserer Seite Datensicherheit."
      },
      {
        q: "Was passiert, wenn das System eine Antwort nicht kennt?",
        a: "Es sagt es. Antworten entstehen nur aus Ihren Dokumenten. Findet das System keine belastbare Quelle, antwortet es nicht mit einer Vermutung, sondern verweist an einen Menschen."
      }
    ],
    kombiniert: ["voice-agents", "prozessautomatisierung", "individualsoftware"],
    meta: {
      title: "Wissenssysteme (RAG/DMS) für Unternehmen — AIVANCE",
      description: "Firmenwissen durchsuchbar machen: KI-Suche mit Quellenangabe aus Ihren Dokumenten. DSGVO-konform, Ø 17 Tage bis Go-Live."
    },
    en: {
      title: "Knowledge Systems (RAG/DMS)",
      navTitle: "Knowledge Systems",
      card: "Your documents, contracts and policies — searchable in seconds instead of in filing cabinets.",
      heroSatz: "We make your company knowledge accessible: employees ask in plain language, the system answers from your actual documents.",
      fuerWen: [
        "Your team answers the same questions again and again — about contracts, policies, procedures.",
        "Knowledge is buried in PDF folders, email inboxes and the heads of individual employees.",
        "New employees need weeks before they know where anything is."
      ],
      umfang: [
        "Connection of your sources: file shares, DMS, wikis, email archives",
        "AI-powered search that answers from your documents — with a source citation for every answer",
        "Answers only from your data: if the answer is not in your documents, the system says so",
        "Permissions and role concept: who is allowed to see what",
        "Admin dashboard: usage, quality and sources at a glance",
        "Operation in your environment or on EU servers — your data never trains AI models"
      ],
      ablauf: [
        { phase: "Introductory call & data check", dauer: "Week 1", text: "Which sources, which questions, which users? We check whether your data is ready for it." },
        { phase: "Setup & indexing", dauer: "Weeks 2–3", text: "Connecting the sources, building the system, first test questions with your team." },
        { phase: "Testing & go-live", dauer: "Weeks 3–4", text: "Your team tests with real questions, we fine-tune. Then go-live and training." }
      ],
      zeitrahmen: "17 days on average to go-live in our projects so far. With many source systems or a complex permissions concept, more like 4–6 weeks — we tell you after the data check.",
      faq: [
        {
          q: "What is a RAG system?",
          a: "Retrieval-Augmented Generation: the system first finds the relevant passages in your documents and only then formulates an answer — with a source citation. It doesn't invent content, it backs up every answer."
        },
        {
          q: "Will my data be used for AI training?",
          a: "No. Your data stays in your environment and is not used for model training. We use providers with contractual no-training clauses — details on our Data Security page."
        },
        {
          q: "What happens when the system doesn't know an answer?",
          a: "It says so. Answers come only from your documents. If the system finds no reliable source, it doesn't answer with a guess — it refers you to a human."
        }
      ],
      meta: {
        title: "Knowledge Systems (RAG/DMS) for Businesses — AIVANCE",
        description: "Make company knowledge searchable: AI search with source citations from your documents. GDPR-compliant, 17 days on average to go-live."
      }
    }
  },
  {
    slug: "voice-agents",
    cluster: "software",
    title: "Voice Agents",
    navTitle: "Voice Agents",
    card: "Ein Telefon-Assistent, der Anrufe annimmt, Fragen beantwortet und Termine aufnimmt — auch wenn niemand Zeit hat.",
    heroSatz: "Ihr Telefon klingelt, während alle beschäftigt sind. Unser Voice Agent nimmt ab, beantwortet Standardfragen und leitet weiter, was Menschen entscheiden müssen.",
    fuerWen: [
      "Anrufe kommen genau dann, wenn Ihr Team keine Hand frei hat — und gehen verloren.",
      "Ein großer Teil der Anrufe sind Standardfragen: Öffnungszeiten, Termine, Verfügbarkeiten.",
      "Sie wollen erreichbar sein, ohne die Rezeption aufzustocken."
    ],
    umfang: [
      "Telefon-Assistent mit natürlicher Sprache, angebunden an Ihre Wissensbasis",
      "Termin- und Anfragenaufnahme mit Übergabe in Ihre Systeme",
      "Weiterleitung an Mitarbeiter nach klaren Regeln — der Agent entscheidet nicht über Ihren Kopf hinweg",
      "Protokoll jedes Gesprächs, transparent einsehbar",
      "Datenschutzkonforme Umsetzung inklusive Ansage und Einwilligungslogik"
    ],
    ablauf: [
      { phase: "Erstgespräch & Gesprächslogik", dauer: "Woche 1", text: "Welche Anrufe kommen, was darf der Agent, was nicht? Wir definieren die Regeln gemeinsam." },
      { phase: "Aufbau & Training", dauer: "Woche 2–3", text: "Anbindung an Telefonanlage und Wissensbasis, Testanrufe mit Ihrem Team." },
      { phase: "Pilotbetrieb", dauer: "Woche 3–4", text: "Start mit begrenzten Zeiten (z. B. außerhalb der Öffnungszeiten), dann schrittweise Ausweitung." }
    ],
    zeitrahmen: "2–4 Wochen bis zum Pilotbetrieb. Die Ausweitung auf den vollen Betrieb entscheiden Sie nach den ersten Wochen — nicht wir.",
    faq: [
      {
        q: "Merken Anrufer, dass sie mit einer KI sprechen?",
        a: "Ja, und das ist Absicht: Der Agent stellt sich als digitaler Assistent vor. Verdeckte KI-Anrufe sind rechtlich riskant und beschädigen Vertrauen."
      },
      {
        q: "Was passiert bei Fragen, die der Agent nicht beantworten kann?",
        a: "Er nimmt Name, Anliegen und Rückrufnummer auf oder leitet direkt an einen Mitarbeiter weiter — nach Regeln, die Sie festlegen."
      }
    ],
    kombiniert: ["wissenssysteme", "prozessautomatisierung"],
    meta: {
      title: "Voice Agents für Unternehmen — AIVANCE",
      description: "KI-Telefon-Assistent für Praxen, Kanzleien und Betriebe: nimmt Anrufe an, beantwortet Standardfragen, leitet weiter. Pilotbetrieb in 2–4 Wochen."
    },
    en: {
      title: "Voice Agents",
      navTitle: "Voice Agents",
      card: "A phone assistant that answers calls, handles questions and takes appointment requests — even when nobody has time.",
      heroSatz: "Your phone rings while everyone is busy. Our voice agent picks up, answers routine questions and forwards what humans need to decide.",
      fuerWen: [
        "Calls come in exactly when your team has no hands free — and get lost.",
        "A large share of the calls are routine questions: opening hours, appointments, availability.",
        "You want to be reachable without adding front-desk staff."
      ],
      umfang: [
        "Phone assistant with natural language, connected to your knowledge base",
        "Appointment and inquiry capture with handover into your systems",
        "Forwarding to staff based on clear rules — the agent never decides over your head",
        "Transcript of every call, transparently accessible",
        "Privacy-compliant implementation including announcement and consent logic"
      ],
      ablauf: [
        { phase: "Introductory call & conversation logic", dauer: "Week 1", text: "Which calls come in, what may the agent do, what not? We define the rules together." },
        { phase: "Setup & training", dauer: "Weeks 2–3", text: "Connection to your phone system and knowledge base, test calls with your team." },
        { phase: "Pilot operation", dauer: "Weeks 3–4", text: "Start with limited hours (e.g. outside opening hours), then gradual expansion." }
      ],
      zeitrahmen: "2–4 weeks to pilot operation. You decide on expanding to full operation after the first weeks — not us.",
      faq: [
        {
          q: "Do callers notice they are talking to an AI?",
          a: "Yes, and that is deliberate: the agent introduces itself as a digital assistant. Covert AI calls are legally risky and damage trust."
        },
        {
          q: "What happens with questions the agent cannot answer?",
          a: "It takes down name, request and callback number, or forwards directly to a staff member — following rules that you define."
        }
      ],
      meta: {
        title: "Voice Agents for Businesses — AIVANCE",
        description: "AI phone assistant for practices, firms and businesses: answers calls, handles routine questions, forwards the rest. Pilot operation in 2–4 weeks."
      }
    }
  },

  /* ── Cluster: Automatisierung ── */
  {
    slug: "prozessautomatisierung",
    cluster: "automatisierung",
    title: "Prozessautomatisierung",
    navTitle: "Prozessautomatisierung",
    card: "Wiederkehrende Abläufe laufen automatisch — vom Posteingang bis zur Ablage.",
    heroSatz: "Eingehende Post landet automatisch im richtigen Ordner, Anfragen im richtigen Postfach, Daten im richtigen System — ohne Abtippen.",
    fuerWen: [
      "Ihr Team überträgt Daten von Hand zwischen E-Mail, Excel und Fachsoftware.",
      "Dokumente werden mehrfach angefasst, bis sie am richtigen Ort liegen.",
      "Abläufe hängen an einzelnen Personen — ist jemand krank, bleibt Arbeit liegen."
    ],
    umfang: [
      "Prozessaufnahme: Wir dokumentieren den Ist-Ablauf, bevor wir etwas ändern",
      "Automatisierung mit klaren Regeln — nachvollziehbar, nicht als Blackbox",
      "Dokumenten-Verarbeitung: Eingehende Post wird erkannt, zugeordnet und abgelegt",
      "Benachrichtigungen und Freigabeschritte, wo Menschen entscheiden müssen",
      "Dokumentation jedes Ablaufs, damit Sie nicht von uns abhängig sind"
    ],
    ablauf: [
      { phase: "Prozessaufnahme", dauer: "Woche 1", text: "Wir schauen uns 2–3 Abläufe an und beziffern, was Automatisierung dort einspart." },
      { phase: "Umsetzung", dauer: "Woche 2–4", text: "Aufbau der Abläufe, Test mit echten Fällen parallel zum Tagesgeschäft." },
      { phase: "Übergabe & Ausbau", dauer: "ab Woche 4", text: "Ihr Team arbeitet mit den neuen Abläufen; weitere Prozesse folgen nach Priorität." }
    ],
    zeitrahmen: "Der erste automatisierte Ablauf ist nach 2–4 Wochen produktiv. Wir starten mit dem Prozess, der am meisten Zeit frisst — nicht mit dem einfachsten.",
    faq: [
      {
        q: "Woher weiß ich, ob sich Automatisierung bei uns lohnt?",
        a: "Aus der Prozessaufnahme: Wir beziffern pro Ablauf die eingesparten Stunden pro Woche, bevor Sie sich festlegen. Lohnt es sich nicht, sagen wir das."
      },
      {
        q: "Was passiert, wenn die Automatisierung einen Fehler macht?",
        a: "Kritische Schritte bekommen Freigaben durch Menschen, jeder Lauf wird protokolliert. Fehlerfälle landen in einer Prüfliste statt im Nirwana."
      }
    ],
    kombiniert: ["integrationen", "reporting", "wissenssysteme"],
    meta: {
      title: "Prozessautomatisierung für Unternehmen — AIVANCE",
      description: "Wiederkehrende Abläufe automatisieren: Posteingang, Dokumentenablage, Datenübertragung. Erster Ablauf produktiv in 2–4 Wochen."
    },
    en: {
      title: "Process Automation",
      navTitle: "Process Automation",
      card: "Recurring workflows run automatically — from inbound mail to filing.",
      heroSatz: "Incoming mail lands in the right folder automatically, inquiries in the right inbox, data in the right system — without retyping.",
      fuerWen: [
        "Your team transfers data by hand between email, Excel and your line-of-business software.",
        "Documents are touched multiple times before they end up in the right place.",
        "Workflows depend on individuals — if someone is out sick, work piles up."
      ],
      umfang: [
        "Process review: we document the current workflow before we change anything",
        "Automation with clear rules — traceable, not a black box",
        "Document processing: incoming mail is recognized, assigned and filed",
        "Notifications and approval steps wherever humans need to decide",
        "Documentation of every workflow, so you are not dependent on us"
      ],
      ablauf: [
        { phase: "Process review", dauer: "Week 1", text: "We look at 2–3 workflows and quantify what automation saves there." },
        { phase: "Implementation", dauer: "Weeks 2–4", text: "Building the workflows, testing with real cases alongside day-to-day business." },
        { phase: "Handover & expansion", dauer: "from week 4", text: "Your team works with the new workflows; further processes follow by priority." }
      ],
      zeitrahmen: "The first automated workflow is live after 2–4 weeks. We start with the process that eats the most time — not with the easiest one.",
      faq: [
        {
          q: "How do I know whether automation pays off for us?",
          a: "From the process review: we quantify the hours saved per week for each workflow before you commit. If it is not worth it, we say so."
        },
        {
          q: "What happens if the automation makes a mistake?",
          a: "Critical steps get human approvals, and every run is logged. Error cases land in a review list instead of disappearing."
        }
      ],
      meta: {
        title: "Process Automation for Businesses — AIVANCE",
        description: "Automate recurring workflows: inbound mail, document filing, data transfer. First workflow live in 2–4 weeks."
      }
    }
  },
  {
    slug: "reporting",
    cluster: "automatisierung",
    title: "KPI & Reporting",
    navTitle: "KPI & Reporting",
    card: "Ihre Kennzahlen kommen automatisch zu Ihnen — statt am Monatsende zusammengesucht zu werden.",
    heroSatz: "Umsatz, Auslastung, offene Posten: Wir bauen Berichte, die sich selbst aktualisieren und dorthin kommen, wo Sie sie lesen.",
    fuerWen: [
      "Ihre Monatszahlen entstehen in Handarbeit aus mehreren Excel-Dateien.",
      "Sie sehen erst Wochen später, wenn etwas aus dem Ruder läuft.",
      "Verschiedene Systeme zeigen verschiedene Wahrheiten — niemand weiß, welche Zahl stimmt."
    ],
    umfang: [
      "Kennzahlen-Definition gemeinsam mit Ihnen: Was muss wer wie oft sehen?",
      "Anbindung Ihrer Datenquellen: Buchhaltung, Kasse, CRM, Fachsoftware",
      "Dashboards mit Live-Daten und automatische Berichte per E-Mail",
      "Eine Zahl, eine Quelle: definierte Herkunft für jede Kennzahl",
      "Warnungen bei Abweichungen — Sie müssen nicht täglich nachsehen"
    ],
    ablauf: [
      { phase: "Kennzahlen & Quellen", dauer: "Woche 1", text: "Welche Zahlen steuern Ihr Geschäft? Wir prüfen, wo sie heute liegen und wie verlässlich sie sind." },
      { phase: "Aufbau", dauer: "Woche 2–3", text: "Anbindung der Quellen, Aufbau von Dashboard und Berichten, Abgleich mit Ihren bisherigen Zahlen." },
      { phase: "Betrieb", dauer: "laufend", text: "Berichte kommen automatisch; neue Kennzahlen ergänzen wir nach Bedarf." }
    ],
    zeitrahmen: "Das erste Dashboard steht nach 2–3 Wochen. Voraussetzung ist Zugang zu Ihren Datenquellen — das klären wir in Woche 1.",
    faq: [
      {
        q: "Welche Systeme können Sie anbinden?",
        a: "Gängige Buchhaltungs-, Kassen- und CRM-Systeme sowie alles mit Export oder Schnittstelle. Ob Ihre Systeme dabei sind, klären wir im Erstgespräch — kostenlos."
      },
      {
        q: "Sehen Sie dabei unsere Geschäftszahlen?",
        a: "Nur soweit für den Aufbau nötig, geregelt über einen Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Der laufende Betrieb läuft in Ihrer Umgebung — wir schauen nur bei Wartung und auf Anfrage hinein."
      }
    ],
    kombiniert: ["prozessautomatisierung", "integrationen"],
    meta: {
      title: "KPI & Reporting für Unternehmen — AIVANCE",
      description: "Automatische Dashboards und Berichte aus Buchhaltung, Kasse und CRM. Eine Zahl, eine Quelle — erstes Dashboard in 2–3 Wochen."
    },
    en: {
      title: "KPIs & Reporting",
      navTitle: "KPIs & Reporting",
      card: "Your key figures come to you automatically — instead of being pieced together at month-end.",
      heroSatz: "Revenue, utilization, open items: we build reports that update themselves and arrive where you actually read them.",
      fuerWen: [
        "Your monthly figures are compiled by hand from several Excel files.",
        "You only see weeks later when something goes off track.",
        "Different systems show different truths — nobody knows which number is right."
      ],
      umfang: [
        "KPI definition together with you: who needs to see what, how often?",
        "Connection of your data sources: accounting, POS, CRM, line-of-business software",
        "Dashboards with live data and automated reports by email",
        "One number, one source: a defined origin for every KPI",
        "Alerts on deviations — you don't have to check every day"
      ],
      ablauf: [
        { phase: "KPIs & sources", dauer: "Week 1", text: "Which numbers drive your business? We check where they live today and how reliable they are." },
        { phase: "Setup", dauer: "Weeks 2–3", text: "Connecting the sources, building dashboard and reports, reconciling with your existing figures." },
        { phase: "Operation", dauer: "ongoing", text: "Reports arrive automatically; we add new KPIs as needed." }
      ],
      zeitrahmen: "The first dashboard is ready after 2–3 weeks. The prerequisite is access to your data sources — we clarify that in week 1.",
      faq: [
        {
          q: "Which systems can you connect?",
          a: "Common accounting, POS and CRM systems, plus anything with an export or an API. Whether your systems are covered, we clarify in the introductory call — free of charge."
        },
        {
          q: "Do you see our business figures in the process?",
          a: "Only as far as needed for the setup, governed by a data processing agreement under Art. 28 GDPR. Ongoing operation runs in your environment — we only look in for maintenance and on request."
        }
      ],
      meta: {
        title: "KPIs & Reporting for Businesses — AIVANCE",
        description: "Automated dashboards and reports from accounting, POS and CRM. One number, one source — first dashboard in 2–3 weeks."
      }
    }
  },
  {
    slug: "integrationen",
    cluster: "automatisierung",
    title: "Integrationen & API",
    navTitle: "Integrationen & API",
    card: "Ihre Systeme sprechen miteinander — Daten fließen automatisch statt per Copy-and-paste.",
    heroSatz: "Kalender, Buchhaltung, CRM, Fachsoftware: Wir verbinden, was heute nebeneinanderher läuft.",
    fuerWen: [
      "Dieselben Daten werden in mehreren Systemen von Hand gepflegt.",
      "Ein Systemwechsel scheitert daran, dass Altdaten nicht mitkommen.",
      "Ihr Softwareanbieter bietet eine Schnittstelle — aber niemand hat sie je angebunden."
    ],
    umfang: [
      "Bestandsaufnahme: Welche Systeme gibt es, welche Daten fließen wohin?",
      "Anbindung über vorhandene Schnittstellen (REST, Webhooks) oder Import/Export",
      "Datenmigration bei Systemwechseln — inklusive Bereinigung von Dubletten",
      "Eigene Schnittstellen, wenn Ihre Software keine mitbringt",
      "Überwachung: Sie merken es, bevor eine Verbindung stillsteht"
    ],
    ablauf: [
      { phase: "Bestandsaufnahme", dauer: "Woche 1", text: "Systemlandschaft und Datenflüsse aufnehmen, Machbarkeit je Verbindung klären." },
      { phase: "Anbindung", dauer: "Woche 2–4", text: "Umsetzung der Verbindungen, Testlauf mit echten Daten parallel zum Altbetrieb." },
      { phase: "Betrieb", dauer: "laufend", text: "Überwachung und Anpassung, wenn sich eines Ihrer Systeme ändert." }
    ],
    zeitrahmen: "Eine einzelne Verbindung steht oft in 1–2 Wochen. Migrationen ganzer Systeme brauchen je nach Datenlage 4–8 Wochen — wir nennen den Rahmen nach der Bestandsaufnahme.",
    faq: [
      {
        q: "Unsere Fachsoftware ist ein Nischenprodukt — geht das trotzdem?",
        a: "Meistens ja. Fast jede Software bietet Export, Import oder eine Schnittstelle. Was möglich ist, prüfen wir in der Bestandsaufnahme, bevor Kosten entstehen."
      },
      {
        q: "Was passiert, wenn eine Verbindung ausfällt?",
        a: "Die Überwachung meldet es uns und Ihnen, bevor sich Fehler in den Daten fortpflanzen. Reaktionszeiten vereinbaren wir vertraglich."
      }
    ],
    kombiniert: ["prozessautomatisierung", "reporting", "individualsoftware"],
    meta: {
      title: "Integrationen & API für Unternehmen — AIVANCE",
      description: "Systeme verbinden statt Daten abtippen: Schnittstellen, Datenmigration, Überwachung. Einzelne Verbindungen oft in 1–2 Wochen."
    },
    en: {
      title: "Integrations & API",
      navTitle: "Integrations & API",
      card: "Your systems talk to each other — data flows automatically instead of copy-and-paste.",
      heroSatz: "Calendar, accounting, CRM, line-of-business software: we connect what runs side by side today.",
      fuerWen: [
        "The same data is maintained by hand in several systems.",
        "A system switch fails because legacy data won't come along.",
        "Your software vendor offers an API — but nobody has ever connected it."
      ],
      umfang: [
        "Inventory: which systems exist, which data flows where?",
        "Connection via existing interfaces (REST, webhooks) or import/export",
        "Data migration for system switches — including deduplication",
        "Custom interfaces when your software doesn't come with one",
        "Monitoring: you notice before a connection goes down"
      ],
      ablauf: [
        { phase: "Inventory", dauer: "Week 1", text: "Map the system landscape and data flows, clarify feasibility per connection." },
        { phase: "Connection", dauer: "Weeks 2–4", text: "Implementing the connections, test run with real data alongside the legacy setup." },
        { phase: "Operation", dauer: "ongoing", text: "Monitoring and adjustments whenever one of your systems changes." }
      ],
      zeitrahmen: "A single connection is often up in 1–2 weeks. Migrations of entire systems take 4–8 weeks depending on the data — we give you the timeframe after the inventory.",
      faq: [
        {
          q: "Our line-of-business software is a niche product — is this still possible?",
          a: "Usually yes. Almost every software offers export, import or an API. What is possible, we check during the inventory — before any costs arise."
        },
        {
          q: "What happens if a connection fails?",
          a: "Monitoring alerts us and you before errors propagate into your data. Response times are agreed contractually."
        }
      ],
      meta: {
        title: "Integrations & API for Businesses — AIVANCE",
        description: "Connect systems instead of retyping data: interfaces, data migration, monitoring. Single connections often in 1–2 weeks."
      }
    }
  }
];
