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
var seconds = 3;
var secondsTemp = seconds;
var temp;


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
	  		init();
	  	} else {
	  		alert("GAME OVER");
	  	}
	  }
}

// -------------------------
// Countdown function
// -------------------------

function countdown() {
	if (secondsTemp == 1) {
		alert("GAME OVER");
		init();
		temp = document.getElementById("countdown");
		temp.innerHTML = "0";
		secondsTemp = seconds;
	}

	secondsTemp--;
	temp = document.getElementById("countdown");
	temp.innerHTML = secondsTemp;
	setTimeout(countdown, 1000);
}