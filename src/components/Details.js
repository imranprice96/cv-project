import React from "react";
import "./Details.css";

const Details = (props) => {
	const { details } = props;

	return (
		<div className="details-container">
			<div className="details">
				<p className="details-title">First Name:</p>
				<p className="details-info">{details.firstName}</p>
			</div>
			<div className="details">
				<p className="details-title">Last Name:</p>
				<p className="details-info">{details.lastName}</p>
			</div>
			<div className="details">
				<p className="details-title">Email:</p>
				<p className="details-info">{details.email}</p>
			</div>
			<div className="details">
				<p className="details-title">Phone Number:</p>
				<p className="details-info">{details.phoneNumber}</p>
			</div>
		</div>
	);
};

export default Details;
