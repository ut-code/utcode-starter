let counter = 0;

function plusOne() {
  counter = counter + 1;
  document.getElementById("counter-value").textContent = counter;
}

function minusOne() {
  counter = counter - 1;
  document.getElementById("counter-value").textContent = counter;
}

document.getElementById("plus-button").onclick = plusOne;
document.getElementById("minus-button").onclick = minusOne;
