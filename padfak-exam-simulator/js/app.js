const setupScreen = document.getElementById("setupScreen");
const examScreen = document.getElementById("examScreen");
const resultScreen = document.getElementById("resultScreen");
const examForm = document.getElementById("examForm");
const languageCard = document.getElementById("languageCard");
const timerText = document.getElementById("timerText");
const timerBox = document.querySelector(".timer-box");
const examMeta = document.getElementById("examMeta");
const progressText = document.getElementById("progressText");
const answeredText = document.getElementById("answeredText");
const progressBar = document.getElementById("progressBar");
const questionTag = document.getElementById("questionTag");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const restartButton = document.getElementById("restartButton");

const scorePercent = document.getElementById("scorePercent");
const scoreFraction = document.getElementById("scoreFraction");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const emptyCount = document.getElementById("emptyCount");
const usedTime = document.getElementById("usedTime");
const resultSubtitle = document.getElementById("resultSubtitle");
const reviewList = document.getElementById("reviewList");

const subjectLabels = {
  russian: "روسی",
  chemistry: "شیمی",
  biology: "زیست"
};

const languageLabels = {
  russian: "روسی",
  english: "انگلیسی"
};

const optionLetters = ["A", "B", "C", "D"];

let state = {
  subject: "russian",
  language: "russian",
  questions: [],
  answers: [],
  currentIndex: 0,
  totalTime: 30 * 60,
  timeLeft: 30 * 60,
  timerId: null,
  startedAt: null,
  finishedAt: null
};

function showScreen(screen) {
  [setupScreen, examScreen, resultScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clampNumber(value, min, max, fallback) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTimer(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatElapsed(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;

  if (minutes === 0) return `${secs} ثانیه`;
  if (secs === 0) return `${minutes} دقیقه`;
  return `${minutes} دقیقه و ${secs} ثانیه`;
}

function updateChoiceStyles(groupName) {
  document.querySelectorAll(`input[name="${groupName}"]`).forEach((input) => {
    const wrapper = input.closest("label");
    if (wrapper) wrapper.classList.toggle("active", input.checked);
  });
}

function handleSubjectChange() {
  const subject = document.querySelector('input[name="subject"]:checked').value;
  const needsLanguage = subject === "chemistry" || subject === "biology";
  languageCard.classList.toggle("hidden", !needsLanguage);

  updateChoiceStyles("subject");
  updateChoiceStyles("questionLanguage");
}

function normalizeInputs() {
  const questionCount = document.getElementById("questionCount");
  const examTime = document.getElementById("examTime");
  questionCount.value = clampNumber(questionCount.value, 0, 10, 5);
  examTime.value = clampNumber(examTime.value, 1, 180, 30);
}

function startExam(event) {
  event.preventDefault();
  normalizeInputs();

  const subject = document.querySelector('input[name="subject"]:checked').value;
  const selectedLanguage = document.querySelector('input[name="questionLanguage"]:checked').value;
  const language = subject === "russian" ? "russian" : selectedLanguage;
  const count = clampNumber(document.getElementById("questionCount").value, 0, 10, 5);
  const totalMinutes = clampNumber(document.getElementById("examTime").value, 1, 180, 30);
  const totalTime = totalMinutes * 60;
  const sourceQuestions = QUESTION_BANK[subject][language] || [];

  state = {
    subject,
    language,
    questions: shuffle(sourceQuestions).slice(0, count),
    answers: Array(count).fill(null),
    currentIndex: 0,
    totalTime,
    timeLeft: totalTime,
    timerId: null,
    startedAt: Date.now(),
    finishedAt: null
  };

  if (count === 0) {
    showResults("آزمون بدون سؤال ثبت شد.");
    return;
  }

  showScreen(examScreen);
  renderExam();
  startTimer();
}

function startTimer() {
  clearInterval(state.timerId);
  timerBox.classList.remove("danger");
  timerText.textContent = formatTimer(state.timeLeft);

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    timerText.textContent = formatTimer(state.timeLeft);
    timerBox.classList.toggle("danger", state.timeLeft <= 60);

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      showResults("زمان آزمون به پایان رسید و پاسخ‌ها به‌صورت خودکار ثبت شدند.");
    }
  }, 1000);
}

