console.log(localStorage.getItem("finalScore"));

var highScoreDiv = document.getElementById('highScores')
console.log(highScoreDiv)
var highScores = JSON.parse(localStorage.getItem("finalScore"))
console.log(highScores)
if (highScores) {
    highScores.sort(function (a, b) { return b.score - a.score })
    var list = document.createElement('ul')
    list.setAttribute('class', "list-group")
    for (let i = 0; i < highScores.length; i++) {
        var listItem = document.createElement('li')
        listItem.textContent = highScores[i].initials + " score: "+ highScores[i].score
        listItem.setAttribute('class', 'list-group-item')
        list.appendChild(listItem)
    }
    highScoreDiv.appendChild(list)
    console.log(highScores)
}else{
   highScoreDiv.textContent = 'No Highscores'
}

document.getElementById("goBack").addEventListener("click", function(){
    window.location.replace("./index.html")
  });

document.getElementById("clearHighScore").addEventListener("click", function(){
    localStorage.clear();
  });

  document.getElementById("highScores").addEventListener("click", function(){
    localStorage.highScores();
  });
