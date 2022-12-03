import React, { Component } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationContainer from "./EducationContainer";
import ExpContainer from "./experience/ExpContainer";

class Form extends Component {
	//After exp section restructor into new folders using new branch
	render() {
		return (
			<div>
				<h1>CV Generator with React</h1>
				<PersonalDetailsForm />
				<EducationContainer />
				<ExpContainer />
			</div>
		);
	}
}

export default Form;
