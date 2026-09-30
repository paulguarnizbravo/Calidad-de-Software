/* ==========================================================================
   QUALITY QUEST - SOUND SYSTEM (WEB AUDIO API), THEMES & SETTINGS MODAL
   ========================================================================== */

(function(){
  'use strict';

  // --- 1. WEB AUDIO API SOUND SYSTEM ---
  var audioCtx = null;

  function getAudioCtx() {
    if (!audioCtx) {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  var Sound = {
    isEnabled: function() {
      return localStorage.getItem('soundEnabled') !== 'false';
    },

    // Soft click for buttons, links, tabs
    click: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        var osc = c.createOscillator();
        var gain = c.createGain();
        osc.connect(gain);
        gain.connect(c.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, t);
        osc.frequency.exponentialRampToValueAtTime(300, t + 0.035);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);
        osc.start(t);
        osc.stop(t + 0.04);
      } catch(e) {}
    },

    // Cheerful 2-tone melodic chime for correct answer
    correct: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        [523.25, 783.99].forEach(function(freq, i){ // C5 -> G5
          var osc = c.createOscillator();
          var gain = c.createGain();
          osc.connect(gain);
          gain.connect(c.destination);
          osc.type = 'triangle';
          var noteTime = t + i * 0.11;
          osc.frequency.setValueAtTime(freq, noteTime);
          gain.gain.setValueAtTime(0.09, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.28);
          osc.start(noteTime);
          osc.stop(noteTime + 0.29);
        });
      } catch(e) {}
    },

    // Low gentle thud / buzzer for incorrect answer
    wrong: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        var osc = c.createOscillator();
        var gain = c.createGain();
        osc.connect(gain);
        gain.connect(c.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(190, t);
        osc.frequency.exponentialRampToValueAtTime(100, t + 0.22);
        gain.gain.setValueAtTime(0.07, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        osc.start(t);
        osc.stop(t + 0.23);
      } catch(e) {}
    },

    // Modal open whoosh
    open: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        var osc = c.createOscillator();
        var gain = c.createGain();
        osc.connect(gain);
        gain.connect(c.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(560, t + 0.11);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
        osc.start(t);
        osc.stop(t + 0.12);
      } catch(e) {}
    },

    // Modal close tap
    close: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        var osc = c.createOscillator();
        var gain = c.createGain();
        osc.connect(gain);
        gain.connect(c.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, t);
        osc.frequency.exponentialRampToValueAtTime(260, t + 0.08);
        gain.gain.setValueAtTime(0.035, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
        osc.start(t);
        osc.stop(t + 0.09);
      } catch(e) {}
    },

    // Celebration 3-chord fanfare for settings saved / milestones
    save: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        [523.25, 659.25, 783.99].forEach(function(freq, i){ // C5 - E5 - G5
          var osc = c.createOscillator();
          var gain = c.createGain();
          osc.connect(gain);
          gain.connect(c.destination);
          osc.type = 'sine';
          var noteTime = t + i * 0.09;
          osc.frequency.setValueAtTime(freq, noteTime);
          gain.gain.setValueAtTime(0.08, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.3);
          osc.start(noteTime);
          osc.stop(noteTime + 0.31);
        });
      } catch(e) {}
    },

    // Sparkle chime when revealing answers
    reveal: function() {
      if (!this.isEnabled()) return;
      try {
        var c = getAudioCtx(); if (!c) return;
        var t = c.currentTime;
        [659.25, 987.77].forEach(function(freq, i){ // E5 -> B5
          var osc = c.createOscillator();
          var gain = c.createGain();
          osc.connect(gain);
          gain.connect(c.destination);
          osc.type = 'sine';
          var noteTime = t + i * 0.08;
          osc.frequency.setValueAtTime(freq, noteTime);
          gain.gain.setValueAtTime(0.06, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.25);
          osc.start(noteTime);
          osc.stop(noteTime + 0.26);
        });
      } catch(e) {}
    }
  };

  // Expose Sound globally
  window.Sound = Sound;

  // --- 2. THEME ENGINE (MODO CLARO / MODO OSCURO) ---
  function applyTheme(theme) {
    var isDark = theme === 'dark';
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (document.body) document.body.classList.add('dark-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (document.body) document.body.classList.remove('dark-theme');
    }
    updateThemeButtonUI();
  }
  window.applyTheme = applyTheme;

  var SPHERE_SVG = '<span class="theme-sphere"><svg viewBox="0 0 24 24" width="22" height="22"><defs><linearGradient id="p-side" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4c1d95"/></linearGradient><linearGradient id="y-side" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fde047"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient><clipPath id="c-left"><rect x="0" y="0" width="12" height="24"/></clipPath><clipPath id="c-right"><rect x="12" y="0" width="12" height="24"/></clipPath></defs><circle cx="12" cy="12" r="10" fill="url(#p-side)" clip-path="url(#c-left)"/><circle cx="8" cy="15" r="2" fill="#3b0764" clip-path="url(#c-left)"/><circle cx="9.5" cy="8.5" r="1.3" fill="#3b0764" clip-path="url(#c-left)"/><circle cx="12" cy="12" r="10" fill="url(#y-side)" clip-path="url(#c-right)"/><circle cx="16" cy="9" r="1.8" fill="#d97706" clip-path="url(#c-right)"/><circle cx="15" cy="16" r="1.4" fill="#d97706" clip-path="url(#c-right)"/></svg></span>';

  function updateThemeButtonUI() {
    var cur = localStorage.getItem('visualTheme') || 'light';
    var isDark = cur === 'dark';
    document.querySelectorAll('.theme-toggle-btn').forEach(function(btn){
      btn.innerHTML = SPHERE_SVG;
      btn.title = isDark ? 'Modo Oscuro Activo · Cambiar a Modo Claro' : 'Modo Claro Activo · Cambiar a Modo Oscuro';
      btn.setAttribute('aria-label', btn.title);
      btn.classList.toggle('dark-active', isDark);
    });
  }

  function toggleTheme(e) {
    if (e && e.preventDefault) e.preventDefault();
    var cur = localStorage.getItem('visualTheme') || 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    localStorage.setItem('visualTheme', next);
    applyTheme(next);
    if (window.Sound) Sound.click();
    updateThemeButtonUI();
    var themeSelect = document.getElementById('st-theme');
    if (themeSelect) themeSelect.value = next;
  }
  window.toggleTheme = toggleTheme;
  window.updateThemeButtonUI = updateThemeButtonUI;


  // Apply immediately upon load
  var currentTheme = localStorage.getItem('visualTheme') || 'light';
  applyTheme(currentTheme);

  // --- 3. MODAL LOGIC (AJUSTES DEL JUEGO) ---
  function initSettingsModal() {
    var ov = document.getElementById('settings-overlay');
    if (!ov) return;

    var nameInput = document.getElementById('st-name');
    var diffSelect = document.getElementById('st-diff');
    var themeSelect = document.getElementById('st-theme');
    var soundCheck = document.getElementById('st-sound');
    var btnOpen = document.getElementById('settings-btn');
    var btnClose = document.getElementById('settings-close');
    var btnCancel = document.getElementById('settings-cancel');
    var btnSave = document.getElementById('settings-save');

    function openModal(e) {
      if (e) e.preventDefault();
      // Ensure audio context is ready
      getAudioCtx();
      Sound.open();

      // Populate current values
      if (nameInput) nameInput.value = localStorage.getItem('studentName') || '';
      if (diffSelect) diffSelect.value = localStorage.getItem('difficulty') || 'normal';
      if (themeSelect) themeSelect.value = localStorage.getItem('visualTheme') || 'light';
      if (soundCheck) soundCheck.checked = localStorage.getItem('soundEnabled') !== 'false';

      ov.classList.add('show');
      setTimeout(function(){ if (nameInput) nameInput.focus(); }, 100);
    }

    function closeModal(e) {
      if (e && e.preventDefault) e.preventDefault();
      Sound.close();
      ov.classList.remove('show');
    }

    function saveModal(e) {
      if (e) e.preventDefault();
      var nameVal = nameInput ? nameInput.value.trim() : '';
      var diffVal = diffSelect ? diffSelect.value : 'normal';
      var themeVal = themeSelect ? themeSelect.value : 'light';
      var soundVal = soundCheck && soundCheck.checked ? 'true' : 'false';

      localStorage.setItem('studentName', nameVal);
      localStorage.setItem('difficulty', diffVal);
      localStorage.setItem('visualTheme', themeVal);
      localStorage.setItem('soundEnabled', soundVal);

      applyTheme(themeVal);
      Sound.save();
      ov.classList.remove('show');

      // Dispatch event for any page components
      window.dispatchEvent(new CustomEvent('settingsUpdated', {
        detail: { studentName: nameVal, difficulty: diffVal, theme: themeVal, sound: soundVal }
      }));
    }

    // Attach button handlers
    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);
    if (btnCancel) btnCancel.addEventListener('click', closeModal);
    if (btnSave) btnSave.addEventListener('click', saveModal);

    // Close when clicking outside modal card (backdrop)
    ov.addEventListener('click', function(e){
      if (e.target === ov) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && ov.classList.contains('show')) {
        closeModal();
      }
    });

    // Live preview of theme inside modal if desired
    if (themeSelect) {
      themeSelect.addEventListener('change', function(){
        applyTheme(this.value);
        Sound.click();
      });
    }
  }

  // --- 4. GLOBAL INTERACTIVE SOUND FEEDBACK ---
  function initInteractiveSounds() {
    document.addEventListener('click', function(e){
      // Activate audio context on any user click
      getAudioCtx();

      var target = e.target;

      // Don't double sound on settings buttons or quiz options (which have their own sounds)
      if (target.closest('#settings-btn') || 
          target.closest('#settings-save') || 
          target.closest('#settings-close') || 
          target.closest('#settings-cancel') ||
          target.closest('.option')) {
        return;
      }

      // If clicked a reveal button in session pages (.q button)
      if (target.closest('.q button')) {
        Sound.reveal();
        return;
      }

      // If clicked a nav link, tab, session selector, or primary button
      if (target.closest('.topnav a') || 
          target.closest('.tabs button') || 
          target.closest('#sessions button') || 
          target.closest('.next') ||
          target.closest('.nav a') ||
          target.closest('.progress a') ||
          target.closest('.index a') ||
          target.closest('.side a') ||
          target.closest('button')) {
        Sound.click();
      }
    }, true);
  }

  // --- 5. INITIALIZE ON DOM READY ---
  
  // --- 6. AUTO-ACTIVE NAVBAR LINK ---
  function updateActiveNav() {
    var page = location.pathname.split('/').pop() || 'index.html';
    if (!page || page === '') page = 'index.html';
    document.querySelectorAll('.topnav a').forEach(function(a){
      var href = a.getAttribute('href');
      if (href === page) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){
      applyTheme(localStorage.getItem('visualTheme') || 'light');
      initSettingsModal();
      initInteractiveSounds();
      updateActiveNav();
    });
  } else {
    applyTheme(localStorage.getItem('visualTheme') || 'light');
    initSettingsModal();
    initInteractiveSounds();
      updateActiveNav();
  }

})();


  function initThemeToggleButtons() {
    updateThemeButtonUI();
    document.querySelectorAll('.theme-toggle-btn').forEach(function(btn){
      btn.onclick = toggleTheme;
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggleButtons);
  } else {
    initThemeToggleButtons();
  }
