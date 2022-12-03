import React, { Component } from "react";
import Education from "./components/Education";

class EducationForm extends Component {
	constructor() {
		super();

		this.state = {
			institution: "",
			study: "",
			fromDate: "",
			toDate: "",
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

	onSubmitEdu = (e) => {
		e.preventDefault();
		this.setState({ isSubmitted: true });
	};

	onEdit = () => {
		this.setState({ isSubmitted: false });
	};

	onDelete = () => {};

	render() {
		const isSubmitted = this.state.isSubmitted;

		if (isSubmitted) {
			return (
				<div>
					<div className="details-container">
						<Education details={this.state} />
						<button onClick={this.onEdit}>Edit</button>
						<button onClick={this.onDelete}>Delete</button>
					</div>
				</div>
			);
		}

		return (
			<form id="eduForm" onSubmit={this.onSubmitEdu}>
				<div>
					<label htmlFor="institution">Institution:</label>
					<input
						type="text"
						id="institution"
						name="institution"
						value={this.state.institution}
						onChange={this.hanndleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="study">Study:</label>
					<input
						type="text"
						id="study"
						name="study"
						value={this.state.study}
						onChange={this.hanndleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="fromDate">From:</label>
					<input
						type="date"
						id="fromDate"
						name="fromDate"
						value={this.state.fromDate}
						onChange={this.hanndleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="toDate">To:</label>
					<input
						type="date"
						id="toDate"
						name="toDate"
						value={this.state.toDate}
						onChange={this.hanndleChange}
						required
					/>
				</div>
				<button id="edu-submit" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default EducationForm;
