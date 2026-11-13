// ============================================================================
// QUIZMASTER - MASTER QUESTIONS REGISTRY & METADATA
// ============================================================================

const CATEGORIES = {
  html: {
    id: "html",
    name: "HTML",
    fullName: "HyperText Markup Language",
    icon: "fab fa-html5",
    color: "#f97316", // Amber / Orange
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    glowColor: "rgba(249, 115, 22, 0.4)",
    badgeClass: "badge-html",
    description: "Structure of web pages, HTML5 semantics, multimedia, canvas, forms, and browser APIs."
  },
  css: {
    id: "css",
    name: "CSS",
    fullName: "Cascading Style Sheets",
    icon: "fab fa-css3-alt",
    color: "#0ea5e9", // Sky / Cyan
    gradient: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)",
    glowColor: "rgba(14, 165, 233, 0.4)",
    badgeClass: "badge-css",
    description: "Styling, Flexbox, CSS Grid, animations, specificity, modern layouts, and responsive design."
  },
  c: {
    id: "c",
    name: "C Programming",
    fullName: "C Programming Language",
    icon: "fas fa-code",
    color: "#3b82f6", // Blue / Indigo
    gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
    glowColor: "rgba(59, 130, 246, 0.4)",
    badgeClass: "badge-c",
    description: "Pointers, memory management, structs, preprocessors, standard I/O, and low-level logic."
  },
  python: {
    id: "python",
    name: "Python",
    fullName: "Python 3 Programming",
    icon: "fab fa-python",
    color: "#10b981", // Emerald / Green
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)",
    badgeClass: "badge-python",
    description: "Pythonic syntax, data structures, OOP, decorators, generators, and exception handling."
  },
  ds: {
    id: "ds",
    name: "Data Structures",
    fullName: "Data Structures & Algorithms",
    icon: "fas fa-network-wired",
    color: "#8b5cf6", // Purple / Violet
    gradient: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
    glowColor: "rgba(139, 92, 246, 0.4)",
    badgeClass: "badge-ds",
    description: "Stacks, queues, trees, heaps, graphs, hashing, sorting, and algorithmic complexities."
  },
  dbms: {
    id: "dbms",
    name: "DBMS",
    fullName: "Database Management Systems",
    icon: "fas fa-database",
    color: "#f43f5e", // Rose / Crimson
    gradient: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
    glowColor: "rgba(244, 63, 94, 0.4)",
    badgeClass: "badge-dbms",
    description: "Relational modeling, SQL queries, normalization, ACID transactions, and indexing."
  }
};

const DIFFICULTY_LEVELS = {
  easy: {
    id: "easy",
    name: "Easy",
    icon: "fas fa-seedling",
    badgeClass: "difficulty-easy",
    color: "#10b981",
    description: "Fundamentals, syntax, basic concepts & definitions"
  },
  moderate: {
    id: "moderate",
    name: "Moderate",
    icon: "fas fa-bolt",
    badgeClass: "difficulty-moderate",
    color: "#f59e0b",
    description: "Application, output prediction, and practical concepts"
  },
  hard: {
    id: "hard",
    name: "Hard",
    icon: "fas fa-fire",
    badgeClass: "difficulty-hard",
    color: "#ef4444",
    description: "Advanced logic, edge cases, deep theory & debugging"
  }
};

/**
 * Returns the aggregated questions object containing all categories and levels.
 */
function getMasterQuestions() {
  return {
    html: window.HTML_QUESTIONS || { easy: [], moderate: [], hard: [] },
    css: window.CSS_QUESTIONS || { easy: [], moderate: [], hard: [] },
    c: window.C_QUESTIONS || { easy: [], moderate: [], hard: [] },
    python: window.PYTHON_QUESTIONS || { easy: [], moderate: [], hard: [] },
    ds: window.DS_QUESTIONS || { easy: [], moderate: [], hard: [] },
    dbms: window.DBMS_QUESTIONS || { easy: [], moderate: [], hard: [] }
  };
}

/**
 * Validates and counts all questions in the bank.
 */
function getQuestionStats() {
  const master = getMasterQuestions();
  let total = 0;
  const perCategory = {};

  for (const catKey of Object.keys(CATEGORIES)) {
    perCategory[catKey] = {
      easy: master[catKey]?.easy?.length || 0,
      moderate: master[catKey]?.moderate?.length || 0,
      hard: master[catKey]?.hard?.length || 0,
      total: 0
    };
    perCategory[catKey].total =
      perCategory[catKey].easy + perCategory[catKey].moderate + perCategory[catKey].hard;
    total += perCategory[catKey].total;
  }

  return {
    totalQuestions: total,
    perCategory
  };
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Retrieves a randomized set of questions for a category and difficulty level.
 * Both the order of questions AND the order of options (A, B, C, D) are randomized,
 * with the correct answer pointer dynamically mapped to the new shuffled position!
 */
function getQuizQuestions(category, difficulty, count = 30) {
  const master = getMasterQuestions();
  const pool = master[category]?.[difficulty] || [];

  if (!pool.length) {
    console.error(`No questions found for ${category} - ${difficulty}`);
    return [];
  }

  // Shuffle question pool without duplicates
  const shuffledPool = shuffleArray(pool);
  const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  // Deep clone and shuffle answer options while preserving correct answer index
  return selected.map((q, idx) => {
    const originalAnswerText = q.options[q.answer];

    // Create array of option objects with original texts
    const optionsWithMeta = q.options.map((optText, oIdx) => ({
      text: optText,
      isCorrect: oIdx === q.answer
    }));

    // Shuffle options
    const shuffledOptionsMeta = shuffleArray(optionsWithMeta);
    const shuffledOptions = shuffledOptionsMeta.map(o => o.text);
    const newAnswerIndex = shuffledOptionsMeta.findIndex(o => o.isCorrect);

    return {
      ...q,
      originalId: q.id,
      quizIndex: idx + 1,
      category,
      difficulty,
      options: shuffledOptions,
      answer: newAnswerIndex,
      originalAnswerText,
      explanation: q.explanation
    };
  });
}

// Export to window for global access
window.QUIZMASTER_CONFIG = {
  CATEGORIES,
  DIFFICULTY_LEVELS,
  getMasterQuestions,
  getQuestionStats,
  getQuizQuestions,
  shuffleArray
};
