const prizes = [50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000];

const questions = [
  {
    text: "Dein Mitschueler nimmt deinen Stift, ohne zu fragen. Welche Formulierung ist die vollstaendigste Ich-Botschaft?",
    answers: [
      "Ich bin aergerlich, wenn du meinen Stift ohne Fragen nimmst, weil ich ihn selbst brauche.",
      "Ich finde es respektlos, dass du immer einfach meine Sachen nimmst.",
      "Ich habe das Gefuehl, dass du meine Grenzen bewusst ignorierst.",
      "Nimm meinen Stift nie wieder ohne vorher zu fragen."
    ],
    correct: 0,
    hint: "Achte auf beobachtbares Verhalten, eigenes Gefuehl, Wirkung und Wunsch - ohne Absicht zu unterstellen."
  },
  {
    text: "Jemand unterbricht dich mehrmals im Gespraech. Was ist die beste Ich-Botschaft?",
    answers: [
      "Ich fuehle mich von dir nicht ernst genommen, weil du immer dazwischenredest.",
      "Ich finde, du solltest anderen im Gespraech endlich besser zuhoeren.",
      "Du behandelst mich respektlos, wenn du mich unterbrichst.",
      "Wenn ich unterbrochen werde, verliere ich den Faden und werde unsicher."
    ],
    correct: 3,
    hint: "Auch ein Satz mit 'Ich' kann ein Vorwurf sein. Vermeide Worte wie 'immer' und Bewertungen der anderen Person."
  },
  {
    text: "In der Gruppenarbeit erledigt ein Teammitglied seinen Teil nicht. Welche Antwort ist fair und klar?",
    answers: [
      "Ich habe Angst, dass du uns mit Absicht haengen laesst und nichts machst.",
      "Ich mache mir Sorgen, wenn dein Teil fehlt, weil unsere Abgabe dann gefaehrdet ist.",
      "Ich finde, du uebernimmst zu wenig Verantwortung in unserer Gruppe.",
      "Ich bin genervt von deiner fehlenden Motivation fuer diese Aufgabe."
    ],
    correct: 1,
    hint: "Beschreibe die konkrete Auswirkung auf die Aufgabe und schlage einen naechsten Schritt vor."
  },
  {
    text: "Ein Freund kommt 20 Minuten zu spaet. Welche Ich-Botschaft passt?",
    answers: [
      "Du hast mich wieder einmal einfach sitzen gelassen.",
      "Ich finde es schade, dass Puenktlichkeit fuer dich offenbar nicht wichtig ist.",
      "Ich werde unruhig, wenn ich ohne Nachricht warte, weil ich nicht weiss, ob du kommst.",
      "Du bist echt unzuverlaessig, wenn du so spaet kommst."
    ],
    correct: 2,
    hint: "Eine starke Ich-Botschaft bleibt bei der beobachtbaren Situation statt eine Eigenschaft zu bewerten."
  },
  {
    text: "Deine Schwester macht die Musik laut, waehrend du lernst. Welche Antwort ist am besten?",
    answers: [
      "Ich fuehle mich provoziert, weil du genau weisst, dass ich lernen muss.",
      "Ich finde deine Musik beim Lernen wirklich sehr ruecksichtslos.",
      "Du musst mehr Ruecksicht nehmen, wenn ich fuer die Schule lerne.",
      "Ich kann mich bei lauter Musik nicht konzentrieren und brauche jetzt Ruhe."
    ],
    correct: 3,
    hint: "Das Beduerfnis wird am klarsten, wenn du Situation, Wirkung und eine umsetzbare Bitte nennst."
  },
  {
    text: "Ein Klassenkamerad lacht ueber deinen Fehler an der Tafel. Welche Reaktion ist eine Ich-Botschaft?",
    answers: [
      "Ich fuehle, dass du mich vor allen kleinmachen wolltest.",
      "Ich fuehle mich blossgestellt, wenn ueber meinen Fehler gelacht wird.",
      "Ich finde, du bist nicht reif genug fuer so ein Verhalten vor allen.",
      "Du bist vor allen anderen wirklich sehr gemein zu mir."
    ],
    correct: 1,
    hint: "Gefuehle sind passend. Vermutungen ueber die Absicht oder Charakterurteile gehoeren nicht dazu."
  },
  {
    text: "Im Chat antwortet jemand mit 'Ist doch egal' auf deine Idee. Welche Antwort ist konstruktiv?",
    answers: [
      "Ich fuehle mich entmutigt, wenn meine Idee sofort als 'egal' bezeichnet wird.",
      "Ich habe das Gefuehl, dass du meine Ideen grundsaetzlich schlecht findest.",
      "Ich finde, du solltest meine Vorschlaege ernster nehmen.",
      "Wenn du so antwortest, bist du unhoeflich."
    ],
    correct: 0,
    hint: "Konstruktiv heisst: das Zitat oder Verhalten benennen, eigenes Gefuehl erklaeren und eine Bitte formulieren."
  },
  {
    text: "Dein Partner in einer Praesentation spricht viel laenger als abgesprochen. Was sagst du?",
    answers: [
      "Ich habe das Gefuehl, dass du die Praesentation an dich reissen willst.",
      "Ich finde es unfair, dass du nie auf die abgesprochene Zeit schaust.",
      "Ich werde nervoes, wenn mein Teil dadurch zu kurz kommt, weil ich vorbereitet bin.",
      "Du musst jetzt aufhoeren, damit ich auch noch drankomme."
    ],
    correct: 2,
    hint: "Die beste Antwort macht die Auswirkung sichtbar, ohne Motive zu unterstellen, und bietet eine Loesung an."
  },
  {
    text: "Ein Kunde beschwert sich laut, obwohl du ruhig helfen willst. Welche professionelle Ich-Botschaft passt?",
    answers: [
      "Ihr unfreundlicher Ton ist wirklich nicht in Ordnung.",
      "Ich finde, Sie sollten sich erst einmal beruhigen, bevor wir reden.",
      "Ich habe den Eindruck, dass Sie nur streiten wollen und nicht zuhoeren.",
      "Ich kann Ihnen besser helfen, wenn wir ruhig sprechen und das Problem klaeren."
    ],
    correct: 3,
    hint: "Professionell bleiben heisst: die gemeinsame Loesung und die benoetigte Gespraechsform in den Mittelpunkt stellen."
  },
  {
    text: "In der Klasse wird ein Witz ueber deine Herkunft gemacht. Welche Ich-Botschaft ist klar und stark?",
    answers: [
      "Ich habe das Gefuehl, dass ihr Vorurteile gegen meine Herkunft habt.",
      "Ich fuehle mich verletzt, wenn meine Herkunft zum Witz gemacht wird.",
      "Ich finde es schlimm, dass ihr so wenig Respekt fuer andere habt.",
      "Solche Witze sind rassistisch und haben hier nichts verloren."
    ],
    correct: 1,
    hint: "Die Antwort darf deutlich sein, bleibt aber bei dem konkreten Verhalten und der eigenen Wahrnehmung."
  },
  {
    text: "Dein Chef gibt dir vor anderen harte Kritik. Welche Ich-Botschaft waere angemessen?",
    answers: [
      "Ich kann Kritik besser annehmen, wenn wir sie unter vier Augen besprechen.",
      "Ich fuehle mich von Ihnen vor allen anderen absichtlich vorgefuehrt.",
      "Ich finde, Sie kritisieren mich viel haerter als die anderen Kollegen.",
      "Kritik vor anderen Leuten ist einfach unprofessionell."
    ],
    correct: 0,
    hint: "Schwieriger Fall: Die Form der Kritik ansprechen, die Wirkung benennen und einen anderen Rahmen vorschlagen."
  },
  {
    text: "Ein Freund sagt ein wichtiges Treffen kurzfristig ab und du hast extra andere Plaene verschoben. Welche Antwort ist die reifste Ich-Botschaft?",
    answers: [
      "Ich habe das Gefuehl, dass unsere Verabredung fuer dich nie wirklich wichtig war.",
      "Ich finde, du gehst sehr leichtfertig mit meiner Zeit und Planung um.",
      "Ich bin enttaeuscht, weil ich fuer das Treffen andere Plaene verschoben habe.",
      "Du bist wirklich unzuverlaessig und denkst nie an meine Zeit."
    ],
    correct: 2,
    hint: "Die staerkste Ich-Botschaft enthaelt eine konkrete Situation, Gefuehl, Grund und einen machbaren Wunsch."
  }
];

