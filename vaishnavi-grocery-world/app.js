// app.js
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Landing Page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Home Page
app.get('/home', (req, res) => {
	db.query('SELECT * FROM products', (err, results) => {
		if (err) return res.send('Database Error');

		let productHTML = results.map(p => `
    <div class="product">
        <img src="${p.image_url}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
    </div>
    `).join('');

		const homeHTML = `
    <!DOCTYPE html>
    <html>
	<head>
			<title>Vaishnavi's Grocery World - Home</title>
			<link rel="stylesheet" href="/style.css">
	</head>
	<body>
		<nav>
			<h1>Vaishnavi's Grocery World</h1>
			<ul>
				<li><a href="/">Landing</a></li>
				<li><a href="/home">Home</a></li>
			</ul>
		</nav>
		<header>
			<h2>Welcome to Your Favorite Grocery Store</h2>
		</header>
		<section class="products">
			${productHTML}
		</section>
		<footer>
			<p>© 2025 Vaishnavi's Grocery World. All rights reserved.</p>
		</footer>
	</body>
    </html>
    `;
		res.send(homeHTML);
	});
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
