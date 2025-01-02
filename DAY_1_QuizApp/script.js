//CREATE THE OBJECTS FOR THE QUESTIONS +
//GET THE ELEMENTS IN THE HTML FILE +
//CREATE A FUNCTION THAT DISPLAYS THE QUESTION AND ANSWERS
//CREATE A FUNCTION TO RESET THE DEFAULT ANSWER PARAMS
//CREATE A FUNCTION TO SELECT AND VALIDATE ANSWERS

const questions = [
  {
    question: "How many Countries are in Africa",
    answers: [
      { text: 52, correct: false },
      { text: 54, correct: true },
      { text: 61, correct: false },
      { text: 49, correct: false },
    ],
  },
  {
    question: "How many Countries are in the World",
    answers: [
      { text: 324, correct: false },
      { text: 542, correct: false },
      { text: 114, correct: false },
      { text: 146, correct: true },
    ],
  },
  {
    question: "How many Regions are in Ghana",
    answers: [
      { text: 14, correct: false },
      { text: 16, correct: true },
      { text: 10, correct: false },
      { text: 15, correct: false },
    ],
  },
  {
    question: "How old is Ghana",
    answers: [
      { text: 90, correct: false },
      { text: 65, correct: true },
      { text: 61, correct: false },
      { text: 67, correct: false },
    ],
  },
  {
    question: "What currency is used in Liberia",
    answers: [
      { text: "cedi", correct: false },
      { text: "Naira", correct: true },
      { text: "Kwacha", correct: false },
      { text: "Liberian Dollar", correct: false },
    ],
  },
];

const currentQuestionIndex = 0;
const Score = 0;

const StartQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
};

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next");
// console.log(answerButton.firstChild);

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButton.firstChild) {
//     answerButton.removeChild(answerButton.firstChild);
//   }
// }

function showQuestion() {
  // resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.append(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
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
}

showQuestion();
