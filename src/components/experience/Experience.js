import React from "react";

const Experience = (props) => {
	const { details } = props;

	return (
		<div>
			<div className="details">
				<p className="details-title">Company:</p>
				<p className="details-info">{details.company}</p>
			</div>
			<div className="details">
				<p className="details-title">Position:</p>
				<p className="details-info">{details.position}</p>
			</div>
			<div className="details">
				<p className="details-title">From:</p>
				<p className="details-info">{details.fromDate}</p>
			</div>
			<div className="details">
				<p className="details-title">To:</p>
				<p className="details-info">{details.toDate}</p>
			</div>
			<div className="details">
				<p className="details-title">Main Tasks:</p>
				<p className="details-info">{details.tasks}</p>
			</div>
		</div>
	);
};

export default Experience;
