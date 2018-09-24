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

init();

//Eventlistener on document
$(document).keypress(function(e){
  checkKeyMatch();
});


// -------------------------
// Functions
// -------------------------
function init(){
	currentFigure = randomFigure();
	drawFigure();
}

function randomFigure(){
	return figures[Math.floor(Math.random()*figures.length)];
}

function drawFigure(){
	$(".figure").removeClass();
	$(".figure").addClass(currentFigure);
}

function checkKeyMatch(){
	if (keyData[e.key]) {
	  	if (keyData[e.key].figure == currentFigure) {
	  		init();
	  	} else {
	  		alert("GAME OVER");
	  	}
	  }
}

// -------------------------
// Timer functions
// -------------------------

function countdown() {
	seconds = document.getElementById("countdown")
}