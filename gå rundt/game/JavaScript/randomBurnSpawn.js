// area to spawn burn in.
const area = document.getElementById("area");
// get burn
const burn = document.getElementById("burn");
// get player element
const player1 = document.getElementById("character");

// make random positions for burn
let b_x = 0;
let b_y = 0;

// updating score count
function updateScore() {
  // get player score
  const scoreCount = document.getElementById("player_score");
  // score starts at 0
  let score = 0;
  scoreCount.innerHTML = score + " SCORE";
  score++;
  console.log(score);
}

// move burn to random spot after drinking
function moveBurn() {
  const areaSize = area.getBoundingClientRect();
  const burnSize = 50;
  // random spot
  b_y = Math.floor(Math.random() * (areaSize.height - burnSize));
  b_x = Math.floor(Math.random() * (areaSize.width - burnSize));
  burn.style.position = "absolute";
  burn.style.top = b_y + "px";
  burn.style.left = b_x + "px";
}

function moDrink() {
  const overunder = 10;

  // get player position and burn
  let p_coordinates = player1.getBoundingClientRect();
  let b_coordinates = burn.getBoundingClientRect();

  if (
    Math.floor(p_coordinates.top - b_coordinates.top) <= overunder &&
    Math.floor(p_coordinates.left - b_coordinates.left) <= overunder
  ) {
    console.log("touching");
    moveBurn(x, y);
    updateScore();
  } else {
  }
}

moveBurn();
setInterval(moDrink, 500);
/* console.log(Math.floor(p_coordinates.top, b_coordinates.top)); */
