import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

export default class MakeOfferForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
  render() {
    return (
      <div>
        <form className="md-form">
          <MDBContainer>
            <MDBBtn color="default" onClick={this.toggle}>Select Item To Offer</MDBBtn>
            <MDBModal isOpen={this.state.modalOpen} toggle={this.toggle}>
              <MDBModalHeader>Your Items</MDBModalHeader>
              <MDBModalBody>Item List</MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="warning" onClick={this.toggle}>Add to Offer</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
            <MDBInput type="textarea" label="Send a message with your offer?" outline/>
            <MDBBtn color="danger">Send Your Offer!</MDBBtn>
          </MDBContainer>
        </form>
      </div>
    );
  }
}
