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
      item.classList.add("hovered-grid-item");
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
