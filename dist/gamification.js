/* ==========================================================================
   QUALITY QUEST - GAMIFICATION ENGINE (PTS, RACHA, RÉCORD, LOGROS E INSIGNIAS)
   ========================================================================== */

(function(){
  'use strict';

  // --- 1. BADGES CATALOG ---
  var ALL_BADGES = [
    { id: 'first_step', icon: '🥉', title: 'Primeros Pasos QA', desc: 'Responde tu primera pregunta correctamente.', cat: 'Progreso', xpReward: 10 },
    { id: 'streak_3', icon: '🔥', title: 'Racha de Fuego', desc: 'Consigue una racha de 3 respuestas correctas seguidas.', cat: 'Racha', xpReward: 20 },
    { id: 'streak_5', icon: '⚡', title: 'Racha Imparable', desc: 'Consigue una racha de 5 respuestas correctas seguidas.', cat: 'Racha', xpReward: 35 },
    { id: 'streak_10', icon: '💥', title: 'Racha Legendaria', desc: 'Consigue una racha de 10 respuestas correctas seguidas.', cat: 'Racha', xpReward: 50 },
    { id: 'session_1', icon: '🎯', title: 'Explorador ISO 25010', desc: 'Acierta en preguntas y ejercicios de la Sesión 1.', cat: 'Sesión 1', xpReward: 25 },
    { id: 'session_2', icon: '🏗️', title: 'Maestro CMMI & SPICE', desc: 'Acierta en preguntas y ejercicios de la Sesión 2.', cat: 'Sesión 2', xpReward: 25 },
    { id: 'session_3', icon: '🛡️', title: 'Guardián SQA & Ágil', desc: 'Acierta en preguntas y ejercicios de la Sesión 3.', cat: 'Sesión 3', xpReward: 25 },
    { id: 'session_4', icon: '🔍', title: 'Cazador de Bugs', desc: 'Acierta en técnicas de caja negra y blanca en Sesión 4.', cat: 'Sesión 4', xpReward: 25 },
    { id: 'session_5', icon: '📝', title: 'Arquitecto de Pruebas', desc: 'Acierta en artefactos y planes de prueba de Sesión 5.', cat: 'Sesión 5', xpReward: 25 },
    { id: 'xp_50', icon: '⭐', title: 'Especialista Junior QA', desc: 'Alcanza 50 puntos de experiencia acumulados.', cat: 'Nivel', xpReward: 30 },
    { id: 'xp_100', icon: '👑', title: 'Gran Maestro QA', desc: 'Alcanza 100 puntos de experiencia acumulados.', cat: 'Nivel', xpReward: 50 },
    { id: 'final_exam', icon: '🎓', title: 'Auditor Certificado QA', desc: 'Aprueba el Examen Final Integrador con nota >= 14/20.', cat: 'Certificación', xpReward: 100 }
  ];

  // --- 2. GAMIFICATION STATE & METHODS ---
  var Gamification = {
    badgesList: ALL_BADGES,

    getXP: function() {
      return parseInt(localStorage.getItem('xp') || '0', 10);
    },
    getStreak: function() {
      return parseInt(localStorage.getItem('streak') || '0', 10);
    },
    getRecord: function() {
      return parseInt(localStorage.getItem('record') || '0', 10);
    },
    getUnlockedBadges: function() {
      try {
        return JSON.parse(localStorage.getItem('badges') || '[]');
      } catch(e) {
        return [];
      }
    },

    // Refresh all HUD chips across the page
    updateDisplays: function() {
      var xp = this.getXP();
      var streak = this.getStreak();
      var record = this.getRecord();

      // Update XP elements
      document.querySelectorAll('[data-xp], #xp').forEach(function(el){
        el.textContent = el.id === 'xp' && el.parentElement.tagName !== 'SPAN' ? 'XP ' + xp : xp;
      });

      // Update Streak elements
      document.querySelectorAll('[data-streak], #streak').forEach(function(el){
        el.textContent = el.id === 'streak' && el.parentElement.tagName !== 'SPAN' ? 'Racha ' + streak : streak;
      });

      // Update Record elements
      document.querySelectorAll('[data-record], #record').forEach(function(el){
        el.textContent = el.id === 'record' && el.parentElement.tagName !== 'SPAN' ? 'Récord ' + record : record;
      });
    },

    // Award or penalize an answer
    recordAnswer: function(isCorrect, xpBase, triggerEl, sessionNum) {
      if (xpBase === undefined) xpBase = 10;
      var xp = this.getXP();
      var streak = this.getStreak();
      var record = this.getRecord();

      // Adjust for difficulty
      var diff = localStorage.getItem('difficulty') || 'normal';
      var mult = diff === 'hard' ? 2 : (diff === 'easy' ? 0.8 : 1);
      var gained = Math.round(xpBase * mult);

      if (isCorrect) {
        xp += gained;
        streak += 1;
        if (streak > record) {
          record = streak;
          localStorage.setItem('record', record);
        }
        localStorage.setItem('xp', xp);
        localStorage.setItem('streak', streak);

        if (window.Sound) Sound.correct();
        this.showFloatingXP(triggerEl, '+' + gained + ' Pts');
      } else {
        // In easy mode, streak decreases by 1 instead of full reset
        if (diff === 'easy' && streak > 0) {
          streak = Math.max(0, streak - 1);
        } else {
          streak = 0;
        }
        localStorage.setItem('streak', streak);
        if (window.Sound) Sound.wrong();
      }

      this.updateDisplays();
      this.bumpChips();
      this.checkBadges(sessionNum);
    },

    // Floating +10 XP animation
    showFloatingXP: function(el, text) {
      if (!el) return;
      var rect = el.getBoundingClientRect();
      var tag = document.createElement('div');
      tag.className = 'xp-floating-tag';
      tag.textContent = text;
      tag.style.left = (rect.left + rect.width / 2) + 'px';
      tag.style.top = (rect.top + window.scrollY - 10) + 'px';
      document.body.appendChild(tag);
      setTimeout(function(){
        tag.classList.add('fly');
      }, 10);
      setTimeout(function(){
        if (tag.parentNode) tag.parentNode.removeChild(tag);
      }, 1200);
    },

    // Quick micro-bounce on game chips
    bumpChips: function() {
      document.querySelectorAll('.gamechip').forEach(function(chip){
        chip.classList.add('bump');
        setTimeout(function(){ chip.classList.remove('bump'); }, 300);
      });
    },

    // Check if new badges have been earned
    checkBadges: function(sessionNum) {
      var xp = this.getXP();
      var streak = this.getStreak();
      var unlocked = this.getUnlockedBadges();
      var newlyUnlocked = [];

      function tryUnlock(id) {
        if (unlocked.indexOf(id) === -1) {
          unlocked.push(id);
          newlyUnlocked.push(id);
        }
      }

      if (xp >= 10) tryUnlock('first_step');
      if (streak >= 3) tryUnlock('streak_3');
      if (streak >= 5) tryUnlock('streak_5');
      if (streak >= 10) tryUnlock('streak_10');
      if (xp >= 50) tryUnlock('xp_50');
      if (xp >= 100) tryUnlock('xp_100');

      if (sessionNum === 1) tryUnlock('session_1');
      if (sessionNum === 2) tryUnlock('session_2');
      if (sessionNum === 3) tryUnlock('session_3');
      if (sessionNum === 4) tryUnlock('session_4');
      if (sessionNum === 5) tryUnlock('session_5');

      if (newlyUnlocked.length > 0) {
        localStorage.setItem('badges', JSON.stringify(unlocked));
        var self = this;
        newlyUnlocked.forEach(function(badgeId, idx){
          setTimeout(function(){
            var bObj = ALL_BADGES.find(function(b){ return b.id === badgeId; });
            if (bObj) {
              self.showBadgeToast(bObj);
              if (window.Sound) Sound.save();
            }
          }, idx * 1000);
        });
      }
    },

    // Toast notification when badge unlocked
    showBadgeToast: function(badge) {
      var toast = document.createElement('div');
      toast.className = 'badge-toast';
      toast.innerHTML = '<span class="toast-icon">' + badge.icon + '</span>' +
                        '<div>' +
                          '<div class="toast-title">¡Insignia Desbloqueada!</div>' +
                          '<div class="toast-name">' + badge.title + '</div>' +
                        '</div>';
      document.body.appendChild(toast);
      setTimeout(function(){ toast.classList.add('show'); }, 50);
      setTimeout(function(){
        toast.classList.remove('show');
        setTimeout(function(){ if (toast.parentNode) toast.parentNode.removeChild(toast); }, 400);
      }, 4000);
    },

    // Open Badges Modal
    openBadgesModal: function() {
      if (window.Sound) Sound.open();
      var ov = document.getElementById('badges-overlay');
      if (!ov) {
        this.createBadgesModalDOM();
        ov = document.getElementById('badges-overlay');
      }
      this.renderBadgesGrid();
      ov.classList.add('show');
    },

    closeBadgesModal: function() {
      if (window.Sound) Sound.close();
      var ov = document.getElementById('badges-overlay');
      if (ov) ov.classList.remove('show');
    },

    createBadgesModalDOM: function() {
      var html = '<div id="badges-overlay" class="badges-overlay" aria-modal="true" role="dialog">' +
                   '<div class="badges-modal">' +
                     '<button id="badges-close" class="badges-close-btn" aria-label="Cerrar">&times;</button>' +
                     '<div class="badges-header">' +
                       '<span style="font-size:2.4rem">🏅</span>' +
                       '<div>' +
                         '<h2>Logros e Insignias de Calidad</h2>' +
                         '<p class="badges-sub">Aprende, responde retos y demuestra tu maestría como Ingeniero de Calidad</p>' +
                       '</div>' +
                     '</div>' +
                     '<div class="badges-summary">' +
                       '<span id="badges-count-text">0 de 12 Insignias</span>' +
                       '<div class="badges-bar-wrap"><div id="badges-bar-fill" class="badges-bar-fill"></div></div>' +
                     '</div>' +
                     '<div class="badges-grid" id="badges-grid-container"></div>' +
                     '<div class="badges-footer">' +
                       '<button id="badges-reset" class="btn-reset-badges">Reiniciar Progreso</button>' +
                       '<button id="badges-done" class="btn-done-badges">¡Continuar Aprendiendo!</button>' +
                     '</div>' +
                   '</div>' +
                 '</div>';
      var div = document.createElement('div');
      div.innerHTML = html;
      document.body.appendChild(div.firstChild);

      var self = this;
      document.getElementById('badges-close').onclick = function(){ self.closeBadgesModal(); };
      document.getElementById('badges-done').onclick = function(){ self.closeBadgesModal(); };
      document.getElementById('badges-overlay').onclick = function(e){
        if (e.target === this) self.closeBadgesModal();
      };
      document.getElementById('badges-reset').onclick = function(){
        if (confirm('¿Estás seguro de que deseas reiniciar tus Puntos, Racha y Logros para empezar de cero?')) {
          localStorage.removeItem('xp');
          localStorage.removeItem('streak');
          localStorage.removeItem('record');
          localStorage.removeItem('badges');
          self.updateDisplays();
          self.renderBadgesGrid();
          if (window.Sound) Sound.save();
        }
      };
    },

    renderBadgesGrid: function() {
      var unlocked = this.getUnlockedBadges();
      var grid = document.getElementById('badges-grid-container');
      if (!grid) return;
      grid.innerHTML = '';

      var countEl = document.getElementById('badges-count-text');
      var barFill = document.getElementById('badges-bar-fill');
      if (countEl) countEl.textContent = unlocked.length + ' de ' + ALL_BADGES.length + ' Insignias Desbloqueadas';
      if (barFill) barFill.style.width = ((unlocked.length / ALL_BADGES.length) * 100) + '%';

      ALL_BADGES.forEach(function(b){
        var isUnlocked = unlocked.indexOf(b.id) !== -1;
        var card = document.createElement('div');
        card.className = 'badge-card ' + (isUnlocked ? 'unlocked' : 'locked');
        card.innerHTML = '<div class="b-icon">' + b.icon + '</div>' +
                         '<div class="b-info">' +
                           '<div class="b-title">' + b.title + '</div>' +
                           '<div class="b-desc">' + b.desc + '</div>' +
                           '<div class="b-tag">' + (isUnlocked ? '✓ DESBLOQUEADA' : '🔒 ' + b.req) + '</div>' +
                         '</div>';
        grid.appendChild(card);
      });
    }
  };

  // Expose globally
  window.Gamification = Gamification;

  // --- 3. AUTO-ENHANCE INTERACTIVE QUESTIONS IN SESSIONS 1 TO 5 ---
  function enhanceSessionQuestions() {
    // Detect current session number from filename
    var p = location.pathname.split('/').pop() || '';
    var sessionNum = null;
    var match = p.match(/sesion-0?(\d)/i);
    if (match) sessionNum = parseInt(match[1], 10);

    // Look for all questions (.q)
    var qDivs = document.querySelectorAll('.q');
    qDivs.forEach(function(qDiv, qIdx){
      var ansEl = qDiv.querySelector('.answer');
      if (!ansEl) return;

      var ansText = ansEl.textContent || '';
      // Detect correct option letter (e.g. "Respuesta: b)" or "Correcto: b)")
      var correctLetter = null;
      var letterMatch = ansText.match(/(?:Respuesta|Correcto)\s*:\s*([a-d])\b/i);
      if (letterMatch) {
        correctLetter = letterMatch[1].toLowerCase();
      }

      var buttons = qDiv.querySelectorAll('button');
      if (buttons.length >= 2 && correctLetter) {
        // This is a multiple choice question
        buttons.forEach(function(btn){
          var btnText = btn.textContent.trim().toLowerCase();
          var btnLetter = null;
          var m = btnText.match(/^([a-d])\)/i);
          if (m) btnLetter = m[1].toLowerCase();

          // Intercept click
          btn.addEventListener('click', function(e){
            e.stopPropagation();
            if (qDiv.dataset.answered === 'true') return;
            qDiv.dataset.answered = 'true';

            var isRight = (btnLetter === correctLetter);

            buttons.forEach(function(b){
              b.disabled = true;
              var bL = (b.textContent.trim().match(/^([a-d])\)/i) || [])[1];
              if (bL && bL.toLowerCase() === correctLetter) {
                b.classList.add('correct');
              }
            });

            if (isRight) {
              btn.classList.add('correct');
              Gamification.recordAnswer(true, 10, btn, sessionNum);
            } else {
              btn.classList.add('wrong');
              Gamification.recordAnswer(false, 0, btn, sessionNum);
            }

            ansEl.classList.add('show');
          }, true);
        });
      } else if (buttons.length === 1) {
        // Exercise with a single "Ver análisis / respuesta" button
        var btn = buttons[0];
        btn.addEventListener('click', function(){
          if (qDiv.dataset.practiced !== 'true') {
            qDiv.dataset.practiced = 'true';
            Gamification.recordAnswer(true, 5, btn, sessionNum);
          }
        }, true);
      }
    });
  }

  // --- 4. BIND BADGES MODAL TO MEDAL ICON ---
  function initBadgesButton() {
    document.querySelectorAll('.gameicon').forEach(function(icon){
      icon.style.cursor = 'pointer';
      icon.setAttribute('role', 'button');
      icon.setAttribute('tabindex', '0');
      icon.setAttribute('title', 'Ver Logros e Insignias de Calidad');
      icon.onclick = function(e){
        e.preventDefault();
        Gamification.openBadgesModal();
      };
      icon.onkeydown = function(e){
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          Gamification.openBadgesModal();
        }
      };
    });
  }

  // --- 5. INITIALIZATION ---
  function startGamification() {
    Gamification.updateDisplays();
    initBadgesButton();
    enhanceSessionQuestions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startGamification);
  } else {
    startGamification();
  }

})();
