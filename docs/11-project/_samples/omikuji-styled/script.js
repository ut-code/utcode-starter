function omikuji() {
  let r = Math.random();
  if (r < 0.2) {
    document.getElementById("result").textContent = "大吉";
    document.getElementById("result").style.color = "red";
  } else if (r < 0.7) {
    document.getElementById("result").textContent = "吉";
    document.getElementById("result").style.color = "black";
  } else {
    document.getElementById("result").textContent = "凶";
    document.getElementById("result").style.color = "blue";
  }
}

document.getElementById("omikuji-button").onclick = omikuji;
