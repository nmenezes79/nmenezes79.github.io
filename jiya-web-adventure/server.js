const http = require('http');

// html content
const htmlContent = `
	<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- bootstrap v4 -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
		integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<title>Jiya's Friends</title>
</head>

<body>
	<header>
		<h1 class="bg-danger text-white text-center p-2 shadow-lg">Jiya's Friends</h1>
	</header>

	<div class="container w-50 text-center mt-5">
		<ul class="list-group">
			<li class="list-group-item mt-2 rounded shadow-lg">Arjun</li>
			<li class="list-group-item mt-2 rounded shadow-lg">Meera</li>
			<li class="list-group-item mt-2 rounded shadow-lg">Rohan</li>
			<li class="list-group-item mt-2 rounded shadow-lg">Simran</li>
			<li class="list-group-item mt-2 rounded shadow-lg">Aditi</li>
		</ul>
	</div>

</body>

</html>
`;

// create server
const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(htmlContent);
});

// listen port 3000
server.listen(3000, () => {
	console.log("🚀 Server Running at http://localhost:3000/");
});