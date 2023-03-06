//selects start button
let startBtn = document.getElementById("start-btn");
var timerElement = document.getElementById("timer");
var recall = document.getElementById('recall');
var submitBtn = document.getElementById('submit');
var questions = document.getElementById('question');
var answers = document.getElementById('answers');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var secondsLeft = 40;
var questionIndex = 0;
var myQuestions = [
	{
		question: "Which statement cannot be used to declare a variable in JavaScript",
		answers: {
			a: 'Var',
			b: 'Let',
			c: 'Int'
		},
        
        correctAnswer: 'c'
    },
    {
		question: "JavaScript file has an extention of",
		answers: {
			a: '.Java',
			b: '.Js',
			c: '.xml'
		},
        
        correctAnswer: 'b'
    },
    {
		question: "Event is used to check an empty text box",
		answers: {
			a: 'Onclick()',
			b: 'OnFocus()',
			c: 'OnBlur()'
		},
        
        correctAnswer: 'a'
    },
    {
		question: "Inside which HTML element do we put the JavaScript",
		answers: {
			a: 'Scripting',
			b: 'Js',
			c: 'Script'
		},
        
        correctAnswer: 'c'
    },
    {
		question: "True is a Data-type known as a/an",
		answers: {
			a: 'String',
			b: 'Boolean',
			c: 'Object'
		},
        
        correctAnswer: 'b'
    }
];

recall.style.visibility = "hidden";

startBtn.addEventListener('click', function() {
    countDown();
});

submitBtn.addEventListener('click', function() {
    quizArts();
});

function quizArts() {
    // alert(answers.value);
    // alert(typeof answers.value);
    if (answers.value != myQuestions[questionIndex].correctAnswer) {
        secondsLeft = secondsLeft - 5;
    } else {
    questionIndex++;
    questions.innerHTML = myQuestions[questionIndex].question;
    option1.innerHTML = myQuestions[questionIndex].answers.a;
    option2.innerHTML = myQuestions[questionIndex].answers.b;
    option3.innerHTML = myQuestions[questionIndex].answers.c;
    }
};
    
function countDown() {
    questions.innerHTML = myQuestions[questionIndex].question;
    option1.innerHTML = myQuestions[questionIndex].answers.a;
    option2.innerHTML = myQuestions[questionIndex].answers.b;
    option3.innerHTML = myQuestions[questionIndex].answers.c;
    recall.style.visibility = "visible";
    secondsLeft = 40;
    startBtn.style.visibility = "hidden";
    var timeInterval = setInterval(function() {
        secondsLeft--;
        if (secondsLeft >= 0) {
            timerElement.textContent = secondsLeft + " seconds left";  
        }else{
            alert("Wrong, try again.");
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
   