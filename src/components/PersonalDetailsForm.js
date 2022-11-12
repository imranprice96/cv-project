import React, { Component } from "react";

class PersonalDetailsForm extends Component {
	constructor() {
		super();

		this.state = {
			details: {
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
			},
		};
	}

	onSubmitDetails = (e) => {};

	render() {
		const { details } = this.state;

		return (
			<div>
				<h2>Personal Information</h2>
				<form onSubmit={this.onSubmitDetails}>
					<label htmlFor="fName">First Name:</label>
					<input
						type="text"
						id="fName"
						placeholder="First Name"
						value={details.firstName}
						required
					/>
					<label htmlFor="lName">Last Name:</label>
					<input
						type="text"
						id="lName"
						placeholder="Last Name"
						value={details.lastName}
						required
					/>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						placeholder="Email"
						value={details.email}
						required
					/>
					<label htmlFor="phoneNumber">Phone Number:</label>
					<input
						type="tel"
						id="phoneNumber"
						placeholder="Phone Numer"
						value={details.phoneNumber}
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PersonalDetailsForm;
