var cords = document.getElementById("position");

const sondreLeft = document.getElementsByClassName("sondreLeft");
const sondreRight = document.getElementsByClassName("sondreRight");

// current position of player
let x = 200,
  y = 500;

const player = document.getElementById("character");
player.style.position = "absolute";
player.style.top = y + "px";
player.style.left = x + "px";

function updatePlayerPos(x, y) {
  player.style.left = x + "px";
  player.style.top = y + "px";
  // Update position display
  cords.innerHTML = `${x}, ${y}`;
}

function leftSondre() {
  sondreRight.classList.add("unseen");
  sondreLeft.classList.remove("unseen");
}
function rightSondre() {
  sondreRight.classList.remove("unseen");
  sondreLeft.classList.add("unseen");
}
var cordinates = player.getBoundingClientRect();
/* console.log(cordinates); */

cords.innerHTML = `${Math.floor(x)}, ${Math.floor(y)}`;

// Keyboard input handling
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      y -= 10;
      updatePlayerPos(x, y);
      moDrink();
      /*   console.log(`x: ${x}, y: ${y}`); */
      break;
    case "a":
      x -= 10;
      updatePlayerPos(x, y);
      moDrink();
      leftSondre();
      /*    console.log(`x: ${x}, y: ${y}`); */
      break;
    case "s":
      y += 10;
      updatePlayerPos(x, y);
      moDrink();
      /*  console.log(`x: ${x}, y: ${y}`); */
      break;
    case "d":
      x += 10;
      updatePlayerPos(x, y);
      moDrink();
      rightSondre();
      /*  console.log(`x: ${x}, y: ${y}`); */
      break;
  }
});
