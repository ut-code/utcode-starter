let counter = 0;

function plusOne() {
  counter = counter + 1;
  document.getElementById("counter-value").textContent = counter;
}

document.getElementById("plus-button").onclick = plusOne;
