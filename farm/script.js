const boardElement = document.getElementById("board");
const currentStop = document.getElementById("current-stop");
const currentPosition = document.getElementById("current-position");
const moveCount = document.getElementById("move-count");
const rollResult = document.getElementById("roll-result");
const rollMode = document.getElementById("roll-mode");
const spinButton = document.getElementById("spin-btn");
const resetButton = document.getElementById("reset-btn");
const spinnerWheel = document.getElementById("spinner-wheel");
const langSwitch = document.getElementById("lang-switch");

const backdrop = document.getElementById("backdrop");
const questionModal = document.getElementById("question-modal");
const questionStop = document.getElementById("question-stop");
const questionTitle = document.getElementById("question-title");
const questionBadge = document.getElementById("question-badge");
const questionText = document.getElementById("question-text");
const questionOptions = document.getElementById("question-options");
const questionFeedback = document.getElementById("question-feedback");
const continueButton = document.getElementById("continue-btn");

const finishModal = document.getElementById("finish-modal");
const finishResetButton = document.getElementById("finish-reset");
const spinModal = document.getElementById("spin-modal");
const spinResult = document.getElementById("spin-result");
const confettiCanvas = document.getElementById("confetti-canvas");
const confettiCtx = confettiCanvas ? confettiCanvas.getContext("2d") : null;

const STEP_DURATION = 520;

const boardRows = [
  [21, 22, 23, 24, 25],
  [20, 19, 18, 17, 16],
  [11, 12, 13, 14, 15],
  [10, 9, 8, 7, 6],
  [1, 2, 3, 4, 5],
];

const positionMap = new Map();
boardRows.forEach((row, rowIndex) => {
  row.forEach((number, colIndex) => {
    positionMap.set(number, { row: rowIndex, col: colIndex });
  });
});

const translations = {
  en: {
    pageTitle: "Farm Game",
    heroEyebrow: "Board game concept",
    heroTitle: "Farm Game",
    heroSubhead:
      "Spin the wheel to move the freight truck through the farm system. Answer questions at each stop to reach the customer.",
    statusStop: "Current stop",
    statusPosition: "Position",
    statusMoves: "Moves",
    languageLabel: "Language",
    languageToggleAria: "Switch language to Spanish",
    boardTitle: "Redmond Farm Kitchen & Market Board",
    boardSubtitle: "Start at the freight truck and deliver to the customer.",
    legendBonus: "Bonus",
    legendHazard: "Flat tire",
    legendFinish: "Finish",
    startEyebrow: "Start here",
    startTitle: "Freight Truck",
    spinTitle: "Spin the wheel",
    spinSubtitle: "Tap to generate 1-6 and move.",
    spinButton: "Spin",
    resultLabel: "Result:",
    spinModalEyebrow: "Spin the wheel",
    spinModalTitle: "Ready to move?",
    spinModalBadge: "Spinner",
    spinResultLabel: "Result",
    rulesTitle: "Quick rules",
    rule1: "Every labeled stop unlocks a question.",
    rule2: "Wrong answer: go back 3 spaces (flat tire).",
    rule3: "Bonus spaces: answer correctly to jump ahead 2.",
    rule4: "Reach The Customer to finish the route.",
    resetButton: "Restart game",
    continueButton: "Continue",
    finishEyebrow: "Delivery complete",
    finishTitle: "You reached The Customer!",
    finishBody:
      "Nice work. Restart to play again.",
    finishReset: "Restart",
    stopLabel: "Stop",
    badgeQuestion: "Question",
    badgeBonus: "Bonus",
    badgeHazard: "Hazard",
    flatTire: "Flat tire",
    truckIssue: "Truck issue",
    hazardText: "The truck has an issue. Move back 3 spaces and try again.",
    feedbackBonusCorrect: "Correct! Bonus jump unlocked.",
    feedbackCorrect: "Correct! Keep moving.",
    feedbackWrong: "Incorrect. Flat tire — move back 3 spaces.",
    farmPath: "Farm Path",
    modes: {
      waiting: "waiting",
      spin: "spin",
    },
  },
  es: {
    pageTitle: "Juego de la Granja",
    heroEyebrow: "Concepto de juego de mesa",
    heroTitle: "Juego de la Granja",
    heroSubhead:
      "Gira la ruleta para mover el camión de carga por el sistema de la granja. Responde preguntas en cada parada para llegar al cliente.",
    statusStop: "Parada actual",
    statusPosition: "Posición",
    statusMoves: "Movimientos",
    languageLabel: "Idioma",
    languageToggleAria: "Cambiar idioma a inglés",
    boardTitle: "Tablero Redmond Farm Kitchen & Market",
    boardSubtitle: "Empieza en el camión de carga y entrega al cliente.",
    legendBonus: "Bono",
    legendHazard: "Llanta pinchada",
    legendFinish: "Meta",
    startEyebrow: "Empieza aquí",
    startTitle: "Camión de carga",
    spinTitle: "Gira la ruleta",
    spinSubtitle: "Toca para generar 1-6 y avanzar.",
    spinButton: "Girar",
    resultLabel: "Resultado:",
    spinModalEyebrow: "Gira la ruleta",
    spinModalTitle: "¿Listo para avanzar?",
    spinModalBadge: "Ruleta",
    spinResultLabel: "Resultado",
    rulesTitle: "Reglas rápidas",
    rule1: "Cada parada con etiqueta desbloquea una pregunta.",
    rule2: "Respuesta incorrecta: retrocede 3 espacios (llanta pinchada).",
    rule3: "Espacios de bono: responde bien para avanzar 2.",
    rule4: "Llega al Cliente para terminar la ruta.",
    resetButton: "Reiniciar juego",
    continueButton: "Continuar",
    finishEyebrow: "Entrega completada",
    finishTitle: "¡Llegaste al Cliente!",
    finishBody:
      "Buen trabajo. Reinicia para jugar otra vez.",
    finishReset: "Reiniciar",
    stopLabel: "Parada",
    badgeQuestion: "Pregunta",
    badgeBonus: "Bono",
    badgeHazard: "Alerta",
    flatTire: "Llanta pinchada",
    truckIssue: "Problema del camión",
    hazardText: "El camión tiene un problema. Retrocede 3 espacios y vuelve a intentarlo.",
    feedbackBonusCorrect: "¡Correcto! Bono activado: avanzas 2.",
    feedbackCorrect: "¡Correcto! Sigue avanzando.",
    feedbackWrong: "Incorrecto. Llanta pinchada — retrocede 3 espacios.",
    farmPath: "Camino de granja",
    modes: {
      waiting: "en espera",
      spin: "giro",
    },
  },
};

