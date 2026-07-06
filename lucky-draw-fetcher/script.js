// document → Represents the whole HTML webpage.
// .getElementById("drawBtn") → Finds the HTML element whose id is "drawBtn" (the button).
// .addEventListener("click", ...) → Adds an event listener to the button.
// "click" → Means the function will run when the button is clicked.
// function () { ... } → A function that executes after the click event happens.
document.getElementById("drawBtn").addEventListener("click", function () {
	// fetch() → Used to request data from an API/server.
	// 'https://randomuser.me/api/' → The API URL that provides random user information.
	// This sends a request to the server to get random user data.
	fetch('https://randomuser.me/api/')
		// .then() → Runs after the API successfully sends a response.
		// response → Contains the data returned from the API.
		// response.json() → Converts the response into JavaScript object format (JSON).
		.then(response => response.json())
		// Another .then() is used after converting the response into JSON.
		// data → Stores the actual user information received from the API.
		// { ... } → Starts the block of code that processes the data.
		.then(data => {
			// data.results → The API stores users inside a results array.
			// [0] → Selects the first user from the array.
			// let user → Stores the selected user in a variable named user.
			let user = data.results[0];
			// Finds the image element with id "winnerImg".
			// .src → Changes the image source.
			// user.picture.large → Gets the large profile picture URL from the API.
			document.getElementById("winnerImg").src = user.picture.large;
			// Finds the element with id "winnerName".
			// .textContent → Changes the text inside the element.
			// ` ` → Template literals (backticks) used for inserting variables into strings.
			// ${user.name.first} → Inserts the first name.
			// ${user.name.last} → Inserts the last name.
			document.getElementById("winnerName").textContent = `Name: ${user.name.first} ${user.name.last}`;
			// Finds the element with id "winnerEmail".
			// Updates its text with the user's email address.
			document.getElementById("winnerEmail").textContent = `Email: ${user.email}`;
		})
		// .catch() → Handles errors if something goes wrong.
		// error → Stores the error message.
		// console.error() → Prints the error in the browser console.
		.catch(error => console.error("Error Fetching Data:", error));
});
