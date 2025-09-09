const http = require("http");

// HTML content with inline CSS
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Jiya's Friends</title>
	<style>
	body {
		font-family: Arial, sans-serif;
		background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
    }
    .container {
		background: white;
		padding: 30px;
		border-radius: 15px;
		box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
		text-align: center;
    }
    h1 {
		color: #333;
		margin-bottom: 20px;
    }
    ul {
		list-style-type: none;
		padding: 0;
    }
    li {
		background: #f0f0f0;
		margin: 10px 0;
		padding: 12px;
		border-radius: 10px;
		transition: 0.3s;
		font-size: 18px;
    }
    li:hover {
		background: #dfe6e9;
		transform: scale(1.05);
    }
	</style>
</head>
<body>
	<div class="container">
    <h1>Jiya's Friends</h1>
    <ul>
		<li>Arjun</li>
		<li>Meera</li>
		<li>Rohan</li>
		<li>Simran</li>
		<li>Aditi</li>
    </ul>
	</div>
</body>
</html>
`;

// Create server
const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(htmlContent);
});

// Listen on port 3000
server.listen(3000, () => {
	console.log("🚀 Server running at http://localhost:3000/");
});
