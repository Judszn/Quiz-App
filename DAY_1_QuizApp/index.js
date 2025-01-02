const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraffe", correct: "false" },
    ],
  },
  {
    question: "Which is the largest country in the world?",
    answers: [
      { text: "USA", correct: "false" },
      { text: "Russia", correct: "true" },
      { text: "India", correct: "false" },
      { text: "China", correct: "false" },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Eritea", correct: "false" },
      { text: "Seychelles", correct: "false" },
      { text: "Cuba", correct: "false" },
      { text: "Vatican City", correct: "true" },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: "false" },
      { text: "Sahara", correct: "false" },
      { text: "Antartica", correct: "true" },
      { text: "Greenland", correct: "false" },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: "false" },
      { text: "Europe", correct: "False" },
      { text: "Australia", correct: "true" },
      { text: "Africa", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");

const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

const StartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;

  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});

StartQuiz();
