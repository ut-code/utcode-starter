let temperature = 35;

if (temperature < 15) {
  document.getElementById("temperature-message").textContent =
    "今日は寒いです。";
  document.getElementById("temperature-message").style.color = "blue";
} else if (30 <= temperature) {
  document.getElementById("temperature-message").textContent =
    "今日は暑いです。";
  document.getElementById("temperature-message").style.color = "red";
} else {
  document.getElementById("temperature-message").textContent =
    "今日は快適です。";
}
