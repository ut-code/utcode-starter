let counter = 0;

function plus() {
  if (counter < 9) {
    counter = counter + 1;
  } else {
    counter = 0;
  }
  document.getElementById("counter").textContent = counter;
}

document.getElementById("plus").onclick = plus;
