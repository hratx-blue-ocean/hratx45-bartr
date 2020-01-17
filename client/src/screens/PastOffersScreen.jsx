import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput, MDBListGroup } from "mdbreact";
import PastOffer from "../components/PastOffer";
import { connect } from "react-redux";

class PastOffersScreen extends Component {
	constructor() {
		super();
		// ! I need offers ID, offerer/offeree, item, status
		this.state = {
			username: "",
			offersIDs: [1, 2, 3, 4]
		};
	}

	render() {
		return (
			<div className="centered" id="login-screen">
				<MDBContainer fluid id="past-offers">
					<MDBListGroup>
						<div className="labels">
							<div className="offer-info-label">OfferID</div>
							<div className="offer-info-label">Item</div>
							<div className="offer-info-label">Offerer</div>
							<div className="offer-info-label">Offeree</div>
							<div className="offer-info-label">Status</div>
						</div>
						{this.state.offersIDs.map((item, index) => {
							return <PastOffer offerID={item} index={index} />;
						})}
					</MDBListGroup>
				</MDBContainer>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { loggedInUserInfo } = state;
	return { loggedInUserInfo };
};

export default connect(mapStateToProps, {})(PastOffersScreen);
