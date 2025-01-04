//CREATE THE ARRAY FOR THE QUESTIONS +
const questions = [
  {
    question: "Capital of Argentina",
    answers: [
      { text: "Santiago", correct: false },
      { text: "Bueno Aires", correct: true },
      { text: "Sentigo", correct: false },
      { text: "Bieno Aris", correct: false },
    ],
  },
  {
    question: "Capital of Belgium",
    answers: [
      { text: "Beins", correct: false },
      { text: "Brussels", correct: true },
      { text: "Ottawa", correct: false },
      { text: "Oslo", correct: false },
    ],
  },
  {
    question: "Capital of Eritrea",
    answers: [
      { text: "Capetown", correct: false },
      { text: "Shedils", correct: false },
      { text: "Celta", correct: false },
      { text: "Asmara", correct: true },
    ],
  },
  {
    question: "Capital of Sudan",
    answers: [
      { text: "Malabo", correct: false },
      { text: "Guies", correct: false },
      { text: "Perid", correct: false },
      { text: "Khartoum", correct: true },
    ],
  },
  {
    question: "Capital of Australia",
    answers: [
      { text: "Wellington", correct: false },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
    ],
  },
  {
    question: "Capital of Nigeria",
    answers: [
      { text: "Addis ababa", correct: false },
      { text: "Lagos", correct: false },
      { text: "Abuja", correct: true },
      { text: "Benin", correct: false },
    ],
  },
  {
    question: "Capital of Denmark",
    answers: [
      { text: "Houitr", correct: false },
      { text: "coepper", correct: false },
      { text: "Shuie", correct: false },
      { text: "Copenhagen", correct: true },
    ],
  },
  {
    question: "Capital of Zimbabwe",
    answers: [
      { text: "Harare", correct: true },
      { text: "Deern", correct: false },
      { text: "maputo", correct: false },
      { text: "Luanda", correct: false },
    ],
  },
  {
    question: "Capital of Finland",
    answers: [
      { text: "Celtic", correct: false },
      { text: "Coppenhagen", correct: false },
      { text: "Ethelpe", correct: false },
      { text: "Oslo", correct: true },
    ],
  },
  {
    question: "Capital of Uzbekistan",
    answers: [
      { text: "Quupoer", correct: false },
      { text: "Khartoum", correct: false },
      { text: "Tashkent", correct: true },
      { text: "Ahkek", correct: false },
    ],
  },
];
//GET THE ELEMENTS IN THE HTML FILE +
const displayQuestion = document.getElementById("question");
const showAnswers = document.getElementById("answers");

const nextButton = document.getElementById("next");

let score = 0;
let currentQuestionIndex = 0;

const StartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
};
//CREATE A FUNCTION THAT DISPLAYS THE QUESTION AND ANSWERS +
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  displayQuestion.innerHTML =
    currentQuestionIndex + 1 + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    showAnswers.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
//CREATE A FUNCTION TO RESET THE DEFAULT ANSWER PARAMS
function resetState() {
  nextButton.style.display = "none";

  while (showAnswers.firstChild) {
    showAnswers.removeChild(showAnswers.firstChild);
  }
}
//CREATE A FUNCTION TO SELECT AND VALIDATE ANSWERS
function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(showAnswers.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  displayQuestion.innerHTML = `Your score for this round is ${score} out of ${questions.length}!`;
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
showQuestion();
