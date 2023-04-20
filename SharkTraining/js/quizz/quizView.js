import { getQuestions } from "./quizQuestions.js";

let score = 0;
let askedQuestions = [];
let sharkGameWindow;
var drop = new Audio("./sounds/drop-of-water-36948.mp3");


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
    <div class="question_card">
      <div class="card-body">
        <h5 class="card-title">${question.question}</h5>
        <div class="btn-group-vertical" role="group">
  `;
  for (let i = 0; i < question.options.length; i++) {
    questionHtml += `
          <button id="option-btn"type="button" onclick="checkAnswer(this, '${question.answer}')">${question.options[i]}</button>
    `;
    
  }
  questionHtml += `
        </div>
      </div>
    </div>
  `;
  quizDiv.innerHTML = questionHtml;
}

export function popUpSharkGame() {
  
  sharkGameWindow = window.open('', 'newWindow', 'width=800,height=800');
  sharkGameWindow.document.write(`<html><head><title>My Shark Game</title></head><body></body></html>`);
  var body = sharkGameWindow.document.body;
  var iframe = document.createElement('iframe');
  iframe.src = 'sharkGame/index.html';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  body.appendChild(iframe);

  return sharkGameWindow;
  }

function checkAnswer(button, answer) {
  drop.play();
  if (button.innerText.toLowerCase() === answer.toLowerCase()) {
    score++;
    button.classList.add("btn-success");
  } else {
    button.classList.add("btn-danger");
    popUpSharkGame();
  }
  document.getElementById("score").innerText = `Score: ${score}`;
  setTimeout(displayQuestion, 1000);
}
window.checkAnswer = checkAnswer;

displayQuestion();



