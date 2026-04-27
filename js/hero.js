/* ─── BACKGROUND CANVAS – Knowledge Graph ─── */
(function() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initNodes();
  }

  function initNodes() {
    nodes = Array.from({length: 55}, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 160) {
          const alpha = (1 - dist/160) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(20, 99, 243, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20, 99, 243, ${n.opacity})`;
      ctx.fill();
    });
  }

  function update() {
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });
  }

  function loop() { update(); draw(); requestAnimationFrame(loop); }

  window.addEventListener('resize', resize);
  resize();
  loop();
})();


/* ─── CYCLING TEXT ─── */
(function() {
  const texts = document.querySelectorAll('.cycling-text');
  if (!texts.length) return;
  let current = 0;
  const wrapper = document.getElementById('cycling-wrapper');

  let maxW = 0;
  texts.forEach(t => {
    t.style.position = 'relative';
    t.style.opacity = '1';
    t.style.transform = 'none';
    const w = t.offsetWidth;
    if (w > maxW) maxW = w;
    t.style.position = 'absolute';
    t.style.opacity = '0';
    t.style.transform = 'translateY(40px)';
  });
  wrapper.style.width = maxW + 'px';
  texts[0].classList.add('active');
  texts[0].style.opacity = '';
  texts[0].style.transform = '';

  setInterval(() => {
    const prev = texts[current];
    current = (current + 1) % texts.length;
    const next = texts[current];
    prev.classList.remove('active');
    prev.classList.add('exit');
    setTimeout(() => prev.classList.remove('exit'), 400);
    next.classList.add('active');
  }, 2800);
})();


/* ─── STATS COUNTER ─── */
(function() {
  const stats = document.querySelectorAll('.stat-value');
  if (!stats.length) return;
  let started = false;

  function animateStat(el) {
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const isSpecial = el.dataset.format === '247';
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = eased * target;
      if (isSpecial) {
        el.textContent = t >= 1 ? '24/7' : Math.floor(val * 0.1) + '/7';
        if (t >= 1) { el.textContent = '24/7'; return; }
      } else {
        const decimals = target % 1 !== 0 ? 1 : 0;
        el.textContent = prefix + val.toFixed(decimals) + suffix;
      }
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsRow = document.querySelector('.stats-row');
  if (!statsRow) return;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      setTimeout(() => stats.forEach(animateStat), 900);
    }
  }, { threshold: 0.3 });
  observer.observe(statsRow);
})();


/* ─── CHAT ANIMATION ─── */
(function() {
  const container = document.getElementById('hero-chat-messages');
  if (!container) return;

  const sequence = [
    { type: 'user',      text: 'Find all contracts with Müller GmbH from 2024.' },
    { type: 'typing',    delay: 900 },
    { type: 'assistant', text: 'Found <strong>3 contracts</strong> with Müller GmbH from 2024: Framework agreement (valid until 12/2025), Monthly supply contract, Holiday special agreement. Total volume: <strong>€45,200</strong>. Show details?' },
    { type: 'user',      text: 'How did our revenue change vs last month?' },
    { type: 'typing',    delay: 900 },
    { type: 'assistant', text: 'Revenue is <strong>up +12.4%</strong> (€48,320 → €54,315). Main drivers: +23% evening bookings.' },
  ];

  let idx = 0;

  function addMessage(item) {
    if (item.type === 'typing') {
      const el = document.createElement('div');
      el.className = 'typing';
      el.innerHTML = '<span></span><span></span><span></span>';
      container.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('visible')));
      return el;
    }
    const el = document.createElement('div');
    el.className = 'msg';
    const bubble = document.createElement('div');
    bubble.className = `bubble ${item.type}`;
    bubble.innerHTML = item.text;
    el.appendChild(bubble);
    container.appendChild(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('visible')));
    container.scrollTop = container.scrollHeight;
    return el;
  }

  function runSequence() {
    if (idx >= sequence.length) return;
    const item = sequence[idx++];
    if (item.type === 'typing') {
      const typingEl = addMessage(item);
      setTimeout(() => { typingEl.remove(); runSequence(); }, item.delay);
    } else {
      addMessage(item);
      const next = sequence[idx];
      const nextDelay = next ? (item.type === 'user' ? 600 : 1200) : 0;
      setTimeout(runSequence, nextDelay);
    }
  }

  setTimeout(runSequence, 1000);
  setInterval(() => {
    container.innerHTML = '';
    idx = 0;
    setTimeout(runSequence, 400);
  }, 14000);
})();


/* ─── 3D PHONE SCROLL EFFECT ─── */
(function() {
  const wrap = document.querySelector('.phone-wrap');
  const hero = document.querySelector('.hero');
  if (!wrap || !hero) return;

  let rotY = -22, rotX = 8, rotZ = -2;
  let currentRotY = rotY, currentRotX = rotX, currentRotZ = rotZ;
  let targetMouseX = 0, targetMouseY = 0;

  document.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    targetMouseX = ((e.clientX - cx) / rect.width) * 6;
    targetMouseY = ((e.clientY - cy) / rect.height) * -4;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  window.addEventListener('scroll', () => {
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
  const b1 = document.getElementById('hero-badge1');
  if (b1) b1.classList.add('visible');
}, 1800);
setTimeout(() => {
  const b2 = document.getElementById('hero-badge2');
  if (b2) b2.classList.add('visible');
}, 2400);
