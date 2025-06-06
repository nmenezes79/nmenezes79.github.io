// Simulate delay using setTimeout and fetch API data
function loadContent() {
	document.getElementById('content').innerHTML = "<p>Loading users, please wait...</p>";

	// Simulate async delay
	setTimeout(() => {
		fetchUsers();
	}, 2000); // 2-second delay to mimic async loading
}

async function fetchUsers() {
	try {
		const response = await fetch('https://randomuser.me/api/?results=3');
		const data = await response.json();

		updateAdditionalContent(data.results);
	} catch (error) {
		document.getElementById('content').innerHTML = "<p>Error fetching data.</p>";
		console.error("Fetch error:", error);
	}
}

function updateAdditionalContent(users) {
	let output = '<h2>Fetched Users:</h2>';
	users.forEach(user => {
		output += `
    <div style = "margin: 10px auto; padding: 10px; border: 2px solid #2c3e50; width: 40%; border-radius: 5px">
        <img src="${user.picture.medium}" alt="User Image" style = "border-radius: 50%"/>
        <p><strong>${user.name.first} ${user.name.last}</strong></p>
        <p>${user.email}</p>
    </div>
    `;
	});

	document.getElementById('content').innerHTML = output;
}