const spaceDetails = {
  1: { label: { en: "Heritage Farm", es: "Heritage Farm" }, type: "start" },
  4: { label: { en: "Beehive Orders", es: "Pedidos Beehive" }, type: "stop" },
  9: { label: { en: "Production Kitchen", es: "Cocina de producción" }, type: "stop" },
  14: {
    label: { en: "Milk Processing Facility", es: "Planta de procesamiento de leche" },
    type: "stop",
  },
  18: { label: { en: "Market Truck", es: "Camión del mercado" }, type: "stop" },
  24: { label: { en: "Market Kitchen", es: "Cocina del mercado" }, type: "stop" },
  25: { label: { en: "The Customer", es: "El Cliente" }, type: "finish" },
  6: { label: { en: "Flat Tire", es: "Llanta pinchada" }, type: "hazard" },
  8: { label: { en: "Bonus Question", es: "Pregunta bono" }, type: "bonus" },
  15: { label: { en: "Bonus Question", es: "Pregunta bono" }, type: "bonus" },
};

const questions = [
  {
    prompt: {
      en: "What is the official name of the Farms Collection within Redmond Inc.?",
      es: "¿Cuál es el nombre oficial de la colección de granjas dentro de Redmond Inc.?",
    },
    options: {
      en: ["Redmond Farm Store and Café", "Redmond Farm Market and Kitchen", "Farm Kitchen"],
      es: ["Redmond Farm Store and Café", "Redmond Farm Market and Kitchen", "Farm Kitchen"],
    },
    answer: 1,
  },
  {
    prompt: {
      en: "Why was Redmond Farm Market and Kitchen originally established?",
      es: "¿Por qué se estableció originalmente Redmond Farm Market and Kitchen?",
    },
    options: {
      en: [
        "Because the founder, Rhett Roberts had a desire to make nutrient-dense foods more accessible to his community.",
        "Because there was no way to purchase Raw Milk in the state of Utah.",
        "Because the Redmond team thought cows were really cute, and selling raw milk was the best way to keep them as pets.",
      ],
      es: [
        "Porque el fundador, Rhett Roberts, deseaba hacer que los alimentos densos en nutrientes fueran más accesibles para su comunidad.",
        "Porque no había manera de comprar leche cruda en el estado de Utah.",
        "Porque el equipo de Redmond pensó que las vacas eran muy tiernas, y vender leche cruda era la mejor manera de tenerlas como mascotas.",
      ],
    },
    answer: 0,
  },
  {
    prompt: {
      en: "Redmond Farm Market and Kitchen’s purpose statement is: “We connect people to ________ sourced, ________ crafted food that prioritizes the wellbeing of people, animals, and the environment.”",
      es: "La declaración de propósito de Redmond Farm Market and Kitchen es: “Conectamos a las personas con alimentos ________ y ________ que priorizan el bienestar de las personas, los animales y el medio ambiente.”",
    },
    options: {
      en: ["Thoughtfully, Carefully", "Ethically, Lovingly", "Intentionally, Scratch"],
      es: ["Con atención, con cuidado", "Ética, con amor", "Intencionalmente, desde cero"],
    },
    answer: 0,
  },
  {
    prompt: {
      en: "Which example best reflects Redmond’s core value of Ubuntu?",
      es: "¿Qué ejemplo refleja mejor el valor central de Ubuntu en Redmond?",
    },
    options: {
      en: [
        "One associate notices another team member looking sad and decides to crack a joke to help them feel seen and valued.",
        "One associate notices a team member struggling to keep up with a rush in the Farm Kitchen and takes over their job because they know a slow pace ruins the flow of the kitchen.",
        "A truck driver develops an SOP for streamlining the process of dropping off items at each market location to make their job more efficient.",
      ],
      es: [
        "Un asociado nota que otro miembro del equipo se ve triste y decide hacer un chiste para ayudarlo a sentirse visto y valorado.",
        "Un asociado nota que un miembro del equipo está batallando para seguir el ritmo en la Farm Kitchen y toma su puesto porque sabe que un ritmo lento arruina el flujo de la cocina.",
        "Un conductor desarrolla un SOP para agilizar el proceso de entrega en cada ubicación del mercado y hacer su trabajo más eficiente.",
      ],
    },
    answer: 0,
  },
  {
    prompt: {
      en: "Redmond’s Five Principles of Hospitality are:",
      es: "Los cinco principios de hospitalidad de Redmond son:",
    },
    options: {
      en: [
        "Smiling, Greeting Customers, Anticipating Others’ Needs, Being Helpful, Kind, and Courteous, and Creating a Welcoming Environment.",
        "Being Present, Putting People First, Anticipating Others’ Needs, Being Helpful, Kind, and Courteous, and Creating a Welcoming Environment.",
        "Being Present, Putting People First, Anticipating Others’ Needs, Being Friendly, Caring, and Kind, and Creating a Welcoming Environment.",
      ],
      es: [
        "Sonreír, saludar a los clientes, anticipar las necesidades de los demás, ser servicial, amable y cortés, y crear un ambiente acogedor.",
        "Estar presente, poner a las personas primero, anticipar las necesidades de los demás, ser servicial, amable y cortés, y crear un ambiente acogedor.",
        "Estar presente, poner a las personas primero, anticipar las necesidades de los demás, ser cordial, atento y amable, y crear un ambiente acogedor.",
      ],
    },
    answer: 1,
  },
  {
    prompt: {
      en: "The sourcing standards of Redmond Farm Market and Kitchen includes a commitment to foods that have which three qualities?",
      es: "Los estándares de abastecimiento de Redmond Farm Market and Kitchen incluyen el compromiso de alimentos que tengan estas tres cualidades:",
    },
    options: {
      en: [
        "Certified Organic, Nutrient-Dense, Minimally Processed",
        "Mineral Rich, High-Quality, Vegetarian",
        "Nutrient Rich, Always Real, Intentionally Sourced",
      ],
      es: [
        "Orgánico certificado, denso en nutrientes, mínimamente procesado",
        "Rico en minerales, de alta calidad, vegetariano",
        "Rico en nutrientes, siempre real, obtenido con intención",
      ],
    },
    answer: 2,
  },
  {
    prompt: {
      en: "Which person would most likely NOT be a customer at Redmond Farm Market and Kitchen?",
      es: "¿Qué persona probablemente NO sería cliente de Redmond Farm Market and Kitchen?",
    },
    options: {
      en: [
        "A mom of two small children who is trying to intentionally prioritize the wellbeing of herself and her family.",
        "A frugal individual who often chooses to prioritize price over quality when it comes to their food.",
        "A top tier athlete who wants to learn more about how to fuel their body in the most impactful way.",
      ],
      es: [
        "Una mamá de dos niños pequeños que intenta priorizar intencionalmente el bienestar suyo y de su familia.",
        "Una persona frugal que a menudo elige priorizar el precio sobre la calidad cuando se trata de su comida.",
        "Un atleta de alto nivel que quiere aprender más sobre cómo nutrir su cuerpo de la manera más efectiva.",
      ],
    },
    answer: 1,
  },
  {
    prompt: {
      en: "We currently have Redmond Farm Market locations in these five locations:",
      es: "Actualmente tenemos ubicaciones de Redmond Farm Market en estas cinco localidades:",
    },
    options: {
      en: [
        "Sugarhouse, Orem, Roy, Heber, and Springville.",
        "Orem, Heber, Layton, Sugarhouse, and Tooele.",
        "Admiralty Island (AK), Sugarhouse, Springville, Heber, and Roy.",
      ],
      es: [
        "Sugarhouse, Orem, Roy, Heber y Springville.",
        "Orem, Heber, Layton, Sugarhouse y Tooele.",
        "Admiralty Island (AK), Sugarhouse, Springville, Heber y Roy.",
      ],
    },
    answer: 0,
  },
  {
    prompt: {
      en: "The Heritage Farm property was purchased for the purpose of growing:",
      es: "La propiedad de Heritage Farm se compró con el propósito de criar:",
    },
    options: {
      en: [
        "A Drive-Through Zoo for the Surrounding Community",
        "Healthy Cows that Produce Raw Milk",
        "Organic Vegetables",
      ],
      es: [
        "Un zoológico tipo drive-through para la comunidad",
        "Vacas saludables que producen leche cruda",
        "Vegetales orgánicos",
      ],
    },
    answer: 1,
  },
  {
    prompt: {
      en: "The production kitchen in Springville produces what kind of House Made items?",
      es: "La cocina de producción en Springville produce qué tipo de productos de la casa:",
    },
    options: {
      en: [
        "Sprouted Corn Chips, Cinnamon Almonds, Custards, and Salad Dressings.",
        "Organic, whole-wheat breads and pastries to be distributed to local bakeries.",
        "Probiotic sodas, homemade ice cream, and coconut oil fried potato chips.",
      ],
      es: [
        "Chips de maíz germinado, almendras con canela, natillas y aderezos para ensalada.",
        "Pan y repostería orgánicos de trigo integral para distribuir a panaderías locales.",
        "Refrescos probióticos, helado casero y papas fritas en aceite de coco.",
      ],
    },
    answer: 0,
  },
  {
    prompt: {
      en: "What is the freight truck’s purpose?",
      es: "¿Cuál es el propósito del camión de carga?",
    },
    options: {
      en: [
        "To offer extra refrigerated storage for raw milk.",
        "To transfer Redmond cows in a safe and reliable way.",
        "To connect and transfer products between the different sections of the farms business unit in a safe and reliable way.",
      ],
      es: [
        "Ofrecer almacenamiento refrigerado extra para la leche cruda.",
        "Trasladar vacas de Redmond de manera segura y confiable.",
        "Conectar y transferir productos entre las diferentes secciones de la unidad de negocios de granjas de manera segura y confiable.",
      ],
    },
    answer: 2,
  },
  {
    prompt: {
      en: "The Farm Market Truck travels to five different locations, bringing ________ and ________ to surrounding communities.",
      es: "El camión de Farm Market viaja a cinco ubicaciones distintas, llevando ________ y ________ a las comunidades cercanas.",
    },
    options: {
      en: [
        "Christmas Presents, Joy",
        "Farm Staples, House Made Products",
        "Redmond Equine Products, Trophy Rock Salt Licks",
      ],
      es: [
        "Regalos de Navidad, alegría",
        "Básicos de granja, productos hechos en casa",
        "Productos equinos Redmond, bloques de sal Trophy Rock",
      ],
    },
    answer: 1,
  },
];

