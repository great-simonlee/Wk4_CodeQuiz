var clearBtn = document.getElementById("clear");

function printHighscores() {
  // // either get scores from localstorage or set to empty array
  // var userscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  // // (optional) sort highscores by score property in descending order
  // highscores.sort(function(a, b) {
  //   return b.score - a.score;
  // });
  // // for each score
  // userscores.forEach(score) {
  //   var createList = document.createElement("li");
  //   createList.textContent = score.initials + " - " + score.score;
  //   var olEl = document.getElementById("highscores");
  //   olEl.appendChild(createList)
  // }
  // create li tag for each high score
  // var liTag = document.createElement("li");
  // liTag.textContent = score.initials + " - " + score.score;
  // display on page
  // var olEl = docuemnt.getElementById("highscores");
  // olEl.appendChild(liTag)
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}
// attache clear event to clear score button
clearBtn.onclick = clearHighscores;
// run printhighscore when page loads
printHighscores();
