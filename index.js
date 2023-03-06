//selects start button
let hiddenBtn = document.getElementById('hidden');
let startBtn = document.getElementById(".container");

var secondsLeft = 40;
var answer = [];
var question = [];
var isQuestion = false;
var isAnswer = false;

var startButton = document.addEventListener('click', startBtn)

startBtn.addEventListener('click' function() {
    count--;
})
    
function countdown() {
    var timeInterval = setInterval(function () {
        if (secondsLeft > 1) {
            startButton.textContent = secondsLeft + " seconds left";
            secondsLeft--;
        } else {
            timeInterval.textContent = "Game Over";
            clearInterval(timeInterval);
        }
    }, 4000);
countdown();
}
var myQuestions = [
	{
		question: "Which statement cannot be used to declare a variable in JavaScript",
		answers: {
			a: 'Var',
			b: 'Let',
			c: 'Int'
		},
        
        correctAnswer: 'Var'
    }
    {
		question: "JavaScript file has an extention of",
		answers: {
			a: '.Java',
			b: '.Js',
			c: '.xml'
		},
        
        correctAnswer: '.Js'
    }
    {
		question: "Event is used to check an empty text box",
		answers: {
			a: 'Onclick()',
			b: 'OnFocus()',
			c: 'OnBlur()'
		},
        
        correctAnswer: 'OnClick()'
    }
    {
		question: "Inside which HTML element do we put the JavaScript",
		answers: {
			a: 'Scripting',
			b: 'Js',
			c: 'Script'
		},
        
        correctAnswer: 'Script'
    }
    {
		question: "True is a Data type known as",
		answers: {
			a: 'String',
			b: 'Boolean',
			c: 'Object'
		},
        
        correctAnswer: 'Boolean'
    }
];

   