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
      { text: "Physics", correct: false },
      { text: "Chemistry", correct: true },
      { text: " Geology", correct: false },
    ],
    label: "chemistry",
  },
];

const additionalQuestions = [
  // Additional Biology Questions
  {
    question: "What is the process of cellular division called?",
    answers: [
      { text: "Mitosis", correct: true },
      { text: "Osmosis", correct: false },
      { text: "Diffusion", correct: false },
      { text: "Respiration", correct: false },
    ],
    label: "biology",
  },
  {
    question: "Which organelle is known as the 'powerhouse' of the cell?",
    answers: [
      { text: "Nucleus", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Endoplasmic Reticulum", correct: false },
      { text: "Golgi Apparatus", correct: false },
    ],
    label: "biology",
  },
  {
    question: "What is the main function of white blood cells?",
    answers: [
      { text: "Transport oxygen", correct: false },
      { text: "Fight infections", correct: true },
      { text: "Produce hormones", correct: false },
      { text: "Carry nutrients", correct: false },
    ],
    label: "biology",
  },
  {
    question: "Which of these is not a type of blood vessel?",
    answers: [
      { text: "Arteries", correct: false },
      { text: "Veins", correct: false },
      { text: "Capillaries", correct: false },
      { text: "Lymphatics", correct: true },
    ],
    label: "biology",
  },
  {
    question: "What is the process by which plants make their own food?",
    answers: [
      { text: "Photosynthesis", correct: true },
      { text: "Respiration", correct: false },
      { text: "Fermentation", correct: false },
      { text: "Digestion", correct: false },
    ],
    label: "biology",
  },

  // Additional Physics Questions
  {
    question: "What is the SI unit of force?",
    answers: [
      { text: "Watt", correct: false },
      { text: "Newton", correct: true },
      { text: "Joule", correct: false },
      { text: "Pascal", correct: false },
    ],
    label: "physics",
  },
  {
    question: "Which law states that energy cannot be created or destroyed?",
    answers: [
      { text: "Newton's First Law", correct: false },
      { text: "Law of Conservation of Energy", correct: true },
      { text: "Ohm's Law", correct: false },
      { text: "Boyle's Law", correct: false },
    ],
    label: "physics",
  },
  {
    question: "What is the speed of light in vacuum?",
    answers: [
      { text: "299,792,458 m/s", correct: true },
      { text: "300,000,000 m/s", correct: false },
      { text: "3,000,000 m/s", correct: false },
      { text: "30,000 m/s", correct: false },
    ],
    label: "physics",
  },
  {
    question: "Which particle has a negative charge?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Neutron", correct: false },
      { text: "Electron", correct: true },
      { text: "Positron", correct: false },
    ],
    label: "physics",
  },
  {
    question: "What is the unit of electrical resistance?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ampere", correct: false },
      { text: "Ohm", correct: true },
      { text: "Watt", correct: false },
    ],
    label: "physics",
  },

  // Additional Chemistry Questions
  {
    question: "What is the atomic number of Carbon?",
    answers: [
      { text: "12", correct: false },
      { text: "6", correct: true },
      { text: "14", correct: false },
      { text: "8", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: "Which of these is a noble gas?",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Helium", correct: true },
      { text: "Chlorine", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: "What is the pH of a neutral solution?",
    answers: [
      { text: "0", correct: false },
      { text: "7", correct: true },
      { text: "14", correct: false },
      { text: "1", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: "Which element is a liquid at room temperature?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Mercury", correct: true },
      { text: "Copper", correct: false },
      { text: "Sodium", correct: false },
    ],
    label: "chemistry",
  },
  {
    question: "What type of bond is formed by sharing electrons?",
    answers: [
      { text: "Ionic", correct: false },
      { text: "Covalent", correct: true },
      { text: "Metallic", correct: false },
      { text: "Hydrogen", correct: false },
    ],
    label: "chemistry",
  }
];

// Combine existing questions with additional questions
Questions.push(...additionalQuestions);

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
let biologyScore = 0;
let physicsScore = 0;
let chemistryScore = 0;
let currentSubjectQuestions = [];
let currentSubjectType = '';

function startQuiz() {
  score = 0;
  biologyScore = 0;
  physicsScore = 0;
  chemistryScore = 0;
  currentQuestionIndex = 0;
  updateScores();
  questionSection.classList.add('hidden');
}

function resetState() {
  while (displayAnswers.firstChild) {
    displayAnswers.removeChild(displayAnswers.firstChild);
  }
}

function showQuestion(question) {
  currentQuestion.innerText = question.question;
  resetState();
  
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add(
      'answer-btn',
      'w-full',
      'text-left',
      'p-4',
      'rounded-lg',
      'bg-gray-700',
      'text-gray-100',
      'hover:bg-gray-600',
      'transition-all',
      'duration-200',
      'font-medium',
      'border',
      'border-gray-600',
      'hover:border-gray-500'
    );
    button.dataset.correct = answer.correct;
    button.addEventListener('click', showAnswer);
    displayAnswers.appendChild(button);
  });
}

