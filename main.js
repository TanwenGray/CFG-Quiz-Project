//setting up variables
const welcome = document.getElementById("welcome-text")
const startButton = document.getElementById("start-button")
const quizBox = document.getElementById("quiz-box")
const results = document.getElementById("results")

let statCorrectAnswers = document.getElementById("correct")
let statQuestionsAnswered = document.getElementById("questions-answered")

//event listeners for the buttons

startButton.addEventListener('click', startGame)

//what happens when you press start
function startGame () {
  startButton.classList.add('hide')
  welcome.classList.add('hide')
  quizBox.classList.remove('hide')

}

const questionList = [
  (questionOne = {
    question:
      'How can you select an element with the ID "myElement" in JavaScript?',
    answers: [
      (a = {
        content: "getElement('myElement')",
        correct: false,
      }),
      (b = {
        content: "document.getElementByName('myElement')",
        correct: false,
      }),
      (c = {
        content: "document.getElementById('myElement')",
        correct: true,
      }),
      (d = {
        content: "selectElement('myElement')",
        correct: false,
      }),
    ],
  }),
  (questionTwo = {
    question:
      "What method is used to retrieve the text content of an element in the DOM?",
    answers: [
      (a = {
        content: "element.textContent",
        correct: true,
      }),
      (b = {
        content: "element.innerText",
        correct: false,
      }),
      (c = {
        content: "element.text",
        correct: false,
      }),
      (d = {
        content: "element.innerHTML",
        correct: false,
      }),
    ],
  }),
  (questionThree = {
    question:
      'How do you attach a click event listener to an element with the ID "button"?',
    answers: [
      (a = {
        content: "button.addEventListener('click', myFunction)",
        correct: true,
      }),
      (b = {
        content: "button.attachEvent('onclick', myFunction)",
        correct: false,
      }),
      (c = {
        content: "button.on('click', myFunction)",
        correct: false,
      }),
      (d = {
        content: "button.click(myFunction)",
        correct: false,
      }),
    ],
  }),
];

console.log(questionList[0].answers[3].correct);

function loadQuestion(i) {
 return questionList[i];
}

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questionList[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questionList[currentQuestion].choices[index];
  });

}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  

  if (selected === questionList[currentQuestion].answers.find(answer => answer.correct).content) {
    feedback.innerText = "Correct!";
    correctAnswers++;
    quizBox.style.backgroundColor = "green";
  } else {
    feedback.innerText = "Incorrect!";
    quizBox.style.backgroundColor = "red";
  }

  setTimeout(() => {
    currentQuestion++;
    quizBox.style.backgroundColor = "white";

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} question.</p>`;
    }
  }, 2000);
}

showQuestion();