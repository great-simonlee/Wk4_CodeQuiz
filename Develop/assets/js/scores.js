var clearBtn = document.getElementById("clear");

function printHighscores() {
  // either get scores from localstorage or set to empty array
  var userinitials = JSON.parse(window.localStorage.getItem("initials")) || [];
  var userscores = JSON.parse(window.localStorage.getItem("score")) || [];

  var createList = document.createElement("li");
  createList.textContent = userinitials + " - " + userscores;
  console.log(createList.textContent);

  var scoreEl = document.getElementById("highscores");
  scoreEl.appendChild(createList);
}

function clearHighscores() {
  window.localStorage.removeItem("initials");
  window.localStorage.removeItem("score");
  window.location.reload();
}
// attache clear event to clear score button
clearBtn.onclick = clearHighscores;
// run printhighscore when page loads
printHighscores();
