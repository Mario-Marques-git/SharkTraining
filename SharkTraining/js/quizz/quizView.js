import { getQuestions } from "./quizService.js";

let score = 0;
let askedQuestions = [];

function getRandomQuestion() {
  let questions = getQuestions();
  let randomIndex = Math.floor(Math.random() * questions.length);
  let question = questions[randomIndex];
  if (askedQuestions.includes(question)) {
    return getRandomQuestion();
  } else {
    askedQuestions.push(question);
    return question;
  }
}

function displayQuestion() {
  let quizDiv = document.getElementById("quiz");
  let question = getRandomQuestion();
  let questionHtml = `
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title">${question.question}</h5>
        <div class="btn-group-vertical" role="group">
  `;
  for (let i = 0; i < question.options.length; i++) {
    questionHtml += `
          <button type="button" class="btn btn-secondary" onclick="checkAnswer(this, '${question.answer}')">${question.options[i]}</button>
    `;
  }
  questionHtml += `
        </div>
      </div>
    </div>
  `;
  quizDiv.innerHTML = questionHtml;
}

function checkAnswer(button, answer) {
  if (button.innerText === answer) {
    score++;
    button.classList.add("btn-success");
  } else {
    button.classList.add("btn-danger");
  }
  document.getElementById("score").innerText = `Score: ${score}`;
  setTimeout(displayQuestion, 1000);
}
window.checkAnswer = checkAnswer;

displayQuestion();