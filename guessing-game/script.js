// GENERATE A RANDOM NUMBER
let y = Math.floor(Math.random() * 10 + 1);

// COUNTING THE NUMBER OF GUESSES
// MADE FOR CORRECT GUESS
let guess = 1;

document.getElementById("submitguess").onclick = function () {

	// NUMBER GUESSED BY USER
	let x = document.getElementById("guessField").value;

	if (x == y) {
		alert("CONGRATULATION!!! YOUR GUESSED NUMBER IS RIGHT IN " + guess + " GUESSED");
	}

		// IF GUESSED NUMBER IS GREATER THAN ACTUAL NUMBER
	else if (x > y) {
		guess++;
		alert("OOPS SORRY!!! TRY A SMALLER NUMBER");
	}

	else {
		guess++;
		alert("OOPS SORRY!!! TRY A GREATER NUMBER");
	}
}