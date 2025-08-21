// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root', // your username
	password: 'root123', // your password
	database: 'grocery_store'
});

connection.connect((err) => {
	if (err) {
		console.error('MySQL connection failed:', err.stack);
		return;
	}
	console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
