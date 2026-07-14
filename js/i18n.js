const translations = {
  en: {
    banner: 'AI that actually knows your business.',
    bannerCta: 'Get started free →',
    navFeatures: 'Features',
    navUsecases: 'Use Cases',
    navIntegrations: 'Integrations',
    navProjects: 'Projects',
    navFaq: 'FAQ',
    navTeam: 'Team',
    navContact: 'Contact',
    navCta: 'Get Started',
    langToggleMobile: '🇬🇧 English',

    privacyLabel: 'Data Privacy &amp; Sovereignty',
    privacyHeadline: 'Your data. Your region.<br/>Never used for training.',
    privacySubtext: 'Every AIVANCE system is built privacy-first. That is not a footnote in our terms — it is the foundation of everything we deploy.',
    privacyCard1Title: '100% GDPR-compliant',
    privacyCard1Desc: 'Every system we build complies fully with GDPR and European data protection law — by design, not as an afterthought.',
    privacyCard2Title: 'Data stays in your region',
    privacyCard2Desc: 'European customers run on European servers, US customers on US servers. Your data never leaves its legal jurisdiction.',
    privacyCard3Title: 'Never used for AI training',
    privacyCard3Desc: 'Your business data is never used to train AI models — not by us, not by any model provider. It stays yours, encrypted and protected.',
    privacyPill1: 'DSGVO / GDPR',
    privacyPill2: 'Regional hosting — EU &amp; US',
    privacyPill3: 'End-to-end encrypted',
    privacyPill4: 'No training on your data',

    heroBadge: 'RAG Systems &amp; Voice Agents',
    heroHeadline: 'RAG systems &amp; AI Voice Agents —<br>your knowledge, always',
    heroCycling0: 'on call.',
    heroCycling1: 'at work.',
    heroCycling2: 'precise.',
    heroCycling3: 'live 24/7.',
    heroSubtext: 'AIVANCE builds RAG systems and Voice Agents that answer from your real business data — precise, secure, and live 24/7.',
    heroCta1: 'Book a free demo',
    heroCta2: 'Explore features <span class="arrow">→</span>',
    heroStat1Label: 'Answer accuracy',
    heroStat2Label: 'Response time',
    heroStat3Label: 'Always available',
    heroBadge1Title: 'Knowledge retrieved',
    heroBadge1Sub: '0 hallucinations',
    heroBadge2Title: 'Response time',

    heroAwsLabel: 'Supported by',
    trustedLabel: 'Trusted by & verified with',
    awsCardSub: 'AIVANCE is part of the AWS Activate Startup Program — sponsored with cloud infrastructure, credits, and technical support by Amazon Web Services.',
    nvidiaCardSub: 'AIVANCE is a member of NVIDIA Inception — supported with AI expertise, technology, and go-to-market resources by NVIDIA.',
    msCardSub: 'AIVANCE is part of Microsoft for Startups Founders Hub — backed with Azure infrastructure, credits, and technical support by Microsoft.',
    techPartnersLabel: 'Technology stack & partners',

    featuresLabel: 'Core Technology',
    featuresHeadline: 'Streamline operations<br/>with smart AI features',
    featuresSubtext: 'RAG prevents wrong answers by grounding every response in your real company data — no guessing, no hallucinations.',
    f1Title: 'RAG Knowledge Engine',
    f1Desc: 'Retrieval-Augmented Generation. Every answer is pulled from your documents, PDFs, databases and wikis — not from generic model knowledge.',
    f2Title: 'Voice Agents',
    f2Desc: 'Natural-sounding AI phone agents that handle calls, answer questions, and route conversations — powered by your knowledge base.',
    f3Title: 'Automated Reporting',
    f3Desc: 'Weekly KPI reports, CRM summaries, and status updates delivered automatically via Email or Slack — no manual effort.',
    f4Title: 'Data Privacy',
    f4Desc: 'Your data is never used for model training. Everything stays inside your secure environment. GDPR-compliant by design.',
    f5Title: 'No Hallucinations',
    f5Desc: "RAG prevents AI from making up answers. If the answer isn't in your data, AIVANCE says so — instead of guessing wrong.",
    f6Title: 'Live in 2–4 Weeks',
    f6Desc: 'From kickoff to production in weeks, not months. We handle deployment, integration, and team training.',

    intLabel: 'Integrations',
    intHeadline: 'Powerful integrations,<br/>effortless setup',
    intSubtext: 'Connect AIVANCE to the tools your team already uses. Our open API and pre-built connectors make integration seamless.',
    apiHintLabel: 'REST API & Webhooks',
    apiHintDesc: "Don't see your tool? Our open REST API and webhook system connects AIVANCE to any platform. Full documentation included.",

    dashLabel: 'Control Center',
    dashHeadline: 'One dashboard.<br/>All your agents.',
    dashSubtext: 'Deploy, monitor and control every RAG system and Voice Agent from a single, clean interface — in real time.',
    dashCta: 'Book a live demo →',
    dashCtaNote: 'No credit card required · Setup in 17 days on average',

    projLabel: 'References',
    projHeadline: 'Real results for real businesses',
    projSubtext: 'We have already worked together successfully and achieved measurable improvements — gastronomy, SMEs, and more.',
    projCta: 'View all case studies →',

    teamLabel: 'The Team',
    teamHeadline: 'The minds behind AIVANCE',
    teamSubtext: "We're your partner for intelligent automation and digital transformation — with real AI expertise, not just buzzwords.",
    ayman_role: 'Founder',
    ayman_bio: 'Responsible for strategic direction and operational excellence at AIVANCE. Extensive experience in AI integration and business process optimization.',
    ajay_role: 'Co-Founder',
    ajay_bio: 'Leads technology development and cloud infrastructure. Expert for scalable AI systems and modern software architecture.',
    cyrus_role: 'Co-Founder',
    cyrus_bio: "Leads AI agent deployment and system integration across AIVANCE's North American operations. Specializes in conversational AI, cloud infrastructure, and end-to-end automation pipelines from architecture to production rollout.",

    faqLabel: 'FAQ',
    faqHeadline: 'All you need to know',
    faq1q: 'What exactly is a RAG system?',
    faq1a: 'Retrieval-Augmented Generation (RAG) is an AI architecture that answers questions by first retrieving relevant information from your own documents, databases or knowledge bases — and then generating a response based on that data. This means no hallucinations, no generic answers — only verified, grounded responses from your business data.',
    faq2q: 'How long does implementation take?',
    faq2a: 'On average 17 days from kickoff to go-live. We handle everything: system design, integration, testing, and team training. You get a dedicated point of contact throughout the entire process.',
    faq3q: 'Is my data used to train AI models?',
    faq3a: 'Never. Your data stays in your secure environment and is never used for model training. We are fully GDPR-compliant and operate under the highest data protection standards.',
    faq4q: 'Which industries can benefit from AIVANCE?',
    faq4a: 'Any industry where employees ask repetitive questions, customers need fast answers, or knowledge is scattered across documents. Top use cases: legal, finance, consulting, e-commerce, HR, healthcare, and real estate.',
    faq5q: 'What makes Voice Agents different from a regular chatbot?',
    faq5a: 'Voice Agents handle real phone calls with natural-sounding speech, context memory, and live integration to your knowledge base. They go far beyond scripted chatbots — they can handle complex questions, escalate to humans, and learn from every conversation.',

    contactLabel: 'Get in touch',
    contactHeadline: "Let's build something<br/>remarkable.",
    contactSubtext: "No commitment, no pressure. We'll listen, ask good questions, and tell you honestly if and how AIVANCE can help.",
    formName: 'Name *',
    formNamePh: 'Your full name',
    formCompany: 'Company',
    formCompanyPh: 'Company name',
    formEmail: 'Email *',
    formIndustry: 'Industry',
    formIndustryPh: 'Select your industry…',
    formMessage: 'What would you like to automate?',
    formMessagePh: 'Describe the processes or use cases you have in mind…',
    formSubmit: 'Book a consultation →',
    successTitle: "Thanks, we'll be in touch!",
    successSub: 'Usually within 24 hours.',

    ind1: 'Legal & Compliance',
    ind2: 'Finance & Accounting',
    ind3: 'Consulting',
    ind4: 'E-Commerce',
    ind5: 'Healthcare',
    ind6: 'Real Estate',
    ind7: 'HR & Recruiting',
    ind8: 'Manufacturing',
    ind9: 'Other',

    footerTagline: 'RAG Systems & Voice Agents for the future of your business.',
    footerProductLabel: 'Product',
    footerCompanyLabel: 'Company',
    footerAbout: 'About',
    footerCopyright: '© 2025 AIVANCE. All rights reserved.',
    footerSlogan: 'Built for businesses that think ahead.',
  },

  de: {
    banner: 'KI, die Ihr Unternehmen wirklich kennt.',
    bannerCta: 'Kostenlos starten →',
    navFeatures: 'Features',
    navUsecases: 'Anwendungsfälle',
    navIntegrations: 'Integrationen',
    navProjects: 'Projekte',
    navFaq: 'FAQ',
    navTeam: 'Team',
    navContact: 'Kontakt',
    navCta: 'Jetzt starten',
    langToggleMobile: '🇬🇧 English',

    privacyLabel: 'Datenschutz &amp; Datensouveränität',
    privacyHeadline: 'Ihre Daten. Ihre Region.<br/>Niemals für Training verwendet.',
    privacySubtext: 'Jedes AIVANCE-System ist von Grund auf datenschutzkonform gebaut. Das ist keine Fußnote in unseren AGB — es ist das Fundament von allem, was wir entwickeln.',
    privacyCard1Title: '100% DSGVO-konform',
    privacyCard1Desc: 'Jedes System, das wir bauen, erfüllt vollständig die DSGVO und europäisches Datenschutzrecht — by design, nicht als Nachgedanke.',
    privacyCard2Title: 'Daten bleiben in Ihrer Region',
    privacyCard2Desc: 'Europäische Kunden laufen auf europäischen Servern, US-Kunden auf US-Servern. Ihre Daten verlassen niemals ihren Rechtsraum.',
    privacyCard3Title: 'Niemals für KI-Training verwendet',
    privacyCard3Desc: 'Ihre Geschäftsdaten werden niemals zum Training von KI-Modellen verwendet — weder von uns noch von einem Modellanbieter. Sie bleiben Ihre, verschlüsselt und geschützt.',
    privacyPill1: 'DSGVO-konform',
    privacyPill2: 'Regionales Hosting — EU &amp; US',
    privacyPill3: 'Ende-zu-Ende verschlüsselt',
    privacyPill4: 'Kein Training mit Ihren Daten',

    heroBadge: 'RAG-Systeme &amp; Sprachassistenten',
    heroHeadline: 'RAG-Systeme &amp; KI Voice Agents —<br>Ihr Wissen, immer',
    heroCycling0: 'verfügbar.',
    heroCycling1: 'im Einsatz.',
    heroCycling2: 'präzise.',
    heroCycling3: 'live 24/7.',
    heroSubtext: 'AIVANCE entwickelt RAG-Systeme und Sprachassistenten, die aus Ihren echten Geschäftsdaten antworten — präzise, sicher und live rund um die Uhr.',
    heroCta1: 'Demo buchen',
    heroCta2: 'Features entdecken <span class="arrow">→</span>',
    heroStat1Label: 'Antwortgenauigkeit',
    heroStat2Label: 'Reaktionszeit',
    heroStat3Label: 'Immer verfügbar',
    heroBadge1Title: 'Wissen abgerufen',
    heroBadge1Sub: '0 Halluzinationen',
    heroBadge2Title: 'Reaktionszeit',

    heroAwsLabel: 'Gefördert durch',
    trustedLabel: 'Zertifiziert & unterstützt von',
    awsCardSub: 'AIVANCE ist Mitglied im AWS Activate Startup-Programm — gefördert mit Cloud-Infrastruktur, Credits und technischem Support durch Amazon Web Services.',
    nvidiaCardSub: 'AIVANCE ist Mitglied bei NVIDIA Inception — unterstützt mit KI-Expertise, Technologie und Go-to-Market-Ressourcen durch NVIDIA.',
    msCardSub: 'AIVANCE ist Teil des Microsoft for Startups Founders Hub — unterstützt mit Azure-Infrastruktur, Credits und technischem Support durch Microsoft.',
    techPartnersLabel: 'Technologie-Stack & Partner',

    featuresLabel: 'Kerntechnologie',
    featuresHeadline: 'Abläufe optimieren<br/>mit smarten KI-Funktionen',
    featuresSubtext: 'RAG verhindert falsche Antworten, indem jede Antwort in Ihren echten Unternehmensdaten verankert wird — kein Raten, keine Halluzinationen.',
    f1Title: 'RAG-Wissenssystem',
    f1Desc: 'Retrieval-Augmented Generation. Jede Antwort wird aus Ihren Dokumenten, PDFs, Datenbanken und Wikis abgerufen — nicht aus generischem Modellwissen.',
    f2Title: 'Sprachassistenten',
    f2Desc: 'Natürlich klingende KI-Telefonagenten, die Anrufe entgegennehmen, Fragen beantworten und Gespräche weiterleiten — gespeist aus Ihrer Wissensdatenbank.',
    f3Title: 'Automatisiertes Reporting',
    f3Desc: 'Wöchentliche KPI-Berichte, CRM-Zusammenfassungen und Statusupdates werden automatisch per E-Mail oder Slack geliefert — ohne manuellen Aufwand.',
    f4Title: 'Datenschutz',
    f4Desc: 'Ihre Daten werden nie für das Training von KI-Modellen verwendet. Alles bleibt in Ihrer sicheren Umgebung. DSGVO-konform by Design.',
    f5Title: 'Keine Halluzinationen',
    f5Desc: 'RAG verhindert, dass die KI Antworten erfindet. Wenn die Antwort nicht in Ihren Daten ist, sagt AIVANCE das — anstatt falsch zu raten.',
    f6Title: 'Live in 2–4 Wochen',
    f6Desc: 'Vom Kickoff bis zur Produktion in Wochen, nicht Monaten. Wir übernehmen Deployment, Integration und Team-Schulung.',

    intLabel: 'Integrationen',
    intHeadline: 'Leistungsstarke Integrationen,<br/>mühelose Einrichtung',
    intSubtext: 'Verbinden Sie AIVANCE mit den Tools, die Ihr Team bereits nutzt. Unsere offene API und vorgefertigte Konnektoren machen die Integration nahtlos.',
    apiHintLabel: 'REST API & Webhooks',
    apiHintDesc: 'Ihr Tool nicht dabei? Unser offenes REST-API und Webhook-System verbindet AIVANCE mit jeder Plattform. Vollständige Dokumentation inklusive.',

    dashLabel: 'Control Center',
    dashHeadline: 'Ein Dashboard.<br/>Alle Ihre Agenten.',
    dashSubtext: 'Deployen, überwachen und steuern Sie jedes RAG-System und jeden Sprachassistenten über eine einzige, übersichtliche Oberfläche — in Echtzeit.',
    dashCta: 'Live-Demo buchen →',
    dashCtaNote: 'Keine Kreditkarte erforderlich · Einrichtung im Schnitt in 17 Tagen',

    projLabel: 'Referenzen',
    projHeadline: 'Echte Ergebnisse für echte Unternehmen',
    projSubtext: 'Wir haben bereits erfolgreich zusammengearbeitet und messbare Verbesserungen erzielt — Gastronomie, Mittelstand, und mehr.',
    projCta: 'Alle Case Studies ansehen →',

    teamLabel: 'Das Team',
    teamHeadline: 'Die Köpfe hinter AIVANCE',
    teamSubtext: 'Wir sind Ihr Partner für intelligente Automatisierung und digitale Transformation — mit echtem KI-Know-how, nicht nur Buzzwords.',
    ayman_role: 'Gründer',
    ayman_bio: 'Verantwortlich für die strategische Ausrichtung und operative Exzellenz bei AIVANCE. Umfangreiche Erfahrung in KI-Integration und Optimierung von Geschäftsprozessen.',
    ajay_role: 'Co-Gründer',
    ajay_bio: 'Leitet die Technologieentwicklung und Cloud-Infrastruktur. Experte für skalierbare KI-Systeme und moderne Softwarearchitektur.',
    cyrus_role: 'Co-Gründer',
    cyrus_bio: 'Leitet die Bereitstellung von KI-Agenten und die Systemintegration im nordamerikanischen Geschäft von AIVANCE. Spezialisiert auf konversationelle KI, Cloud-Infrastruktur und durchgängige Automatisierungs-Pipelines von der Architektur bis zum Produktiv-Rollout.',

    faqLabel: 'Häufige Fragen',
    faqHeadline: 'Alles, was Sie wissen müssen',
    faq1q: 'Was genau ist ein RAG-System?',
    faq1a: 'Retrieval-Augmented Generation (RAG) ist eine KI-Architektur, die Fragen beantwortet, indem sie zuerst relevante Informationen aus Ihren eigenen Dokumenten, Datenbanken oder Wissensdatenbanken abruft — und dann eine Antwort auf Basis dieser Daten generiert. Das bedeutet: keine Halluzinationen, keine generischen Antworten — nur verifizierte, datenbasierte Antworten aus Ihren Geschäftsdaten.',
    faq2q: 'Wie lange dauert die Implementierung?',
    faq2a: 'Im Durchschnitt 17 Tage vom Kickoff bis zum Go-Live. Wir übernehmen alles: Systemdesign, Integration, Tests und Team-Schulung. Sie erhalten einen festen Ansprechpartner während des gesamten Prozesses.',
    faq3q: 'Werden meine Daten zum Training von KI-Modellen verwendet?',
    faq3a: 'Niemals. Ihre Daten verbleiben in Ihrer sicheren Umgebung und werden nie für das Modelltraining verwendet. Wir sind vollständig DSGVO-konform und arbeiten nach höchsten Datenschutzstandards.',
    faq4q: 'Welche Branchen können von AIVANCE profitieren?',
    faq4a: 'Jede Branche, in der Mitarbeiter wiederkehrende Fragen stellen, Kunden schnelle Antworten benötigen oder Wissen über Dokumente verstreut ist. Top-Anwendungsfälle: Recht, Finanzen, Beratung, E-Commerce, HR, Gesundheitswesen und Immobilien.',
    faq5q: 'Was unterscheidet Sprachassistenten von einem normalen Chatbot?',
    faq5a: 'Sprachassistenten führen echte Telefongespräche mit natürlicher Sprache, Kontextgedächtnis und Live-Integration in Ihre Wissensdatenbank. Sie gehen weit über geskriptete Chatbots hinaus — sie können komplexe Fragen bearbeiten, an Menschen weiterleiten und aus jedem Gespräch lernen.',

    contactLabel: 'Kontakt aufnehmen',
    contactHeadline: 'Lassen Sie uns gemeinsam<br/>etwas Besonderes bauen.',
    contactSubtext: 'Kein Commitment, kein Druck. Wir hören zu, stellen die richtigen Fragen und sagen Ihnen ehrlich, ob und wie AIVANCE helfen kann.',
    formName: 'Name *',
    formNamePh: 'Ihr vollständiger Name',
    formCompany: 'Unternehmen',
    formCompanyPh: 'Unternehmensname',
    formEmail: 'E-Mail *',
    formIndustry: 'Branche',
    formIndustryPh: 'Branche auswählen…',
    formMessage: 'Was möchten Sie automatisieren?',
    formMessagePh: 'Beschreiben Sie die Prozesse oder Anwendungsfälle, die Sie im Sinn haben…',
    formSubmit: 'Beratungsgespräch buchen →',
    successTitle: 'Danke, wir melden uns bald!',
    successSub: 'In der Regel innerhalb von 24 Stunden.',

    ind1: 'Recht & Compliance',
    ind2: 'Finanzen & Buchhaltung',
    ind3: 'Beratung',
    ind4: 'E-Commerce',
    ind5: 'Gesundheitswesen',
    ind6: 'Immobilien',
    ind7: 'HR & Recruiting',
    ind8: 'Produktion',
    ind9: 'Sonstiges',

    footerTagline: 'RAG-Systeme & Sprachassistenten für die Zukunft Ihres Unternehmens.',
    footerProductLabel: 'Produkt',
    footerCompanyLabel: 'Unternehmen',
    footerAbout: 'Über uns',
    footerCopyright: '© 2025 AIVANCE. Alle Rechte vorbehalten.',
    footerSlogan: 'Für Unternehmen, die vorausdenken.',
  }
};