const state = {
  position: 1,
  moves: 0,
  completed: new Set(),
  isBusy: false,
  pendingMove: 0,
  activeModal: null,
  activeSpaceNumber: null,
  activeQuestionIndex: null,
  selectedOptionIndex: null,
  answerLocked: false,
  facing: "right",
};

let currentLang = "en";
let currentMode = "waiting";
let pendingOutcome = null;
let audioContext = null;
let applauseBuffer = null;
let confettiParticles = [];
let confettiFrame = null;
let confettiTimer = null;

function t(key) {
  return translations[currentLang][key];
}

function getModeLabel(mode) {
  const modes = translations[currentLang].modes || {};
  return modes[mode] || mode;
}

function getSpace(number) {
  const detail = spaceDetails[number];
  return {
    number,
    label: detail?.label?.[currentLang] || t("farmPath"),
    type: detail?.type || "stop",
  };
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  langSwitch.setAttribute("aria-label", t("languageToggleAria"));
  rollMode.textContent = getModeLabel(currentMode);
  buildBoard();
  updateBoard();

  if (!questionModal.classList.contains("hidden")) {
    if (state.activeModal === "hazard") {
      renderHazardModal();
    } else if (state.activeModal === "question") {
      renderQuestionModal();
    }
  }
}

function buildBoard() {
  boardElement.innerHTML = "";
  const pathOrder = Array.from({ length: 25 }, (_, idx) => idx + 1);
  const pathMeta = new Map();

  function dirBetween(from, to) {
    if (!from || !to) return null;
    if (to.row < from.row) return "N";
    if (to.row > from.row) return "S";
    if (to.col > from.col) return "E";
    if (to.col < from.col) return "W";
    return null;
  }

  pathOrder.forEach((number, index) => {
    const current = positionMap.get(number);
    const prev = positionMap.get(pathOrder[index - 1]);
    const next = positionMap.get(pathOrder[index + 1]);
    const prevDir = dirBetween(current, prev);
    const nextDir = dirBetween(current, next);
    const dirs = [prevDir, nextDir].filter(Boolean);
    let shape = "path-h";
    if (dirs.length === 1) {
      shape = dirs[0] === "N" || dirs[0] === "S" ? "path-v" : "path-h";
    } else if (dirs.length === 2) {
      const hasN = dirs.includes("N");
      const hasS = dirs.includes("S");
      const hasE = dirs.includes("E");
      const hasW = dirs.includes("W");
      if ((hasE || hasW) && (hasN || hasS)) {
        if (hasN && hasE) shape = "corner-ne";
        else if (hasN && hasW) shape = "corner-nw";
        else if (hasS && hasE) shape = "corner-se";
        else if (hasS && hasW) shape = "corner-sw";
      } else if (hasN || hasS) {
        shape = "path-v";
      } else {
        shape = "path-h";
      }
    }
    pathMeta.set(number, { shape, dirs });
  });

  boardRows.flat().forEach((number) => {
    const space = getSpace(number);
    const tile = document.createElement("div");
    const meta = pathMeta.get(number) || { shape: "path-h", dirs: [] };
    tile.className = `tile ${space.type} ${meta.shape}`;
    meta.dirs.forEach((dir) => {
      if (dir === "N") tile.classList.add("join-top");
      if (dir === "S") tile.classList.add("join-bottom");
      if (dir === "E") tile.classList.add("join-right");
      if (dir === "W") tile.classList.add("join-left");
    });
    tile.dataset.number = number;

    const numberEl = document.createElement("div");
    numberEl.className = "number";
    numberEl.textContent = number;

    const labelEl = document.createElement("div");
    labelEl.className = "label";
    labelEl.textContent = space.label;

    tile.append(numberEl, labelEl);
    boardElement.appendChild(tile);
  });
}

