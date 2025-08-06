document.getElementById("usernameForm").addEventListener("submit", function (e) {
	e.preventDefault(); // prevent form from submitting

	const usernameInput = document.getElementById("username").value.trim();
	const message = document.getElementById("message");

	// Check if the username contains only letters and numbers
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;

	if (alphanumericRegex.test(usernameInput)) {
		message.style.color = "green";
		message.textContent = `✅ Username "${usernameInput}" is valid and ready to bloom!`;
	} else {
		message.style.color = "red";
		message.textContent = "❌ Invalid username! Use only letters (a-z, A-Z) and numbers (0-9).";
	}
});
