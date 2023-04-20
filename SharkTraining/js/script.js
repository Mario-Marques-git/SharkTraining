const restartBtn = document.getElementById("restart-btn");
const water = document.querySelector(".water");
const gameOverMsg = document.getElementById("game-over");

let waterHeight = 0; // track the current height of the water element

function moveUp() {
  waterHeight++;
  water.style.transform = `translate(0%, ${100 - waterHeight}%)`;

  if (waterHeight >= 200) {
    window.location.href = "/SharkTraining/GameOver.Html"; // Redirect to GameOver.html
    waterHeight = 0;
    setTimeout(() => {
      water.style.transform = `translate(0%, ${100 - waterHeight}%)`;
    }, 2000); // wait 2 seconds before resetting the animation
  }
}

function moveDown() {
  waterHeight = 0;
  water.style.transform = `translate(0%, ${100 - waterHeight}%)`;
}

restartBtn.addEventListener("click", moveDown);
setInterval(moveUp, 200); // animate the water element every 50 milliseconds
