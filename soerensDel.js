var figures = ["firkant", "cirkel", "trekant", "femkant", "sekskant"]
var keyData = {
	q: {
		figure: "firkant",
	},
	w: {
		figure: "cirkel",
	},
	e: {
		figure: "trekant",
	},
	r: {
		figure: "femkant",
	},
	t: {
		figure: "sekskant",
	}
}
var currentFigure;
var score = 0;
var seconds = 3;
var secondsTemp = seconds;
var temp = document.getElementById("countdownVal");
var scoreElement = document.getElementById("scoreVal");


countdown();
init();

//Eventlistener on document
$(document).keypress(function(e){
  checkKeyMatch(e);
});


// -------------------------
// Functions
// -------------------------
function init(){
	score = 0;
	scoreElement.innerHTML = score.toString();
	redraw();
}

function redraw(){
	secondsTemp = seconds;
	currentFigure = randomFigure();
	drawFigure();
	// alert("Start over");
}

function randomFigure(){
	return figures[Math.floor(Math.random()*figures.length)];
}

function drawFigure(){
	$("#figure").removeClass();
	$("#figure").addClass(currentFigure.toString());
}

function checkKeyMatch(e){
	if (keyData[e.key]) {
	  	if (keyData[e.key].figure == currentFigure) {
	  		score++;
	  		scoreElement.innerHTML = score.toString();
	  		redraw();
	  	} else {
	  		gameOver();
	  		init();
	  	}
	  }
}

// -------------------------
// Countdown function
// -------------------------

function countdown() {
	if (secondsTemp == 1) {
		temp.innerHTML = "0";
		gameOver();
		redraw();
		secondsTemp = seconds;
	}

	secondsTemp--;
	temp.innerHTML = secondsTemp;
	setTimeout(countdown, 1000);
}

function gameOver(){
	if (score == 1) {
		alert("GAME OVER, you scored " + score + " point!");
	} else {
		alert("GAME OVER, you scored " + score + " points!");
	}
	
}