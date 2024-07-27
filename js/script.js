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
    question: "Are you a little neurotic? Easily Stressed?"
    options: [yes, no],
    answer: "Cat"
  },
  {
    question: "Do you prefer to spend time on your own?"
    options: [yes, no],
    answer: "Cat"
  },
  document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  submitAnswers();
    

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
  
    quizdata.style.display = "none";
    quizdata.style.display = "block";
    totalSpan.textContent = quizData.length;
    correctSpan.textContent = numCorrect;
  }
// form at end of quiz 
  const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // create user object from submission
  const user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
     };

  // set new submission to local storage
  localStorage.setItem('user', JSON.stringify(user));
});

//Should be last page. 
  console.log('hello world! Project initialized')
