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
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
        
        correctAnswer: 'c'
    }
    {
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
        
        correctAnswer: 'c'
    }
    {
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
        
        correctAnswer: 'c'
    }
    {
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
        
        correctAnswer: 'c'
    }
    {
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
        
        correctAnswer: 'c'
    }
];

   