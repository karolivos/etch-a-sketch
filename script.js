const container = document.querySelector("#container");

function makeRows(rows, cols) {
  document.documentElement.style.setProperty("--grid-cols", cols);
  document.documentElement.style.setProperty("--grid-rows", rows);

  container.innerHTML = "";

  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        if(!item.dataset.colorSet) {
      item.style.backgroundColor = randomRGB();
      item.dataset.colorSet = true;
        }
        let opacity = parseFloat(window.getComputedStyle(item).opacity);
        if (opacity < 1) {
            item.style.opacity = opacity + 0.1;
        }
    });
  });
}

makeRows(16,16);

let selectGridNumber = 0;

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let userInput = prompt(
    "Please input required grid number. It should be lower than 100!"
  );
  if (userInput == null) {
    alert("The input was canceled");
    return;
  }

  if (userInput == "") {
    alert("Input cannot be empty");
    return;
  }
  let numericUserInput = Number(userInput);
  if (Number.isInteger(numericUserInput) && numericUserInput <= 100) {
    selectGridNumber = numericUserInput;

    makeRows(selectGridNumber,selectGridNumber)
  } else {
    alert("Invalid input, please enter a valid input!");
  }
});


function randomRGB () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    let RGBColor = `rgb(${x},${y},${z})`;
    return RGBColor;
}

console.log(randomRGB())