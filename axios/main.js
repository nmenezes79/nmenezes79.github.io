// GET REQUEST
function getTodos() {
	// console.log('GET Request');
	// axios({
	// 	method: 'get',
	// 	url: 'https://jsonplaceholder.typicode.com/todos',
	// 	params: {
	// 		_limit: 5
	// 	}
	// })

	// .then(res => console.log(res))
	// .then(res => console.log(res.data))

	axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
		timeout: 5000
	})

	.then(res => showoutput(res))
	.then(err => console.error(err));
}

// POST REQUEST
function addTodo() {
	// console.log('POST Request');
	// axios({
	// 	method: 'post',
	// 	url: 'https://jsonplaceholder.typicode.com/todos',
	// 	data: {
	// 		title: 'New Todo',
	// 		completed: false
	// 	}
	// })

	axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5', {
		title: 'New Todo',
		completed: false
	})

	.then(res => showoutput(res))
	.then(err => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
	// console.log('PUT/PATCH Request');
	// axios.put('https://jsonplaceholder.typicode.com/todos/1', {
	// 	title: 'Update Todo',
	// 	completed: true
	// })

	// .then(res => showoutput(res))
	// .then(err => console.error(err));

	axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
		title: 'Update Todo',
		completed: true
	})

	.then(res => showoutput(res))
	.then(err => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
	// console.log('DELETE Request');
	axios.delete('https://jsonplaceholder.typicode.com/todos/1')
	.then(res => showoutput(res))
	.then(err => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
	// console.log('Simultaneous Request');
	axios.all([
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
		axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
	])

		.then(res => {
			console.log(res[0]);
			console.log(res[1]);
			showoutput(res[1]);
		})
	
		// .then(axios.spread((todos, posts) => showoutput(todos)))
		.then(axios.spread((todos, posts) => showoutput(posts)))
		.catch(err => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
	// console.log('Custom Headers');
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'sometoken'
		}
	};

	axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5', {
		title: 'New Todo',
		completed: false
	}, config
	)

	.then(res => showoutput(res))
	.then(err => console.error(err));
}

// TRANSFORMING REQUESTS AND RESPONSES
function transformResponse() {
	// console.log('Transform Response');
	const options = {
		method: 'post',
		url: 'https://jsonplaceholder.typicode.com/todos',
		data: {
			title: 'Hello World'
		},
		transformResponse: axios.defaults.transformResponse.concat(data => {
			data.title = data.title.toUpperCase();
			return data;
		})
	};
	axios(options).then(res => showoutput(res));
}

// ERROR HANDLING
function errorHandling() {
	// console.log('Error Handling');
	axios.get('https://jsonplaceholder.typicode.com/todos', {
		// validataStatus: function (status) {
		// 	return status < 500;
		// }
	})
	.then(res => showoutput(res))
	.catch(err => {
		if (err.response) {
			// SERVICE RESPONDED WITH A STATUS OTHER THAN 200 RANGE
			console.log(err.response.data);
			console.log(err.response.status);
			console.log(err.response.headers);

			if (err.response.status === 404) {
				alert("Error: Page Not Found");
			}
		} else if (err.request) {
			// REQUEST WAS MADE BUT NO RESPONSE
			console.error(err.request);
		} else {
			console.error(err.message);
		}
	});
}

// CANCEL TOKEN
function cancelToken() {
	// console.log('Cancel Token');
	const source = axios.CancelToken.source();

	axios.get('https://jsonplaceholder.typicode.com/todos', {
		cancelToken: source.token
	})

		.then(res => showoutput(res))
		.catch(thrown => {
			if (axios.isCancel(thrown)) {
				console.log('Request Canceled', thrown.message);
			}
		});
	if (true) {
		source.cancel('Request Canceled');
	}
}

// INTERCEPTING REQUESTS AND RESPONSES
axios.interceptors.request.use(config => {
	console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);

	return config
}, error => {
	return Promis.reject(error);
});

// AXIOS INSTANCES
const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

// SHOW OUTPUT IN BROWSER
function showoutput(res) {
	document.getElementById('res').innerHTML = `
		<div className="card card-body mb-4">
			<h5>Status: ${res.status}</h5>
		</div>

		<div className="card mt-3">
			<div className="card-header">Header</div>
			<div className="card-body">
				<pre>${JSON.stringify(res.headers, null, 2)}</pre>
			</div>
		</div>
	
		<div className="card mt-3">
			<div className="card-header">Data</div>
			<div className="card-body">
				<pre>${JSON.stringify(res.data, null, 2)}</pre>
			</div>
		</div>

		<div className="card mt-3">
			<div className="card-header">Config</div>
			<div className="card-body">
				<pre>${JSON.stringify(res.config, null, 2)}</pre>
			</div>
		</div>
	`;
}

// EVENT LISTENERS
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('header').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);