const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const buttonElement = document.getElementById("button");
const color = document.querySelector(".color");

console.log(color);

buttonElement.addEventListener("click", () => {
  let hexColor = "#";

  for (let index = 0; index < 6; index++) {
    hexColor += colors[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}