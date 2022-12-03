import React, { Component } from "react";

class EducationForm extends Component {
	constructor() {
		super();

		this.state = {
			institution: "",
			study: "",
			fromDate: null,
			toDate: null,
		};
	}
	render() {
		return (
			<form>
				<button>Save</button>
			</form>
		);
	}
}

export default EducationForm;
