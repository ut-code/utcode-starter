const greetingElement = document.getElementById("greeting");
const buttonElement = document.getElementById("button");

function clicked() {
  greetingElement.textContent = "こんにちは、世界！";
  greetingElement.style.color = "red";
  greetingElement.style.fontSize = "40px";
}

buttonElement.onclick = clicked;
