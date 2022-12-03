import React, { Component } from "react";
import Details from "./Details";
import "../Form.css";

class PersonalDetailsForm extends Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			isSubmitted: false,
		};
	}

	hanndleChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	onSubmitDetails = (e) => {
		e.preventDefault();
		this.setState({ isSubmitted: true });
	};

	onEdit = () => {
		this.setState({ isSubmitted: false });
	};

	render() {
		const isSubmitted = this.state.isSubmitted;

		if (isSubmitted) {
			return (
				<div className="details-container">
					<h2>Personal Information</h2>
					<Details details={this.state} />
					<button className="d-print-none" onClick={this.onEdit}>
						Edit
					</button>
				</div>
			);
		}

		return (
			<div className="details-container">
				<h2>Personal Information</h2>
				<form onSubmit={this.onSubmitDetails}>
					<div className="detail-input-row">
						<label htmlFor="fName">First Name:</label>
						<input
							type="text"
							id="fName"
							name="firstName"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={this.hanndleChange}
							required
						/>
					</div>
					<div className="detail-input-row">
						<label htmlFor="lName">Last Name:</label>
						<input
							type="text"
							id="lName"
							name="lastName"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={this.hanndleChange}
							required
						/>
					</div>
					<div className="detail-input-row">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.hanndleChange}
							required
						/>
					</div>
					<div className="detail-input-row">
						<label htmlFor="phoneNumber">Phone Number:</label>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							placeholder="Phone Numer"
							value={this.state.phoneNumber}
							onChange={this.hanndleChange}
							required
						/>
					</div>
					<button
						className="d-print-none"
						id="details-submit"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default PersonalDetailsForm;