function renderExam() {
  const total = state.questions.length;
  const question = state.questions[state.currentIndex];
  const answered = state.answers.filter((answer) => answer !== null).length;
  const progress = total ? ((state.currentIndex + 1) / total) * 100 : 0;

  examMeta.textContent = `آزمون ورودی دانشگاه / ${subjectLabels[state.subject]} / ${languageLabels[state.language]}`;
  progressText.textContent = `سؤال ${state.currentIndex + 1} از ${total}`;
  answeredText.textContent = `${answered} پاسخ داده شده`;
  progressBar.style.width = `${progress}%`;
  questionTag.textContent = subjectLabels[state.subject];
  questionNumber.textContent = `${state.currentIndex + 1}/${total}`;
  questionText.textContent = question.prompt;

  optionsList.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-button ${state.answers[state.currentIndex] === index ? "selected" : ""}`;
    button.innerHTML = `<span class="option-letter">${optionLetters[index]}</span><span>${option}</span>`;
    button.addEventListener("click", () => selectOption(index));
    optionsList.appendChild(button);
  });

  prevButton.disabled = state.currentIndex === 0;
  nextButton.disabled = state.currentIndex === total - 1;
}

function selectOption(index) {
  state.answers[state.currentIndex] = index;
  renderExam();
}

function moveQuestion(step) {
  const nextIndex = state.currentIndex + step;
  if (nextIndex >= 0 && nextIndex < state.questions.length) {
    state.currentIndex = nextIndex;
    renderExam();
  }
}

function showResults(message = "گزارش عملکرد شما در آزمون شبیه‌سازی‌شده") {
  clearInterval(state.timerId);
  state.finishedAt = Date.now();

  const total = state.questions.length;
  let correct = 0;
  let empty = 0;

  state.questions.forEach((question, index) => {
    const selected = state.answers[index];
    if (selected === null) empty += 1;
    if (selected === question.answerIndex) correct += 1;
  });

  const wrong = Math.max(0, total - correct - empty);
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
  const elapsed = state.startedAt ? Math.min(state.totalTime, Math.round((state.finishedAt - state.startedAt) / 1000)) : 0;

  scorePercent.textContent = `${percent}%`;
  scoreFraction.textContent = `${correct}/${total}`;
  document.querySelector(".score-ring").style.setProperty("--score-deg", `${percent * 3.6}deg`);
  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  emptyCount.textContent = empty;
  usedTime.textContent = formatElapsed(elapsed);
  resultSubtitle.textContent = message;

  renderReview();
  showScreen(resultScreen);
}

function renderReview() {
  reviewList.innerHTML = "";

  if (state.questions.length === 0) {
    reviewList.innerHTML = `<div class="review-item empty"><div class="review-question">هیچ سؤالی برای این آزمون انتخاب نشده بود.</div></div>`;
    return;
  }

  state.questions.forEach((question, index) => {
    const selected = state.answers[index];
    const isCorrect = selected === question.answerIndex;
    const status = selected === null ? "empty" : isCorrect ? "correct" : "wrong";
    const selectedText = selected === null ? "بدون پاسخ" : `${optionLetters[selected]}. ${question.options[selected]}`;
    const correctText = `${optionLetters[question.answerIndex]}. ${question.options[question.answerIndex]}`;

    const item = document.createElement("article");
    item.className = `review-item ${status}`;
    item.innerHTML = `
      <div class="review-question">${index + 1}. ${question.prompt}</div>
      <div class="review-grid">
        <div class="review-answer"><span>پاسخ شما</span>${selectedText}</div>
        <div class="review-answer"><span>پاسخ درست</span>${correctText}</div>
      </div>
      <div class="explanation">${question.explanation}</div>
    `;
    reviewList.appendChild(item);
  });
}

function bindEvents() {
  document.querySelectorAll('input[name="subject"]').forEach((input) => {
    input.addEventListener("change", handleSubjectChange);
  });

  document.querySelectorAll('input[name="questionLanguage"]').forEach((input) => {
    input.addEventListener("change", () => updateChoiceStyles("questionLanguage"));
  });

  document.querySelectorAll(".number-control button").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      const step = Number.parseInt(button.dataset.step, 10);
      const min = Number.parseInt(target.min, 10);
      const max = Number.parseInt(target.max, 10);
      const fallback = target.id === "examTime" ? 30 : 5;
      target.value = clampNumber(Number.parseInt(target.value, 10) + step, min, max, fallback);
    });
  });

  document.getElementById("questionCount").addEventListener("blur", normalizeInputs);
  document.getElementById("examTime").addEventListener("blur", normalizeInputs);
  examForm.addEventListener("submit", startExam);
  prevButton.addEventListener("click", () => moveQuestion(-1));
  nextButton.addEventListener("click", () => moveQuestion(1));
  submitButton.addEventListener("click", () => showResults("آزمون توسط شما ثبت شد."));
  restartButton.addEventListener("click", () => {
    clearInterval(state.timerId);
    showScreen(setupScreen);
  });
}

bindEvents();
handleSubjectChange();
