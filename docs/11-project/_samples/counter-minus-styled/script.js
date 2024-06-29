let counter = 0;

function countUp() {
  counter = counter + 1;
  document.getElementById("counter-value").textContent = counter;
}

function countDown() {
  counter = counter - 1;
  document.getElementById("counter-value").textContent = counter;
}

document.getElementById("count-up-button").onclick = countUp;
document.getElementById("count-down-button").onclick = countDown;
