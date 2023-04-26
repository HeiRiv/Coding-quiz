var startButton = document.getElementById("start-btn");
var title = document.querySelector("#title");
var introduction = document.querySelector("#introduction");
var questionContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("game started");
  startButton.classList.add("hide");
  title.classList.add("hide");
  introduction.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

var questions = [
  {
    question: "Which  is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Austalia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "How many oceans are there on earth?",
    answers: [
      { text: "Four", correct: false },
      { text: "Two", correct: false },
      { text: "One", correct: false },
      { text: "Five", correct: true },
    ],
  },
  {
    question: "In which country could you find the Leaning Tower Of Pisa?",
    answers: [
      { text: "USA", correct: false },
      { text: "Peru", correct: false },
      { text: "Italy", correct: true },
      { text: "Colombia", correct: false },
    ],
  },
  {
    question: "How many bones do sharks have?",
    answers: [
      { text: "None", correct: true },
      { text: "250", correct: true },
      { text: "180", correct: false },
      { text: "365", correct: false },
    ],
  },
  {
    question: "In which lenguage does 'konnihiwa' mean 'hello'?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "Japanese", correct: false },
      { text: "Mandarin", correct: false },
    ],
  },
];
var questionElement = document.getElementById("question");
var questionElement = document.getElementById("answer-buttons");
var questionElement = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.CreateElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
