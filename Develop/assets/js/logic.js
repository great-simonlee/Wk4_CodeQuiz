// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

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
  document.getElementById("choices").appendChild(ol);
  // loop over choices
  // create new button for each choice
  for (var i = 0; i < questions[0].choices.length; i++) {
    document.getElementById(
      "choices"
    ).firstChild.innerHTML += `<button class="choiceBtn"><li>${questions[0].choices[i]}</li></button>`;
  }
}

function clickEvent(array) {
  let questionsNum = 1;
  // attach click event listener to each choice
  for (i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e.target.innerHTML);
      document.getElementById("question-title").textContent =
        questions[questionsNum].title;
    });
  }
}

function questionClick() {
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  // show end screen
  // show final score
  // hide questions section
}

function clockTick() {
  // update time
  var timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = time;

    if (time === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
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
