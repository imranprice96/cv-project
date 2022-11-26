import React, { Component } from "react";
import EducationForm from "../EducationForm";
import "./Form.css";
import uniqid from "uniqid";

class EducationContainer extends Component {
	constructor() {
		super();

		this.state = {
			education: [],
			node: {
				id: uniqid(),
				output: null,
			},
		};
	}

	addEducationForm = () => {
		this.setState({
			education: this.state.education.concat(
				<EducationForm id={uniqid()} />
			),
		});
		console.log(this.state.education.length);
	};

	render() {
		return (
			<div className="details-container">
				<h2>Education</h2>
				{this.state.education}
				<button onClick={this.addEducationForm}>Add</button>
			</div>
		);
	}
}

export default EducationContainer;