const replacementQuestions = [
  {
    text: "Ein Teammitglied veraendert deine Folie, ohne dich zu fragen. Welche Ich-Botschaft passt?",
    answers: [
      "Ich habe das Gefuehl, dass du meine Arbeit nicht wirklich ernst nimmst.",
      "Ich finde, du solltest nicht so ueber meine Folien bestimmen duerfen.",
      "Du sollst meine Folien und meine Arbeit mehr respektieren.",
      "Ich bin irritiert, wenn meine Folie ohne Absprache geaendert wird."
    ],
    correct: 3,
    hint: "Auch hier gilt: konkretes Verhalten, eigenes Gefuehl, Grund und eine klare Bitte."
  }
];

const clone = (value) => JSON.parse(JSON.stringify(value));
const originalQuestions = clone(questions);
const originalReplacementQuestions = clone(replacementQuestions);

const state = {
  index: 0,
  selected: null,
  locked: false,
  sound: true,
  usedFifty: false,
  usedHint: false,
  usedSwap: false,
  hiddenAnswers: new Set(),
  playerName: "Gast",
  classWinner: null,
  pollTimer: null
};

const letters = ["A", "B", "C", "D"];
const startScreen = document.getElementById("startScreen");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const connectionNote = document.getElementById("connectionNote");
const playerNameNode = document.getElementById("playerName");
const questionText = document.getElementById("questionText");
const answersNode = document.getElementById("answers");
const levelLabel = document.getElementById("levelLabel");
const prizeLabel = document.getElementById("prizeLabel");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const modalRestart = document.getElementById("modalRestart");
const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");
const ladderList = document.getElementById("ladderList");
const safeLabel = document.getElementById("safeLabel");
const fiftyButton = document.getElementById("fiftyButton");
const hintButton = document.getElementById("hintButton");
const swapButton = document.getElementById("swapButton");
const resultModal = document.getElementById("resultModal");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const winnerModal = document.getElementById("winnerModal");
const winnerText = document.getElementById("winnerText");
const winnerClose = document.getElementById("winnerClose");

