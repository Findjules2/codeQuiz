var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var startContainer = document.querySelector("#startContainer");
var questionContainer = document.querySelector("#questionContainer")
var h1questionText = document.querySelector("#questionText")

var secondsLeft 
var questNumb = 0;
var timerID;
//var scores = [{score: 12, intials: "mwa"}, {score: 10, intials:"lwa"}]

startBtn.addEventListener("click", function() {
    secondsLeft = questions.length * 10
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    startQuiz();
    });

function startQuiz() {
    timerId = setInterval(setTime, 1000);
    buildQuiz();
};

function setTime() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
        endGame()
        
    
    }
}
function writeScore() {
    console.log('intials: ', document.getElementById('userIntials').value.trim, ' score: ', secondsLeft)
    var highScores = JSON.parse(localStorage.getItem("finalScore"))
    var initials = document.getElementById('userIntials').value.trim()
    console.log(initials)
    if(!highScores){
        highScores = []
    }
    var tempObject = {initials: initials, score: secondsLeft}
    highScores.push(tempObject)
    localStorage.setItem("finalScore", JSON.stringify(highScores))
    window.location.replace("./endGame.html")
    
}
function endGame() {
    clearInterval(timerId);
    console.log('end game')
    console.log(secondsLeft)
    questionContainer.innerHTML =""
    var endGameTitle = document.createElement('h1')
    endGameTitle.textContent= 'All done!'
    questionContainer.appendChild(endGameTitle)
    var intialsDiv = document.createElement('div')
    intialsDiv.innerHTML = '<label>Enter Initials</label><input id="userIntials">placeholder</input><button onClick="writeScore()">Submit</button>'
    questionContainer.appendChild(intialsDiv)
}

function questionChecker(answer) {
    console.log(answer)
    console.log(questions[questNumb].choices[answer] === questions[questNumb].answer)
    if(questions[questNumb].choices[answer] !== questions[questNumb].answer){
        secondsLeft = secondsLeft - 5

    }
    questNumb++
    if(questNumb === questions.length){
        endGame()
    }else{
        buildQuiz()
    }
    
}
function buildQuiz() {
    h1questionText.textContent = questions[questNumb].title;

    for (var i = 0; i < questions[questNumb].choices.length; i++) {
        var button = document.querySelector("#q" + i);
        button.setAttribute("onclick", "questionChecker("+i+")")
        button.textContent = questions[questNumb].choices[i];
    }
}
