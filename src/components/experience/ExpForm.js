import React, { Component } from "react";
import Experience from "./Experience";
import "../Form.css";

class ExpForm extends Component {
	constructor() {
		super();

		this.state = {
			company: "",
			position: "",
			fromDate: "",
			toDate: "",
			tasks: "",
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

	onSubmitExp = (e) => {
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
						<Experience details={this.state} />
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
			<form onSubmit={this.onSubmitExp}>
				<div className="detail-input-row">
					<label htmlFor="company">Company:</label>
					<input
						type="text"
						id="company"
						name="company"
						value={this.state.company}
						onChange={this.hanndleChange}
						required
					/>
				</div>
				<div className="detail-input-row">
					<label htmlFor="position">Position:</label>
					<input
						type="text"
						id="stpositionudy"
						name="stpositionudy"
						value={this.state.stpositionudy}
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
					<label htmlFor="tasks">Main Tasks:</label>
					<textarea
						rows="4"
						cols="50"
						id="tasks"
						name="tasks"
						value={this.state.tasks}
						onChange={this.hanndleChange}
						required
					></textarea>
				</div>
				<div className="detail-input-row">
					<button className="d-print-none" id="exp-submit" type="submit">
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

export default ExpForm;
