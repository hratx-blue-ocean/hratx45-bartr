import React, { PureComponent } from "react";
import "../assets/styles/uploadItem.scss";
import UploadItemForm from "../components/UploadItemForm";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBCard
} from "mdbreact";

import { Link } from "react-router-dom";

export default class UploadItemScreen extends PureComponent {
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
    return (
      <div id="postItemScreen">
        <h1>Post an Item</h1>
        <UploadItemForm toggleConfirmationModal={this.toggleConfirmation} />
        <MDBModal
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
          size="fluid"
          centered
          className="confirmationModal"
        >
          <div className="modalTitle">
            <h1>Item posted!</h1>
          </div>
          <div className="modalButtons">
            <Link to="/trade">
              <MDBBtn color="primary" className="modalButton">
                See Your Items
              </MDBBtn>
            </Link>
            <Link to="/active-offers">
              <MDBBtn color="primary" className="modalButton">
                See Your Offers
              </MDBBtn>
            </Link>
            <Link to="/profile">
              <MDBBtn color="primary" className="modalButton">
                Back to Profile
              </MDBBtn>
            </Link>
            <Link to="/feed">
              <MDBBtn color="primary" className="modalButton">
                Home
              </MDBBtn>
            </Link>
          </div>
        </MDBModal>
      </div>
    );
  }
}