let audioContext;
const hasServer = window.location.protocol.startsWith("http");

function getQuestion() {
  return questions[state.index];
}

async function api(path, options = {}) {
  if (!hasServer) return null;

  try {
    const response = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      ...options
    });

    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

function safePrize() {
  if (state.index >= 11) return prizes[11];
  if (state.index >= 7) return prizes[7];
  if (state.index >= 4) return prizes[4];
  return 0;
}

function playTone(type) {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  const notes = {
    select: { wave: "sine", tones: [[440, 0.05]] },
    correct: { wave: "triangle", tones: [[523, 0.1], [659, 0.13], [784, 0.15]] },
    wrong: { wave: "sawtooth", tones: [[220, 0.18], [164, 0.22]] },
    win: { wave: "triangle", tones: [[523, 0.12], [659, 0.12], [784, 0.18], [1046, 0.22]] },
    hint: { wave: "sine", tones: [[392, 0.07], [494, 0.08]] }
  }[type];

  notes.tones.forEach(([frequency, duration], index) => {
    const start = now + index * 0.08;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = notes.wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.18, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  });
}

function renderLadder() {
  ladderList.innerHTML = prizes
    .map((prize, index) => {
      const current = index === state.index ? "current" : "";
      const safe = [4, 7, 11].includes(index) ? "safe" : "";
      return `<li class="${current} ${safe}"><span>${index + 1}</span><strong>${prize.toLocaleString("de-DE")}</strong></li>`;
    })
    .join("");
  safeLabel.textContent = `Sicherung: ${safePrize().toLocaleString("de-DE")}`;
}

