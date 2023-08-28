const colors = [
  "yellow",
  "purple",
  "orange",
  "rgb(204, 51, 255)",
  "rgb(0, 102, 0)",
  "rgb(102, 102, 153)",
  "#5b3258",
  "#ccff66",
  "#ffcc00",
  "rgb(102, 255, 153)",
  "rgb(102, 153, 153)",
  "fuchsia",
];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

//mudar cor fundo
button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
