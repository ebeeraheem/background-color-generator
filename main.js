const newColor = document.querySelector(".newcolor");
const colorName = document.querySelector(".colorname");

newColor.addEventListener("click", generateColor);

function generateColor() {
  let body = document.querySelector("body");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  colorName.style.display = "block";
  colorName.textContent = `Color Value: rgb(${red}, ${green}, ${blue})`;
}