function updateBoard() {
  const tiles = boardElement.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    const number = Number(tile.dataset.number);
    tile.classList.toggle("is-current", number === state.position);
    tile.classList.toggle("is-complete", state.completed.has(number));
    const existingToken = tile.querySelector(".token");
    if (number === state.position) {
      if (!existingToken) {
        const token = document.createElement("div");
        token.className = "token";
        token.textContent = "🚚";
        if (state.facing === "right") {
          token.classList.add("facing-right");
        }
        tile.appendChild(token);
      }
    } else if (existingToken) {
      existingToken.remove();
    }
    if (number === state.position && existingToken) {
      existingToken.classList.toggle("facing-right", state.facing === "right");
    }
  });

  const current = getSpace(state.position);
  currentStop.textContent = current.label;
  currentPosition.textContent = state.position;
  moveCount.textContent = state.moves;
}

function setButtonsDisabled(disabled) {
  spinButton.disabled = disabled;
}

function rollNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function spinWheel(result) {
  const segment = 360 / 6;
  const desired = (6 - result) * segment + segment / 2;
  const current = spinnerWheel.dataset.rotation
    ? Number(spinnerWheel.dataset.rotation)
    : 0;
  const currentMod = ((current % 360) + 360) % 360;
  const spins = 3;
  const next = current + spins * 360 + (desired - currentMod);
  spinnerWheel.dataset.rotation = String(next);
  spinnerWheel.style.transform = `rotate(${next}deg)`;
}

