const newColor = document.querySelector(".newcolor");
const colorName = document.querySelector(".colorname");

let body = document.querySelector("body");

newColor.addEventListener("click", generateColor);

function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  colorName.style.display = "block";
  colorName.style.borderTop = "2px solid #14213d";
  colorName.textContent = `Color Value: rgb(${red}, ${green}, ${blue})`;

  // Truncate all next colors if after clicking the previous button the Generate New Color button is clicked
  prevNext.splice(colorIndex + 1);

  prevNext.push(colorName.textContent.slice(13));
  colorIndex++; //Increment colorIndex

  // Function to enable the previous button
  if (colorIndex > 0) {
    previousColor.removeAttribute("disabled");
  }
  // Disable next button whenever this function is run
  nextColor.setAttribute("disabled", "true");
}

// || Logic for next and previous buttons
const prevNext = [];
let colorIndex = -1;

const previousColor = document.querySelector(".previouscolor");
const nextColor = document.querySelector(".nextcolor");

// Function to show the previous color
function showPreviousColor() {
  if (colorIndex > 0) {
    colorIndex--;
    setColorFromIndex();

    // next button should be activated whenever this function runs
    nextColor.removeAttribute("disabled");
  } else {
    previousColor.setAttribute("disabled", "");
  }
}

// Function to show the next color
function showNextColor() {
  if (colorIndex < prevNext.length - 1) {
    colorIndex++;
    setColorFromIndex();

    // previous button should be activated whenever this function runs
    previousColor.removeAttribute("disabled");
  } else {
    nextColor.setAttribute("disabled", "");
  }
}

// Function to set the color based on the current index
function setColorFromIndex() {
  body.style.backgroundColor = prevNext[colorIndex];
  colorName.textContent = `Color Value: ${prevNext[colorIndex]}`;
}

previousColor.addEventListener("click", showPreviousColor);
nextColor.addEventListener("click", showNextColor);
