// Load data when page opens
window.onload = loadSpaceData;

function loadSpaceData() {

	fetch("https://images-api.nasa.gov/search?q=space&media_type=image")
		.then(response => response.json())
		.then(data => {

			// Get random item from results
			const items = data.collection.items;
			const randomItem = items[Math.floor(Math.random() * items.length)];

			// Image URL
			const imageUrl = randomItem.links[0].href;

			// Title and description
			const title = randomItem.data[0].title;
			const description = randomItem.data[0].description;

			// Update image
			document.getElementById("spaceImage").src = imageUrl;

			// Update text
			document.getElementById("info").innerHTML =
				"<h3>" + title + "</h3>" +
				"<p>" + description + "</p>";
		})
		.catch(() => {
			document.getElementById("info").innerHTML =
				"<p>⚠️ Unable to load space data. Please refresh.</p>";
		});
}
