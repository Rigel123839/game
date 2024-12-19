// area to spawn burn in.
const area = document.getElementById("area");
// get burn
const burn = new Image();
burn.src = "../media/camera.jpg";
document.getElementById("burn_container").appendChild(burn);
burn.style.width = "auto";
burn.style.height = "100px";
// get player element
const player1 = document.getElementById("character");

// make random positions for burn
let b_x = 0;
let b_y = 0;
let score = -1;

// updating score count
function updateScore() {
  // get player score
  const scoreCount = document.getElementById("player_score");
  // score starts at 0

  score++;
  scoreCount.innerHTML = "SCORE: " + score;
  console.log(score);
}
// timer for respawn of burn
let respawntime = true;
// move burn to random spot after drinking
function moveBurn() {
  // update score
  updateScore();

  if (!respawntime) return;

  // make unable to respawn
  respawntime = false;

  // remove burn
  burn.style.display = "none";

  // delay burn to reapear
  setTimeout(() => {
    // get areasize
    const areaSize = area.getBoundingClientRect();
    const burnSize = 150;

    // random spot
    b_y = Math.floor(Math.random() * (window.innerHeight - burnSize));
    b_x = Math.floor(Math.random() * (window.innerWidth - burnSize));

    // make absolute
    burn.style.position = "absolute";
    // show burn again
    burn.style.display = "block";
    // change position of burn
    burn.style.top = b_y + "px";
    burn.style.left = b_x + "px";

    // respawn
    respawntime = true;
  }, 1000);
}

function moDrink() {
  // let margin of pickup
  const overunder = 0;

  // get player position and burn
  let p_coordinates = player1.getBoundingClientRect();
  let b_coordinates = burn.getBoundingClientRect();

  if (
    Math.floor(p_coordinates.top - b_coordinates.top) <= overunder &&
    Math.floor(p_coordinates.left - b_coordinates.left) <= overunder
  ) {
    console.log("touching");
    moveBurn(b_x, b_y);
  }
}

moveBurn();
/* console.log(Math.floor(p_coordinates.top, b_coordinates.top)); */
