/* Hero-Animation (Bestand übernommen, Texte auf Deutsch / Agentur-Positionierung angepasst) */

var heroReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─── BACKGROUND CANVAS – Knowledge Graph ─── */
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  /* Auf Mobile oder bei reduzierter Bewegung: Canvas ausblenden */
  if (window.innerWidth < 768 || heroReducedMotion) { canvas.style.display = "none"; return; }
  const ctx = canvas.getContext("2d");
  let W, H, nodes;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initNodes();
  }

  function initNodes() {
    nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const alpha = (1 - dist / 160) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(20, 99, 243, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20, 99, 243, ${n.opacity})`;
      ctx.fill();
    });
  }

  function update() {
    nodes.forEach((n) => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
  }

  function loop() { update(); draw(); requestAnimationFrame(loop); }
  window.addEventListener("resize", resize);
  resize();
  loop();
})();

/* ─── CYCLING TEXT ─── */
(function () {
  const texts = document.querySelectorAll(".cycling-text");
  if (!texts.length) return;
  let current = 0;
  const wrapper = document.getElementById("cycling-wrapper");

  let maxW = 0;
  texts.forEach((t) => {
    t.style.position = "relative";
    t.style.opacity = "1";
    t.style.transform = "none";
    const w = t.offsetWidth;
    if (w > maxW) maxW = w;
    t.style.position = "absolute";
    t.style.opacity = "0";
    t.style.transform = "translateY(40px)";
  });
  wrapper.style.width = maxW + "px";
  texts[0].classList.add("active");
  texts[0].style.opacity = "";
  texts[0].style.transform = "";

  if (heroReducedMotion) return; // erster Begriff bleibt stehen

  setInterval(() => {
    const prev = texts[current];
    current = (current + 1) % texts.length;
    const next = texts[current];
    prev.classList.remove("active");
    prev.classList.add("exit");
    setTimeout(() => prev.classList.remove("exit"), 400);
    next.classList.add("active");
  }, 2800);
})();

/* ─── CHAT ANIMATION (Telefon-Mockup) ─── */
(function () {
  const container = document.getElementById("hero-chat-messages");
  if (!container) return;

  const sequences = {
    de: [
      { type: "user", text: "Unsere Website ist veraltet und das Telefon steht nicht still. Wo fangen wir an?" },
      { type: "typing", delay: 900 },
      { type: "assistant", text: "Mit einem <strong>Digital-Audit</strong>: Wir schauen uns Website, Anfragen und Abläufe an — und starten mit dem Schritt, der am meisten entlastet." },
      { type: "user", text: "Und wer koordiniert Website, Fotos und Technik?" },
      { type: "typing", delay: 900 },
      { type: "assistant", text: "<strong>Ein Ansprechpartner</strong> bei AIVANCE. Website, Bildmaterial und Automatisierung kommen aus einer Hand — abgestimmt statt zusammengestückelt." },
    ],
    en: [
      { type: "user", text: "Our website is outdated and the phone won't stop ringing. Where do we start?" },
      { type: "typing", delay: 900 },
      { type: "assistant", text: "With a <strong>digital audit</strong>: we look at your website, inquiries and workflows — and start with the step that relieves the most pressure." },
      { type: "user", text: "And who coordinates the website, photos and tech?" },
      { type: "typing", delay: 900 },
      { type: "assistant", text: "<strong>One point of contact</strong> at AIVANCE. Website, visuals and automation come from a single team — coordinated instead of pieced together." },
    ],
  };
  const sequence = (document.documentElement.lang || "de").startsWith("en") ? sequences.en : sequences.de;

  let idx = 0;

  function addMessage(item) {
    if (item.type === "typing") {
      const el = document.createElement("div");
      el.className = "typing";
      el.innerHTML = "<span></span><span></span><span></span>";
      container.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("visible")));
      return el;
    }
    const el = document.createElement("div");
    el.className = "msg";
    const bubble = document.createElement("div");
    bubble.className = `bubble ${item.type}`;
    bubble.innerHTML = item.text;
    el.appendChild(bubble);
    container.appendChild(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("visible")));
    container.scrollTop = container.scrollHeight;
    return el;
  }

  function runSequence() {
    if (idx >= sequence.length) return;
    const item = sequence[idx++];
    if (item.type === "typing") {
      const typingEl = addMessage(item);
      setTimeout(() => { typingEl.remove(); runSequence(); }, item.delay);
    } else {
      addMessage(item);
      const next = sequence[idx];
      const nextDelay = next ? (item.type === "user" ? 600 : 1400) : 0;
      setTimeout(runSequence, nextDelay);
    }
  }

  if (heroReducedMotion) {
    // Statisch: gesamte Konversation ohne Animation zeigen
    sequence.filter((s) => s.type !== "typing").forEach((s) => addMessage(s));
    container.querySelectorAll(".msg").forEach((m) => m.classList.add("visible"));
    return;
  }

  setTimeout(runSequence, 1000);
  setInterval(() => {
    container.innerHTML = "";
    idx = 0;
    setTimeout(runSequence, 400);
  }, 16000);
})();

/* ─── 3D PHONE SCROLL EFFECT ─── */
(function () {
  const wrap = document.querySelector(".phone-wrap");
  const hero = document.querySelector(".hero");
  if (!wrap || !hero) return;
  if (window.innerWidth < 768 || heroReducedMotion) {
    if (heroReducedMotion) wrap.style.transform = "none";
    return;
  }

  let rotY = -22, rotX = 8, rotZ = -2;
  let currentRotY = rotY, currentRotX = rotX, currentRotZ = rotZ;
  let targetMouseX = 0, targetMouseY = 0;

  document.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    targetMouseX = ((e.clientX - cx) / rect.width) * 6;
    targetMouseY = ((e.clientY - cy) / rect.height) * -4;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  window.addEventListener("scroll", () => {
    const heroH = hero.offsetHeight;
    const progress = Math.min(window.scrollY / (heroH * 0.6), 1);
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    rotY = lerp(-22, 0, eased);
    rotX = lerp(8, 0, eased);
    rotZ = lerp(-2, 0, eased);
  }, { passive: true });

  (function animate() {
    currentRotY = lerp(currentRotY, rotY + targetMouseX, 0.06);
    currentRotX = lerp(currentRotX, rotX + targetMouseY, 0.06);
    currentRotZ = lerp(currentRotZ, rotZ, 0.06);
    wrap.style.transform =
      `rotateY(${currentRotY}deg) rotateX(${currentRotX}deg) rotateZ(${currentRotZ}deg)`;
    requestAnimationFrame(animate);
  })();
})();

/* ─── FLOATING BADGES ─── */
setTimeout(() => {
  const b1 = document.getElementById("hero-badge1");
  if (b1) b1.classList.add("visible");
}, heroReducedMotion ? 0 : 1800);
setTimeout(() => {
  const b2 = document.getElementById("hero-badge2");
  if (b2) b2.classList.add("visible");
}, heroReducedMotion ? 0 : 2400);