let currentLang = 'de';

function applyTranslation(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('aivance_lang', lang);

  const t = translations[lang];

  // Update all text/html elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update select options
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update lang toggle button
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.innerHTML = lang === 'de'
      ? '<span class="lang-flag">🇬🇧</span> EN'
      : '<span class="lang-flag">🇩🇪</span> DE';
  }

  // Recalculate cycling text width after language switch
  const wrapper = document.getElementById('cycling-wrapper');
  if (wrapper) {
    const texts = wrapper.querySelectorAll('.cycling-text');
    const activeIdx = [...texts].findIndex(t => t.classList.contains('active'));
    // Reset width before measuring so the inline-block wrapper can expand freely
    wrapper.style.width = '';
    let maxW = 0;
    texts.forEach(t => {
      t.style.position = 'relative';
      t.style.opacity = '0';
      t.style.transform = 'none';
      // Measure the wrapper (which expands to fit the relative-positioned child)
      // rather than the child itself, which may be constrained by a stale parent width
      const w = wrapper.offsetWidth;
      if (w > maxW) maxW = w;
      t.style.position = 'absolute';
      t.style.opacity = '0';
      t.style.transform = 'translateY(40px)';
    });
    wrapper.style.width = maxW + 'px';
    const active = texts[activeIdx >= 0 ? activeIdx : 0];
    active.style.opacity = '1';
    active.style.transform = 'translateY(0)';
  }
}

function toggleLanguage() {
  applyTranslation(currentLang === 'de' ? 'en' : 'de');
}

// Apply default language on load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('aivance_lang') || 'de';
  applyTranslation(saved);
});
