const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
const quizData = [
  {
    question: "Are you self-displined?"
    options: [yes, no],
    answer: "Dog"
  },
  { 
    question: "Are you extroverted?"
    options: [yes, no],
    answer: "Dog"
  }, 
  {
    question: "Do you love the outdoors?"
    options: [yes, no],
    answer: "Dog"
  },
  {
    question: "Are you curious? Creative?"
    options: [yes, no],
    answer: "Cat"
  },
  {
    question: "Are you a little neurotic? Easily Stressed?"
    options: [yes, no],
    answer: "Cat"
  },
  {
    question: "Do you prefer to spend time on your own?"
    options: [yes, no],
    answer: "Cat"
  },
  {
    question: "Are you independent? Analytical?"
    options: [yes, no],
    answer: "Reptile"
  },
  {
    question: "Shows interest in science/nature?"
    options: [yes, no],
    answer: "Reptile"
  },
  {
    question: "Prefer a pet without fur?"
    options: [yes, no],
    answer: "Reptile"
  },
  
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

/* USURE IF WE NEED
    let currentQuestion = 0;
     let score = 0; */

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
// Function to display the final quiz results https://www.shecodes.io/athena/59004-how-to-create-a-standard-quiz-with-html-css-and-javascript
  
function showResults() {
  
    questionContainer.style.display = "none";
    resultsContainer.style.display = "block";
    totalSpan.textContent = quizData.length;
    correctSpan.textContent = numCorrect;
  }

  showQuestion();

  console.log('hello world! Project initialized')
