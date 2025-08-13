document.getElementById("usernameForm").addEventListener("submit", function (e) {
	e.preventDefault(); // prevent form from submitting

	const usernameInput = document.getElementById("username").value.trim();
	const message = document.getElementById("message");

	// Check if the username contains only letters and numbers
	const alphanumericRegex = /^[a-zA-Z0-9]+$/;

	if (alphanumericRegex.test(usernameInput)) {
		message.style.color = "green";
		message.textContent = `✅ Username "${usernameInput}" is Valid and Ready to Bloom!`;
	} else {
		message.style.color = "red";
		message.textContent = "❌ Invalid username! Use only Letters (a-z, A-Z) and Numbers (0-9).";
	}
});