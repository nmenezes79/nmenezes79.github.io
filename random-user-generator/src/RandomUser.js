import React, { useState, useEffect } from 'react';

export default function RandomUser() {
	const [user, setUser] = useState([]);
	const [error, setError] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchRandomUser() {
		try {
			await fetch('https://randomuser.me/api/')
				.then(results => {
					return results.json();
				})
				.then(data => {
					let user = data.results.map((user) => {
						let userElm = '';
						// eslint-disable-next-line
						if (typeof user !== undefined && typeof user.name !== undefined && typeof user.email !== undefined) {
							userElm = <div key={user}>
								<img src={user.picture.large} alt="" />
								<h2>Name: {user.name.first} {user.name.last}</h2>
								<p>Email: {user.email}</p>
							</div>;
						}

						return userElm;
					});
					setUser(user);
					setIsLoading(false);
				});
		}
		catch (error) {
			setError(error);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchRandomUser();
	}, []);

	return (
		<div>
			{error && <p>{error.message}</p>}
			{isLoading && <p>Loading...</p>}
			{user}
		</div>
	);
} 