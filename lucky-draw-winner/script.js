document.getElementById("drawBtn").addEventListener("click", function () {
	fetch('https://randomuser.me/api/')
		.then(response => response.json())
		.then(data => {
			let user = data.results[0];
			document.getElementById("winnerImg").src = user.picture.large;
			document.getElementById("winnerName").textContent = `Name: ${user.name.first} ${user.name.last}`;
			document.getElementById("winnerEmail").textContent = `Email: ${user.email}`;
			document.querySelector(".winner-info").style.display = "block";
		})
		.catch(error => console.error("Error fetching data:", error));
});
