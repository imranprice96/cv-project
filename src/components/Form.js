import React, { Component } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationContainer from "./EducationContainer";

class Form extends Component {
	render() {
		return (
			<div>
				<h1>CV Generator with React</h1>
				<PersonalDetailsForm />
				<EducationContainer />
			</div>
		);
	}
}

export default Form;
