/* ==========================================================================
   SARKER STUDIO — MAIN SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Loading screen ---------------- */
  const loader = document.getElementById('loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('hidden'), 400);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => loader && loader.classList.add('hidden'), 2500);

  /* ---------------- Navbar scroll state ---------------- */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 30);

    // scroll progress bar
    const bar = document.getElementById('scroll-progress');
    if (bar) {
      const h = document.documentElement;
      const scrolled = (h.scrollTop || document.body.scrollTop);
      const height = h.scrollHeight - h.clientHeight;
      bar.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
    }

    // back to top button
    const top = document.querySelector('.fab-top');
    if (top) top.classList.toggle('show', window.scrollY > 500);
  };
  document.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------------- Mobile nav toggle ---------------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  /* ---------------- Back to top click ---------------- */
  const topBtn = document.querySelector('.fab-top');
  if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- Typing effect (hero) ---------------- */
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const phrases = ['hero_typed_1', 'hero_typed_2', 'hero_typed_3', 'hero_typed_4'].map(k => {
      const lang = localStorage.getItem('sarker_lang') || 'en';
      return (translations[lang] && translations[lang][k]) || '';
    });
    let pIndex = 0, cIndex = 0, deleting = false;
    typedEl.classList.add('typing');

    function tick() {
      const current = phrases[pIndex] || '';
      if (!deleting) {
        cIndex++;
        typedEl.textContent = current.slice(0, cIndex);
        if (cIndex === current.length) { deleting = true; setTimeout(tick, 1400); return; }
      } else {
        cIndex--;
        typedEl.textContent = current.slice(0, cIndex);
        if (cIndex === 0) { deleting = false; pIndex = (pIndex + 1) % phrases.length; }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  /* ---------------- Animated counters ---------------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const run = () => {
          current += step;
          if (current >= target) { el.textContent = target + suffix; return; }
          el.textContent = current + suffix;
          requestAnimationFrame(run);
        };
        run();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el, i) => {
    el.style.setProperty('--d', `${(i % 6) * 0.08}s`);
    revealObserver.observe(el);
  });

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------------- Pricing tabs ---------------- */
  const priceTabs = document.querySelectorAll('.price-tab');
  priceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      priceTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.price-group').forEach(g => g.classList.remove('active'));
      const target = document.getElementById(tab.getAttribute('data-target'));
      if (target) target.classList.add('active');
    });
  });

  /* ---------------- File drop label update ---------------- */
  document.querySelectorAll('.file-input').forEach(input => {
    input.addEventListener('change', () => {
      const label = input.closest('.file-drop');
      if (!label) return;
      const span = label.querySelector('span');
      if (input.files.length && span) {
        span.textContent = `${input.files.length} file(s) selected`;
      }
    });
  });

  /* ---------------- Toast helper ---------------- */
  window.showToast = function (message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span></span>`;
      document.body.appendChild(toast);
    }
    toast.querySelector('span').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  };

  /* ---------------- Order page: prefill service from query string ---------------- */
  const serviceSelect = document.getElementById('selected_service');
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const svc = params.get('service');
    if (svc) {
      const opt = Array.from(serviceSelect.options).find(o => o.value === svc);
      if (opt) serviceSelect.value = svc;
    }
  }

});
