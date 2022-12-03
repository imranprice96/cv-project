import React, { Component } from "react";
import PersonalDetailsForm from "./personalDetails/PersonalDetailsForm";
import EducationContainer from "./education/EducationContainer";
import ExpContainer from "./experience/ExpContainer";
import "./Form.css";

class Form extends Component {
	render() {
		return (
			<div>
				<h1 className="d-print-none">CV Generator with React</h1>
				<PersonalDetailsForm />
				<EducationContainer />
				<ExpContainer />
			</div>
		);
	}
}

export default Form;
