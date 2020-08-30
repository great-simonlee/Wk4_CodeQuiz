// user's answers
var userAnswers = [];
var score = [];

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = (questions.length - 1) * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endQuestionScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  document.getElementById("start-screen").classList = "hide";
  // un-hide questions section
  questionsEl.classList.remove("hide");
  // start timer
  clockTick();
  // show questions
  getQuestion();
  // show choices
  var buttonChoices = document.getElementsByClassName("choiceBtn");
  clickEvent(buttonChoices);
}

function getQuestion() {
  // get current question object from array
  // update title with current question
  document.getElementById("question-title").textContent = questions[0].title;
  // create choices
  let ol = document.createElement("ol");
  choicesEl.appendChild(ol);
  // loop over choices
  // create new button for each choice
  for (var i = 0; i < questions[0].choices.length; i++) {
    choicesEl.firstChild.innerHTML += `<button class="choiceBtn"><li>${questions[0].choices[i]}</li></button>`;
  }
}

function clickEvent(array) {
  var questionsNum = 1;
  // attach click event listener to each choice
  for (i = 0; i < array.length; i++) {
    // add eventlistener on each button
    array[i].addEventListener("click", function (e) {
      e.preventDefault();
      // change the questions
      document.getElementById("question-title").textContent =
        questions[questionsNum].title;

      // change the choices
      for (j = 0; j < questions[questionsNum].choices.length; j++) {
        choicesEl.children[0].children[
          j
        ].innerHTML = `<li>${questions[questionsNum].choices[j]}</li>`;
      }
      questionsNum += 1;
      userAnswers.push(e.target.innerHTML);
      questionClick(userAnswers);
      // close questions
      if (userAnswers.length == 5) {
        choicesEl.classList.add("hide");
        endQuestionScreen.classList.remove("hide");
      }
    });
  }
}

function questionClick(array) {
  // check if user guessed wrong
  if (array[array.length - 1] == questions[array.length - 1].answer) {
    feedbackEl.classList.remove("hide");
    feedbackEl.innerHTML = "Correct!";
    // play "right" sound effect
    sfxRight.play();
    // flash the result to each question
    removeFeedback(feedbackEl);
  } else {
    feedbackEl.classList.remove("hide");
    feedbackEl.innerHTML = "Wrong!";
    // penalize time  // display new time on page
    time -= 10;
    // play "wrong" sound effect
    sfxWrong.play();
    // flash the result to each question
    removeFeedback(feedbackEl);
  }

  // end quiz
  quizEnd();
}

function removeFeedback(e) {
  setTimeout(function () {
    e.classList.add("hide");
  }, 500);
}

function quizEnd() {
  // stop timer
  // show end screen
  // show final score
  finalScore.innerHTML = time - 1;
  // hide questions section
}

function clockTick() {
  // update time
  var timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = time;

    if (time === 0 || userAnswers.length == 5) {
      clearInterval(timerInterval);
    }
  }, 1000);
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  var username = initialsEl.value;
  // make sure value wasn't empty
  if (username == "" || username.length > 3) {
    alert("Initials should not be empty or greater than 3 letters");
  } else {
    score.initials = username;
    score.score = time;
  }
  // get saved scores from localstorage, or if not any, set to empty array
  console.log(score);
  // format new score object for current user
  // save to localstorage
  localStorage.setItem("initials", JSON.stringify(score.initials));
  localStorage.setItem("score", JSON.stringify(score.score));
  // redirect to next page
  window.location.replace("./highscores.html");
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
