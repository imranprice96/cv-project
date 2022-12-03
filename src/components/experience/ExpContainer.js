import React, { Component } from "react";
import ExpForm from "./ExpForm";
import "../Form.css";
import uniqid from "uniqid";

class ExpContainer extends Component {
	constructor() {
		super();
		this.state = {
			expForms: [],
		};
	}

	addExpForm = () => {
		this.setState({
			expForms: this.state.expForms.concat(<ExpForm key={uniqid()} />),
		});
	};

	render() {
		return (
			<div className="details-container">
				<h2>Work Experience</h2>
				{this.state.expForms}
				<button onClick={this.addExpForm}>Add</button>
			</div>
		);
	}
}

export default ExpContainer;
