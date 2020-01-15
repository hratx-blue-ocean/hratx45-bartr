import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput, MDBListGroup } from "mdbreact";
import PastTransaction from "../components/PastTransaction";

export default class PastTransactionScreen extends Component {
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
				<MDBContainer fluid>
					<MDBListGroup>
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
