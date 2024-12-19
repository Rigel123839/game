var cords = document.getElementById("position");
const player = document.getElementById("character");
// movement speed definition
let ms = 10;
// start position of player
let x = 1000;
let y = 500;

// get player
const sondreLeft = document.querySelector(".sondreLeft");
const sondreRight = document.querySelector(".sondreRight");

player.style.position = "absolute";
player.style.top = y + "px";
player.style.left = x + "px";

// check player size
const playerWidth = player.offsetWidth;
const playerHeight = player.offsetHeight;
// screen size
const viewHeight = window.innerHeight;
const viewWidth = window.innerWidth;

// update player position
function updatePlayerPos(x, y) {
  // check player not OOB
  if (x < 0) x = 0; // cant move more left than 0
  if (x + playerWidth > viewWidth) x = viewWidth - playerWidth; // cant move more right than screen
  if (y < 0) y = 0; // cant move more up than 0
  if (y + playerHeight > viewHeight) y = viewHeight - playerHeight; // cant move more down than screen

  // update player position
  player.style.left = x + "px";
  player.style.top = y + "px";
}

// sondre functions to make the model change when walking
function sondreMain() {
  /* 
  sondreMain.classList.remove("unseen"); */
  sondreRight.classList.add("unseen");
  sondreLeft.classList.add("unseen");
}
function leftSondre() {
  /* 
  sondreMain.classList.add("unseen"); */
  sondreRight.classList.add("unseen");
  sondreLeft.classList.remove("unseen");
}
function rightSondre() {
  /* 
  sondreMain.classList.add("unseen"); */
  sondreRight.classList.remove("unseen");
  sondreLeft.classList.add("unseen");
}

// save keys pressed
const keysPressed = {};

// keydown press handling
document.addEventListener("keydown", (event) => {
  // mark key as pressed
  keysPressed[event.key] = true;
});
// keyup press handling
document.addEventListener("keyup", (event) => {
  // mark key as pressed
  keysPressed[event.key] = false;
});

function movementLoop() {
  if (keysPressed["w"] && y > 0) {
    y -= ms;
    moDrink();
    updatePlayerPos(x, y);
  }
  if (keysPressed["a"] && x > 0) {
    x -= ms;
    moDrink();
    leftSondre();
    updatePlayerPos(x, y);
  }
  if (keysPressed["s"] && y + playerHeight < window.innerHeight) {
    y += ms;
    moDrink();
    updatePlayerPos(x, y);
  }
  if (keysPressed["d"] && x + playerWidth < window.innerWidth) {
    x += ms;
    moDrink();
    rightSondre();
    updatePlayerPos(x, y);
  }
requestAnimationFrame(movementLoop);
}


movementLoop();
