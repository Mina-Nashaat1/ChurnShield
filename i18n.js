/* ChurnShield — i18n engine
   Reads/writes language preference from localStorage,
   applies translations via data-i18n attributes, and
   handles RTL direction switching.
   ──────────────────────────────────────────────────── */
(function () {
  'use strict';

  var LS_KEY = 'cs-lang';

  function getLang() {
    try { return localStorage.getItem(LS_KEY) || 'en'; } catch (e) { return 'en'; }
  }

  function saveLang(lang) {
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
  }

  /* Apply all translations for the given language */
  function applyLang(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    /* 1. Document direction & lang attribute */
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    /* 2. Text-node translations */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* 3. Update data-caption on dashboard tab buttons */
    document.querySelectorAll('[data-caption-key]').forEach(function (btn) {
      var key = btn.getAttribute('data-caption-key');
      if (t[key] !== undefined) btn.dataset.caption = t[key];
    });

    /* 4. Refresh visible dashboard caption for the active tab */
    var activeTab = document.querySelector('.tab-btn.active');
    var captionEl = document.getElementById('dashboard-caption');
    if (activeTab && captionEl) {
      var capKey = activeTab.getAttribute('data-caption-key');
      if (capKey && t[capKey]) captionEl.textContent = t[capKey];
    }

    /* 5. Toggle button label — show the OTHER language as the action */
    var lbl = document.getElementById('lang-label');
    if (lbl) lbl.textContent = lang === 'en' ? 'AR' : 'EN';
  }

  function toggle() {
    var next = getLang() === 'en' ? 'ar' : 'en';
    saveLang(next);
    applyLang(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* Apply saved/default language on every page load */
    applyLang(getLang());

    /* Wire up the toggle button */
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });
})();
