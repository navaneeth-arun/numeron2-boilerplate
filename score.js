// Iteration 8: Making scoreboard functional

var playAgain = document.getElementById('play-again-button')

playAgain.onclick = function(){
    location.href = 'game.html'
}

var updatescore = document.getElementById('score-board')
updatescore.innerHTML =sessionStorage.getItem("score")