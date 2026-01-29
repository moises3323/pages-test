const baseCategoriesEn = [
  {
    id: "life",
    title: "Living",
    site: "https://redmond.life",
    questions: [
      {
        value: 100,
        clue:
          "This product is the 'real deal' when it comes to Redmond Living's culinary ancient sea salt.",
        answer: "What is Real Salt?",
        distractors: ["What is Pink Salt?", "What is Re-Lyte?"],
      },
      {
        value: 200,
        clue: "Redmond Living creates simple, clean, and real products to help people do this.",
        answer: "What is 'Live intentionally'?",
        distractors: ["What is 'Live genuinely'?", "What is 'Live minimally'?"],
      },
      {
        value: 300,
        clue:
          "No foaming agents here, Earthpaste relies on this earthy mineral to do the cleaning.",
        answer: "What is bentonite clay?",
        distractors: ["What is kaolin clay?", "What is baking soda?"],
      },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture",
    site: "https://redmondagriculture.com",
    questions: [
      {
        value: 100,
        clue: "This group of customers are the heart of Redmond Agriculture.",
        answer: "Who are farmers, ranchers, and gardeners?",
        distractors: [
          "Who are chefs, herbalists, and florists?",
          "Who are nutritionists, coaches, and athletes?",
        ],
      },
      {
        value: 200,
        clue:
          "This Redmond Agriculture slogan reflects the belief that working with the Earth leads to healthier soil, plants, and animals.",
        answer: "What is 'Nature has it right'?",
        distractors: [
          "What is 'Grow big or go home'?",
          "What is 'Farming, the Redmond way'?",
        ],
      },
      {
        value: 300,
        clue:
          "If your garden needs a little 'soil-searching,' this amendment, rich in sulfur, potassium, and calcium, can help it bounce back naturally.",
        answer: "What is Mineralyte?",
        distractors: ["What is Real Salt?", "What is Re-Lyte?"],
      },
    ],
  },
  {
    id: "equine",
    title: "Equine",
    site: "https://redmondequine.com",
    questions: [
      {
        value: 100,
        clue:
          "Redmond Equine products are made with these three natural ingredients to support hydration and gut health.",
        answer: "What are 'salt, minerals, and bentonite clay'?",
        distractors: [
          "What are oats, flax, and alfalfa?",
          "What are vitamins, herbs, and charcoal?",
        ],
      },
      {
        value: 200,
        clue:
          "This phrase captures the Redmond Equine promise to help horses achieve optimal horse health.",
        answer: "What is 'health from the inside out'?",
        distractors: [
          "What is 'more of what matters'?",
          "What is 'naturally better for horses'?",
        ],
      },
      {
        value: 300,
        clue: "This Redmond Equine product really 'rocks.' It's a natural mineral salt lick.",
        answer: "What is 'Rock on a Rope'?",
        distractors: ["What is 'Daily Red'?", "What is 'Equine Clay Boost'?"],
      },
    ],
  },
  {
    id: "hunt",
    title: "Hunt",
    site: "https://redmondhunt.com",
    questions: [
      {
        value: 100,
        clue: "This natural Redmond Hunt product is the #1 selling deer mineral in America.",
        answer: "What is 'Trophy Rock'?",
        distractors: ["What is Redmond Rack Boost?", "What is Whitetail Wonder Salt?"],
      },
      {
        value: 200,
        clue:
          "Trophy Rock isn't just a deer magnet; it's a natural shortcut to this hunting goal.",
        answer: "What is a chance at bigger bucks?",
        distractors: [
          "What is a quieter hunting season?",
          "What is an easier trail to track?",
        ],
      },
      {
        value: 300,
        clue:
          "Providing minerals for deer isn't just about the harvest. It's about honoring this.",
        answer: "What is family hunting heritage?",
        distractors: ["What is antler growth?", "What is better trail cam footage?"],
      },
    ],
  },
  {
    id: "farms",
    title: "Farms",
    site: "https://www.redmondfarms.com",
    questions: [
      {
        value: 100,
        clue:
          "Mooove over grocery store milk! This fresh, nutrient-dense beverage skips pasteurization and goes straight from pasture to fridge.",
        answer: "What is Real Raw Milk?",
        distractors: ["What is vitamin D milk?", "What is organic almond milk?"],
      },
      {
        value: 200,
        clue: "This Redmond spot serves farm-to-table meals with fresh ingredients.",
        answer: "What is the Redmond Farm Kitchen?",
        distractors: [
          "What is the Farm-to-Fork Festival?",
          "What is the Redmond Homestead?",
        ],
      },
      {
        value: 300,
        clue:
          "According to founder Rhett Roberts, Redmond Heritage Farms was born out of a desire to serve customers like this.",
        answer: "What is people seeking optimal health?",
        distractors: [
          "What is people looking for good hydration?",
          "What is people following food trends?",
        ],
      },
    ],
  },
];

const baseCategoriesEs = [
  {
    id: "life",
    title: "Living",
    site: "https://redmond.life",
    questions: [
      {
        value: 100,
        clue:
          "Este producto es el 'verdadero' cuando se trata de la sal marina antigua culinaria de Redmond Living.",
        answer: "¿Qué es Real Salt?",
        distractors: ["¿Qué es Pink Salt?", "¿Qué es Re-Lyte?"],
      },
      {
        value: 200,
        clue:
          "Redmond Living crea productos simples, limpios y reales para ayudar a la gente a hacer esto.",
        answer: "¿Qué es 'Vivir intencionalmente'?",
        distractors: ["¿Qué es 'Vivir genuinamente'?", "¿Qué es 'Vivir minimalmente'?"],
      },
      {
        value: 300,
        clue:
          "Aquí no hay agentes espumantes; Earthpaste se apoya en este mineral terroso para limpiar.",
        answer: "¿Qué es la arcilla de bentonita?",
        distractors: ["¿Qué es la arcilla de caolín?", "¿Qué es el bicarbonato de sodio?"],
      },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture",
    site: "https://redmondagriculture.com",
    questions: [
      {
        value: 100,
        clue: "Este grupo de clientes es el corazón de Redmond Agriculture.",
        answer: "¿Quiénes son los agricultores, ganaderos y jardineros?",
        distractors: [
          "¿Quiénes son chefs, herbolarios y floristas?",
          "¿Quiénes son nutricionistas, entrenadores y atletas?",
        ],
      },
      {
        value: 200,
        clue:
          "Este eslogan de Redmond Agriculture refleja la creencia de que trabajar con la tierra conduce a suelos, plantas y animales más saludables.",
        answer: "¿Qué es 'La naturaleza lo hace bien'?",
        distractors: [
          "¿Qué es 'Crece a lo grande o vete a casa'?",
          "¿Qué es 'Agricultura al estilo Redmond'?",
        ],
      },
      {
        value: 300,
        clue:
          "Si tu jardín necesita un poco de 'búsqueda en el suelo', este acondicionador, rico en azufre, potasio y calcio, puede ayudarlo a recuperarse naturalmente.",
        answer: "¿Qué es Mineralyte?",
        distractors: ["¿Qué es Real Salt?", "¿Qué es Re-Lyte?"],
      },
    ],
  },
  {
    id: "equine",
    title: "Equine",
    site: "https://redmondequine.com",
    questions: [
      {
        value: 100,
        clue:
          "Los productos Redmond Equine están hechos con estos tres ingredientes naturales para apoyar la hidratación y la salud intestinal.",
        answer: "¿Cuáles son 'sal, minerales y arcilla de bentonita'?",
        distractors: [
          "¿Cuáles son avena, linaza y alfalfa?",
          "¿Cuáles son vitaminas, hierbas y carbón?",
        ],
      },
      {
        value: 200,
        clue:
          "Esta frase resume la promesa de Redmond Equine de ayudar a los caballos a lograr una salud óptima.",
        answer: "¿Qué es 'salud de adentro hacia afuera'?",
        distractors: [
          "¿Qué es 'más de lo que importa'?",
          "¿Qué es 'naturalmente mejor para los caballos'?",
        ],
      },
      {
        value: 300,
        clue:
          "Este producto de Redmond Equine realmente 'rockea'. Es un bloque de sal mineral natural.",
        answer: "¿Qué es 'Rock on a Rope'?",
        distractors: ["¿Qué es 'Daily Red'?", "¿Qué es 'Equine Clay Boost'?"],
      },
    ],
  },
  {
    id: "hunt",
    title: "Hunt",
    site: "https://redmondhunt.com",
    questions: [
      {
        value: 100,
        clue:
          "Este producto natural de Redmond Hunt es el mineral para venados #1 en ventas en Estados Unidos.",
        answer: "¿Qué es 'Trophy Rock'?",
        distractors: ["¿Qué es Redmond Rack Boost?", "¿Qué es Whitetail Wonder Salt?"],
      },
      {
        value: 200,
        clue:
          "Trophy Rock no es solo un imán para venados; es un atajo natural hacia este objetivo de caza.",
        answer: "¿Qué es una oportunidad de venados más grandes?",
        distractors: [
          "¿Qué es una temporada de caza más silenciosa?",
          "¿Qué es un rastro más fácil de seguir?",
        ],
      },
      {
        value: 300,
        clue:
          "Proporcionar minerales para venados no se trata solo de la cosecha. Se trata de honrar esto.",
        answer: "¿Qué es la herencia familiar de la caza?",
        distractors: ["¿Qué es el crecimiento de las astas?", "¿Qué es mejor material de cámara de rastreo?"],
      },
    ],
  },
  {
    id: "farms",
    title: "Farms",
    site: "https://www.redmondfarms.com",
    questions: [
      {
        value: 100,
        clue:
          "¡Muévete, leche del supermercado! Esta bebida fresca y rica en nutrientes se salta la pasteurización y va directo del pasto al refrigerador.",
        answer: "¿Qué es Real Raw Milk?",
        distractors: ["¿Qué es leche con vitamina D?", "¿Qué es leche de almendra orgánica?"],
      },
      {
        value: 200,
        clue:
          "Este lugar de Redmond sirve comidas de la granja a la mesa con ingredientes frescos.",
        answer: "¿Qué es la Redmond Farm Kitchen?",
        distractors: ["¿Qué es el Festival Farm-to-Fork?", "¿Qué es Redmond Homestead?"],
      },
      {
        value: 300,
        clue:
          "Según el fundador Rhett Roberts, Redmond Heritage Farms nació del deseo de servir a clientes como estos.",
        answer: "¿Qué son personas que buscan una salud óptima?",
        distractors: [
          "¿Qué son personas que buscan buena hidratación?",
          "¿Qué son personas que siguen tendencias alimentarias?",
        ],
      },
    ],
  },
];

const finalJeopardyEn = {
  category: "Redmond Origin",
  clue:
    "Real Salt, Trophy Rock, and the livestock blocks all come from an ancient inland sea deposit located in this U.S. state.",
  answer: "Utah, in the deposits near Redmond, Utah",
  distractors: ["Nevada", "Wyoming"],
};

const finalJeopardyEs = {
  category: "Origen de Redmond",
  clue:
    "Real Salt, Trophy Rock y los bloques para ganado provienen de un depósito de un antiguo mar interior ubicado en este estado de EE. UU.",
  answer: "Utah, en los depósitos cerca de Redmond, Utah",
  distractors: ["Nevada", "Wyoming"],
};

const finalJeopardy = { ...finalJeopardyEn };

const uiText = {
  en: {
    pageTitle: "Redmond Jeopardy",
    subhead: "It’s jeopardy time!",
    scoreLabel: "Score",
    remainingLabel: "Remaining:",
    finalStatus: {
      finished: "Game finished",
      unlocked: "Final unlocked",
      locked: "Final locked",
    },
    instructions: {
      title: "How to play",
      line1:
        "When you click a square, you will be given the answer to a question. Your job is to guess the correct question. You have 25 seconds to answer!",
      exampleLabel: "Example:",
      answerPrefix: "Answer -",
      answerText: "Redmond’s amazing electrolyte mix.",
      questionPrefix: "Question -",
      questionText: "What is Re-Lyte?",
      line2:
        "If you select the correct question, you win the dollar value on the card! See how high you can score.",
    },
    rulesTitle: "Quick rules",
    rules: [
      "Each square is $100, $200, or $300 depending on its row.",
      "Tap to see the clue. If it is a Daily Double, wager first.",
      "You always see 3 options (1 correct, 2 distractors); pick one to auto-score.",
      "Use each square once; when all 15 are done, Final Jeopardy unlocks.",
    ],
    buttons: {
      finalBtn: "Play Final Jeopardy",
      resetBtn: "Restart game",
      confirmWager: "Confirm",
      revealBtn: "Show answer",
      correctBtn: "Correct (+)",
      wrongBtn: "Incorrect (-)",
      closeBtn: "Back to board",
      startFinal: "Show clue",
      finalReveal: "Show answer",
      finalCorrect: "Correct (+)",
      finalWrong: "Incorrect (-)",
      finalClose: "Close",
    },
    modal: {
      dailyDouble: "Daily Double",
      wagerTitle: "Place your wager",
      wagerSubtitle: "Choose your wager (max is your current score if it exceeds the clue value).",
      choicesTitle: "Choose your answer",
      answerLabel: "Answer",
      lastChance: "Last chance",
      finalTitle: "Final Jeopardy",
      finalWagerTag: "Wager",
      finalWagerTitle: "Set your wager",
      finalWagerSubtitle: "Max: your current score (if negative, your wager must be 0).",
    },
    boardLabel: "Jeopardy board",
    toggleLabel: "Toggle language",
    finalWagerLockedTitle: "Score is negative; wager is locked at $0.",
    result: {
      eyebrow: "Game over",
      title: "Final score",
      messagePositive: "You crushed it! Want to play again?",
      messageNeutral: "Solid run. Want to try again?",
      messageNegative: "Tough round. Want to try again?",
      buttonPrimary: "Play again",
      buttonSecondary: "Close",
    },
  },
  es: {
    pageTitle: "Jeopardy de Redmond",
    subhead: "¡Es hora de Jeopardy!",
    scoreLabel: "Puntaje",
    remainingLabel: "Restantes:",
    finalStatus: {
      finished: "Juego finalizado",
      unlocked: "Final desbloqueado",
      locked: "Final bloqueado",
    },
    instructions: {
      title: "Cómo jugar",
      line1:
        "Cuando haces clic en un cuadro, se te dará la respuesta a una pregunta. Tu trabajo es adivinar la pregunta correcta. ¡Tienes 25 segundos para responder!",
      exampleLabel: "Ejemplo:",
      answerPrefix: "Respuesta -",
      answerText: "La increíble mezcla de electrolitos de Redmond.",
      questionPrefix: "Pregunta -",
      questionText: "¿Qué es Re-Lyte?",
      line2:
        "Si seleccionas la pregunta correcta, ganas el valor en dólares de la carta. ¡Mira qué tan alto puedes puntuar!",
    },
    rulesTitle: "Reglas rápidas",
    rules: [
      "Cada casilla es de $100, $200 o $300 según su fila.",
      "Toca para ver la pista. Si es un Doble diario, apuesta primero.",
      "Siempre verás 3 opciones (1 correcta, 2 distractoras); elige una para puntuar automáticamente.",
      "Usa cada casilla una sola vez; cuando las 15 estén hechas, se desbloquea Final Jeopardy.",
    ],
    buttons: {
      finalBtn: "Jugar Final Jeopardy",
      resetBtn: "Reiniciar juego",
      confirmWager: "Confirmar",
      revealBtn: "Mostrar respuesta",
      correctBtn: "Correcto (+)",
      wrongBtn: "Incorrecto (-)",
      closeBtn: "Volver al tablero",
      startFinal: "Mostrar pista",
      finalReveal: "Mostrar respuesta",
      finalCorrect: "Correcto (+)",
      finalWrong: "Incorrecto (-)",
      finalClose: "Cerrar",
    },
    modal: {
      dailyDouble: "Doble diario",
      wagerTitle: "Haz tu apuesta",
      wagerSubtitle:
        "Elige tu apuesta (el máximo es tu puntaje actual si supera el valor de la pista).",
      choicesTitle: "Elige tu respuesta",
      answerLabel: "Respuesta",
      lastChance: "Última oportunidad",
      finalTitle: "Final Jeopardy",
      finalWagerTag: "Apuesta",
      finalWagerTitle: "Define tu apuesta",
      finalWagerSubtitle: "Máx: tu puntaje actual (si es negativo, tu apuesta debe ser 0).",
    },
    boardLabel: "Tablero de Jeopardy",
    toggleLabel: "Cambiar idioma",
    finalWagerLockedTitle: "El puntaje es negativo; la apuesta queda en $0.",
    result: {
      eyebrow: "Juego terminado",
      title: "Puntaje final",
      messagePositive: "¡La rompiste! ¿Quieres jugar de nuevo?",
      messageNeutral: "Buen intento. ¿Quieres intentarlo otra vez?",
      messageNegative: "Ronda difícil. ¿Quieres intentarlo otra vez?",
      buttonPrimary: "Jugar de nuevo",
      buttonSecondary: "Cerrar",
    },
  },
};

const board = document.getElementById("board");
const remainingEl = document.getElementById("remaining");
const scoreEl = document.getElementById("score");
const finalBtn = document.getElementById("final-btn");
const resetBtn = document.getElementById("reset-btn");
const finalStatus = document.getElementById("final-status");
const pageTitle = document.getElementById("page-title");
const pageSubhead = document.getElementById("page-subhead");
const scoreLabel = document.getElementById("score-label");
const remainingLabel = document.getElementById("remaining-label");
const langToggle = document.getElementById("lang-toggle");
const langLabelEn = document.getElementById("lang-en");
const langLabelEs = document.getElementById("lang-es");
const instructionsTitle = document.getElementById("instructions-title");
const instructionsLine1 = document.getElementById("instructions-line1");
const instructionsExampleLabel = document.getElementById("instructions-example-label");
const instructionsAnswer = document.getElementById("instructions-answer");
const instructionsQuestion = document.getElementById("instructions-question");
const instructionsLine2 = document.getElementById("instructions-line2");
const rulesTitle = document.getElementById("rules-title");
const rule1 = document.getElementById("rule-1");
const rule2 = document.getElementById("rule-2");
const rule3 = document.getElementById("rule-3");
const rule4 = document.getElementById("rule-4");

const backdrop = document.getElementById("backdrop");
const clueModal = document.getElementById("clue-modal");
const modalSite = document.getElementById("modal-site");
const clueTitle = document.getElementById("clue-title");
const clueText = document.getElementById("clue-text");
const valueTag = document.getElementById("value-tag");
const dailyBanner = document.getElementById("daily-double-banner");
const wagerTitle = document.getElementById("wager-title");
const wagerSubtitle = document.getElementById("wager-subtitle");
const wagerBlock = document.getElementById("wager-block");
const wagerInput = document.getElementById("wager-input");
const confirmWagerBtn = document.getElementById("confirm-wager");
const timerBar = document.getElementById("timer-bar");
const timerLabel = document.getElementById("timer-label");
const revealBtn = document.getElementById("reveal-btn");
const answerWrap = document.getElementById("answer-wrap");
const answerText = document.getElementById("answer-text");
const answerLabel = document.getElementById("answer-label");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");
const closeBtn = document.getElementById("close-btn");
const choicesWrap = document.getElementById("choices-wrap");
const choicesEl = document.getElementById("choices");
const choicesTitle = document.getElementById("choices-title");

const finalModal = document.getElementById("final-modal");
const finalClue = document.getElementById("final-clue");
const finalAnswer = document.getElementById("final-answer");
const finalAnswerWrap = document.getElementById("final-answer-wrap");
const finalChoicesWrap = document.getElementById("final-choices-wrap");
const finalChoicesEl = document.getElementById("final-choices");
const finalChoicesTitle = document.getElementById("final-choices-title");
const finalRevealBtn = document.getElementById("final-reveal");
const finalTitle = document.getElementById("final-title");
const finalAnswerLabel = document.getElementById("final-answer-label");
const finalCorrectBtn = document.getElementById("final-correct");
const finalWrongBtn = document.getElementById("final-wrong");
const finalCloseBtn = document.getElementById("final-close");
const finalWagerInput = document.getElementById("final-wager-input");
const startFinalBtn = document.getElementById("start-final");
const finalTimerBar = document.getElementById("final-timer-bar");
const finalTimerLabel = document.getElementById("final-timer-label");
const finalEyebrow = document.getElementById("final-eyebrow");
const finalWagerTag = document.getElementById("final-wager-tag");
const finalWagerTitle = document.getElementById("final-wager-title");
const finalWagerSubtitle = document.getElementById("final-wager-subtitle");

const resultBackdrop = document.getElementById("result-backdrop");
const resultModal = document.getElementById("result-modal");
const resultEyebrow = document.getElementById("result-eyebrow");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");
const resultRestartBtn = document.getElementById("result-restart");
const resultCloseBtn = document.getElementById("result-close");
const confettiEl = document.getElementById("confetti");

let categories = [];
let remaining = 0;
let score = 0;
let dailyDoubleKey = null;
let currentQuestion = null;
let clueTimerInterval = null;
let clueTimerTimeout = null;
let finalTimerInterval = null;
let finalTimerTimeout = null;
let finalPlayed = false;
const practiceMode = true;
let currentLang = "en";
let finalState = null;

function getStoredLang() {
  try {
    const stored = localStorage.getItem("jeopardy-lang");
    return stored === "es" || stored === "en" ? stored : null;
  } catch (error) {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem("jeopardy-lang", lang);
  } catch (error) {
    // Ignore storage failures.
  }
}

function shuffle(list) {
  return list
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function cloneCategories() {
  const source = currentLang === "es" ? baseCategoriesEs : baseCategoriesEn;
  categories = source.map((cat) => ({
    ...cat,
    questions: cat.questions.map((q) => ({ ...q, used: false, dailyDouble: false })),
  }));
  remaining = categories.reduce((sum, cat) => sum + cat.questions.length, 0);
}

function pickDailyDouble() {
  const pool = [];
  categories.forEach((cat, ci) => {
    cat.questions.forEach((q, qi) => pool.push({ ci, qi }));
  });
  dailyDoubleKey = pool[Math.floor(Math.random() * pool.length)];
  const chosen = categories[dailyDoubleKey.ci].questions[dailyDoubleKey.qi];
  chosen.dailyDouble = true;
}

function renderBoard() {
  board.innerHTML = "";
  categories.forEach((cat) => {
    const col = document.createElement("div");
    col.className = "category";

    const header = document.createElement("h3");
    header.textContent = cat.title;
    col.appendChild(header);

    cat.questions.forEach((question, index) => {
      const cell = document.createElement("button");
      cell.className = "cell";
      if (question.used) {
        cell.classList.add("used");
        cell.textContent = "—";
      } else {
        cell.textContent = `$${question.value}`;
      }
      cell.dataset.category = cat.id;
      cell.dataset.index = String(index);
      cell.addEventListener("click", () => openQuestion(cat.id, index, cell));
      col.appendChild(cell);
    });

    board.appendChild(col);
  });

  if (currentQuestion) {
    const selector = `.cell[data-category="${currentQuestion.category.id}"][data-index="${currentQuestion.questionIndex}"]`;
    currentQuestion.cellEl = board.querySelector(selector);
  }
}

function applyCategoryLanguage(lang) {
  const source = lang === "es" ? baseCategoriesEs : baseCategoriesEn;
  categories.forEach((cat, ci) => {
    const srcCat = source[ci];
    if (!srcCat) return;
    cat.title = srcCat.title;
    cat.site = srcCat.site;
    cat.questions.forEach((question, qi) => {
      const srcQuestion = srcCat.questions[qi];
      if (!srcQuestion) return;
      question.clue = srcQuestion.clue;
      question.answer = srcQuestion.answer;
      question.distractors = [...srcQuestion.distractors];
    });
  });

  const finalSource = lang === "es" ? finalJeopardyEs : finalJeopardyEn;
  Object.assign(finalJeopardy, finalSource);
}

function getSelectedOptionText() {
  if (!currentQuestion || !currentQuestion.selectedOption) return null;
  const { type, index } = currentQuestion.selectedOption;
  if (type === "answer") {
    return currentQuestion.question.answer;
  }
  if (type === "distractor" && Number.isInteger(index) && index >= 0) {
    return currentQuestion.question.distractors[index];
  }
  return null;
}

function applyChoiceLockedState() {
  if (!currentQuestion || !currentQuestion.choiceLocked) return;
  const selected = getSelectedOptionText();
  if (currentQuestion.choiceButtons?.length) {
    currentQuestion.choiceButtons.forEach((btn) => {
      const correct = btn.dataset.correct === "true";
      btn.disabled = true;
      if (correct) {
        btn.classList.add("correct");
      } else if (selected && btn.textContent === selected) {
        btn.classList.add("wrong");
      } else {
        btn.classList.add("disabled");
      }
    });
  }
}

function getFinalSelectedOptionText() {
  if (!finalState || !finalState.selectedOption) return null;
  const { type, index } = finalState.selectedOption;
  if (type === "answer") {
    return finalJeopardy.answer;
  }
  if (type === "distractor" && Number.isInteger(index) && index >= 0) {
    return finalJeopardy.distractors[index];
  }
  return null;
}

function applyFinalChoiceLockedState() {
  if (!finalState || !finalState.choiceLocked) return;
  const selected = getFinalSelectedOptionText();
  if (finalState.choiceButtons?.length) {
    finalState.choiceButtons.forEach((btn) => {
      const correct = btn.dataset.correct === "true";
      btn.disabled = true;
      if (correct) {
        btn.classList.add("correct");
      } else if (selected && btn.textContent === selected) {
        btn.classList.add("wrong");
      } else {
        btn.classList.add("disabled");
      }
    });
  }
}

function updateOpenModalText() {
  if (currentQuestion) {
    clueTitle.textContent = currentQuestion.category.title;
    clueText.textContent = currentQuestion.question.clue;
    answerText.textContent = currentQuestion.question.answer;
    renderChoices(currentQuestion.question);
  }
  if (!finalModal.classList.contains("hidden")) {
    if (finalClue.textContent) {
      finalClue.textContent = finalJeopardy.clue;
    }
    finalAnswer.textContent = finalJeopardy.answer;
    renderFinalChoices();
  }
}

function applyLanguage(lang, { persist = true } = {}) {
  const normalized = lang === "es" ? "es" : "en";
  currentLang = normalized;
  const t = uiText[currentLang];

  document.documentElement.lang = currentLang;
  document.title = t.pageTitle;

  pageTitle.textContent = t.pageTitle;
  pageSubhead.textContent = t.subhead;
  scoreLabel.textContent = t.scoreLabel;
  remainingLabel.textContent = t.remainingLabel;

  if (instructionsTitle) {
    instructionsTitle.textContent = t.instructions.title;
  }
  instructionsLine1.textContent = t.instructions.line1;
  instructionsExampleLabel.textContent = t.instructions.exampleLabel;
  instructionsAnswer.innerHTML = `<strong>${t.instructions.answerPrefix}</strong> ${t.instructions.answerText}`;
  instructionsQuestion.innerHTML = `<strong>${t.instructions.questionPrefix}</strong> ${t.instructions.questionText}`;
  instructionsLine2.textContent = t.instructions.line2;

  if (rulesTitle) {
    rulesTitle.textContent = t.rulesTitle;
  }
  if (rule1) {
    rule1.textContent = t.rules[0];
  }
  if (rule2) {
    rule2.textContent = t.rules[1];
  }
  if (rule3) {
    rule3.textContent = t.rules[2];
  }
  if (rule4) {
    rule4.textContent = t.rules[3];
  }

  finalBtn.textContent = t.buttons.finalBtn;
  resetBtn.textContent = t.buttons.resetBtn;
  confirmWagerBtn.textContent = t.buttons.confirmWager;
  revealBtn.textContent = t.buttons.revealBtn;
  correctBtn.textContent = t.buttons.correctBtn;
  wrongBtn.textContent = t.buttons.wrongBtn;
  closeBtn.textContent = t.buttons.closeBtn;
  startFinalBtn.textContent = t.buttons.startFinal;
  finalRevealBtn.textContent = t.buttons.finalReveal;
  finalCorrectBtn.textContent = t.buttons.finalCorrect;
  finalWrongBtn.textContent = t.buttons.finalWrong;
  finalCloseBtn.textContent = t.buttons.finalClose;

  dailyBanner.textContent = t.modal.dailyDouble;
  wagerTitle.textContent = t.modal.wagerTitle;
  wagerSubtitle.textContent = t.modal.wagerSubtitle;
  choicesTitle.textContent = t.modal.choicesTitle;
  finalChoicesTitle.textContent = t.modal.choicesTitle;
  answerLabel.textContent = t.modal.answerLabel;
  finalAnswerLabel.textContent = t.modal.answerLabel;
  finalEyebrow.textContent = t.modal.lastChance;
  finalTitle.textContent = t.modal.finalTitle;
  finalWagerTag.textContent = t.modal.finalWagerTag;
  finalWagerTitle.textContent = t.modal.finalWagerTitle;
  finalWagerSubtitle.textContent = t.modal.finalWagerSubtitle;
  if (finalWagerInput.dataset.locked === "negative") {
    finalWagerInput.title = t.finalWagerLockedTitle;
  } else {
    finalWagerInput.removeAttribute("title");
  }

  board.setAttribute("aria-label", t.boardLabel);
  langToggle.setAttribute("aria-label", t.toggleLabel);
  langLabelEn.classList.toggle("active", currentLang === "en");
  langLabelEs.classList.toggle("active", currentLang === "es");
  langToggle.checked = currentLang === "es";

  resultEyebrow.textContent = t.result.eyebrow;
  resultTitle.textContent = t.result.title;
  resultRestartBtn.textContent = t.result.buttonPrimary;
  resultCloseBtn.textContent = t.result.buttonSecondary;

  applyCategoryLanguage(currentLang);
  renderBoard();
  updateScoreBoard();
  updateOpenModalText();
  if (!resultModal.classList.contains("hidden")) {
    updateResultText();
  }

  if (persist) {
    storeLang(currentLang);
  }
}

function updateScoreBoard() {
  scoreEl.textContent = score;
  remainingEl.textContent = remaining;
  if (finalPlayed) {
    finalStatus.textContent = uiText[currentLang].finalStatus.finished;
  } else if (remaining === 0) {
    finalStatus.textContent = uiText[currentLang].finalStatus.unlocked;
  } else {
    finalStatus.textContent = uiText[currentLang].finalStatus.locked;
  }
  finalBtn.disabled = !(remaining === 0 && !finalPlayed);
}

function resetTimer() {
  clearInterval(clueTimerInterval);
  clearTimeout(clueTimerTimeout);
  clueTimerInterval = null;
  clueTimerTimeout = null;
  timerBar.style.transition = "none";
  timerBar.style.width = "100%";
}

function startTimer(durationSec, barEl, labelEl, onExpire) {
  if (!barEl || !labelEl) return;

  clearInterval(clueTimerInterval);
  clearTimeout(clueTimerTimeout);

  barEl.style.transition = "none";
  barEl.style.width = "100%";
  requestAnimationFrame(() => {
    barEl.style.transition = `width ${durationSec}s linear`;
    barEl.style.width = "0%";
  });

  let timeLeft = durationSec;
  labelEl.textContent = `${timeLeft}s`;

  clueTimerInterval = setInterval(() => {
    timeLeft -= 1;
    labelEl.textContent = `${Math.max(0, timeLeft)}s`;
    if (timeLeft <= 0) {
      clearInterval(clueTimerInterval);
    }
  }, 1000);

  clueTimerTimeout = setTimeout(() => {
    if (typeof onExpire === "function") onExpire();
  }, durationSec * 1000);
}

function renderChoices(question) {
  choicesEl.innerHTML = "";
  choicesWrap.classList.toggle("hidden", !practiceMode);
  if (!practiceMode) {
    return;
  }

  const baseOptions = [question.answer, ...question.distractors];
  let options = [];

  if (currentQuestion && currentQuestion.question === question && currentQuestion.choiceOrder?.length) {
    options = currentQuestion.choiceOrder
      .map((entry) => {
        if (entry.type === "answer") return question.answer;
        if (entry.type === "distractor" && Number.isInteger(entry.index)) {
          return question.distractors[entry.index];
        }
        return null;
      })
      .filter(Boolean);
  } else {
    options = shuffle(baseOptions);
    if (currentQuestion && currentQuestion.question === question) {
      currentQuestion.choiceOrder = options.map((option) => {
        if (option === question.answer) {
          return { type: "answer", index: null };
        }
        return { type: "distractor", index: question.distractors.indexOf(option) };
      });
    }
  }

  currentQuestion.choiceButtons = options.map((option) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = option;
    btn.dataset.correct = option === question.answer ? "true" : "false";
    btn.addEventListener("click", () => handleChoice(btn));
    choicesEl.appendChild(btn);
    return btn;
  });

  applyChoiceLockedState();
}

function renderFinalChoices() {
  if (!finalState) return;
  finalChoicesEl.innerHTML = "";
  finalChoicesWrap.classList.toggle("hidden", !finalState.started);
  if (!finalState.started) return;

  const baseOptions = [finalJeopardy.answer, ...(finalJeopardy.distractors || [])];
  let options = [];

  if (finalState.choiceOrder?.length) {
    options = finalState.choiceOrder
      .map((entry) => {
        if (entry.type === "answer") return finalJeopardy.answer;
        if (entry.type === "distractor" && Number.isInteger(entry.index)) {
          return finalJeopardy.distractors[entry.index];
        }
        return null;
      })
      .filter(Boolean);
  } else {
    options = shuffle(baseOptions);
    finalState.choiceOrder = options.map((option) => {
      if (option === finalJeopardy.answer) {
        return { type: "answer", index: null };
      }
      return { type: "distractor", index: finalJeopardy.distractors.indexOf(option) };
    });
  }

  finalState.choiceButtons = options.map((option) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = option;
    btn.dataset.correct = option === finalJeopardy.answer ? "true" : "false";
    btn.addEventListener("click", () => handleFinalChoice(btn));
    finalChoicesEl.appendChild(btn);
    return btn;
  });

  applyFinalChoiceLockedState();
}

function openQuestion(categoryId, questionIndex, cellEl) {
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return;

  const question = category.questions[questionIndex];
  if (!question || question.used) return;

  currentQuestion = {
    category,
    question,
    questionIndex,
    cellEl,
    wager: question.value,
    choiceButtons: [],
    choiceLocked: false,
    choiceOrder: [],
    selectedOption: null,
    isCorrect: false,
  };

  modalSite.textContent = category.site.replace("https://", "");
  clueTitle.textContent = category.title;
  clueText.textContent = question.clue;
  valueTag.textContent = `$${question.value}`;
  valueTag.classList.remove("positive", "negative");
  answerText.textContent = question.answer;
  answerWrap.classList.add("hidden");
  revealBtn.disabled = false;
  dailyBanner.classList.toggle("hidden", !question.dailyDouble);
  resetTimer();
  timerLabel.textContent = "25s";

  renderChoices(question);
  correctBtn.disabled = practiceMode;
  wrongBtn.disabled = practiceMode;

  if (question.dailyDouble) {
    const maxWager = Math.max(question.value, score);
    wagerInput.max = Math.max(maxWager, question.value);
    wagerInput.value = Math.min(Math.max(question.value, 0), wagerInput.max);
    wagerBlock.classList.remove("hidden");
  } else {
    wagerBlock.classList.add("hidden");
    startQuestionTimer();
  }

  backdrop.classList.remove("hidden");
  clueModal.classList.remove("hidden");
}

function startQuestionTimer() {
  const expireAction = practiceMode ? handleChoiceTimeout : revealAnswer;
  startTimer(25, timerBar, timerLabel, expireAction);
}

function revealAnswer() {
  answerWrap.classList.remove("hidden");
  revealBtn.disabled = true;
}

function handleChoice(btn) {
  if (
    !practiceMode ||
    !currentQuestion ||
    currentQuestion.choiceLocked ||
    (currentQuestion.question.dailyDouble && !wagerBlock.classList.contains("hidden"))
  ) {
    return;
  }
  currentQuestion.choiceLocked = true;
  const isCorrect = btn.dataset.correct === "true";
  if (isCorrect) {
    currentQuestion.selectedOption = { type: "answer", index: null };
  } else {
    const distractorIndex = currentQuestion.question.distractors.indexOf(btn.textContent);
    currentQuestion.selectedOption = { type: "distractor", index: distractorIndex };
  }
  currentQuestion.isCorrect = isCorrect;
  if (currentQuestion.choiceButtons?.length) {
    currentQuestion.choiceButtons.forEach((b) => {
      const correct = b.dataset.correct === "true";
      b.disabled = true;
      b.classList.toggle("correct", correct);
      if (!correct && b === btn) {
        b.classList.add("wrong");
      }
      if (!correct && b !== btn) {
        b.classList.add("disabled");
      }
    });
  }
  revealAnswer();
  resetTimer();
  setTimeout(() => handleResult(isCorrect, { autoClose: false }), 700);
}

function handleChoiceTimeout() {
  if (!practiceMode || !currentQuestion || currentQuestion.choiceLocked) return;
  currentQuestion.choiceLocked = true;
  currentQuestion.selectedOption = null;
  currentQuestion.isCorrect = false;
  if (currentQuestion.choiceButtons?.length) {
    currentQuestion.choiceButtons.forEach((b) => {
      const correct = b.dataset.correct === "true";
      b.disabled = true;
      b.classList.toggle("correct", correct);
      if (!correct) b.classList.add("disabled");
    });
  }
  revealAnswer();
  resetTimer();
  setTimeout(() => handleResult(false, { autoClose: false }), 700);
}

function handleFinalChoice(btn) {
  if (!finalState || finalState.choiceLocked || !finalState.started) return;
  finalState.choiceLocked = true;
  clearInterval(finalTimerInterval);
  clearTimeout(finalTimerTimeout);
  const isCorrect = btn.dataset.correct === "true";
  if (isCorrect) {
    finalState.selectedOption = { type: "answer", index: null };
  } else {
    const distractorIndex = finalJeopardy.distractors.indexOf(btn.textContent);
    finalState.selectedOption = { type: "distractor", index: distractorIndex };
  }
  finalState.isCorrect = isCorrect;
  if (finalState.choiceButtons?.length) {
    finalState.choiceButtons.forEach((b) => {
      const correct = b.dataset.correct === "true";
      b.disabled = true;
      b.classList.toggle("correct", correct);
      if (!correct && b === btn) {
        b.classList.add("wrong");
      }
      if (!correct && b !== btn) {
        b.classList.add("disabled");
      }
    });
  }
  finalReveal();
  setTimeout(() => finalizeFinalResult(isCorrect), 700);
}

function handleFinalChoiceTimeout() {
  if (!finalState || finalState.choiceLocked || !finalState.started) return;
  finalState.choiceLocked = true;
  clearInterval(finalTimerInterval);
  clearTimeout(finalTimerTimeout);
  finalState.selectedOption = null;
  finalState.isCorrect = false;
  if (finalState.choiceButtons?.length) {
    finalState.choiceButtons.forEach((b) => {
      const correct = b.dataset.correct === "true";
      b.disabled = true;
      b.classList.toggle("correct", correct);
      if (!correct) b.classList.add("disabled");
    });
  }
  finalReveal();
  setTimeout(() => finalizeFinalResult(false), 700);
}

function handleResult(isCorrect, { autoClose = true } = {}) {
  if (!currentQuestion) return;
  const delta = currentQuestion.wager;
  valueTag.textContent = `${isCorrect ? "+" : "-"}$${delta}`;
  valueTag.classList.toggle("positive", isCorrect);
  valueTag.classList.toggle("negative", !isCorrect);
  score += isCorrect ? delta : -delta;
  currentQuestion.question.used = true;
  remaining -= 1;
  if (currentQuestion.cellEl) {
    currentQuestion.cellEl.classList.add("used");
    currentQuestion.cellEl.textContent = "—";
  }
  updateScoreBoard();
  if (autoClose) {
    closeClueModal();
  } else {
    correctBtn.disabled = true;
    wrongBtn.disabled = true;
  }
}

function closeClueModal() {
  resetTimer();
  backdrop.classList.add("hidden");
  clueModal.classList.add("hidden");
  choicesEl.innerHTML = "";
  choicesWrap.classList.add("hidden");
  currentQuestion = null;
}

function confirmWager() {
  if (!currentQuestion) return;
  const max = Math.max(currentQuestion.question.value, score);
  const proposed = Number(wagerInput.value) || 0;
  const wager = Math.max(0, Math.min(proposed, max));
  currentQuestion.wager = wager;
  valueTag.textContent = `$${wager}`;
  wagerBlock.classList.add("hidden");
  startQuestionTimer();
}

function resetGame() {
  closeClueModal();
  closeFinalModal();
  closeResultModal();
  finalPlayed = false;
  score = 0;
  cloneCategories();
  pickDailyDouble();
  renderBoard();
  updateScoreBoard();
}

// Final Jeopardy logic
function openFinalModal() {
  if (finalBtn.disabled) return;
  closeClueModal();
  backdrop.classList.remove("hidden");
  finalModal.classList.remove("hidden");
  finalState = {
    started: false,
    choiceButtons: [],
    choiceOrder: [],
    choiceLocked: false,
    selectedOption: null,
    isCorrect: false,
  };
  finalClue.textContent = "";
  finalAnswer.textContent = finalJeopardy.answer;
  finalAnswerWrap.classList.add("hidden");
  finalRevealBtn.disabled = true;
  finalCorrectBtn.disabled = true;
  finalWrongBtn.disabled = true;
  finalCorrectBtn.classList.add("hidden");
  finalWrongBtn.classList.add("hidden");
  startFinalBtn.disabled = false;
  finalChoicesWrap.classList.add("hidden");

  const max = Math.max(score, 0);
  finalWagerInput.max = max;
  finalWagerInput.value = max;
  finalWagerInput.disabled = max === 0;
  if (max === 0) {
    finalWagerInput.title = uiText[currentLang].finalWagerLockedTitle;
    finalWagerInput.dataset.locked = "negative";
  } else {
    finalWagerInput.removeAttribute("title");
    delete finalWagerInput.dataset.locked;
  }
  finalTimerBar.style.transition = "none";
  finalTimerBar.style.width = "100%";
  finalTimerLabel.textContent = "18s";
}

function startFinalRound() {
  if (startFinalBtn.disabled) return;
  if (!finalState) return;
  const max = Math.max(score, 0);
  const proposed = Number(finalWagerInput.value) || 0;
  const wager = Math.max(0, Math.min(proposed, max));
  finalWagerInput.value = wager;
  finalWagerInput.disabled = true;
  finalWagerInput.dataset.locked = "started";

  finalClue.textContent = finalJeopardy.clue;
  finalRevealBtn.disabled = false;
  finalCorrectBtn.disabled = true;
  finalWrongBtn.disabled = true;
  startFinalBtn.disabled = true;
  finalState.started = true;
  finalState.choiceLocked = false;
  finalState.selectedOption = null;
  finalState.isCorrect = false;
  finalState.choiceOrder = [];
  finalChoicesWrap.classList.remove("hidden");
  renderFinalChoices();

  startFinalTimer();
}

function startFinalTimer() {
  clearInterval(finalTimerInterval);
  clearTimeout(finalTimerTimeout);

  finalTimerBar.style.transition = "none";
  finalTimerBar.style.width = "100%";
  requestAnimationFrame(() => {
    finalTimerBar.style.transition = "width 18s linear";
    finalTimerBar.style.width = "0%";
  });

  let remainingTime = 18;
  finalTimerLabel.textContent = `${remainingTime}s`;

  finalTimerInterval = setInterval(() => {
    remainingTime -= 1;
    finalTimerLabel.textContent = `${Math.max(0, remainingTime)}s`;
    if (remainingTime <= 0) {
      clearInterval(finalTimerInterval);
    }
  }, 1000);

  finalTimerTimeout = setTimeout(() => handleFinalChoiceTimeout(), 18000);
}

function finalReveal() {
  finalAnswerWrap.classList.remove("hidden");
  finalRevealBtn.disabled = true;
}

function finalizeFinalResult(isCorrect) {
  const wager = Number(finalWagerInput.value) || 0;
  score += isCorrect ? wager : -wager;
  finalPlayed = true;
  updateScoreBoard();
  closeFinalModal();
  showResultModal();
}

function handleFinalResult(isCorrect) {
  finalizeFinalResult(isCorrect);
}

function launchConfetti() {
  if (!confettiEl) return;
  confettiEl.innerHTML = "";
  confettiEl.classList.remove("hidden");
  const colors = ["#f4c14a", "#e36a3c", "#52c280", "#4c8bf5", "#f57ab1"];
  const pieces = 90;
  for (let i = 0; i < pieces; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const size = 6 + Math.random() * 8;
    const left = Math.random() * 100;
    const duration = 2.8 + Math.random() * 1.6;
    const delay = Math.random() * 0.6;
    piece.style.left = `${left}%`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size * 1.4}px`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = `${duration}s, ${duration * 0.9}s`;
    piece.style.animationDelay = `${delay}s, ${delay}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiEl.appendChild(piece);
  }

  setTimeout(() => {
    confettiEl.classList.add("hidden");
    confettiEl.innerHTML = "";
  }, 4500);
}

