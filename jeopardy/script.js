const baseCategories = [
  {
    id: "life",
    title: "Redmond Life",
    site: "https://redmond.life",
    questions: [
      {
        value: 100,
        clue: "The flagship natural salt from Redmond Life is called...",
        answer: "Real Salt",
        distractors: ["Pink Stone", "Salt Creek"],
      },
      {
        value: 200,
        clue: "Earthpaste is built on which natural mineral instead of chemical-heavy pastes?",
        answer: "Bentonite clay",
        distractors: ["Activated charcoal", "Fluoride"],
      },
      {
        value: 300,
        clue: "Their product mantra is...",
        answer: "Simple ingredients with no weird additives",
        distractors: ["Lots of sugar and color", "Preservatives and flavorings"],
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
        clue: "The loose mix of 60+ minerals for cattle is called...",
        answer: "Redmond Conditioner",
        distractors: ["Cow Mix 2000", "Trace 15"],
      },
      {
        value: 200,
        clue: "The red blocks are different because...",
        answer: "They are natural salt with trace minerals, no additives",
        distractors: ["They have artificial flavor", "They are refined white salt"],
      },
      {
        value: 300,
        clue: "To replace white salt in daily rations they recommend...",
        answer: "Use Redmond 10 Fine or another mineral fine salt",
        distractors: ["Brown sugar", "Iodized table salt"],
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
        clue: "Their clay supplement to calm a horse's stomach is called...",
        answer: "Daily Gold",
        distractors: ["Night Silver", "Calm Clay"],
      },
      {
        value: 200,
        clue: "The ready-to-hang block with rope included is...",
        answer: "Rock on a Rope",
        distractors: ["HangSalt", "Rope Lick"],
      },
      {
        value: 300,
        clue: "Why are their natural electrolytes good for sensitive horses?",
        answer: "They hydrate without molasses or added sugars",
        distractors: ["They have dyes", "They're just white salt"],
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
        clue: "The mineral block hunters use all year is...",
        answer: "Trophy Rock",
        distractors: ["Hunter Salt", "Deer Block Plus"],
      },
      {
        value: 200,
        clue: "The granular version to spread is called...",
        answer: "Four65",
        distractors: ["Trail Mix Salt", "Granule 360"],
      },
      {
        value: 300,
        clue: "Where should you place the supplement so deer find it quickly?",
        answer: "Near usual trails and water spots",
        distractors: ["Inside a barn", "On a city rooftop"],
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
        clue: "At the Farm Stores you'll find...",
        answer: "Pasture-raised meats, whole milk, and on-farm goods",
        distractors: ["Only electronics", "Only canned food"],
      },
      {
        value: 200,
        clue: "Their raising philosophy is...",
        answer: "Regenerative pasture with no routine hormones",
        distractors: ["Feedlot with antibiotics", "Only imported grains"],
      },
      {
        value: 300,
        clue: "The milk they showcase is...",
        answer: "Non-homogenized whole milk from pastured cows",
        distractors: ["Skim milk powder", "Ultra-processed oat milk"],
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
