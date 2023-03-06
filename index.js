//selects start button
let hiddenBtn = document.getElementById('hidden');
let startBtn = document.getElementById("start-btn");
var timerElement = document.getElementById("timer");

var secondsLeft = 10;
var answer = "";
var myQuestions = [
	{
		question: "Which statement cannot be used to declare a variable in JavaScript",
		answers: {
			a: 'Var',
			b: 'Let',
			c: 'Int'
		},
        
        correctAnswer: 'Int'
    },
    {
		question: "JavaScript file has an extention of",
		answers: {
			a: '.Java',
			b: '.Js',
			c: '.xml'
		},
        
        correctAnswer: '.Js'
    },
    {
		question: "Event is used to check an empty text box",
		answers: {
			a: 'Onclick()',
			b: 'OnFocus()',
			c: 'OnBlur()'
		},
        
        correctAnswer: 'OnClick()'
    },
    {
		question: "Inside which HTML element do we put the JavaScript",
		answers: {
			a: 'Scripting',
			b: 'Js',
			c: 'Script'
		},
        
        correctAnswer: 'Script'
    },
    {
		question: "True is a Data-type known as a/an",
		answers: {
			a: 'String',
			b: 'Boolean',
			c: 'Object'
		},
        
        correctAnswer: 'Boolean'
    }
];

//var startButton = document.addEventListener('click', startBtn)

startBtn.addEventListener('click', function() {
    countDown();
});
    
function countDown() {
    startBtn.style.visibility = "hidden";
    var timeInterval = setInterval(function() {
        secondsLeft--;
        if (secondsLeft >= 0) {
            timerElement.textContent = secondsLeft + " seconds left";  
        }else{
            timerElement.textContent = "Game Over";
            clearInterval(timeInterval);
            startBtn.style.visibility = "visible";
        }
    }, 1000);
};
// function startTimer() {
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
       
//         if (isWin && timerCount > 0) {
         
//           clearInterval(timer);
//           winGame();
//         }
//       }
      
//       if (timerCount === 0) {
        
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }
function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  function winGame() {
    wordBlank.textContent = "Good Work! ";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
   