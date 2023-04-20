
var audio = new Audio("./sounds/terror-ambience-7003.mp3");



// get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


// set up the player and shark
const player = {
  x: canvas.width - 100,
  y: canvas.height - 50,
  speed: 5,
  size: 40,
  image: new Image()
};
player.image.src = './lib/person.png';

const shark = {
  x: 100,
  y: canvas.height - 50,
  speed: 3,
  size: 70,
  image: new Image()
};
shark.image.src = './lib/shark.png';

//added stuff for floater and timer
const floater = {
  x: Math.random() * 400,
  y: Math.random() * 400,
  speed: 0,
  size: 50,
  image: new Image()
};
floater.image.src = './lib/floater.png';

const drawFloater = () =>{
  ctx.drawImage(floater.image, floater.x - floater.size / 2, floater.y - floater.size / 2, floater.size, floater.size);
};

// set up the game loop
function gameLoop() {
  


  
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // move the player
  if (keys.ArrowUp) {
    if (player.y - player.size / 2 <= 0) {
      player.y = player.size / 2;
    }
    player.y -= player.speed;
  }
  if (keys.ArrowDown) {
    if (player.y - player.size / 2 >= canvas.height) {
      player.y = canvas.height - player.size / 2;
    }
    player.y += player.speed;
  }
  if (keys.ArrowLeft) {
    if(player.x === 0){
      if (player.x - player.size / 2 <= 0) {
        player.x = player.size / 2;
      }
    }
    player.x -= player.speed;
  }
  if (keys.ArrowRight) {
    if (player.x + player.size / 2 >= canvas.width) {
      player.x = canvas.width - player.size / 2;
    }
    player.x += player.speed;
  }
  
  // draw the player
  ctx.drawImage(player.image, player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);
  
  // move the shark
  if (shark.x < player.x) {
    shark.x += shark.speed;
  } else {
    shark.x -= shark.speed;
  }
  if (shark.y < player.y) {
    shark.y += shark.speed;
  } else {
    shark.y -= shark.speed;
  }
  
  // draw the shark
  ctx.drawImage(shark.image, shark.x - shark.size / 2, shark.y - shark.size / 2, shark.size, shark.size);
  
  //more added stuff for timer
  setTimeout(drawFloater, 5000);

  //check if the player escaped with the floater
  if(Math.abs(player.x - floater.x) < (player.size + floater.size) / 2 && Math.abs(player.y - floater.y) < (player.size + floater.size) / 2){
    alert('Well done! Close window to continue quiz!')
  }

  // check if the shark caught the player
  if (Math.abs(player.x - shark.x) < (player.size + shark.size) / 2 && Math.abs(player.y - shark.y) < (player.size + shark.size) / 2) {
    alert('Game over! Close window to continue quiz!');
    clearInterval(gameInterval);
  }
}

// set up the keyboard input
const keys = {};
document.addEventListener('keydown', event => {
  keys[event.code] = true;
});
document.addEventListener('keyup', event => {
  keys[event.code] = false;
});

// start the game loop
const gameInterval = setInterval(gameLoop, 20);
audio.play();