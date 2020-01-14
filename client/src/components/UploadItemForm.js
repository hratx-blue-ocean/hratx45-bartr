import React, { PureComponent } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBFileInput
} from "mdbreact";

export default class UploadItemForm extends PureComponent {
  render() {
    return (
      <div>
        <form className="md-form">
          <input type="text" id="itemNameInput" placeholder="Item Name*" />
          <br></br>
          <input type="text" id="itemValueInput" placeholder="Item Value*" />
          <textarea className="md-textarea form-control" id="itemDescription" placeholder="Description" rows="3"></textarea>
          <input type="text" id="itemDesiredTradeInput" placeholder="Desired Trades?" />
          <br></br>
          <input type="text" id="itemTimeConstraintsInput" placeholder="Any time constraints?" />
          <MDBFileInput multiple />
          <MDBBtn>Upload Item</MDBBtn>
        </form>
      </div>
    );
  }
}