function showResultModal() {
  updateResultText();
  resultBackdrop.classList.remove("hidden");
  resultModal.classList.remove("hidden");
  launchConfetti();
}

function closeResultModal() {
  resultBackdrop.classList.add("hidden");
  resultModal.classList.add("hidden");
  if (confettiEl) {
    confettiEl.classList.add("hidden");
    confettiEl.innerHTML = "";
  }
}

function updateResultText() {
  const t = uiText[currentLang].result;
  resultScore.textContent = score < 0 ? `-$${Math.abs(score)}` : `$${score}`;
  if (score > 0) {
    resultMessage.textContent = t.messagePositive;
  } else if (score === 0) {
    resultMessage.textContent = t.messageNeutral;
  } else {
    resultMessage.textContent = t.messageNegative;
  }
  resultEyebrow.textContent = t.eyebrow;
  resultTitle.textContent = t.title;
  resultRestartBtn.textContent = t.buttonPrimary;
  resultCloseBtn.textContent = t.buttonSecondary;
}

function closeFinalModal() {
  clearInterval(finalTimerInterval);
  clearTimeout(finalTimerTimeout);
  finalTimerInterval = null;
  finalTimerTimeout = null;
  backdrop.classList.add("hidden");
  finalModal.classList.add("hidden");
  finalChoicesEl.innerHTML = "";
  finalChoicesWrap.classList.add("hidden");
  finalAnswerWrap.classList.add("hidden");
  finalRevealBtn.disabled = true;
  delete finalWagerInput.dataset.locked;
  finalState = null;
}

// Event bindings
revealBtn.addEventListener("click", revealAnswer);
correctBtn.addEventListener("click", () => handleResult(true));
wrongBtn.addEventListener("click", () => handleResult(false));
closeBtn.addEventListener("click", closeClueModal);
confirmWagerBtn.addEventListener("click", confirmWager);

resetBtn.addEventListener("click", resetGame);
finalBtn.addEventListener("click", openFinalModal);
startFinalBtn.addEventListener("click", startFinalRound);
finalRevealBtn.addEventListener("click", finalReveal);
finalCorrectBtn.addEventListener("click", () => handleFinalResult(true));
finalWrongBtn.addEventListener("click", () => handleFinalResult(false));
finalCloseBtn.addEventListener("click", closeFinalModal);
resultRestartBtn.addEventListener("click", resetGame);
resultCloseBtn.addEventListener("click", closeResultModal);
resultBackdrop.addEventListener("click", closeResultModal);
langToggle.addEventListener("change", () => {
  applyLanguage(langToggle.checked ? "es" : "en");
});
// Initialize
resetGame();
applyLanguage(currentLang, { persist: false });
