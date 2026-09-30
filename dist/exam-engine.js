/* ==========================================================================
   QUALITY QUEST - UNIVERSAL RANDOMIZED EXAM ENGINE (20 PREGUNTAS DE 100)
   Soporta: Selección Múltiple, Análisis de Casos, Verdadero/Falso y Escribir Respuesta
   ========================================================================== */

(function(){
  'use strict';

  function normalizeText(str) {
    if (!str) return '';
    return str.toLowerCase()
              .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents
              .replace(/[^a-z0-9]/g, '') // remove punctuation/spaces
              .trim();
  }

  function shuffle(array) {
    var arr = array.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  var ExamEngine = {
    // Start an exam session in a container
    mount: function(containerId, questionPool, config) {
      config = config || {};
      var container = document.getElementById(containerId);
      if (!container) return;

      var sessionNum = config.sessionNum || null;
      var title = config.title || 'Simulacro de Examen Oficial';
      var isFinal = config.isFinal || false;

      // Select 20 random questions from pool
      var shuffledPool = shuffle(questionPool || []);
      var selectedQuestions = shuffledPool.slice(0, 20);

      // Setup state
      var state = {
        questions: selectedQuestions,
        currentIdx: 0,
        correctCount: 0,
        userAnswers: [],
        answered: false,
        maxLives: 3,
        currentLives: 3,
        timeRemaining: 20 * 60,
        timerInterval: null
      };

      // Set difficulty parameters
      var diff = localStorage.getItem('difficulty') || 'normal';
      if (diff === 'easy') {
        state.maxLives = 5;
        state.timeRemaining = 30 * 60;
      } else if (diff === 'hard') {
        state.maxLives = 1;
        state.timeRemaining = 12 * 60;
      } else {
        state.maxLives = 3;
        state.timeRemaining = 20 * 60;
      }
      state.currentLives = state.maxLives;

      // Render base shell
      container.innerHTML = 
        '<div class="exam-engine-wrap" id="' + containerId + '-engine">' +
          '<div class="exam-hud">' +
            '<div class="hud-chip"><i>📊</i><span>Pregunta: <b class="ee-progress">1 / 20</b></span></div>' +
            '<div class="hud-chip"><i>❤️</i><span>Vidas: <b class="ee-lives">❤️❤️❤️</b></span></div>' +
            '<div class="hud-chip"><i>⭐</i><span>Aciertos: <b class="ee-score">0 (0/20)</b></span></div>' +
            '<div class="hud-timer ee-timer">⏱️ 20:00</div>' +
            '<div class="progress-bar-wrap"><div class="progress-bar-fill ee-bar"></div></div>' +
          '</div>' +
          '<div class="exam-card ee-card">' +
            '<div class="q-meta">' +
              '<span class="q-badge ee-badge">CARGANDO</span>' +
              '<span class="q-number ee-qnum">Pregunta 1 de 20</span>' +
            '</div>' +
            '<div class="ee-scenario" style="display:none;background:#f4f2ff;border-left:4px solid #6d28d9;padding:12px 16px;border-radius:8px;margin-bottom:14px;font-size:.95rem;color:#1e1a38"></div>' +
            '<h3 class="q-title ee-qtitle">Cargando...</h3>' +
            '<div class="ee-body"></div>' +
            '<div class="q-feedback ee-feedback"></div>' +
            '<div class="exam-actions">' +
              '<button class="btn-next ee-btn-next" disabled>Siguiente Pregunta ➔</button>' +
            '</div>' +
          '</div>' +
          '<div class="ee-result" style="display:none"></div>' +
        '</div>';

      var elWrap = document.getElementById(containerId + '-engine');
      var elProgress = elWrap.querySelector('.ee-progress');
      var elLives = elWrap.querySelector('.ee-lives');
      var elScore = elWrap.querySelector('.ee-score');
      var elTimer = elWrap.querySelector('.ee-timer');
      var elBar = elWrap.querySelector('.ee-bar');
      var elCard = elWrap.querySelector('.ee-card');
      var elBadge = elWrap.querySelector('.ee-badge');
      var elQnum = elWrap.querySelector('.ee-qnum');
      var elScenario = elWrap.querySelector('.ee-scenario');
      var elQtitle = elWrap.querySelector('.ee-qtitle');
      var elBody = elWrap.querySelector('.ee-body');
      var elFeedback = elWrap.querySelector('.ee-feedback');
      var elBtnNext = elWrap.querySelector('.ee-btn-next');
      var elResult = elWrap.querySelector('.ee-result');

      function updateHUD() {
        elProgress.textContent = (state.currentIdx + 1) + ' / ' + state.questions.length;
        var grade = Math.round((state.correctCount / state.questions.length) * 20);
        elScore.textContent = state.correctCount + ' (' + grade + '/20)';

        var hearts = '';
        for (var i = 0; i < state.maxLives; i++) {
          hearts += i < state.currentLives ? '❤️' : '🖤';
        }
        elLives.textContent = hearts;

        var pct = (state.currentIdx / state.questions.length) * 100;
        elBar.style.width = pct + '%';
      }

      function startTimer() {
        if (state.timerInterval) clearInterval(state.timerInterval);
        state.timerInterval = setInterval(function(){
          state.timeRemaining--;
          if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            finish(true);
          }
          var m = Math.floor(state.timeRemaining / 60);
          var s = state.timeRemaining % 60;
          elTimer.textContent = '⏱️ ' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
          elTimer.classList.toggle('urgent', state.timeRemaining <= 180);
        }, 1000);
      }

      function renderQuestion() {
        state.answered = false;
        var q = state.questions[state.currentIdx];
        elBadge.textContent = q.session || q.cat || ('SESIÓN ' + (sessionNum || 1));
        elQnum.textContent = 'Pregunta ' + (state.currentIdx + 1) + ' de ' + state.questions.length;
        elQtitle.textContent = q.title || q.text;

        if (q.scenario) {
          elScenario.style.display = 'block';
          elScenario.innerHTML = '<b>Caso de Estudio:</b> ' + q.scenario;
        } else {
          elScenario.style.display = 'none';
        }

        elFeedback.className = 'q-feedback ee-feedback';
        elFeedback.style.display = 'none';
        elFeedback.textContent = '';
        elBtnNext.disabled = true;

        elBody.innerHTML = '';

        // Render based on question type
        if (q.type === 'input') {
          // Text Input Question
          var inputWrap = document.createElement('div');
          inputWrap.style.margin = '16px 0 20px';
          inputWrap.innerHTML = 
            '<label style="font-weight:700;display:block;margin-bottom:8px;color:var(--ink)">Escribe tu respuesta a continuación:</label>' +
            '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
              '<input type="text" class="ee-text-input" placeholder="Escribe aquí el término o respuesta técnica..." style="flex:1;min-width:240px;padding:12px 14px;border:2px solid #cbd5e1;border-radius:12px;font:1rem Outfit,Arial;outline:none;background:#f8fafc">' +
              '<button type="button" class="btn-next ee-btn-submit-text" style="background:#6d28d9;padding:12px 20px">Comprobar Respuesta</button>' +
            '</div>';
          elBody.appendChild(inputWrap);

          var txtInput = inputWrap.querySelector('.ee-text-input');
          var btnSubmit = inputWrap.querySelector('.ee-btn-submit-text');
          txtInput.focus();

          function handleTextSubmit() {
            if (state.answered) return;
            var val = txtInput.value.trim();
            if (!val) return;
            state.answered = true;
            txtInput.disabled = true;
            btnSubmit.disabled = true;

            var normVal = normalizeText(val);
            var isRight = false;
            if (Array.isArray(q.correct)) {
              isRight = q.correct.some(function(ans){ return normalizeText(ans) === normVal; });
            } else {
              isRight = normalizeText(String(q.correct)) === normVal;
            }

            processAnswer(isRight, val, (Array.isArray(q.correct) ? q.correct[0] : q.correct), txtInput);
          }

          btnSubmit.onclick = handleTextSubmit;
          txtInput.onkeydown = function(e){ if (e.key === 'Enter') handleTextSubmit(); };

        } else {
          // Choice, TF or Case Question
          var optionsWrap = document.createElement('div');
          optionsWrap.className = 'q-options';

          var letters = ['A', 'B', 'C', 'D'];
          q.options.forEach(function(opt, idx){
            var btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerHTML = '<span class="opt-letter">' + (letters[idx] || (idx+1)) + '</span><span>' + opt + '</span>';
            btn.onclick = function(){
              if (state.answered) return;
              state.answered = true;

              var isRight = (idx === q.correct);
              var allBtns = optionsWrap.querySelectorAll('.opt-btn');
              allBtns.forEach(function(b, bIdx){
                b.disabled = true;
                if (bIdx === q.correct) b.classList.add('correct');
                if (bIdx === idx && !isRight) b.classList.add('wrong');
              });

              processAnswer(isRight, opt, q.options[q.correct], btn);
            };
            optionsWrap.appendChild(btn);
          });
          elBody.appendChild(optionsWrap);
        }

        updateHUD();
      }

      function processAnswer(isRight, userAnsText, correctAnsText, triggerEl) {
        var q = state.questions[state.currentIdx];
        elFeedback.style.display = 'block';

        if (isRight) {
          state.correctCount++;
          elFeedback.className = 'q-feedback ee-feedback good show';
          elFeedback.innerHTML = '<b>¡Correcto! (+10 Pts)</b> ' + (q.why || '');
          if (window.Gamification) {
            Gamification.recordAnswer(true, 10, triggerEl, sessionNum);
          }
        } else {
          state.currentLives--;
          elFeedback.className = 'q-feedback ee-feedback bad show';
          elFeedback.innerHTML = '<b>Respuesta incorrecta.</b> La respuesta correcta es: <u>' + correctAnsText + '</u>.<br>' + (q.why || '');
          if (window.Gamification) {
            Gamification.recordAnswer(false, 0, triggerEl, sessionNum);
          }
        }

        state.userAnswers.push({
          idx: state.currentIdx + 1,
          title: q.title || q.text,
          session: q.session || q.cat || ('Sesión ' + (sessionNum || 1)),
          userAns: userAnsText,
          correctAns: correctAnsText,
          isRight: isRight,
          why: q.why || ''
        });

        updateHUD();
        elBtnNext.disabled = false;

        if (state.currentLives <= 0) {
          setTimeout(function(){
            alert('Se han agotado tus vidas en el simulacro.');
            finish(false);
          }, 800);
        }
      }

      elBtnNext.onclick = function(){
        if (window.Sound) Sound.click();
        state.currentIdx++;
        if (state.currentIdx >= state.questions.length) {
          finish(false);
        } else {
          renderQuestion();
        }
      };

      function finish(timedOut) {
        clearInterval(state.timerInterval);
        if (window.Sound) Sound.save();

        elCard.style.display = 'none';
        elResult.style.display = 'block';

        var grade = Math.round((state.correctCount / state.questions.length) * 20);
        var pct = Math.round((state.correctCount / state.questions.length) * 100);
        var passed = grade >= 14;

        var studentName = localStorage.getItem('studentName') || 'Estudiante de Calidad de Software';
        var now = new Date();
        var dateStr = now.toLocaleDateString('es-ES', { day:'numeric', month:'long', year:'numeric' });

        var certHTML = '';
        if (passed) {
          certHTML = 
            '<div class="certificate-card" style="margin:25px auto">' +
              '<div class="cert-seal">🏅</div>' +
              '<div class="cert-org">UNIVERSIDAD · CALIDAD DE SOFTWARE · ' + (isFinal ? 'CERTIFICACIÓN GLOBAL' : ('SESIÓN 0' + (sessionNum||1))) + '</div>' +
              '<h2 class="cert-title" style="font-size:2rem;margin:10px 0">CERTIFICADO DE APROBACIÓN</h2>' +
              '<p class="cert-sub">Se otorga el presente reconocimiento oficial a:</p>' +
              '<div class="cert-name" style="font-size:2rem">' + studentName + '</div>' +
              '<p class="cert-desc">Por haber aprobado con nota destacada de <b>' + grade + ' / 20</b> (' + pct + '%) el ' + title + ', demostrando competencias sólidas en ingeniería de calidad.</p>' +
              '<div class="cert-footer">' +
                '<div><b>Fecha:</b><br>' + dateStr + '</div>' +
                '<div class="cert-signature"><div class="cert-signature-line"></div><b>Comité de Calidad</b><br>Quality Quest</div>' +
                '<div><b>Código:</b><br><span style="font-family:monospace">QQ-S' + (sessionNum||'F') + '-' + Math.floor(Math.random()*899999+100000) + '</span></div>' +
              '</div>' +
            '</div>';
        }

        var reviewHTML = '';
        state.userAnswers.forEach(function(ans){
          reviewHTML += 
            '<div class="review-item ' + (ans.isRight ? 'pass' : 'fail') + '" style="margin-bottom:10px">' +
              '<div style="font-weight:700;font-size:.8rem;color:#64748b;text-transform:uppercase">' + ans.session + ' · Pregunta ' + ans.idx + '</div>' +
              '<div style="font-weight:700;font-size:1rem;margin:4px 0 6px">' + ans.title + '</div>' +
              '<div style="font-size:.9rem"><b>Tu respuesta:</b> <span style="color:' + (ans.isRight?'#059669':'#dc2626') + '">' + ans.userAns + ' (' + (ans.isRight ? '✓ Correcta' : '✗ Incorrecta') + ')</span></div>' +
              (!ans.isRight ? '<div style="font-size:.9rem;color:#059669;margin-top:2px"><b>Respuesta correcta:</b> ' + ans.correctAns + '</div>' : '') +
              '<div style="font-size:.85rem;color:#475569;background:#f1f5f9;padding:6px 10px;border-radius:6px;margin-top:6px"><b>Justificación:</b> ' + ans.why + '</div>' +
            '</div>';
        });

        elResult.innerHTML = 
          '<div class="result-banner">' +
            '<div class="grade-circle" style="background:' + (passed?'linear-gradient(135deg,#059669,#10b981)':'linear-gradient(135deg,#dc2626,#991b1b)') + '">' + grade + '<small>/20</small></div>' +
            '<h2 style="font-size:1.8rem;margin:0 0 8px;color:' + (passed?'#059669':'#dc2626') + '">' + (passed ? '¡Aprobado con Éxito!' : 'Simulacro No Aprobado') + '</h2>' +
            '<p style="color:#64748b;font-size:1.05rem;max-width:650px;margin:0 auto 20px">' +
              (passed ? 'Has superado el examen alcanzando el ' + pct + '% de aciertos en las 20 preguntas seleccionadas aleatoriamente del banco.' :
                        'Obtuviste ' + pct + '% de aciertos. Recuerda que la nota mínima de aprobación es 14 / 20. Puedes generar un nuevo examen aleatorio de 20 preguntas para volver a intentar.') +
            '</p>' +
            '<div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:25px">' +
              (passed ? '<button class="btn-next" onclick="window.print()" style="background:#059669">🖨️ Imprimir / Guardar Certificado</button>' : '') +
              '<button class="btn-next ee-btn-restart" style="background:#6d28d9">🔄 Generar Nuevo Examen (20 Preguntas Aleatorias del Banco)</button>' +
            '</div>' +
            certHTML +
            '<div style="text-align:left;margin-top:30px">' +
              '<h3 style="font-size:1.3rem;margin-bottom:12px">Revisión de tus 20 Preguntas:</h3>' +
              reviewHTML +
            '</div>' +
          '</div>';

        elResult.querySelector('.ee-btn-restart').onclick = function(){
          if (window.Sound) Sound.click();
          ExamEngine.mount(containerId, questionPool, config);
        };
      }

      // Initial kick off
      updateHUD();
      renderQuestion();
      startTimer();
    }
  };

  window.ExamEngine = ExamEngine;

})();
