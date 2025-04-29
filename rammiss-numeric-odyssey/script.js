function compareNumbers() {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);
	const output = document.getElementById("output");
	if (isNaN(num1) || isNaN(num2)) {
		output.innerHTML = "Please enter both numbers.";
		return;
	}
	const largest = Math.max(num1, num2);
	const smallest = Math.min(num1, num2);
	output.innerHTML = `
	Largest: ${largest} <br>
	Smallest: ${smallest}
	`;
}