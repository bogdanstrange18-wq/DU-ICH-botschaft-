const prizes = [500, 1000, 10000, 50000, 75000, 100000, 150000, 200000, 250000, 500000, 750000, 1000000];

const questions = [
  {
    text: "Dein Mitschueler nimmt deinen Stift, ohne zu fragen. Welche Antwort ist eine vollstaendige Ich-Botschaft?",
    answers: [
      "Ich bin veraergert, wenn mein Stift ungefragt genommen wird, weil ich ihn selbst brauche. Bitte frag mich vorher.",
      "Du nimmst einfach dauernd meine Sachen ohne Erlaubnis, weil du ruecksichtslos bist. Hoer endlich auf damit!",
      "Ich habe das Gefuehl, dass du mich absichtlich provozieren willst, weil du keinen Respekt hast. Lass das bitte!",
      "Du musst sofort aufhoeren, meine Sachen ungefragt zu nehmen, weil sich das nicht gehoert. Leg ihn sofort hin!"
    ],
    correct: 0,
    hint: "Formel fuer eine echte Ich-Botschaft: Konkrete Situation + eigenes Gefühl + Auswirkung/Beduerfnis + Bitte."
  },
  {
    text: "Jemand unterbricht dich mehrmals im Gespraech. Was ist eine echte Ich-Botschaft?",
    answers: [
      "Du laesst mich nie ausreden und quatschst dauernd dazwischen, weil du egoistisch bist. Hoer endlich damit auf!",
      "Ich habe das Gefuehl, dass dich meine Meinung gar nicht interessiert und du mich einfach ignorieren willst.",
      "Du musst sofort aufhoeren, mich staendig zu unterbrechen, weil das stoert. Lass mich gefaelligst ausreden!",
      "Ich werde verunsichert, wenn ich unterbrochen werde, weil mir mein Gedanke wichtig ist. Bitte lass mich ausreden."
    ],
    correct: 3,
    hint: "Achtung vor Pseudo-Ich-Botschaften: 'Ich habe das Gefühl, dass du...' ist ein Vorwurf, kein echtes Gefühl."
  },
  {
    text: "In der Gruppenarbeit erledigt ein Teammitglied seinen Teil nicht. Welche Antwort ist eine klare Ich-Botschaft?",
    answers: [
      "Du laesst unsere ganze Gruppe im Stich und faulenzt nur herum, waehrend wir schuften. Mach endlich deinen Teil!",
      "Ich mache mir Sorgen, wenn deine Folie fehlt, weil unsere Abgabe gefaehrdet ist. Lass uns das jetzt fertigmachen.",
      "Ich habe das Gefuehl, dass du gar keine Lust auf unser Team hast und uns die Arbeit absichtlich ueberlaesst.",
      "Du musst deinen Teil sofort fertigstellen, weil wir sonst eine schlechte Note bekommen. Arbeite jetzt endlich!"
    ],
    correct: 1,
    hint: "Beschreibe die sachliche Auswirkung auf die Aufgabe und schlage einen naechsten Schritt vor."
  },
  {
    text: "Ein Freund kommt 20 Minuten zu spaet. Welche Antwort ist eine richtige Ich-Botschaft?",
    answers: [
      "Du bist wieder einmal total unpuenktlich und laesst mich einfach warten, weil dir meine Zeit voellig egal ist.",
      "Ich habe das Gefuehl, dass unsere gemeinsamen Treffen fuer dich unwichtig sind und du mich nicht schaetzt.",
      "Ich werde unruhig, wenn ich ohne Nachricht warte, weil ich mir Sorgen mache. Gib mir naechstes Mal bitte Bescheid.",
      "Du musst endlich lernen, puenktlich zu unseren Treffen zu erscheinen, weil man andere nicht warten laesst!"
    ],
    correct: 2,
    hint: "Eine echte Ich-Botschaft beschreibt das eigene Gefühl und verzichtet auf Urteile ueber den Charakter."
  },
  {
    text: "Deine Schwester macht laute Musik, waehrend du lernst. Welche Formulierung ist eine Ich-Botschaft?",
    answers: [
      "Du bist extrem ruecksichtslos und machst dauernd Laerm, obwohl du genau weisst, dass ich fuer die Schule lerne!",
      "Ich habe das Gefuehl, dass du mich mit deiner Musik absichtlich beim Lernen stoeren und provozieren willst.",
      "Mach sofort die Musik aus und sei endlich leise, weil ich mich konzentrieren muss. Mach die Tuer sofort zu!",
      "Ich kann mich bei lauter Musik nicht konzentrieren, weil ich morgen lerne. Ich brauche jetzt eine Stunde Ruhe."
    ],
    correct: 3,
    hint: "Nenne deine eigene Situation, die konkrete Folge und eine umsetzbare Bitte."
  },
  {
    text: "Ein Klassenkamerad lacht ueber deinen Fehler an der Tafel. Welche Reaktion ist eine echte Ich-Botschaft?",
    answers: [
      "Du bist einfach nur gemein und machst dich vor allen ueber mich lustig, weil du keinen Anstand im Leib hast!",
      "Ich fuehle mich verletzt, wenn ueber Fehler gelacht wird, weil ich mitmache. Ich wunsche mir fairen Umgang.",
      "Ich habe das Gefuehl, dass du mich vor der ganzen Klasse kleinmachen willst, um selber besser dazustehen.",
      "Lach gefaelligst nicht so bloed ueber andere Leute, sondern kuemmere dich um deine eigenen Fehler an der Tafel!"
    ],
    correct: 1,
    hint: "Echte Gefühle beschreiben den eigenen Zustand (z.B. verletzt), nicht die vermutete Absicht des anderen."
  },
  {
    text: "Im Chat antwortet jemand mit 'Ist doch egal' auf deine Idee. Welche Ich-Botschaft passt?",
    answers: [
      "Ich bin enttaeuscht, wenn meine Idee als 'egal' abgetan wird, weil ich nachdenke. Ich wuensche mir Feedback.",
      "Du bist im Chat total unhoeflich und machst alle meine Vorschlaege schlecht, weil du nicht nachdenken willst!",
      "Ich habe das Gefuehl, dass du meine Beitraege grundsaetzlich wertlos findest und mich nicht ernst nimmst.",
      "Nimm meine Beitraege gefaelligst ernster und antworte in Zukunft anstaendig, wenn ich etwas im Chat vorschlage!"
    ],
    correct: 0,
    hint: "Das konkrete Zitat benennen, das eigene Gefühl ausdrücken und eine Bitte formulieren."
  },
  {
    text: "Dein Partner in einer Praesentation spricht viel laenger als abgesprochen. Was ist eine Ich-Botschaft?",
    answers: [
      "Du redest viel zu viel und nimmst mir einfach meine ganze Zeit weg, weil du immer nur dich selber hoeren willst!",
      "Ich habe das Gefuehl, dass du dich alleine in den Vordergrund draengen willst und mein Teil dir egal ist.",
      "Ich werde nervoes, wenn die Zeit ueberschritten wird, weil mein Teil zu kurz kommt. Lass uns auf die Uhr achten.",
      "Hoer jetzt auf zu reden und lass mich endlich vortragen, weil wir vereinbart haben, dass wir die Zeit teilen!"
    ],
    correct: 2,
    hint: "Fokus auf die gemeinsame Auswirkung und die Loesung, ohne Absichten zu unterstellen."
  },
  {
    text: "Ein Kunde beschwert sich lautstark. Welche professionelle Ich-Botschaft passt?",
    answers: [
      "Sie sind extrem unfreundlich und schreien mich hier grundlos an, weil Sie sich ueberhaupt nicht im Griff haben!",
      "Ich habe den Eindruck, dass Sie gar kein Interesse an einer Loesung haben, sondern nur Ihren Frust abladen wollen.",
      "Beruhigen Sie sich erst einmal und sprechen Sie vernuenftig mit mir, sonst beende ich das Gespraech sofort!",
      "Ich kann Ihr Anliegen besser verstehen, wenn wir ruhig sprechen, weil das hilft. Lass uns das in Ruhe klaeren."
    ],
    correct: 3,
    hint: "Professionell bleiben: Eigene Rahmenbedingungen fuer das Gespraech benennen und Loesungsbereitschaft zeigen."
  },
  {
    text: "In der Klasse wird ein Witz ueber deine Herkunft gemacht. Welche klare Ich-Botschaft passt?",
    answers: [
      "Ihr seid alle total respektlos und habt nur dumme Vorurteile im Kopf, weil ihr gar nicht nachdenken wollt!",
      "Ich fuehle mich verletzt, wenn Witze ueber meine Herkunft fallen, weil mir Respekt wichtig ist. Bitte lass das.",
      "Ich habe das Gefuehl, dass ihr mich wegen meiner Herkunft ausgrenzen wollt, um euch ueber mich zu stellen.",
      "Hoert sofort auf mit diesen unmoeglichen Spruechen, weil sich so etwas in unserer Schulklasse nicht gehoert!"
    ],
    correct: 1,
    hint: "Klar Stellung beziehen, beim eigenen Gefühl bleiben und eine deutliche Bitte äußern."
  },
  {
    text: "Dein Chef gibt dir vor allen Kollegen harte Kritik. Welche Ich-Botschaft ist angemessen?",
    answers: [
      "Ich kann Kritik besser annehmen, wenn wir sie unter vier Augen besprechen, weil ich mich dann besser konzentriere.",
      "Sie haben mich vor den Kollegen voellig grundlos bloessgestellt, weil Sie Ihre Launen an mir auslassen wollen!",
      "Ich habe das Gefuehl, dass Sie mich vor dem gesamten Team absichtlich vorfuehren und schikanieren wollten.",
      "Kritisieren Sie mich gefaelligst nie wieder vor anderen Mitarbeitern, sondern sprechen Sie mich privat an!"
    ],
    correct: 0,
    hint: "Den gewuenschten Rahmen ansprechen und erklären, warum dieser effektiver ist."
  },
  {
    text: "Ein Freund sagt ein Treffen kurzfristig ab, obwohl du Plaene verschoben hast. Welche ist die reifste Ich-Botschaft?",
    answers: [
      "Du bist total unzuverlaessig und denkst nie an meine Zeit, weil dir unsere Freundschaft voellig egal ist!",
      "Ich habe das Gefuehl, dass dir unsere Treffen ueberhaupt nicht wichtig sind und du mich einfach nur hinhaeltst.",
      "Ich bin enttaeuscht, wenn kurzfristig abgesagt wird, weil ich Plaene verschoben habe. Sag mir frueher Bescheid.",
      "Du musst dich künftig wirklich mehr um unsere Verabredungen bemuehen, sonst treffe ich mich nicht mehr mit dir!"
    ],
    correct: 2,
    hint: "Situation benennen, enttaeuschtes Gefühl äußern, Grund erklären und Bitte für die Zukunft formulieren."
  }
];

const replacementQuestions = [
  {
    text: "Ein Teammitglied veraendert deine Folie, ohne dich zu fragen. Welche Ich-Botschaft passt?",
    answers: [
      "Du pfuschst einfach in meinen Folien herum und bestimmst ueber alles, weil du immer recht haben willst!",
      "Ich habe das Gefuehl, dass du meine Arbeit ueberhaupt nicht schaetzt und mich einfach uebergehen willst!",
      "Lass kuenftig deine Finger von meinen Folien und veraendere nichts mehr, ohne mich vorher um Erlaubnis zu fragen!",
      "Ich bin irritiert, wenn Folien ungefragt geaendert werden, weil mir Abstimmung wichtig ist. Sprechen wir das ab."
    ],
    correct: 3,
    hint: "Vier Bausteine: Verhalten + Gefühl + Grund/Bedürfnis + Vereinbarung."
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
