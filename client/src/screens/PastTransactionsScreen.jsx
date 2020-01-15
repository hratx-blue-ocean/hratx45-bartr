import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput, MDBListGroup } from "mdbreact";
import PastTransaction from "../components/PastTransaction";
import { connect } from "react-redux";

class PastTransactionScreen extends Component {
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
			<div>
				<MDBContainer fluid id="past-transactions">
					<MDBListGroup>
						<div className="labels">
							<div className="transaction-info-label">
								OfferID
							</div>
							<div className="transaction-info-label">Item</div>
							<div className="transaction-info-label">
								Offerer
							</div>
							<div className="transaction-info-label">
								Offeree
							</div>
							<div className="transaction-info-label">Status</div>
						</div>
						{this.state.offersIDs.map((item, index) => {
							return (
								<PastTransaction offerID={item} index={index} />
							);
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

export default connect(mapStateToProps, {})(PastTransactionScreen);
