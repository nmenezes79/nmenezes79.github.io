import React, { useState } from "react";

function Registration() {
	const [formData, setFormData] = useState({
		name: "",
		city: "",
		email: "",
		bloodGroup: ""
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Thank you ${formData.name}! You have successfully registered as a donor.`);
		setFormData({ name: "", city: "", email: "", bloodGroup: "" });
	};

	return (
		<div className="container mt-4">
			<h2 className="text-danger">Register for Blood Donation</h2>
			<form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
				</div>

				<div className="mb-3">
					<label className="form-label">City</label>
					<input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Email</label>
					<input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Blood Group</label>
					<select name="bloodGroup" className="form-select mx-2" value={formData.bloodGroup} onChange={handleChange} required>
						<option value="">Select</option>
						<option value="A+">A+</option>
						<option value="B+">B+</option>
						<option value="O+">O+</option>
						<option value="AB+">AB+</option>
						<option value="A-">A-</option>
						<option value="B-">B-</option>
						<option value="O-">O-</option>
						<option value="AB-">AB-</option>
					</select>
				</div>

				<button type="submit" className="btn btn-danger w-100">Register</button>
			</form>
		</div>
	);
}

export default Registration;
