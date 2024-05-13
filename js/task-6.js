function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.querySelector("#controls");
const inputEl = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

inputEl.addEventListener("click", () => {
  console.dir(inputEl.valueAsNumber);
});
function createBoxes(amount) {
  const boxesHTML = [];

  for (let i = 0; i < amount; i += 1) {
    const boxHTML = `
      <div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()};"></div>
    `;
    boxesHTML.push(boxHTML);
  }

  const boxesHTMLString = boxesHTML.join("");
  boxesDiv.innerHTML = boxesHTMLString;
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

createButton.addEventListener("click", function () {
  const amount = parseInt(inputEl.value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(amount);
  inputEl.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
