// Functional Component
// rfc
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
			<div className="container">
				<Link className="navbar-brand" to="/">Blood Donation Camp</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link text-white" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/registration">Registration</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar