// The Redstone Guest House - shared site behaviour
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Nav: solid background after scrolling ---------- */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.innerHTML = open
        ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---------- Reveal-on-scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---------- Home hero slideshow ---------- */
  const heroSlides = document.querySelectorAll('.slide');
  if (heroSlides.length) {
    let idx = 0;
    let playing = true;
    let timer;
    const dots = document.querySelectorAll('.slide-dot');

    function goTo(n) {
      heroSlides[idx].classList.remove('active');
      dots[idx] && dots[idx].classList.remove('active');
      const bar = dots[idx] && dots[idx].querySelector('.progress');
      if (bar) { bar.classList.remove('run'); void bar.offsetWidth; }
      idx = (n + heroSlides.length) % heroSlides.length;
      heroSlides[idx].classList.add('active');
      dots[idx] && dots[idx].classList.add('active');
      const newBar = dots[idx] && dots[idx].querySelector('.progress');
      if (newBar) newBar.classList.add('run');
    }
    function next() { goTo(idx + 1); }
    function prev() { goTo(idx - 1); }
    function start() { timer = setInterval(next, 6000); }
    function stop() { clearInterval(timer); }

    document.querySelector('.slide-next')?.addEventListener('click', () => { next(); if (playing) { stop(); start(); } });
    document.querySelector('.slide-prev')?.addEventListener('click', () => { prev(); if (playing) { stop(); start(); } });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); if (playing) { stop(); start(); } }));

    const pauseBtn = document.querySelector('.slide-pause');
    pauseBtn?.addEventListener('click', () => {
      playing = !playing;
      if (playing) {
        start();
        pauseBtn.setAttribute('aria-label', 'Pause slideshow');
        pauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>';
      } else {
        stop();
        pauseBtn.setAttribute('aria-label', 'Play slideshow');
        pauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
      }
    });

    goTo(0);
    start();
  }

  /* ---------- Testimonial carousel ---------- */
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length) {
    let tIdx = 0;
    const tDots = document.querySelectorAll('.testimonial-dots button');
    function showT(n) {
      testimonials[tIdx].classList.remove('active');
      tDots[tIdx] && tDots[tIdx].classList.remove('active');
      tIdx = (n + testimonials.length) % testimonials.length;
      testimonials[tIdx].classList.add('active');
      tDots[tIdx] && tDots[tIdx].classList.add('active');
    }
    tDots.forEach((d, i) => d.addEventListener('click', () => showT(i)));
    setInterval(() => showT(tIdx + 1), 7000);
  }

  /* ---------- Accordions (terms / privacy) ---------- */
  document.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ---------- Room card "View Details" toggle ---------- */
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.room-body').querySelector('.room-details');
      const open = panel.classList.toggle('open');
      btn.textContent = open ? 'Hide Details' : 'View Details';
    });
  });

  /* ---------- Gallery filter + lightbox ---------- */
  const grid = document.getElementById('grid');
  if (grid && typeof GALLERY_ITEMS !== 'undefined') {
    const empty = document.getElementById('empty');
    let current = 'all', view = [], idx = 0;

    function render() {
      view = GALLERY_ITEMS.filter(it => current === 'all' || it.cat === current);
      grid.innerHTML = '';
      view.forEach((it, i) => {
        const fig = document.createElement('figure');
        fig.className = 'tile';
        fig.tabIndex = 0;
        fig.innerHTML = `<img loading="lazy" src="${it.thumb}" alt="${it.cap}"><figcaption>${it.cap}</figcaption>`;
        fig.addEventListener('click', () => openLb(i));
        fig.addEventListener('keydown', e => { if (e.key === 'Enter') openLb(i); });
        grid.appendChild(fig);
      });
      if (empty) empty.hidden = view.length > 0;
    }

    document.querySelectorAll('.pill').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('.pill').forEach(x => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', 'true');
        current = b.dataset.filter;
        render();
      });
    });

    const lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
    function openLb(i) { idx = i; showLb(); lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); }
    function closeLb() { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); lbImg.src = ''; }
    function showLb() { const it = view[idx]; lbImg.src = it.full; lbImg.alt = it.cap; lbCap.textContent = it.cap; }
    function step(d) { idx = (idx + d + view.length) % view.length; showLb(); }

    document.getElementById('lbClose')?.addEventListener('click', closeLb);
    document.getElementById('lbPrev')?.addEventListener('click', e => { e.stopPropagation(); step(-1); });
    document.getElementById('lbNext')?.addEventListener('click', e => { e.stopPropagation(); step(1); });
    lb?.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (!lb || !lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });

    render();
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    const status = document.getElementById('formStatus');
    const submitBtn = form.querySelector('.submit-btn');

    function setFieldError(field, msg) {
      const wrap = field.closest('.field');
      wrap.classList.add('error');
      wrap.querySelector('.field-error').textContent = msg;
    }
    function clearFieldError(field) {
      const wrap = field.closest('.field');
      wrap.classList.remove('error');
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let valid = true;
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');

      [name, email, message].forEach(clearFieldError);

      if (!name.value.trim()) { setFieldError(name, 'Please enter your name.'); valid = false; }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        setFieldError(email, 'Please enter a valid email address.'); valid = false;
      }
      if (!message.value.trim()) { setFieldError(message, 'Please enter a message.'); valid = false; }
      if (!valid) return;

      submitBtn.classList.add('loading');
      status.classList.remove('show', 'success', 'error');

      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.value.trim(),
            email: email.value.trim(),
            phone: form.querySelector('#phone').value.trim(),
            message: message.value.trim()
          })
        });
        if (!res.ok) throw new Error('Send failed');

        submitBtn.classList.remove('loading');
        status.textContent = "Message sent successfully! We'll be in touch shortly.";
        status.classList.add('show', 'success');
        form.reset();
      } catch (err) {
        submitBtn.classList.remove('loading');
        status.textContent = "Something went wrong sending your message. Please call or email us directly.";
        status.classList.add('show', 'error');
      }
    });
  }
});