function renderQuestion() {
  const question = getQuestion();
  state.selected = null;
  state.locked = false;
  state.hiddenAnswers.clear();
  questionText.textContent = question.text;
  levelLabel.textContent = `Frage ${state.index + 1} / ${questions.length}`;
  prizeLabel.textContent = `${prizes[state.index].toLocaleString("de-DE")} Punkte`;
  feedback.textContent = "Waehle eine Antwort und logge sie ein.";
  nextButton.textContent = "Antwort einloggen";
  nextButton.disabled = true;
  renderAnswers();
  renderLadder();
  updateLifelines();
}

function renderAnswers() {
  const question = getQuestion();
  answersNode.innerHTML = question.answers
    .map((answer, index) => {
      const selected = state.selected === index ? "selected" : "";
      const hidden = state.hiddenAnswers.has(index) ? "hidden-answer" : "";
      return `
        <button class="answer ${selected} ${hidden}" type="button" data-index="${index}" ${state.locked ? "disabled" : ""}>
          <span class="letter">${letters[index]}</span>
          <span>${answer}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".answer").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });
}

function selectAnswer(index) {
  if (state.locked || state.hiddenAnswers.has(index)) return;
  state.selected = index;
  nextButton.disabled = false;
  feedback.textContent = `Antwort ${letters[index]} ist eingeloggt?`;
  playTone("select");
  renderAnswers();
}

function lockAnswer() {
  if (state.selected === null || state.locked) return;
  state.locked = true;
  const question = getQuestion();
  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
    if (index === state.selected && index !== question.correct) button.classList.add("wrong");
  });

  if (state.selected === question.correct) {
    feedback.textContent = "Richtig! Das ist eine klare Ich-Botschaft.";
    playTone(state.index === questions.length - 1 ? "win" : "correct");
    nextButton.textContent = state.index === questions.length - 1 ? "Sieg anzeigen" : "Naechste Frage";
    nextButton.disabled = false;
    return;
  }

  feedback.textContent = `Leider falsch. Richtig waere ${letters[question.correct]}.`;
  playTone("wrong");
  nextButton.textContent = "Ergebnis anzeigen";
  nextButton.disabled = false;
}

function advance() {
  if (!state.locked) {
    lockAnswer();
    return;
  }

  const won = state.selected === getQuestion().correct;
  if (!won) {
    showResult(false);
    return;
  }

  if (state.index === questions.length - 1) {
    showResult(true);
    return;
  }

  state.index += 1;
  renderQuestion();
}

function showResult(won) {
  const points = won ? prizes[prizes.length - 1] : safePrize();
  resultTitle.textContent = won ? "Du bist Kommunikations-Millionaer!" : "Spiel vorbei";
  resultText.textContent = won
    ? "Du hast alle Ich-Botschaften erkannt und die volle Punktzahl gewonnen."
    : `Du gehst mit ${points.toLocaleString("de-DE")} sicheren Punkten nach Hause.`;
  resultModal.classList.remove("hidden");

  if (won) {
    reportWinner();
  }
}

async function reportWinner() {
  if (!hasServer) {
    showClassWinner(state.playerName);
    return;
  }

  const data = await api("/api/win", {
    method: "POST",
    body: JSON.stringify({ name: state.playerName })
  });

  if (data?.winner?.name) {
    showClassWinner(data.winner.name);
  } else {
    showClassWinner(state.playerName);
  }
}

function showClassWinner(name) {
  if (state.classWinner) return;
  state.classWinner = name;
  winnerText.textContent = `${name} hat als Erste/r alle Fragen gewonnen!`;
  winnerModal.classList.remove("hidden");
  playTone("win");
}

async function pollClassState() {
  const data = await api("/api/state");
  if (data?.winner?.name && !state.classWinner) {
    showClassWinner(data.winner.name);
  }

  if (data?.playersCount && hasServer) {
    connectionNote.textContent = `Klassenserver verbunden. Spieler online: ${data.playersCount}.`;
  }
}

function updateLifelines() {
  fiftyButton.disabled = state.usedFifty;
  hintButton.disabled = state.usedHint;
  swapButton.disabled = state.usedSwap || replacementQuestions.length === 0;
}

function useFifty() {
  if (state.usedFifty || state.locked) return;
  const question = getQuestion();
  const wrong = question.answers
    .map((_, index) => index)
    .filter((index) => index !== question.correct && index !== state.selected)
    .slice(0, 2);
  wrong.forEach((index) => state.hiddenAnswers.add(index));
  state.usedFifty = true;
  feedback.textContent = "Zwei falsche Antworten wurden entfernt.";
  playTone("hint");
  renderAnswers();
  updateLifelines();
}

function useHint() {
  if (state.usedHint || state.locked) return;
  state.usedHint = true;
  feedback.textContent = getQuestion().hint;
  playTone("hint");
  updateLifelines();
}

function useSwap() {
  if (state.usedSwap || state.locked || replacementQuestions.length === 0) return;
  questions[state.index] = replacementQuestions.shift();
  state.usedSwap = true;
  playTone("hint");
  renderQuestion();
}

function restart() {
  questions.splice(0, questions.length, ...clone(originalQuestions));
  replacementQuestions.splice(0, replacementQuestions.length, ...clone(originalReplacementQuestions));
  state.index = 0;
  state.selected = null;
  state.locked = false;
  state.usedFifty = false;
  state.usedHint = false;
  state.usedSwap = false;
  state.hiddenAnswers.clear();
  resultModal.classList.add("hidden");
  renderQuestion();
}

async function beginGame(event) {
  event.preventDefault();
  const cleanedName = nameInput.value.trim().replace(/\s+/g, " ").slice(0, 24);
  state.playerName = cleanedName || "Gast";
  playerNameNode.textContent = state.playerName;
  localStorage.setItem("ichArenaName", state.playerName);
  document.body.classList.remove("menu-open");
  startScreen.classList.add("hidden");
  renderQuestion();

  if (hasServer) {
    const data = await api("/api/join", {
      method: "POST",
      body: JSON.stringify({ name: state.playerName })
    });

    if (data?.winner?.name) {
      showClassWinner(data.winner.name);
    }

    state.pollTimer = window.setInterval(pollClassState, 1000);
  }
}

function prepareMenu() {
  document.body.classList.add("menu-open");
  const savedName = localStorage.getItem("ichArenaName");
  if (savedName) nameInput.value = savedName;
  connectionNote.textContent = hasServer
    ? "Klassenserver erkannt. Wenn jemand gewinnt, sehen es alle automatisch."
    : "Offline geoeffnet: Du kannst allein spielen. Fuer den Klassenmodus bitte server.js starten.";
}

nameForm.addEventListener("submit", beginGame);
nextButton.addEventListener("click", advance);
restartButton.addEventListener("click", restart);
modalRestart.addEventListener("click", restart);
fiftyButton.addEventListener("click", useFifty);
hintButton.addEventListener("click", useHint);
swapButton.addEventListener("click", useSwap);
soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  soundIcon.textContent = state.sound ? "♪" : "×";
});
winnerClose.addEventListener("click", () => winnerModal.classList.add("hidden"));

prepareMenu();
