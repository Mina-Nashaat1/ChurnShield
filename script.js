document.addEventListener('DOMContentLoaded', () => {

  // ─── Active nav link ─────────────────────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  // ─── Navbar shadow on scroll ─────────────────────────────────────────────
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ─── Mobile hamburger ────────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ─── KPI count-up animation ──────────────────────────────────────────────
  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  function animateKpi(el) {
    const end       = parseFloat(el.dataset.target);
    const finalText = el.dataset.finalText || null;
    const isCur     = el.dataset.currency === 'true';
    const suffix    = el.dataset.suffix || '';
    const dur       = 2200;
    let   t0        = null;

    const tick = (now) => {
      if (!t0) t0 = now;
      const progress = Math.min((now - t0) / dur, 1);
      const val = Math.round(easeOutQuart(progress) * end);
      el.textContent = (isCur ? '$' : '') + val.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else if (finalText) {
        el.textContent = finalText;
      }
    };
    requestAnimationFrame(tick);
  }

  // Animate KPI progress bars
  function animateBars() {
    document.querySelectorAll('.kpi-bar-fill').forEach(bar => {
      const w = bar.dataset.width || 50;
      // small delay so transition is visible
      requestAnimationFrame(() => {
        bar.style.width = w + '%';
      });
    });
  }

  const kpiObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.kpi-animate').forEach(animateKpi);
      animateBars();
      kpiObserver.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  const kpiGrid = document.querySelector('.kpi-grid');
  if (kpiGrid) kpiObserver.observe(kpiGrid);

  // ─── Dashboard image gallery ─────────────────────────────────────────────
  const img      = document.getElementById('dashboard-image');
  const skeleton = document.getElementById('gallery-skeleton');
  const caption  = document.getElementById('dashboard-caption');
  const urlBar   = document.getElementById('url-display');
  const tabs     = document.querySelectorAll('.tab-btn');

  if (img && skeleton) {
    const showImage = () => {
      skeleton.style.display = 'none';
      img.classList.add('loaded');
    };

    img.addEventListener('load', showImage);
    if (img.complete) showImage();

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;

        tabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Fade out
        img.classList.remove('loaded');
        skeleton.style.display = 'block';

        // Swap after brief transition
        setTimeout(() => {
          img.src = btn.dataset.image;
          if (caption) caption.textContent = btn.dataset.caption;
          if (urlBar && btn.dataset.url) urlBar.textContent = btn.dataset.url;
        }, 180);
      });
    });
  }

});
