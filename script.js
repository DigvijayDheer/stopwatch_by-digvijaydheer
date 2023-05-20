// define colors for buttons and font
let STOP_COLOR = "#C8302C";
let START_COLOR = "#449c44";
let RESET_COLOR = "#EB961F";
let ACTIVE_FONT = "#fafcf7";
let DISABLE_BACKGROUND_COLOR = "#0b0b2c9d";
let DISABLE_FONT_COLOR = "#0b0b2c";

// get buttons with selecting their id's
let stopButton = document.getElementById("stop");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");

// select timer screen
let timer = document.getElementById("timer");

// define time array and Interval for stopwatch
let [miliseconds, seconds, minutes] = [0, 0, 0];
let Interval = null;

// setting default styles for buttons
startButton.style.backgroundColor = START_COLOR;
startButton.style.color = ACTIVE_FONT;
stopButton.style.backgroundColor = DISABLE_BACKGROUND_COLOR;
stopButton.style.color = DISABLE_FONT_COLOR;
resetButton.style.backgroundColor = DISABLE_BACKGROUND_COLOR;
resetButton.style.color = DISABLE_FONT_COLOR;

// eventlistener for START button
document.getElementById("start").addEventListener("click", () => {
	if (Interval !== null) {
		clearInterval(Interval);
	}
	Interval = setInterval(displayTimer, 10);

	// update styles
	startButton.style.backgroundColor = DISABLE_BACKGROUND_COLOR;
	startButton.style.color = DISABLE_FONT_COLOR;
	stopButton.style.backgroundColor = STOP_COLOR;
	stopButton.style.color = ACTIVE_FONT;
	resetButton.style.backgroundColor = RESET_COLOR;
	resetButton.style.color = ACTIVE_FONT;
});

// eventlistener for STOP button
document.getElementById("stop").addEventListener("click", () => {
	clearInterval(Interval);

	// update styles
	startButton.style.backgroundColor = START_COLOR;
	startButton.style.color = ACTIVE_FONT;
	stopButton.style.backgroundColor = DISABLE_BACKGROUND_COLOR;
	stopButton.style.color = DISABLE_FONT_COLOR;
	resetButton.style.backgroundColor = RESET_COLOR;
	resetButton.style.color = ACTIVE_FONT;
});

// eventlistener for RESET button
document.getElementById("reset").addEventListener("click", () => {
	clearInterval(Interval);
	[miliseconds, seconds, minutes] = [0, 0, 0];
	timer.innerHTML = "00 : 00 : 000";

	// update styles
	startButton.style.backgroundColor = START_COLOR;
	startButton.style.color = ACTIVE_FONT;
	stopButton.style.backgroundColor = DISABLE_BACKGROUND_COLOR;
	stopButton.style.color = DISABLE_FONT_COLOR;
	resetButton.style.backgroundColor = DISABLE_BACKGROUND_COLOR;
	resetButton.style.color = DISABLE_FONT_COLOR;
});

// displayTimer function for working of stopwatch and setting values of array entities
function displayTimer() {
	miliseconds += 10;
	if (miliseconds == 1000) {
		miliseconds = 0;
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
		}
	}

	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;
	let ms =
		miliseconds < 10
			? "00" + miliseconds
			: miliseconds < 100
			? "0" + miliseconds
			: miliseconds;

	// update entities on screen
	timer.innerHTML = `${m} : ${s} : ${ms}`;
}
