import React from "react";

const Education = (props) => {
	const { details } = props;

	return (
		<div>
			<div className="details">
				<p className="details-title">Institution:</p>
				<p className="details-info">{details.institution}</p>
			</div>
			<div className="details">
				<p className="details-title">Study:</p>
				<p className="details-info">{details.study}</p>
			</div>
			<div className="details">
				<p className="details-title">From:</p>
				<p className="details-info">{details.fromDate}</p>
			</div>
			<div className="details">
				<p className="details-title">To:</p>
				<p className="details-info">{details.toDate}</p>
			</div>
		</div>
	);
};

export default Education;
