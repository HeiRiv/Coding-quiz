var startButton = document.getElementById("start-btn");
var title = document.querySelector("#title");
var introduction = document.querySelector("#introduction");
var questionContainerElement = document.getElementById("question-container");
var scoreContainerElement = document.getElementById("score-container");
var scoreElement = document.getElementById("score");
var initialsForm = document.getElementById("initials-form");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit-btn");
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("game started");
  startButton.classList.add("hide");
  title.classList.add("hide");
  introduction.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  firstQuestion();
}

const timerElement = document.createElement("div");
timerElement.classList.add("timer");
document.body.appendChild(timerElement);
const timeLimit = 50;

let timeLeft = timeLimit;
let countdownIntervalId;

function startCountdown() {
  countdownIntervalId = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(countdownIntervalId);
      timerElement.textContent = "Time's up!";
    }
  }, 1000);
}

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});

var questions = [
  {
    question: "1. Which  is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Austalia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "2. How many oceans are there on earth?",
    answers: [
      { text: "Four", correct: false },
      { text: "Two", correct: false },
      { text: "One", correct: false },
      { text: "Five", correct: true },
    ],
  },
  {
    question: "3. In which country could you find the Leaning Tower Of Pisa?",
    answers: [
      { text: "USA", correct: false },
      { text: "Peru", correct: false },
      { text: "Italy", correct: true },
      { text: "Colombia", correct: false },
    ],
  },
  {
    question: "4. How many bones do sharks have?",
    answers: [
      { text: "None", correct: true },
      { text: "250", correct: false },
      { text: "180", correct: false },
      { text: "365", correct: false },
    ],
  },
  {
    question: "5. In which lenguage does 'konnihiwa' mean 'hello'?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: false },
      { text: "Japanese", correct: true },
      { text: "Mandarin", correct: false },
    ],
  },
];

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var endGameBtn = document.getElementById("end-btn");
var currentQuestionIndex = 0;

nextButton.addEventListener("click", displayQuestion);

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  answerButton.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });
}

function selectAnswer(event) {
  var selectedButton = event.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButton.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    totalScore += 10;
  } else {
    timeLeft -= 8;
  }
  if (currentQuestionIndex < questions.length - 1) {
    nextButton.classList.remove("hide");
  } else {
    nextButton.classList.add("hide");
    endGameBtn.classList.remove("hide");
    clearInterval(countdownIntervalId);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function firstQuestion() {
  currentQuestionIndex = 0;
  displayQuestion();
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  displayQuestion();
});

endGameBtn.addEventListener("click", showScoreContainer);

function showScoreContainer() {
  questionContainerElement.classList.add("hide");
  scoreContainerElement.classList.remove("hide");
  console.log(scoreContainerElement);
  scoreElement.innerText = timeLeft;
  endGameBtn.classList.add("hide");
  nextButton.classList.add("hide");
}
