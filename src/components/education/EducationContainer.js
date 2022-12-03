import React, { Component } from "react";
import EducationForm from "./EducationForm";
import "../Form.css";
import uniqid from "uniqid";

class EducationContainer extends Component {
	constructor() {
		super();

		this.state = {
			educationForms: [],
		};
	}

	addEducationForm = () => {
		this.setState({
			educationForms: this.state.educationForms.concat(
				<EducationForm key={uniqid()} />
			),
		});
	};

	render() {
		return (
			<div className="details-container">
				<h2>Education</h2>
				{this.state.educationForms}
				<button className="d-print-none" onClick={this.addEducationForm}>
					Add
				</button>
			</div>
		);
	}
}

export default EducationContainer;
