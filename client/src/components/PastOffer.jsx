import React, { Component } from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBInput,
	MDBListGroupItem,
	MDBCol,
	MDBRow,
	MDBCard,
	MDBCardBody
} from 'mdbreact';

const PastOffer = props => {
	return (
		<MDBCard>
			<MDBCardBody>
				<MDBRow center>
					<MDBRow>
						<MDBCol>OfferID</MDBCol>
						<MDBCol>Status</MDBCol>
					</MDBRow>
					<MDBContainer>Offerer</MDBContainer>
					<MDBContainer key={props.offerID} fluid>
						<MDBListGroupItem key={props.offerID} className="past-offerer">
							<MDBCol className="offer-info-item">Image</MDBCol>
							<MDBCol className="offer-info-item">Item</MDBCol>
							<MDBCol className="offer-info-item">Value</MDBCol>
						</MDBListGroupItem>
					</MDBContainer>
				</MDBRow>
			</MDBCardBody>
			<MDBCardBody>
				<MDBRow center>
					<MDBContainer>Offeree</MDBContainer>
					<MDBContainer key={props.offerID} fluid>
						<MDBListGroupItem key={props.offerID} className="past-offeree">
							<MDBCol className="offer-info-item">Image</MDBCol>
							<MDBCol className="offer-info-item">Item</MDBCol>
							<MDBCol className="offer-info-item">Value</MDBCol>
						</MDBListGroupItem>
					</MDBContainer>
				</MDBRow>
			</MDBCardBody>
		</MDBCard>
	);
};

export default PastOffer;