function animateSpinner(result) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = reduceMotion ? 200 : 1800;

  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      spinnerWheel.removeEventListener("transitionend", finish);
      resolve();
    };

    if (!reduceMotion) {
      spinnerWheel.addEventListener("transitionend", finish);
    }

    spinWheel(result);
    setTimeout(finish, duration + 40);
  });
}

function playEngine(durationMs) {
  if (durationMs <= 0) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!audioContext) {
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const now = audioContext.currentTime;
  const duration = durationMs / 1000;

  const filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(220, now);

  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.14, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  const engine = audioContext.createOscillator();
  engine.type = "sawtooth";
  engine.frequency.setValueAtTime(70, now);

  const lfo = audioContext.createOscillator();
  lfo.type = "sine";
  lfo.frequency.setValueAtTime(6, now);
  const lfoGain = audioContext.createGain();
  lfoGain.gain.setValueAtTime(12, now);

  lfo.connect(lfoGain).connect(engine.frequency);
  engine.connect(filter).connect(gain).connect(audioContext.destination);

  engine.start(now);
  lfo.start(now);
  engine.stop(now + duration + 0.05);
  lfo.stop(now + duration + 0.05);
}

function playSadEngine(durationMs) {
  if (durationMs <= 0) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!audioContext) {
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const now = audioContext.currentTime;
  const duration = durationMs / 1000;

  const filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(180, now);

  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  const engine = audioContext.createOscillator();
  engine.type = "triangle";
  engine.frequency.setValueAtTime(120, now);
  engine.frequency.exponentialRampToValueAtTime(70, now + duration);

  engine.connect(filter).connect(gain).connect(audioContext.destination);
  engine.start(now);
  engine.stop(now + duration + 0.05);
}

