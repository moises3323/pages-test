const baseCategories = [
  {
    id: "life",
    title: "Redmond Living",
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
    title: "Redmond Agriculture",
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
    title: "Redmond Equine",
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
    title: "Redmond Hunt",
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
    title: "Redmond Farms",
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

const finalJeopardy = {
  category: "Redmond Origin",
  clue:
    "Real Salt, Trophy Rock, and the livestock blocks all come from an ancient inland sea deposit located in this U.S. state.",
  answer: "Utah, in the deposits near Redmond, Utah",
};

const board = document.getElementById("board");
const remainingEl = document.getElementById("remaining");
const scoreEl = document.getElementById("score");
const finalBtn = document.getElementById("final-btn");
const resetBtn = document.getElementById("reset-btn");
const finalStatus = document.getElementById("final-status");

const backdrop = document.getElementById("backdrop");
const clueModal = document.getElementById("clue-modal");
const modalSite = document.getElementById("modal-site");
const clueTitle = document.getElementById("clue-title");
const clueText = document.getElementById("clue-text");
const valueTag = document.getElementById("value-tag");
const dailyBanner = document.getElementById("daily-double-banner");
const wagerBlock = document.getElementById("wager-block");
const wagerInput = document.getElementById("wager-input");
const confirmWagerBtn = document.getElementById("confirm-wager");
const timerBar = document.getElementById("timer-bar");
const timerLabel = document.getElementById("timer-label");
const revealBtn = document.getElementById("reveal-btn");
const answerWrap = document.getElementById("answer-wrap");
const answerText = document.getElementById("answer-text");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");
const closeBtn = document.getElementById("close-btn");
const choicesWrap = document.getElementById("choices-wrap");
const choicesEl = document.getElementById("choices");

const finalModal = document.getElementById("final-modal");
const finalClue = document.getElementById("final-clue");
const finalAnswer = document.getElementById("final-answer");
const finalAnswerWrap = document.getElementById("final-answer-wrap");
const finalRevealBtn = document.getElementById("final-reveal");
const finalCorrectBtn = document.getElementById("final-correct");
const finalWrongBtn = document.getElementById("final-wrong");
const finalCloseBtn = document.getElementById("final-close");
const finalWagerInput = document.getElementById("final-wager-input");
const startFinalBtn = document.getElementById("start-final");
const finalTimerBar = document.getElementById("final-timer-bar");
const finalTimerLabel = document.getElementById("final-timer-label");

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

function shuffle(list) {
  return list
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function cloneCategories() {
  categories = baseCategories.map((cat) => ({
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
      cell.textContent = `$${question.value}`;
      cell.dataset.category = cat.id;
      cell.dataset.index = String(index);
      cell.addEventListener("click", () => openQuestion(cat.id, index, cell));
      col.appendChild(cell);
    });

    board.appendChild(col);
  });
}

function updateScoreBoard() {
  scoreEl.textContent = score;
  remainingEl.textContent = remaining;
  if (finalPlayed) {
    finalStatus.textContent = "Game finished";
  } else if (remaining === 0) {
    finalStatus.textContent = "Final unlocked";
  } else {
    finalStatus.textContent = "Final locked";
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

  const options = shuffle([question.answer, ...question.distractors]);
  currentQuestion.choiceButtons = options.map((option) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = option;
    btn.dataset.correct = option === question.answer ? "true" : "false";
    btn.addEventListener("click", () => handleChoice(btn));
    choicesEl.appendChild(btn);
    return btn;
  });
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
  timerLabel.textContent = "12s";

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
  startTimer(12, timerBar, timerLabel, expireAction);
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
  finalClue.textContent = "";
  finalAnswer.textContent = finalJeopardy.answer;
  finalAnswerWrap.classList.add("hidden");
  finalRevealBtn.disabled = true;
  finalCorrectBtn.disabled = true;
  finalWrongBtn.disabled = true;
  startFinalBtn.disabled = false;

  const max = Math.max(score, 0);
  finalWagerInput.max = max;
  finalWagerInput.value = max;
  finalWagerInput.disabled = max === 0;
  if (max === 0) {
    finalWagerInput.title = "Score is negative; wager is locked at $0.";
  } else {
    finalWagerInput.removeAttribute("title");
  }
  finalTimerBar.style.transition = "none";
  finalTimerBar.style.width = "100%";
  finalTimerLabel.textContent = "18s";
}

function startFinalRound() {
  if (startFinalBtn.disabled) return;
  const max = Math.max(score, 0);
  const proposed = Number(finalWagerInput.value) || 0;
  const wager = Math.max(0, Math.min(proposed, max));
  finalWagerInput.value = wager;

  finalClue.textContent = finalJeopardy.clue;
  finalRevealBtn.disabled = false;
  finalCorrectBtn.disabled = false;
  finalWrongBtn.disabled = false;
  startFinalBtn.disabled = true;

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

  finalTimerTimeout = setTimeout(() => finalReveal(), 18000);
}

function finalReveal() {
  finalAnswerWrap.classList.remove("hidden");
  finalRevealBtn.disabled = true;
}

function handleFinalResult(isCorrect) {
  const wager = Number(finalWagerInput.value) || 0;
  score += isCorrect ? wager : -wager;
  finalPlayed = true;
  updateScoreBoard();
  closeFinalModal();
}

function closeFinalModal() {
  clearInterval(finalTimerInterval);
  clearTimeout(finalTimerTimeout);
  finalTimerInterval = null;
  finalTimerTimeout = null;
  backdrop.classList.add("hidden");
  finalModal.classList.add("hidden");
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
// Initialize
resetGame();
