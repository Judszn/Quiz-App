//CREATE THE QUESTIONS
//ACCESS THE ELEMENT FROM THE HTML FILE
//WRITE THE FUNCTION FOR THE RESET BUTTON
//WRITE THE FUNCTION TO DISPLAY THE CURRENT QUESTION AND ANSWER
//WRITE THE FUNCTION TO SELECT THE SUBJECT TO STUDY
//WRITE THE FUNCTION TO VALIDATE THE ANSWER
//WRITE THE FUNCTION TO ENABLE THE NEXT BUTTON

const Questions = [
  {
    question: "What is the primary function of the mitochondria in a cell?",
    answers: [
      { text: "To synthesize proteins", correct: false },
      { text: "To store genetic information", correct: false },
      { text: "To generate energy for the cell ", correct: true },
      { text: "To regulate cell growth", correct: false },
    ],
    label: "biology",
  },
  {
    question:
      "Which of the following is an example of a symbiotic relationship?",
    answers: [
      { text: " Predator-prey relationship", correct: false },
      { text: " Competition for resources", correct: false },
      { text: " Clownfish and sea anemone ", correct: true },
      { text: " Parasitic relationship", correct: false },
    ],
    label: "biology",
  },
  {
    question:
      "What is the process by which plants convert sunlight into energy?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis ", correct: true },
      { text: " Fermentation ", correct: false },
      { text: "Transpiration", correct: false },
    ],
    label: "biology",
  },
  {
    question: "Which of the following is a characteristic of a mammal?",
    answers: [
      { text: "Scales", correct: false },
      { text: "Lay eggs", correct: false },
      { text: "Have a four-chambered heart ", correct: true },
      { text: "Have gills", correct: false },
    ],
    label: "biology",
  },
  {
    question: "What is the term for the building blocks of life?",
    answers: [
      { text: "Cells", correct: true },
      { text: "molecules", correct: false },
      { text: "tissue", correct: false },
      { text: "organs", correct: false },
    ],
    label: "biology",
  },

  {
    question: "What is the force that opposes motion between two surfaces?",
    answers: [
      { text: "Gravity", correct: false },
      { text: "Friction", correct: true },
      { text: "Normal force", correct: false },
      { text: "Tension", correct: false },
    ],
    label: "physics",
  },
  {
    question:
      "Which of the following types of energy is associated with an object's motion?",
    answers: [
      { text: "  Potential energy", correct: false },
      { text: "  Kinetic energy ", correct: true },
      { text: "  Thermal energy ", correct: false },
      { text: " Electrical energy", correct: false },
    ],
    label: "physics",
  },
  {
    question: `What is the term for the "study of the behavior of matter and energy"?`,
    answers: [
      { text: "Biology", correct: false },
      { text: "Chemistry ", correct: false },
      { text: "  Physics  ", correct: true },
      { text: " Geology", correct: false },
    ],
    label: "physics",
  },
  {
    question: "Which of the following is an example of a vector quantity?",
    answers: [
      { text: "Temperature", correct: false },
      { text: "Mass", correct: false },
      { text: "Velocity ", correct: true },
      { text: " Time", correct: false },
    ],
    label: "physics",
  },
  {
    question: `What is the term for the "amount of matter in an object"?
`,
    answers: [
      { text: "Weight ", correct: false },
      { text: "Mass ", correct: true },
      { text: "Density ", correct: false },
      { text: "Volume", correct: false },
    ],
    label: "physics",
  },

  {
    question:
      "What is the smallest unit of matter that still retains the properties of an element?",
    answers: [
      { text: "Molecule", correct: false },
      { text: "Compound", correct: false },
      { text: "Atom", correct: true },
      { text: "Mixture", correct: false },
    ],
    label: "chemistry",
  },
  {
    question:
      "Which of the following types of bonds involves the sharing of electrons?",
    answers: [
      { text: "   Ionic bond", correct: false },
      { text: "  Covalent bond ", correct: true },
      { text: "  Hydrogen bond ", correct: false },
      { text: " Electrostatic bond", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: `What is the term for the "process by which a solid changes directly to a gas"?`,
    answers: [
      { text: "Melting", correct: false },
      { text: "Boiling ", correct: false },
      { text: "  Sublimation  ", correct: true },
      { text: " Geology", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: "Which of the following is an example of an acid?",
    answers: [
      { text: " Baking soda", correct: false },
      { text: " Soap", correct: false },
      { text: " Lemon juice ", correct: true },
      { text: "Water", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: `What is the term for the "study of the structure, properties, and reactions of matter"?
`,
    answers: [
      { text: " Biology ", correct: false },
      { text: "Physics", correct: true },
      { text: "Chemistry", correct: false },
      { text: " Geology", correct: false },
    ],
    label: "chemistry",
  },
];

const currentQuestion = document.getElementById("currentQuestion");
const displayAnswers = document.getElementById("answerButtons");
const next = document.getElementById("nextButton");
const chemistryButton = document.getElementById("chemistry");
const physicsButton = document.getElementById("physics");
const biologyButton = document.getElementById("biology");
const questionSection = document.getElementById("questionSection");
const currentSubject = document.getElementById("currentSubject");
const scoreElement = document.getElementById("Score");
const scoreValue = document.getElementById("scoreValue");
let currentQuestionIndex = 0;
let score = 0;
scoreValue.innerHTML = score;
const startQuiz = () => {
  score = 0;
  currentQuestionIndex = 0;

  showBiology();
  showChemistry();
  showPhysics();
};

const resetState = () => {
  next.style.display = "none";
  scoreElement.style.display = "none";

  while (displayAnswers.firstChild) {
    displayAnswers.removeChild(displayAnswers.firstChild);
  }
};

const showChemistry = () => {
  resetState();
  const chemistryQuestions = Questions.filter((question) => {
    if (question.label === "chemistry") {
      currentSubject.innerHTML = question.label;
      return question;
    }
  });

  questionSection.style.display = "flex";
  function showQuestion() {
    const Question = chemistryQuestions[currentQuestionIndex];
    currentQuestion.innerHTML =
      currentQuestionIndex + 1 + ". " + Question.question;

    Question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      displayAnswers.appendChild(button);
      button.addEventListener("click", showAnswer);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", showAnswer);
      button.addEventListener("click", nextQuestion);
    });
  }
  showQuestion();
};

const showPhysics = () => {
  resetState();
  const physicsQuestions = Questions.filter((question) => {
    if (question.label === "physics") {
      currentSubject.innerHTML = question.label;
      return question;
    }
  });

  questionSection.style.display = "flex";
  function showQuestion() {
    const Question = physicsQuestions[currentQuestionIndex];
    currentQuestion.innerHTML =
      currentQuestionIndex + 1 + ". " + Question.question;
    Question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      displayAnswers.appendChild(button);
      button.addEventListener("click", showAnswer);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", showAnswer);
      button.addEventListener("click", nextQuestion);
    });
  }
  showQuestion();
};

const showBiology = () => {
  resetState();
  const biologyQuestions = Questions.filter((question) => {
    if (question.label === "biology") {
      currentSubject.innerHTML = question.label;
      return question;
    }
  });

  currentQuestionIndex = 0;

  showQuestion();
  questionSection.style.display = "flex";
  function showQuestion() {
    resetState();
    const Question = biologyQuestions[currentQuestionIndex];

    currentQuestion.innerHTML =
      currentQuestionIndex + 1 + ". " + Question.question;

    Question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      displayAnswers.appendChild(button);

      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", showAnswer);
      button.addEventListener("click", nextQuestion);
    });
  }
};
function showAnswer(e) {
  const selectedAnswer = e.target;
  const isCorrect = selectedAnswer.dataset.correct === "true";
  if (isCorrect) {
    selectedAnswer.classList.add("correct");
    score + 1;
  } else {
    selectedAnswer.classList.add("incorrect");
  }
  Array.from(displayAnswers.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < Questions.label === "biology") {
    showBiology();
    scoreElement.style.display = "block";
  } else {
    startQuiz();
  }
}

nextQuestion();

startQuiz();
chemistryButton.addEventListener("click", showChemistry);
physicsButton.addEventListener("click", showPhysics);
biologyButton.addEventListener("click", showBiology);