function emitSmoke(tile, facing) {
  if (!tile) return;
  const puff = document.createElement("span");
  puff.className = `smoke ${facing === "right" ? "left" : "right"}`;
  tile.appendChild(puff);
  puff.addEventListener("animationend", () => {
    puff.remove();
  });
  setTimeout(() => {
    puff.remove();
  }, 1800);
}

function resizeConfettiCanvas() {
  if (!confettiCanvas || !confettiCtx) return;
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  confettiCanvas.width = Math.floor(width * dpr);
  confettiCanvas.height = Math.floor(height * dpr);
  confettiCanvas.style.width = `${width}px`;
  confettiCanvas.style.height = `${height}px`;
  confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function stopConfetti() {
  if (!confettiCtx) return;
  if (confettiFrame) {
    cancelAnimationFrame(confettiFrame);
    confettiFrame = null;
  }
  if (confettiTimer) {
    clearTimeout(confettiTimer);
    confettiTimer = null;
  }
  confettiParticles = [];
  confettiCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function animateConfetti() {
  if (!confettiCtx) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  confettiCtx.clearRect(0, 0, width, height);
  confettiParticles = confettiParticles.filter((piece) => {
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.rotation += piece.vr;
    piece.opacity -= piece.decay;
    if (piece.opacity <= 0 || piece.y > height + 40) {
      return false;
    }
    confettiCtx.save();
    confettiCtx.globalAlpha = Math.max(piece.opacity, 0);
    confettiCtx.translate(piece.x, piece.y);
    confettiCtx.rotate(piece.rotation);
    confettiCtx.fillStyle = piece.color;
    confettiCtx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
    confettiCtx.restore();
    return true;
  });

  if (confettiParticles.length) {
    confettiFrame = requestAnimationFrame(animateConfetti);
  } else {
    stopConfetti();
  }
}

function launchConfetti() {
  if (!confettiCtx) return;
  stopConfetti();
  resizeConfettiCanvas();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const colors = ["#f8d38f", "#f3b574", "#e79b5b", "#f1c78b", "#d9b27d", "#f7e6c6"];
  const count = Math.min(160, Math.max(90, Math.floor(width / 8)));
  confettiParticles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: -20 - Math.random() * height * 0.2,
    w: 6 + Math.random() * 6,
    h: 10 + Math.random() * 10,
    vx: (Math.random() - 0.5) * 1.6,
    vy: 3 + Math.random() * 4.2,
    rotation: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.25,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 1,
    decay: 0.003 + Math.random() * 0.004,
  }));
  confettiFrame = requestAnimationFrame(animateConfetti);
  confettiTimer = setTimeout(stopConfetti, 2800);
}

