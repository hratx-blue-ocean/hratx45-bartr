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
          <MDBInput label="Item Name*" outline size="lg"/>
          <MDBInput label="Item Value*" outline size="lg"/>
          <MDBInput type="textarea" label="Description" outline size="lg"/>
          <MDBInput label="Desired Trade(s)" outline size="lg"/>
          <MDBInput label="Time Constraints" outline size="lg"/>
          <MDBFileInput multiple />
          <MDBBtn>Upload Item</MDBBtn>
        </form>
      </div>
    );
  }
}
