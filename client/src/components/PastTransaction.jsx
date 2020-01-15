import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput, MDBListGroupItem } from "mdbreact";

const PastTransaction = props => {
	return (
		<MDBContainer key={props.offerID} fluid>
			<MDBListGroupItem key={props.offerID}>Hello</MDBListGroupItem>
		</MDBContainer>
	);
};

export default PastTransaction;