function getApplauseBuffer() {
  if (!audioContext) return null;
  if (applauseBuffer && applauseBuffer.sampleRate === audioContext.sampleRate) {
    return applauseBuffer;
  }
  const length = Math.floor(audioContext.sampleRate * 0.4);
  const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    const fade = 1 - i / length;
    data[i] = (Math.random() * 2 - 1) * fade;
  }
  applauseBuffer = buffer;
  return buffer;
}

function playApplause() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!audioContext) {
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  const buffer = getApplauseBuffer();
  if (!buffer) return;

  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.1, now + 0.03);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  master.connect(audioContext.destination);

  const bursts = 7;
  for (let i = 0; i < bursts; i += 1) {
    const start = now + i * 0.18 + Math.random() * 0.06;
    const duration = 0.12 + Math.random() * 0.08;
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    const filter = audioContext.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1100 + Math.random() * 700, start);
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.22, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter).connect(gain).connect(master);
    source.start(start);
    source.stop(start + duration);
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSpinSequence(result) {
  spinResult.textContent = "-";
  openModal(spinModal);
  await wait(50);
  await animateSpinner(result);
  spinResult.textContent = result;
  await wait(900);
  closeModal(spinModal);
}

async function moveTruckAnimated(steps, options = {}) {
  const { triggerLanding = true } = options;
  const target = Math.min(25, Math.max(1, state.position + steps));
  const totalSteps = Math.abs(target - state.position);
  if (totalSteps === 0) {
    if (triggerLanding) handleLanding();
    return;
  }

  const direction = target > state.position ? 1 : -1;
  if (direction < 0) {
    playSadEngine(2200);
  }
  for (let i = 0; i < totalSteps; i += 1) {
    if (direction > 0) {
      playEngine(STEP_DURATION * 0.9);
    }
    const previousPosition = state.position;
    state.position = Math.min(25, Math.max(1, state.position + direction));
    const previousCoords = positionMap.get(previousPosition);
    const nextCoords = positionMap.get(state.position);
    if (previousCoords && nextCoords) {
      if (nextCoords.row !== previousCoords.row) {
        state.facing = state.facing === "left" ? "right" : "left";
      } else if (nextCoords.col > previousCoords.col) {
        state.facing = "right";
      } else if (nextCoords.col < previousCoords.col) {
        state.facing = "left";
      }
    }
    updateBoard();
    const activeTile = boardElement.querySelector(
      `.tile[data-number="${state.position}"]`
    );
    emitSmoke(activeTile, state.facing);
    await wait(STEP_DURATION);
  }

  if (triggerLanding) handleLanding();
}

function handleLanding() {
  const space = getSpace(state.position);

  if (space.type === "finish") {
    openFinishModal();
    setButtonsDisabled(true);
    return;
  }

  if (space.type === "hazard") {
    openHazardModal();
    return;
  }

  openQuestionModal(space);
}

function renderHazardModal() {
  questionStop.textContent = t("flatTire");
  questionTitle.textContent = t("truckIssue");
  questionBadge.textContent = t("badgeHazard");
  questionText.textContent = t("hazardText");
  questionOptions.innerHTML = "";
  questionFeedback.textContent = "";
  continueButton.disabled = false;
}

function openHazardModal() {
  setButtonsDisabled(true);
  state.activeModal = "hazard";
  state.activeSpaceNumber = state.position;
  state.activeQuestionIndex = null;
  state.selectedOptionIndex = null;
  state.answerLocked = false;
  pendingOutcome = { type: "hazard", correct: false, spaceNumber: state.position };
  renderHazardModal();
  openModal(questionModal);
}

