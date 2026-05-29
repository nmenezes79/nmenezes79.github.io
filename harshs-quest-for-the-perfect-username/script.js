document.getElementById("usernameForm").addEventListener("submit", function (e) {
// document → Refers to the entire HTML webpage.
// getElementById("usernameForm") → Finds the HTML form whose id is "usernameForm".
// .addEventListener("submit", ...) → Listens for the form submission event.
// "submit" → This event occurs when the user clicks the submit button.
// function (e) → A function that runs automatically when the form is submitted.
// e → Represents the event object containing details about the submit event.
	e.preventDefault();
	// preventDefault() stops the form from refreshing the page or sending data to the server.
	// Normally, forms reload the page after submission.
	// Here, we stop that behavior so validation can happen using JavaScript.
	const usernameInput = document.getElementById("username").value.trim();
	// Finds the input field whose id is "username".
	// .value gets the text entered by the user.
	// .trim() removes extra spaces from the beginning and end.
	// The cleaned username is stored inside usernameInput.
	const message = document.getElementById("message");
	// Finds the HTML element whose id is "message".
	// This element is used to display validation messages to the user.
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;
	// This line creates a Regular Expression (Regex) used for validation.
	// ^ Start of the text
	// [a-zA-Z0-9] Allows lowercase letters, uppercase letters, and numbers
	// + One or more characters
	// $ End of the text
	if (alphanumericRegex.test(usernameInput)) {
		// .test() checks whether usernameInput matches the regex pattern.
		// If the username is valid, the condition becomes true.
		message.style.color = "green";
		// Changes the text color of the message element to green.
		message.textContent = `✅ Username "${usernameInput}" is Valid and Ready to Bloom!`;
		// Displays a success message to the user.
		// ` ` (backticks) are used for template literals.
		// ${usernameInput} inserts the actual username dynamically.
	} else {
		message.style.color = "red";
		// Changes the message text color to red.
		// Red indicates an error.
		message.textContent = "❌ Invalid username! Use only Letters (a-z, A-Z) and Numbers (0-9).";
		// Displays an error message for invalid usernames.
	}
	// } closes the if-else block.
});
// }); closes: The function and The event listener
