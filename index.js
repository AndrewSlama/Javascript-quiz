document.querySelector("#start-btn"); //selects start button
let hiddenBtn = document.getElementById('hidden').innerHTML;
let startButton = document.getElementById("#start-btn").innerHTML;

var secondsLeft = 40;
var answer = [];
var question = [];
var ifQuestion = false;
var ifAnswer = false;

document.addEventListener('click', startButton) {
    let startGo = setTimeout(function, 4000);
    
    }
}


function startTimeer() {
    var seconds = 40;
    setInterval(function()) {
        seconds--;
        if (seconds >= 0) {
            span = document.getElementById("start-btn");
            span.innerHTML = seconds;
        }
        if (seconds === 0) {
            alert("Game Over");
            clearInterval(seconds);
        }
    }, 4000;
}
function startTimeer();
{
    document.getElementById('start-btn');
    startTimeer();
};
   