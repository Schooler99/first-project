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
  
  showQuestion();

  console.log('hello world! Project initialized')
