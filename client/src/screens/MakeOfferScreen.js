import React, { PureComponent } from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/makeOffer.scss";
import MakeOfferForm from "../components/MakeOfferForm";
import HomeScreen from "./HomeScreen";

import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBCard
} from "mdbreact";

class MakeOfferScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.toggleConfirmation = this.toggleConfirmation.bind(this);
  }

  toggleConfirmation() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    console.log("current userId: ", this.props.userId);
    if (this.props.userId === null) {
      return <HomeScreen />;
    } else {
      return (
        <div id="makeOfferScreen">
          <h1>Make An Offer</h1>
          <MakeOfferForm toggleConfirmationModal={this.toggleConfirmation} />
          <MDBModal
            isOpen={this.state.modalOpen}
            toggle={this.toggle}
            size="fluid"
            centered
            className="confirmationModal"
          >
            <div className="modalTitle">
              <h1>Your offer has been placed!</h1>
            </div>
            <div className="modalButtons">
              <Link to="/messages">
                <MDBBtn color="default" className="modalButton">
                  Go to Messages
                </MDBBtn>
              </Link>
              <Link to="/active-offers">
                <MDBBtn color="default" className="modalButton">
                  Your Offers
                </MDBBtn>
              </Link>
              <Link to="/feed">
                <MDBBtn color="default" className="modalButton">
                  Home
                </MDBBtn>
              </Link>
            </div>
          </MDBModal>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {userId: state.userInfo.userId}
}

export default connect(mapStateToProps)(MakeOfferScreen);
