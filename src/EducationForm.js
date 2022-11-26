import React, { Component } from "react";

class EducationForm extends Component {
	constructor(props) {
		super();

		//pass id back to parent

		this.state = {
			id: props.id,
			institution: "",
			study: "",
			fromDate: null,
			toDate: null,
		};
	}
	render() {
		console.log(this.state.id);
		return (
			<form>
				<button>Save</button>
				<button>Delete</button>
			</form>
		);
	}
}

export default EducationForm;
