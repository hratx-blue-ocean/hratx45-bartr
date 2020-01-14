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
          <input type="text" id="itemNameInput" placeholder="Item Name" />
          <input type="text" id="itemValueInput" placeholder="Item Value" />
          <textarea className="md-textarea form-control" id="itemDescription" rows="3"></textarea>
          <label for="itemDescription">Description</label>
        </form>
      </div>
    );
  }
}
