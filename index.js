//selects start button
let startBtn = document.getElementById("start-btn");
var timerElement = document.getElementById("timer");
var recall = document.getElementById('recall');
var submitBtn = document.getElementById('submit');
var questions = document.getElementById('question')
var 
var secondsLeft = 10;
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

recall.style.visibility = "hidden";

startBtn.addEventListener('click', function() {
    countDown();
});

// submitBtn.addEventListener('click', function() {
    
// });
    
function countDown() {
    recall.style.visibility = "visible";
    secondsLeft = 15;
    startBtn.style.visibility = "hidden";
    var timeInterval = setInterval(function() {
        secondsLeft--;
        if (secondsLeft >= 0) {
            timerElement.textContent = secondsLeft + " seconds left";  
        }else{
            timerElement.textContent = "Game Over";
            clearInterval(timeInterval);
            startBtn.style.visibility = "visible";
            recall.style.visibility = "hidden";
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
// function loseGame() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++
//     startBtn.disabled = false;
//     setLosses()
//   }
//   function winGame() {
//     wordBlank.textContent = "Good Work! ";
//     winCounter++
//     startBtn.disabled = false;
//     setWins()
//   }
   