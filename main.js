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
  colorName.style.borderTop = "2px solid #14213d";
  colorName.textContent = `Color Value: rgb(${red}, ${green}, ${blue})`;

  prevNext.push(colorName.textContent.slice(13));
  colorIndex++; //Increment colorIndex
}

// || Logic for next and previous buttons
const prevNext = [];

// Tracking the color count
let colorIndex = -1;
let body = document.querySelector("body"); // making the body variable global

// Function to show the previous color
function showPreviousColor() {
  if (colorIndex > 0) {
    colorIndex--;
    setColorFromIndex();
  }
}

// Function to show the next color
function showNextColor() {
  if (colorIndex < prevNext.length - 1) {
    colorIndex++;
    setColorFromIndex();
  }
}

// Function to set the color based on the current index
function setColorFromIndex() {
  body.style.backgroundColor = prevNext[colorIndex];
  colorName.textContent = `Color Value: ${prevNext[colorIndex]}`;
}

document
  .querySelector(".previouscolor")
  .addEventListener("click", showPreviousColor);

document.querySelector(".nextcolor").addEventListener("click", showNextColor);
