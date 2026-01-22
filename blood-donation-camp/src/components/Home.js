// Functional Component
// rfc

function Home() {
	return (
		<div className="container mt-4 text-center">
			<h1 className="text-danger">Welcome To The Blood Donation Camp</h1>
			<p className="lead">Your Donation can save lives. Join us and make an impact today.</p>
			<img src="https://www.schillerindia.com/wp-content/uploads/2024/06/Blood-donor-day-cover-page-12-1024x1024.jpg" alt="Blood Donation" className="img-fluid rounded shadow" width={300}/>
		</div>
	)
}

export default Home