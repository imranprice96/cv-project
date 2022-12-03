import React, { Component } from "react";
import Education from "./Education";
import "../Form.css";

class EducationForm extends Component {
	constructor() {
		super();

		this.state = {
			institution: "",
			study: "",
			fromDate: "",
			toDate: "",
			isSubmitted: false,
			isDeleted: false,
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

	onDelete = () => {
		this.setState({ isDeleted: true });
	};

	render() {
		const isSubmitted = this.state.isSubmitted;
		const isDeleted = this.state.isDeleted;

		if (isDeleted) {
			console.log(isDeleted);
			return null;
		}

		if (isSubmitted) {
			return (
				<div>
					<div className="details-container">
						<Education details={this.state} />
						<button className="d-print-none" onClick={this.onEdit}>
							Edit
						</button>
						<button className="d-print-none" onClick={this.onDelete}>
							Delete
						</button>
					</div>
				</div>
			);
		}

		return (
			<form id="eduForm" onSubmit={this.onSubmitEdu}>
				<div className="detail-input-row">
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
				<div className="detail-input-row">
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
				<div className="detail-input-row">
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
				<div className="detail-input-row">
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
				<div className="detail-input-row">
					<button className="d-print-none" id="edu-submit" type="submit">
						Submit
					</button>
					<button className="d-print-none" onClick={this.onDelete}>
						Delete
					</button>
				</div>
			</form>
		);
	}
}

export default EducationForm;
