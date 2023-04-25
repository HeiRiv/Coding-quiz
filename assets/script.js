const startBtn = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
startBtn.addEventListener("click", startGame);

function startGame() {
  console.log("game started");
  startBtn.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}
