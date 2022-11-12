import React, { Component } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";

class Form extends Component {
	render() {
		return (
			<div>
				<h1>CV Generator with React</h1>
				<PersonalDetailsForm />
			</div>
		);
	}
}

export default Form;
