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
var currentQuestionIndex = 0;
var quizTimer = document.getElementById("time");
var secondsLeft = 60;
var answerResult = document.getElementById('feedback');

var time = questions.length * 15;
var timerId;





// sounds
var sfxRight = new Audio('assets/sfx/correct.wav');
var sfxWrong = new Audio('assets/sfx/incorrect.wav');



// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
  startScreenEl.setAttribute('class', 'hide');
  generateQuizQuestion();

  // un-hide questions section
  questionsEl.removeAttribute('class');

  setTime();
  
}

function generateQuizQuestion(){
  //  getting current question from an array
   var currentQuestion = questions[currentQuestionIndex];

  //  update title with current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  // clears last question
   choicesEl.innerHTML = '';

   for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice referencing the index
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // display choices on the page
    choicesEl.appendChild(choiceNode);
  }
}

// creating button click event
function questionClick(event) {
  var buttonEl = event.target;

    // if the button
    if (!buttonEl.matches('.choice')) {
      return;
    }
  
    // check if user guessed wrong
    
  
    // move to next question
    currentQuestionIndex++;
  
    
      generateQuizQuestion();
    }
  

  currentQuestionIndex++;

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

choicesEl.onclick = questionClick;