function renderQuestionModal() {
  const space = getSpace(state.activeSpaceNumber);
  const question = questions[state.activeQuestionIndex];

  questionStop.textContent = `${t("stopLabel")} ${space.number}`;
  questionTitle.textContent = space.label;
  questionBadge.textContent = space.type === "bonus" ? t("badgeBonus") : t("badgeQuestion");
  questionText.textContent = question.prompt[currentLang];
  questionOptions.innerHTML = "";
  questionFeedback.textContent = "";
  continueButton.disabled = !state.answerLocked;

  question.options[currentLang].forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.textContent = option;

    if (state.answerLocked) {
      button.disabled = true;
      if (index === question.answer) {
        button.classList.add("correct");
      }
      if (index === state.selectedOptionIndex && index !== question.answer) {
        button.classList.add("wrong");
      }
    }

    button.addEventListener("click", () => {
      if (state.answerLocked || pendingOutcome) return;
      state.selectedOptionIndex = index;
      state.answerLocked = true;

      const correct = index === question.answer;
      pendingOutcome = {
        type: space.type,
        correct,
        bonus: space.type === "bonus",
        spaceNumber: space.number,
      };

      renderQuestionModal();
    });

    questionOptions.appendChild(button);
  });

  if (state.answerLocked) {
    const correct = state.selectedOptionIndex === question.answer;
    questionFeedback.textContent = correct
      ? space.type === "bonus"
        ? t("feedbackBonusCorrect")
        : t("feedbackCorrect")
      : t("feedbackWrong");
  }
}

function openQuestionModal(space) {
  setButtonsDisabled(true);
  state.activeModal = "question";
  state.activeSpaceNumber = space.number;
  state.activeQuestionIndex = (space.number - 1) % questions.length;
  state.selectedOptionIndex = null;
  state.answerLocked = false;
  pendingOutcome = null;
  renderQuestionModal();
  openModal(questionModal);
}

function openModal(modal) {
  backdrop.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function closeModal(modal) {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
}

function clearActiveModal() {
  state.activeModal = null;
  state.activeSpaceNumber = null;
  state.activeQuestionIndex = null;
  state.selectedOptionIndex = null;
  state.answerLocked = false;
}

async function applyOutcome() {
  if (!pendingOutcome) return;

  const { type, correct, bonus, spaceNumber } = pendingOutcome;
  pendingOutcome = null;
  closeModal(questionModal);
  clearActiveModal();
  continueButton.disabled = true;
  setButtonsDisabled(true);

  if (type === "hazard" || !correct) {
    state.completed.add(spaceNumber);
    await moveTruckAnimated(-3, { triggerLanding: false });
    setButtonsDisabled(false);
    return;
  }

  if (bonus && correct) {
    state.position = Math.min(25, state.position + 2);
  }

  state.completed.add(spaceNumber);
  updateBoard();
  setButtonsDisabled(false);
  if (state.position === 25) {
    openFinishModal();
    setButtonsDisabled(true);
  }
}

function openFinishModal() {
  setButtonsDisabled(true);
  openModal(finishModal);
  launchConfetti();
  playApplause();
}

function resetGame() {
  state.position = 1;
  state.moves = 0;
  state.completed.clear();
  pendingOutcome = null;
  clearActiveModal();
  rollResult.textContent = "-";
  currentMode = "waiting";
  rollMode.textContent = getModeLabel(currentMode);
  spinResult.textContent = "-";
  spinnerWheel.style.transform = "rotate(0deg)";
  spinnerWheel.dataset.rotation = "0";
  setButtonsDisabled(false);
  closeModal(questionModal);
  closeModal(finishModal);
  closeModal(spinModal);
  stopConfetti();
  updateBoard();
}

async function performMove() {
  if (state.isBusy) return;
  state.isBusy = true;
  setButtonsDisabled(true);
  const result = rollNumber();
  rollResult.textContent = "-";
  currentMode = "spin";
  rollMode.textContent = getModeLabel(currentMode);
  await runSpinSequence(result);
  rollResult.textContent = result;
  state.moves += 1;
  state.completed.add(state.position);
  updateBoard();
  await wait(800);
  await moveTruckAnimated(result);
  state.isBusy = false;
}

function setLanguage(lang) {
  currentLang = lang;
  langSwitch.checked = lang === "es";
  applyTranslations();
}

spinButton.addEventListener("click", () => performMove());
resetButton.addEventListener("click", resetGame);
finishResetButton.addEventListener("click", resetGame);
continueButton.addEventListener("click", applyOutcome);
langSwitch.addEventListener("change", () => {
  setLanguage(langSwitch.checked ? "es" : "en");
});

backdrop.addEventListener("click", () => {
  if (!questionModal.classList.contains("hidden")) return;
  closeModal(finishModal);
  stopConfetti();
});

setLanguage("en");
resizeConfettiCanvas();
window.addEventListener("resize", resizeConfettiCanvas);
