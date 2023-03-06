//selects start button
let hiddenBtn = document.getElementById('hidden');
let startBtn = document.getElementById("#start-btn");

var secondsLeft = 40;
var answer = [];
var question = [];
var isQuestion = false;
var isAnswer = false;

var startButton = document.addEventListener('click', startButton)
    
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

}

   