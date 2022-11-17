//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score





var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var startQuizButton = document.getElementById("start");
var startScreenEl = document.getElementById('start-screen');

var quizTimer = document.getElementById("time");
var secondsLeft = 60;

var time = questions.length * 15;
var timerId;





// sounds
var sfxCorrect = new Audio('assets/sfx/correct.wav');
var sfxIncorrect = new Audio('assets/sfx/incorrect.wav');



// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
  startScreenEl.setAttribute('class', 'hide');
 

  // un-hide questions section
  questionsEl.removeAttribute('class');

  setTime();
  
}




function questionClick(event) {
  var buttonEl = event.target;
}
  //Timer. 
function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    quizTimer.textContent = secondsLeft
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    }

    }, 1000);
}




// This button starts the quiz!
startQuizButton.onclick = startQuiz;

