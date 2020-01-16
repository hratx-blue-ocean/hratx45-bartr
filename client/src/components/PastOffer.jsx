import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput, MDBListGroupItem } from "mdbreact";

const PastOffer = props => {
	return (
		<MDBContainer key={props.offerID} fluid>
			<MDBListGroupItem
				key={props.offerID}
				className="past-transaction-item"
			>
				<div className="transaction-info-item">OfferID</div>
				<div className="transaction-info-item">Item</div>
				<div className="transaction-info-item">Offerer</div>
				<div className="transaction-info-item">Offeree</div>
				<div className="transaction-info-item">Status</div>
			</MDBListGroupItem>
		</MDBContainer>
	);
};

export default PastOffer;
