const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let errorTime;
let resultTime;

function converter() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 3000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.205).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", converter);
