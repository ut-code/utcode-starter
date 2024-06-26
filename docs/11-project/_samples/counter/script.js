let counter = 0;

function plus() {
  counter = counter + 1;
  document.getElementById("counter").textContent = counter;
}

document.getElementById("plus").onclick = plus;
