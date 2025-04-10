// Load saved results on page load
window.onload = function () {
	displayResults();
};

function addResult() {
	const name = document.getElementById("studentName").value.trim();
	const marks = document.getElementById("studentMarks").value;

	if (name === "" || marks === "" || isNaN(marks)) {
		alert("Please enter a valid name and numeric marks.");
		return;
	}

	const result = { name, marks: Number(marks) };

	// Get existing results from localStorage
	let results = JSON.parse(localStorage.getItem("results")) || [];

	// Add new result
	results.push(result);

	// Save back to localStorage
	localStorage.setItem("results", JSON.stringify(results));

	// Clear input
	document.getElementById("studentName").value = "";
	document.getElementById("studentMarks").value = "";

	// Update displayed list
	displayResults();
}

function displayResults() {
	const resultList = document.getElementById("resultList");
	resultList.innerHTML = "";

	const results = JSON.parse(localStorage.getItem("results")) || [];

	results.forEach((result, index) => {
		const li = document.createElement("li");
		li.textContent = `${index + 1}. ${result.name} - ${result.marks} / 100`;
		resultList.appendChild(li);
	});
}