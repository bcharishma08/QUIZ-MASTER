// ============================================================================
// QUIZMASTER - CORE APPLICATION LOGIC
// ============================================================================

(function () {
  'use strict';

  if (window.__QUIZMASTER_APP_INITIALIZED__) {
    return;
  }
  window.__QUIZMASTER_APP_INITIALIZED__ = true;

  // --------------------------------------------------------------------------
  // Application State
  // --------------------------------------------------------------------------
  const state = {
    currentView: 'dashboard', // 'dashboard' | 'quiz' | 'result'
    soundEnabled: true,
    theme: 'dark',
    history: [],

    // Active Quiz Session State
    activeQuiz: {
      category: null,
      difficulty: null,
      questionCount: 30,
      questions: [],
      currentIndex: 0,
      userAnswers: {},       // { [questionIndex]: selectedOptionIndex }
      flagged: new Set(),    // Set of questionIndices marked for review
      visited: new Set(),    // Set of questionIndices visited
      timeRemaining: 0,      // in seconds
      totalSeconds: 0,
      timerId: null,
      startTime: null,
      endTime: null,
      isSubmitting: false
    },

    // Review Session State
    lastResult: null,
    reviewFilter: 'all'     // 'all' | 'incorrect' | 'correct' | 'flagged'
  };

  // Local Storage Keys
  const STORAGE_KEYS = {
    HISTORY: 'quizmaster_history_v1',
    SETTINGS: 'quizmaster_settings_v1'
  };

  // --------------------------------------------------------------------------
  // Web Audio API Sound Synthesizer (100% Offline / No External Audio Files)
  // --------------------------------------------------------------------------
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const sounds = {
    click: () => {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch (e) {}
    },

    select: () => {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch (e) {}
    },

    flag: () => {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.setValueAtTime(780, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch (e) {}
    },

    warning: () => {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(350, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } catch (e) {}
    },

    fanfare: () => {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
          gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.1);
          osc.stop(ctx.currentTime + idx * 0.1 + 0.35);
        });
      } catch (e) {}
    }
  };

  // --------------------------------------------------------------------------
  // Storage Management
  // --------------------------------------------------------------------------
  function loadFromStorage() {
    try {
      const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
      if (savedHistory) {
        state.history = JSON.parse(savedHistory);
      }
      const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        if (typeof settings.soundEnabled === 'boolean') state.soundEnabled = settings.soundEnabled;
        if (settings.theme) state.theme = settings.theme;
      }
    } catch (err) {
      console.warn('Storage read failed:', err);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(
        STORAGE_KEYS.SETTINGS,
        JSON.stringify({
          soundEnabled: state.soundEnabled,
          theme: state.theme
        })
      );
    } catch (err) {
      console.warn('Settings write failed:', err);
    }
  }

  function saveHistoryRecord(record) {
    state.history.unshift(record);
    if (state.history.length > 50) {
      state.history = state.history.slice(0, 50); // Keep latest 50
    }
    try {
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
    } catch (err) {
      console.warn('History write failed:', err);
    }
  }

  function clearAllHistory() {
    state.history = [];
    try {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
    } catch (err) {}
    renderHistoryTable();
    updateMetricsRibbon();
  }

  // --------------------------------------------------------------------------
  // Theme Management
  // --------------------------------------------------------------------------
  function applyTheme(themeName) {
    state.theme = themeName;
    if (themeName === 'light') {
      document.body.classList.add('light-theme');
      const icon = document.querySelector('#themeToggleBtn i');
      if (icon) icon.className = 'fas fa-sun';
    } else {
      document.body.classList.remove('light-theme');
      const icon = document.querySelector('#themeToggleBtn i');
      if (icon) icon.className = 'fas fa-moon';
    }
    saveSettings();
  }

  function toggleTheme() {
    sounds.click();
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.innerHTML = state.soundEnabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>';
      btn.title = state.soundEnabled ? 'Mute Sounds' : 'Unmute Sounds';
    }
    if (state.soundEnabled) sounds.click();
    saveSettings();
  }

  // --------------------------------------------------------------------------
  // View Router
  // --------------------------------------------------------------------------
  function switchView(viewName) {
    state.currentView = viewName;
    const sections = {
      dashboard: document.getElementById('dashboardView'),
      quiz: document.getElementById('quizView'),
      result: document.getElementById('resultView')
    };

    Object.keys(sections).forEach(key => {
      if (sections[key]) {
        if (key === viewName) {
          sections[key].classList.add('active');
        } else {
          sections[key].classList.remove('active');
        }
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewName === 'dashboard') {
      updateMetricsRibbon();
      renderHistoryTable();
    }
  }

  // --------------------------------------------------------------------------
  // Dashboard Rendering & Metrics
  // --------------------------------------------------------------------------
  function updateMetricsRibbon() {
    const stats = window.QUIZMASTER_CONFIG.getQuestionStats();

    // Total questions metric
    const totalEl = document.getElementById('metricTotalQuestions');
    if (totalEl) totalEl.textContent = stats.totalQuestions;

    // Tests Taken
    const testsEl = document.getElementById('metricTestsTaken');
    if (testsEl) testsEl.textContent = state.history.length;

    // Average Score
    const avgEl = document.getElementById('metricAvgScore');
    if (avgEl) {
      if (state.history.length === 0) {
        avgEl.textContent = '0%';
      } else {
        const sum = state.history.reduce((acc, curr) => acc + curr.percentage, 0);
        const avg = Math.round(sum / state.history.length);
        avgEl.textContent = `${avg}%`;
      }
    }

    // High / Perfect Scores
    const masteryEl = document.getElementById('metricMasteryCount');
    if (masteryEl) {
      const highScores = state.history.filter(h => h.percentage >= 90).length;
      masteryEl.textContent = highScores;
    }
  }

  function renderCategoryCards() {
    const container = document.getElementById('categoryGrid');
    if (!container) return;

    const master = window.QUIZMASTER_CONFIG.getMasterQuestions();
    const categories = window.QUIZMASTER_CONFIG.CATEGORIES;
    let html = '';

    for (const [catKey, cat] of Object.entries(categories)) {
      const easyCount = master[catKey]?.easy?.length || 0;
      const modCount = master[catKey]?.moderate?.length || 0;
      const hardCount = master[catKey]?.hard?.length || 0;
      const totalCatQuestions = easyCount + modCount + hardCount;

      html += `
        <div class="category-card" 
             style="--category-gradient: ${cat.gradient}; --category-glow: ${cat.glowColor};"
             data-category="${catKey}">
          <div class="category-card-top">
            <div class="cat-icon-wrapper">
              <i class="${cat.icon}"></i>
            </div>
            <div class="cat-meta-badges">
              <span class="badge-pill badge-question-count">${totalCatQuestions} Questions</span>
              <span class="badge-pill" style="background: rgba(255,255,255,0.06); color: ${cat.color}; font-size: 0.7rem;">6 Subjects</span>
            </div>
          </div>
          
          <h3 class="category-title">${cat.name}</h3>
          <p class="category-description">${cat.description}</p>
          
          <div class="difficulty-selector-block">
            <div class="diff-label-row">
              <span>Select Difficulty Level</span>
              <span>Available</span>
            </div>
            
            <div class="level-button-grid">
              <button class="level-chip-btn level-easy selected" data-cat="${catKey}" data-level="easy" title="Easy: ${easyCount} Questions">
                <i class="fas fa-seedling"></i>
                <span>Easy</span>
                <span class="level-count">${easyCount} Qs</span>
              </button>
              <button class="level-chip-btn level-moderate" data-cat="${catKey}" data-level="moderate" title="Moderate: ${modCount} Questions">
                <i class="fas fa-bolt"></i>
                <span>Moderate</span>
                <span class="level-count">${modCount} Qs</span>
              </button>
              <button class="level-chip-btn level-hard" data-cat="${catKey}" data-level="hard" title="Hard: ${hardCount} Questions">
                <i class="fas fa-fire"></i>
                <span>Hard</span>
                <span class="level-count">${hardCount} Qs</span>
              </button>
            </div>
            
            <button class="btn-start-subject" data-cat="${catKey}">
              <i class="fas fa-play"></i> Start ${cat.name} Quiz
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    // Attach listeners to level buttons inside cards
    container.querySelectorAll('.level-chip-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        sounds.click();
        const parentCard = btn.closest('.category-card');
        parentCard.querySelectorAll('.level-chip-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Attach listeners to Start Quiz buttons on cards
    container.querySelectorAll('.btn-start-subject').forEach(btn => {
      btn.addEventListener('click', e => {
        sounds.click();
        const catKey = btn.getAttribute('data-cat');
        const parentCard = btn.closest('.category-card');
        const selectedLevelBtn = parentCard.querySelector('.level-chip-btn.selected');
        const level = selectedLevelBtn ? selectedLevelBtn.getAttribute('data-level') : 'easy';
        openQuizLaunchModal(catKey, level);
      });
    });
  }

  function renderHistoryTable() {
    const tbody = document.getElementById('historyTableBody');
    const emptyState = document.getElementById('emptyHistoryState');
    const tableWrapper = document.getElementById('historyTableWrapper');
    if (!tbody) return;

    if (!state.history.length) {
      if (emptyState) emptyState.style.display = 'block';
      if (tableWrapper) tableWrapper.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (tableWrapper) tableWrapper.style.display = 'block';

    const categories = window.QUIZMASTER_CONFIG.CATEGORIES;

    tbody.innerHTML = state.history
      .map((item, index) => {
        const cat = categories[item.category] || { name: item.category, color: '#6366f1' };
        const diffColor =
          item.difficulty === 'easy'
            ? 'var(--success)'
            : item.difficulty === 'moderate'
            ? 'var(--warning)'
            : 'var(--danger)';

        let gradeBadge = '';
        if (item.percentage >= 90) {
          gradeBadge = '<span class="badge-pill" style="background: rgba(16,185,129,0.2); color: #34d399;">Master 🏆</span>';
        } else if (item.percentage >= 75) {
          gradeBadge = '<span class="badge-pill" style="background: rgba(59,130,246,0.2); color: #60a5fa;">Expert 🌟</span>';
        } else if (item.percentage >= 50) {
          gradeBadge = '<span class="badge-pill" style="background: rgba(245,158,11,0.2); color: #fbbf24;">Pass 📚</span>';
        } else {
          gradeBadge = '<span class="badge-pill" style="background: rgba(239,68,68,0.2); color: #f87171;">Review 💪</span>';
        }

        return `
          <tr>
            <td><strong>#${state.history.length - index}</strong></td>
            <td>${item.dateFormatted}</td>
            <td>
              <span class="badge-pill" style="background: rgba(255,255,255,0.08); color: ${cat.color};">
                ${cat.name}
              </span>
            </td>
            <td>
              <span class="badge-pill" style="color: ${diffColor}; text-transform: capitalize;">
                ${item.difficulty}
              </span>
            </td>
            <td><strong>${item.score} / ${item.total}</strong></td>
            <td><strong>${item.percentage}%</strong></td>
            <td>${gradeBadge}</td>
            <td>${item.timeSpentFormatted || '--'}</td>
            <td>
              <button class="btn-secondary btn-sm" onclick="window.quizMasterApp.retakeFromHistory('${item.category}', '${item.difficulty}', ${item.total})">
                <i class="fas fa-redo"></i> Retake
              </button>
            </td>
          </tr>
        `;
      })
      .join('');
  }

  // --------------------------------------------------------------------------
  // Quiz Launch Modal
  // --------------------------------------------------------------------------
  function openQuizLaunchModal(category, difficulty) {
    const modal = document.getElementById('quizLaunchModal');
    if (!modal) return;

    const catInfo = window.QUIZMASTER_CONFIG.CATEGORIES[category];
    const diffInfo = window.QUIZMASTER_CONFIG.DIFFICULTY_LEVELS[difficulty];

    const titleEl = document.getElementById('launchModalTitle');
    const descEl = document.getElementById('launchModalDesc');
    const hiddenCat = document.getElementById('modalSelectedCategory');
    const hiddenDiff = document.getElementById('modalSelectedDiff');

    if (titleEl) titleEl.innerHTML = `<i class="${catInfo.icon}" style="color:${catInfo.color}"></i> Start ${catInfo.name} Quiz`;
    if (descEl) {
      descEl.innerHTML = `
        You are about to start a <strong>${diffInfo.name} Level</strong> quiz on <strong>${catInfo.fullName}</strong>.
        Questions and options will be randomized. Each correct answer earns <strong>1 mark</strong>.
      `;
    }

    if (hiddenCat) hiddenCat.value = category;
    if (hiddenDiff) hiddenDiff.value = difficulty;

    modal.classList.add('active');
  }

  function closeQuizLaunchModal() {
    sounds.click();
    const modal = document.getElementById('quizLaunchModal');
    if (modal) modal.classList.remove('active');
  }

  // --------------------------------------------------------------------------
  // Active Quiz Lifecycle
  // --------------------------------------------------------------------------
  function startQuiz(category, difficulty, count = 30) {
    sounds.click();
    closeQuizLaunchModal();

    const questions = window.QUIZMASTER_CONFIG.getQuizQuestions(category, difficulty, count);

    if (!questions || !questions.length) {
      alert(`Could not load questions for ${category} - ${difficulty}. Please try another category.`);
      return;
    }

    // Allocate time: 1 minute per question (e.g. 30 questions = 30 minutes = 1800s)
    const totalSeconds = questions.length * 60;

    // Reset active quiz state
    state.activeQuiz = {
      category,
      difficulty,
      questionCount: questions.length,
      questions,
      currentIndex: 0,
      userAnswers: {},
      flagged: new Set(),
      visited: new Set([0]),
      timeRemaining: totalSeconds,
      totalSeconds,
      timerId: null,
      startTime: Date.now(),
      endTime: null,
      isSubmitting: false
    };

    // Render Quiz Topbar metadata
    const catMeta = window.QUIZMASTER_CONFIG.CATEGORIES[category];
    const diffMeta = window.QUIZMASTER_CONFIG.DIFFICULTY_LEVELS[difficulty];

    const badgeCat = document.getElementById('quizSubjectBadge');
    if (badgeCat) {
      badgeCat.innerHTML = `<i class="${catMeta.icon}"></i> ${catMeta.name}`;
      badgeCat.style.background = catMeta.gradient;
    }

    const badgeDiff = document.getElementById('quizDiffBadge');
    if (badgeDiff) {
      badgeDiff.innerHTML = `<i class="${diffMeta.icon}"></i> ${diffMeta.name}`;
      badgeDiff.className = `badge-pill quiz-diff-badge ${diffMeta.badgeClass}`;
      badgeDiff.style.color = diffMeta.color;
      badgeDiff.style.border = `1px solid ${diffMeta.color}`;
      badgeDiff.style.background = 'rgba(255,255,255,0.06)';
    }

    // Start Timer
    startTimer();

    // Render Question Palette
    renderPalette();

    // Render Question 0
    renderCurrentQuestion();

    // Switch view
    switchView('quiz');
  }

  function startTimer() {
    if (state.activeQuiz.timerId) {
      clearInterval(state.activeQuiz.timerId);
    }

    updateTimerDisplay();

    state.activeQuiz.timerId = setInterval(() => {
      state.activeQuiz.timeRemaining--;

      updateTimerDisplay();

      if (state.activeQuiz.timeRemaining <= 0) {
        clearInterval(state.activeQuiz.timerId);
        sounds.warning();
        alert("Time is up! Submitting your quiz now.");
        submitQuiz(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerBox = document.getElementById('quizTimerBox');
    const timerText = document.getElementById('timerDisplay');
    if (!timerText || !timerBox) return;

    const remaining = Math.max(0, state.activeQuiz.timeRemaining);
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    timerText.textContent = formatted;

    // Timer warning states
    if (remaining <= 30) {
      timerBox.className = 'quiz-timer-box timer-danger';
    } else if (remaining <= 120) {
      timerBox.className = 'quiz-timer-box timer-warning';
    } else {
      timerBox.className = 'quiz-timer-box';
    }
  }

  function renderCurrentQuestion() {
    const qIndex = state.activeQuiz.currentIndex;
    const qData = state.activeQuiz.questions[qIndex];
    const total = state.activeQuiz.questions.length;

    state.activeQuiz.visited.add(qIndex);

    // Update Progress bar
    const progressFill = document.getElementById('quizProgressFill');
    if (progressFill) {
      const percentage = Math.round(((qIndex + 1) / total) * 100);
      progressFill.style.width = `${percentage}%`;
    }

    // Update Question Number Tag
    const numberTag = document.getElementById('questionNumberTag');
    if (numberTag) {
      numberTag.textContent = `Question ${qIndex + 1} of ${total}`;
    }

    // Update Flag button state
    const flagBtn = document.getElementById('btnFlagReview');
    if (flagBtn) {
      if (state.activeQuiz.flagged.has(qIndex)) {
        flagBtn.classList.add('flagged');
        flagBtn.innerHTML = '<i class="fas fa-flag"></i> Flagged for Review';
      } else {
        flagBtn.classList.remove('flagged');
        flagBtn.innerHTML = '<i class="far fa-flag"></i> Mark for Review';
      }
    }

    // Render Question Text (highlighting code snippets if present)
    const textEl = document.getElementById('questionText');
    if (textEl) {
      textEl.innerHTML = formatQuestionText(qData.question);
    }

    // Render 4 Options (A, B, C, D)
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
      const letters = ['A', 'B', 'C', 'D'];
      const selectedAnswer = state.activeQuiz.userAnswers[qIndex];

      optionsContainer.innerHTML = qData.options
        .map((optText, oIdx) => {
          const isSelected = selectedAnswer === oIdx;
          return `
            <div class="option-item ${isSelected ? 'selected' : ''}" 
                 data-option-idx="${oIdx}"
                 tabindex="0"
                 role="button"
                 aria-label="Option ${letters[oIdx]}: ${escapeHtml(optText)}">
              <div class="option-letter">${letters[oIdx]}</div>
              <div class="option-text">${escapeHtml(optText)}</div>
              <span class="kbd-chip">${oIdx + 1}</span>
            </div>
          `;
        })
        .join('');

      // Add click listeners to options
      optionsContainer.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', () => {
          const oIdx = parseInt(item.getAttribute('data-option-idx'), 10);
          selectOption(oIdx);
        });
      });
    }

    // Update Navigation Buttons (Previous / Next / Submit)
    const prevBtn = document.getElementById('btnPrevQuestion');
    const nextBtn = document.getElementById('btnNextQuestion');

    if (prevBtn) {
      prevBtn.disabled = qIndex === 0;
    }

    if (nextBtn) {
      if (qIndex === total - 1) {
        nextBtn.innerHTML = '<i class="fas fa-check-circle"></i> Submit Quiz';
        nextBtn.className = 'btn-primary';
        nextBtn.style.background = 'var(--success)';
        nextBtn.style.borderColor = 'var(--success)';
      } else {
        nextBtn.innerHTML = 'Next Question <i class="fas fa-arrow-right"></i>';
        nextBtn.className = 'btn-primary';
        nextBtn.style.background = '';
        nextBtn.style.borderColor = '';
      }
    }

    // Refresh Palette Highlights
    renderPalette();
  }

  function formatQuestionText(rawText) {
    // If text contains newlines with code or syntax patterns, style accordingly
    if (rawText.includes('\n') && (rawText.includes(';') || rawText.includes('def ') || rawText.includes('int ') || rawText.includes('{'))) {
      const parts = rawText.split('\n');
      const header = escapeHtml(parts[0]);
      const code = escapeHtml(parts.slice(1).join('\n'));
      return `${header}<div class="code-snippet-box"><code>${code}</code></div>`;
    }
    return escapeHtml(rawText);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function selectOption(optionIndex) {
    sounds.select();
    const qIndex = state.activeQuiz.currentIndex;
    state.activeQuiz.userAnswers[qIndex] = optionIndex;

    // Update UI option selection
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
      optionsContainer.querySelectorAll('.option-item').forEach((item, idx) => {
        if (idx === optionIndex) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
    }

    renderPalette();
  }

  function clearResponse() {
    sounds.click();
    const qIndex = state.activeQuiz.currentIndex;
    delete state.activeQuiz.userAnswers[qIndex];

    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
      optionsContainer.querySelectorAll('.option-item').forEach(item => {
        item.classList.remove('selected');
      });
    }

    renderPalette();
  }

  function toggleFlagCurrentQuestion() {
    sounds.flag();
    const qIndex = state.activeQuiz.currentIndex;
    if (state.activeQuiz.flagged.has(qIndex)) {
      state.activeQuiz.flagged.delete(qIndex);
    } else {
      state.activeQuiz.flagged.add(qIndex);
    }
    renderCurrentQuestion();
  }

  function goToQuestion(targetIndex) {
    sounds.click();
    const total = state.activeQuiz.questions.length;
    if (targetIndex >= 0 && targetIndex < total) {
      state.activeQuiz.currentIndex = targetIndex;
      renderCurrentQuestion();
    }
  }

  function nextQuestion() {
    sounds.click();
    const qIndex = state.activeQuiz.currentIndex;
    const total = state.activeQuiz.questions.length;

    if (qIndex === total - 1) {
      // Last question: confirm before submission
      openSubmitConfirmModal();
    } else {
      goToQuestion(qIndex + 1);
    }
  }

  function prevQuestion() {
    sounds.click();
    const qIndex = state.activeQuiz.currentIndex;
    if (qIndex > 0) {
      goToQuestion(qIndex - 1);
    }
  }

  // --------------------------------------------------------------------------
  // Question Palette Rendering
  // --------------------------------------------------------------------------
  function renderPalette() {
    const paletteGrid = document.getElementById('paletteGrid');
    if (!paletteGrid) return;

    const total = state.activeQuiz.questions.length;
    const currentIdx = state.activeQuiz.currentIndex;
    let answeredCount = 0;
    let flaggedCount = 0;

    let buttonsHtml = '';

    for (let i = 0; i < total; i++) {
      const isCurrent = i === currentIdx;
      const isAnswered = state.activeQuiz.userAnswers[i] !== undefined;
      const isFlagged = state.activeQuiz.flagged.has(i);

      if (isAnswered) answeredCount++;
      if (isFlagged) flaggedCount++;

      let classes = ['palette-btn'];
      if (isCurrent) classes.push('current');
      if (isAnswered) classes.push('answered');
      if (isFlagged) classes.push('flagged');

      buttonsHtml += `
        <button class="${classes.join(' ')}" 
                onclick="window.quizMasterApp.goToQuestion(${i})" 
                title="Question ${i + 1}${isAnswered ? ' (Answered)' : ''}${isFlagged ? ' (Flagged)' : ''}">
          ${i + 1}
        </button>
      `;
    }

    paletteGrid.innerHTML = buttonsHtml;

    // Update Palette Summary Stats
    const answeredEl = document.getElementById('paletteAnsweredCount');
    const flaggedEl = document.getElementById('paletteFlaggedCount');
    const remainingEl = document.getElementById('paletteRemainingCount');

    if (answeredEl) answeredEl.textContent = `${answeredCount} / ${total}`;
    if (flaggedEl) flaggedEl.textContent = flaggedCount;
    if (remainingEl) remainingEl.textContent = total - answeredCount;
  }

  // --------------------------------------------------------------------------
  // Submission & Scoring Calculation
  // --------------------------------------------------------------------------
  function openSubmitConfirmModal() {
    sounds.click();
    const modal = document.getElementById('submitConfirmModal');
    if (!modal) return;

    const total = state.activeQuiz.questions.length;
    const answeredCount = Object.keys(state.activeQuiz.userAnswers).length;
    const unansweredCount = total - answeredCount;
    const flaggedCount = state.activeQuiz.flagged.size;

    const bodyEl = document.getElementById('submitModalBody');
    if (bodyEl) {
      bodyEl.innerHTML = `
        <p>Are you sure you want to finish and submit your quiz?</p>
        <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <span>Total Questions:</span> <strong>${total}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; color: var(--success);">
            <span>Answered:</span> <strong>${answeredCount}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; color: var(--warning);">
            <span>Unanswered:</span> <strong>${unansweredCount}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; color: var(--flagged);">
            <span>Marked for Review:</span> <strong>${flaggedCount}</strong>
          </div>
        </div>
      `;
    }

    modal.classList.add('active');
  }

  function closeSubmitConfirmModal() {
    sounds.click();
    const modal = document.getElementById('submitConfirmModal');
    if (modal) modal.classList.remove('active');
  }

  function submitQuiz(force = false) {
    if (!force) {
      closeSubmitConfirmModal();
    }

    if (state.activeQuiz.timerId) {
      clearInterval(state.activeQuiz.timerId);
      state.activeQuiz.timerId = null;
    }

    state.activeQuiz.endTime = Date.now();
    const totalTimeSpentSeconds = Math.max(
      1,
      Math.round((state.activeQuiz.endTime - state.activeQuiz.startTime) / 1000)
    );

    // Calculate score
    const questions = state.activeQuiz.questions;
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;

    const questionResults = questions.map((q, idx) => {
      const selected = state.activeQuiz.userAnswers[idx];
      const isSkipped = selected === undefined;
      const isCorrect = !isSkipped && selected === q.answer;

      if (isSkipped) {
        skippedCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      return {
        questionIndex: idx + 1,
        question: q.question,
        options: q.options,
        correctAnswer: q.answer,
        userAnswer: selected,
        isCorrect,
        isSkipped,
        isFlagged: state.activeQuiz.flagged.has(idx),
        explanation: q.explanation
      };
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    // Format time spent (mm:ss)
    const spentMins = Math.floor(totalTimeSpentSeconds / 60);
    const spentSecs = totalTimeSpentSeconds % 60;
    const timeSpentFormatted = `${spentMins}m ${spentSecs}s`;

    const resultRecord = {
      id: 'res_' + Date.now(),
      dateFormatted: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      category: state.activeQuiz.category,
      difficulty: state.activeQuiz.difficulty,
      score: correctCount,
      total: totalQuestions,
      percentage,
      correct: correctCount,
      incorrect: incorrectCount,
      skipped: skippedCount,
      timeSpentSeconds: totalTimeSpentSeconds,
      timeSpentFormatted,
      questionResults
    };

    state.lastResult = resultRecord;

    // Save to localStorage history
    saveHistoryRecord(resultRecord);

    // Audio & Confetti
    if (percentage >= 70) {
      sounds.fanfare();
      triggerConfetti();
    } else {
      sounds.click();
    }

    // Render Result view
    renderResultView(resultRecord);

    // Switch view
    switchView('result');
  }

  // --------------------------------------------------------------------------
  // Result & Review View Rendering
  // --------------------------------------------------------------------------
  function renderResultView(result) {
    const cat = window.QUIZMASTER_CONFIG.CATEGORIES[result.category];
    const diff = window.QUIZMASTER_CONFIG.DIFFICULTY_LEVELS[result.difficulty];

    // Badge & Feedback message based on score
    let emoji = '📚';
    let title = 'Good Effort!';
    let feedback = 'Solid attempt! Review your incorrect answers below to master these concepts.';

    if (result.percentage >= 90) {
      emoji = '🏆';
      title = 'Outstanding Mastery!';
      feedback = 'Phenomenal performance! You demonstrated exceptional programming knowledge and accuracy.';
    } else if (result.percentage >= 75) {
      emoji = '🌟';
      title = 'Great Achievement!';
      feedback = 'Impressive work! You have a strong grasp of the material with just a few areas to refine.';
    } else if (result.percentage >= 50) {
      emoji = '👍';
      title = 'Good Foundation!';
      feedback = 'You passed the benchmark! Dig deeper into the detailed explanations below to reach mastery.';
    } else {
      emoji = '💪';
      title = 'Keep Learning & Practicing!';
      feedback = 'Programming takes practice. Carefully inspect the correct solutions below and try again!';
    }

    const emojiEl = document.getElementById('resultEmoji');
    const titleEl = document.getElementById('resultTitle');
    const feedbackEl = document.getElementById('resultFeedback');

    if (emojiEl) emojiEl.textContent = emoji;
    if (titleEl) titleEl.textContent = title;
    if (feedbackEl) feedbackEl.textContent = feedback;

    // Numbers display
    const scoreNum = document.getElementById('resultScoreNumber');
    const scorePct = document.getElementById('resultScorePct');
    if (scoreNum) scoreNum.textContent = `${result.score} / ${result.total}`;
    if (scorePct) scorePct.textContent = `${result.percentage}% Accuracy`;

    // Detailed stats boxes
    const correctEl = document.getElementById('resValCorrect');
    const incorrectEl = document.getElementById('resValIncorrect');
    const skippedEl = document.getElementById('resValSkipped');
    const timeEl = document.getElementById('resValTime');

    if (correctEl) correctEl.textContent = result.correct;
    if (incorrectEl) incorrectEl.textContent = result.incorrect;
    if (skippedEl) skippedEl.textContent = result.skipped;
    if (timeEl) timeEl.textContent = result.timeSpentFormatted;

    // Render Review Section
    state.reviewFilter = 'all';
    renderReviewCards();
  }

  function setReviewFilter(filterName) {
    sounds.click();
    state.reviewFilter = filterName;

    // Update filter tabs UI
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-filter') === filterName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderReviewCards();
  }

  function renderReviewCards() {
    const container = document.getElementById('reviewCardsContainer');
    if (!container || !state.lastResult) return;

    const letters = ['A', 'B', 'C', 'D'];
    const results = state.lastResult.questionResults;
    const filter = state.reviewFilter;

    const filtered = results.filter(item => {
      if (filter === 'correct') return item.isCorrect;
      if (filter === 'incorrect') return !item.isCorrect && !item.isSkipped;
      if (filter === 'skipped') return item.isSkipped;
      if (filter === 'flagged') return item.isFlagged;
      return true; // 'all'
    });

    // Update filter counts
    const correctCount = results.filter(r => r.isCorrect).length;
    const incorrectCount = results.filter(r => !r.isCorrect && !r.isSkipped).length;
    const skippedCount = results.filter(r => r.isSkipped).length;
    const flaggedCount = results.filter(r => r.isFlagged).length;

    const btnAll = document.querySelector('.review-filter-btn[data-filter="all"]');
    const btnCor = document.querySelector('.review-filter-btn[data-filter="correct"]');
    const btnInc = document.querySelector('.review-filter-btn[data-filter="incorrect"]');
    const btnSkip = document.querySelector('.review-filter-btn[data-filter="skipped"]');
    const btnFlag = document.querySelector('.review-filter-btn[data-filter="flagged"]');

    if (btnAll) btnAll.textContent = `All Questions (${results.length})`;
    if (btnCor) btnCor.textContent = `Correct (${correctCount})`;
    if (btnInc) btnInc.textContent = `Incorrect (${incorrectCount})`;
    if (btnSkip) btnSkip.textContent = `Skipped (${skippedCount})`;
    if (btnFlag) btnFlag.textContent = `Flagged (${flaggedCount})`;

    if (!filtered.length) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md);">
          <i class="fas fa-filter" style="font-size: 2.5rem; margin-bottom: 0.85rem; opacity: 0.4;"></i>
          <p>No questions match the "${filter}" filter criteria.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map(item => {
        let cardClass = 'review-card ';
        let statusBadge = '';

        if (item.isCorrect) {
          cardClass += 'correct';
          statusBadge = '<span class="review-status-badge badge-status-correct"><i class="fas fa-check-circle"></i> Correct (+1 Mark)</span>';
        } else if (item.isSkipped) {
          cardClass += 'skipped';
          statusBadge = '<span class="review-status-badge badge-status-skipped"><i class="fas fa-minus-circle"></i> Unattempted (0 Marks)</span>';
        } else {
          cardClass += 'incorrect';
          statusBadge = '<span class="review-status-badge badge-status-incorrect"><i class="fas fa-times-circle"></i> Incorrect (0 Marks)</span>';
        }

        // Render options with clear visual checkmarks / red highlights
        const optionsHtml = item.options
          .map((opt, oIdx) => {
            const isCorrectTarget = oIdx === item.correctAnswer;
            const isUserChoice = oIdx === item.userAnswer;
            const isUserWrong = isUserChoice && !item.isCorrect;

            let optClass = 'review-option';
            let iconHtml = '';

            if (isCorrectTarget) {
              optClass += ' is-correct-target';
              iconHtml = '<span class="review-option-icon" style="color:var(--success);" title="Correct Answer"><i class="fas fa-check-circle"></i> Correct Answer</span>';
            } else if (isUserWrong) {
              optClass += ' is-user-incorrect';
              iconHtml = '<span class="review-option-icon" style="color:var(--danger);" title="Your Choice (Incorrect)"><i class="fas fa-times-circle"></i> Your Answer</span>';
            }

            return `
              <div class="${optClass}">
                <div class="option-letter" style="${isCorrectTarget ? 'background:var(--success); color:#fff; border-color:var(--success);' : isUserWrong ? 'background:var(--danger); color:#fff; border-color:var(--danger);' : ''}">
                  ${letters[oIdx]}
                </div>
                <div class="option-text">${escapeHtml(opt)}</div>
                ${iconHtml}
              </div>
            `;
          })
          .join('');

        return `
          <div class="${cardClass}">
            <div class="review-card-top">
              <span class="question-number-tag">
                Question ${item.questionIndex} of ${results.length}
                ${item.isFlagged ? '<span class="badge-pill" style="background:var(--flagged-bg); color:var(--flagged); margin-left:0.5rem;"><i class="fas fa-flag"></i> Flagged</span>' : ''}
              </span>
              ${statusBadge}
            </div>

            <div class="question-text" style="font-size: 1.15rem; margin-bottom: 1.25rem;">
              ${formatQuestionText(item.question)}
            </div>

            <div class="review-options-list">
              ${optionsHtml}
            </div>

            <div class="explanation-box">
              <div class="explanation-heading">
                <i class="fas fa-lightbulb"></i> Explanation & Reasoning:
              </div>
              <p>${escapeHtml(item.explanation)}</p>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // --------------------------------------------------------------------------
  // Pure Canvas Confetti Particle System
  // --------------------------------------------------------------------------
  function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#0ea5e9', '#10b981', '#f59e0b', '#f43f5e'];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 4 + 3,
        rotationSpeed: Math.random() * 6 - 3
      });
    }

    let animationFrameId;
    let frameCount = 0;

    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      pieces.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        ctx.restore();
      });

      if (frameCount < 180) {
        animationFrameId = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrameId);
      }
    }

    renderConfetti();
  }

  // --------------------------------------------------------------------------
  // Keyboard Navigation Shortcuts
  // --------------------------------------------------------------------------
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', e => {
      // Ignore if typing in an input or modal is active
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (state.currentView === 'quiz') {
        const key = e.key;

        // Keys 1, 2, 3, 4 to choose options
        if (key === '1' || key === 'a' || key === 'A') {
          e.preventDefault();
          selectOption(0);
        } else if (key === '2' || key === 'b' || key === 'B') {
          e.preventDefault();
          selectOption(1);
        } else if (key === '3' || key === 'c' || key === 'C') {
          e.preventDefault();
          selectOption(2);
        } else if (key === '4' || key === 'd' || key === 'D') {
          e.preventDefault();
          selectOption(3);
        } else if (key === 'ArrowRight' || key === 'Enter') {
          e.preventDefault();
          nextQuestion();
        } else if (key === 'ArrowLeft') {
          e.preventDefault();
          prevQuestion();
        } else if (key === 'f' || key === 'F') {
          e.preventDefault();
          toggleFlagCurrentQuestion();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // Modal Handlers (Exit & Clear History)
  // --------------------------------------------------------------------------
  function openExitConfirmModal() {
    sounds.click();
    const modal = document.getElementById('exitQuizModal');
    if (modal) modal.classList.add('active');
  }

  function closeExitConfirmModal() {
    sounds.click();
    const modal = document.getElementById('exitQuizModal');
    if (modal) modal.classList.remove('active');
  }

  function confirmExitQuiz() {
    sounds.click();
    if (state.activeQuiz.timerId) {
      clearInterval(state.activeQuiz.timerId);
      state.activeQuiz.timerId = null;
    }
    closeExitConfirmModal();
    switchView('dashboard');
  }

  function openClearHistoryModal() {
    sounds.click();
    const modal = document.getElementById('clearHistoryModal');
    if (modal) modal.classList.add('active');
  }

  function closeClearHistoryModal() {
    sounds.click();
    const modal = document.getElementById('clearHistoryModal');
    if (modal) modal.classList.remove('active');
  }

  function confirmClearHistory() {
    sounds.click();
    clearAllHistory();
    closeClearHistoryModal();
  }

  // --------------------------------------------------------------------------
  // Application Bootstrap
  // --------------------------------------------------------------------------
  function initApp() {
    loadFromStorage();
    applyTheme(state.theme);

    // Render components
    renderCategoryCards();
    updateMetricsRibbon();
    renderHistoryTable();

    // Event Listeners for Global Controls
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.innerHTML = state.soundEnabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>';
      soundBtn.addEventListener('click', toggleSound);
    }

    const homeBrand = document.getElementById('brandLogoHome');
    if (homeBrand) {
      homeBrand.addEventListener('click', () => {
        if (state.currentView === 'quiz') {
          openExitConfirmModal();
        } else {
          switchView('dashboard');
        }
      });
    }

    // Modal Form for Launching Quiz
    const launchForm = document.getElementById('quizLaunchForm');
    if (launchForm) {
      launchForm.addEventListener('submit', e => {
        e.preventDefault();
        const cat = document.getElementById('modalSelectedCategory').value;
        const diff = document.getElementById('modalSelectedDiff').value;
        const count = parseInt(document.getElementById('modalQuestionCount').value, 10) || 30;
        startQuiz(cat, diff, count);
      });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });

    // Quiz Navigation Buttons
    const btnPrev = document.getElementById('btnPrevQuestion');
    if (btnPrev) btnPrev.addEventListener('click', prevQuestion);

    const btnNext = document.getElementById('btnNextQuestion');
    if (btnNext) btnNext.addEventListener('click', nextQuestion);

    const btnClear = document.getElementById('btnClearResponse');
    if (btnClear) btnClear.addEventListener('click', clearResponse);

    const btnFlag = document.getElementById('btnFlagReview');
    if (btnFlag) btnFlag.addEventListener('click', toggleFlagCurrentQuestion);

    const btnExit = document.getElementById('btnQuitQuiz');
    if (btnExit) btnExit.addEventListener('click', openExitConfirmModal);

    const btnConfirmExit = document.getElementById('btnConfirmExit');
    if (btnConfirmExit) btnConfirmExit.addEventListener('click', confirmExitQuiz);

    const btnConfirmSubmit = document.getElementById('btnConfirmSubmit');
    if (btnConfirmSubmit) btnConfirmSubmit.addEventListener('click', () => submitQuiz(false));

    // Result Buttons
    const btnRetake = document.getElementById('btnRetakeQuiz');
    if (btnRetake) {
      btnRetake.addEventListener('click', () => {
        if (state.lastResult) {
          startQuiz(
            state.lastResult.category,
            state.lastResult.difficulty,
            state.lastResult.total
          );
        }
      });
    }

    const btnBackHome = document.getElementById('btnBackToDashboard');
    if (btnBackHome) {
      btnBackHome.addEventListener('click', () => {
        sounds.click();
        switchView('dashboard');
      });
    }

    // Review Filters
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        setReviewFilter(filter);
      });
    });

    // Clear History Buttons
    const btnOpenClearHist = document.getElementById('btnOpenClearHistory');
    if (btnOpenClearHist) btnOpenClearHist.addEventListener('click', openClearHistoryModal);

    const btnConfirmClear = document.getElementById('btnConfirmClearHistory');
    if (btnConfirmClear) btnConfirmClear.addEventListener('click', confirmClearHistory);

    // Keyboard Shortcuts
    initKeyboardShortcuts();

    // Resize handler for canvas confetti
    window.addEventListener('resize', () => {
      const canvas = document.getElementById('confettiCanvas');
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });

    // Start with Dashboard view
    switchView('dashboard');
  }

  // Expose clean public interface on window
  window.quizMasterApp = {
    goToQuestion,
    retakeFromHistory: (category, difficulty, count) => {
      sounds.click();
      startQuiz(category, difficulty, count);
    },
    switchView
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
