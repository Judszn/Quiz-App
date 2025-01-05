//Create an array for the questions
//access the html element in js
//create the reset function
//create the score variable & currentQuestionIndex
//create a function to display the question and corresponding answer (apply the reset the reset function and the answer)
//create a function for checking the answer
//call the function

const Questions = [
  {
    question: "Who is the president of USA",
    answers: [
      { text: "Kamala Harris", correct: false },
      { text: "Colman Trump", correct: false },
      { text: "Donald Trump", correct: true },
      { text: "Kamala Harry", correct: false },
    ],
  },
  {
    question: "Who is the president of France",
    answers: [
      { text: "Reginald Maron", correct: false },
      { text: "President Macron", correct: true },
      { text: "Tobias Macron", correct: false },
      { text: "Samuel Macron", correct: false },
    ],
  },
  {
    question: "Who is the president of North Korea",
    answers: [
      { text: "Yin Su", correct: false },
      { text: "Si Lin", correct: false },
      { text: "Lee Kan", correct: false },
      { text: "Kim Jon Hun", correct: true },
    ],
  },
];

const displayQuestion = document.getElementById("question");
const Answers = document.getElementById("answers");
const nextButton = document.getElementById("next");

let score = 0;
let currentQuestionIndex = 0;

const StartQuiz = () => {
  score = 0;
  currentQuestionIndex = 0;
};

const resetState = () => {
  nextButton.style.display = "none";
  while (Answers.firstChild) {
    Answers.removeChild(Answers.firstChild);
  }
};

const ShowQuestion = () => {
  resetState();
  const question = Questions[currentQuestionIndex];
  const getQuestion = currentQuestionIndex + 1 + ". " + question.question;
  displayQuestion.innerHTML = getQuestion;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer.text;
    Answers.appendChild(button);
    // if (answer.correct === "true") {
    button.dataset.correct = answer.correct;
    // }

    button.addEventListener("click", selectAnswer);
  });
};

const selectAnswer = (e) => {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    score++;
    selectBtn.classList.add("correct");
  } else {
    selectBtn.classList.add("incorrect");
  }

  nextButton.style.display = "block";

  ApplyNext();
  selectBtn.classList.add("disabled");
  Array.from(Answers.children).forEach((button) => {
    if (button.classList.correct === "true") {
      button.classList.add("correct");
    }
    selectBtn.disabled = "true";
  });
};

const ApplyNext = () => {
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex > Questions.length) {
      ShowQuestion();
    } else {
      StartQuiz();
    }
  });
};

ShowQuestion();