function showChemistry() {
  currentSubjectType = 'chemistry';
  currentSubjectQuestions = Questions.filter(q => q.label === 'chemistry');
  currentQuestionIndex = 0;
  currentSubject.innerHTML = '<h1>Chemistry</h1>';
  questionSection.classList.remove('hidden');
  showQuestion(currentSubjectQuestions[currentQuestionIndex]);
}

function showPhysics() {
  currentSubjectType = 'physics';
  currentSubjectQuestions = Questions.filter(q => q.label === 'physics');
  currentQuestionIndex = 0;
  currentSubject.innerHTML = '<h1>Physics</h1>';
  questionSection.classList.remove('hidden');
  showQuestion(currentSubjectQuestions[currentQuestionIndex]);
}

function showBiology() {
  currentSubjectType = 'biology';
  currentSubjectQuestions = Questions.filter(q => q.label === 'biology');
  currentQuestionIndex = 0;
  currentSubject.innerHTML = '<h1>Biology</h1>';
  questionSection.classList.remove('hidden');
  showQuestion(currentSubjectQuestions[currentQuestionIndex]);
}

function updateScores() {
  document.getElementById('biology-score').innerText = `Biology: ${biologyScore}`;
  document.getElementById('physics-score').innerText = `Physics: ${physicsScore}`;
  document.getElementById('chemistry-score').innerText = `Chemistry: ${chemistryScore}`;
  scoreValue.innerText = biologyScore + physicsScore + chemistryScore;
}

function showAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  const buttons = document.querySelectorAll('#answerButtons button');
  
  buttons.forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === 'true') {
      button.classList.remove('bg-gray-700', 'hover:bg-gray-600');
      button.classList.add('bg-green-600', 'text-white', 'border-green-500');
    } else {
      button.classList.remove('bg-gray-700', 'hover:bg-gray-600');
      button.classList.add('bg-red-600', 'text-white', 'border-red-500', 'opacity-70');
    }
  });

  if (correct) {
    if (currentSubjectType === 'biology') biologyScore++;
    else if (currentSubjectType === 'physics') physicsScore++;
    else if (currentSubjectType === 'chemistry') chemistryScore++;
    updateScores();
  }
  
  // Enable the next button after answering
  next.disabled = false;
  next.classList.remove('opacity-50');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentSubjectQuestions.length) {
    showQuestion(currentSubjectQuestions[currentQuestionIndex]);
  } else {
    currentQuestion.innerHTML = "You've completed this section!";
    displayAnswers.innerHTML = '';
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Try Another Subject';
    restartButton.classList.add(
      'w-full',
      'text-center',
      'p-4',
      'rounded-lg',
      'bg-blue-600',
      'text-white',
      'hover:bg-blue-500',
      'transition-all',
      'duration-200',
      'font-medium',
      'mt-4'
    );
    restartButton.addEventListener('click', () => {
      questionSection.classList.add('hidden');
      currentQuestionIndex = 0;
    });
    displayAnswers.appendChild(restartButton);
  }
}

// Add event listener for the next button
next.addEventListener('click', () => {
  if (currentQuestionIndex < currentSubjectQuestions.length) {
    nextQuestion();
  }
});

startQuiz();

chemistryButton.addEventListener('click', showChemistry);
physicsButton.addEventListener('click', showPhysics);
biologyButton.addEventListener('click', showBiology);
