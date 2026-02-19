document.addEventListener('DOMContentLoaded', () => {
	const resultForm = document.getElementById('resulForm');
	const resultsContainer = document.getElementById('resultsContainer');

	// load results from localStorage
	function loadResults() {
		const results = JSON.parse(localStorage.getItem('classXResults')) || [];
		resultsContainer.innerHTML = ''; // clear previous entries

		results.forEach((res, index) => {
			const div = document.createElement('div');
			div.classList.add('result-item');
			div.textContent = `${index + 1}. ${res.name} - ${res.marks} marks`;
			resultsContainer.appendChild(div);
		});
	}

	// form submit event
	resultForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = document.getElementById('studentName').value.trim();
		const marks = document.getElementById('studentMarks').value.trim();

		if (!name || !marks) {
			alert('Please Enter Both Name and Marks.');
			return;
		}

		// get existing results
		const results = JSON.parse(localStorage.getItem('classXResults')) || [];
		results.push({ name, marks });

		// save back to localStorage
		localStorage.setItem('classXResults', JSON.stringify(results));

		// refresh display
		loadResults();

		// reset form
		resultForm.reset();
	});

	// initial load
	loadResults()
});