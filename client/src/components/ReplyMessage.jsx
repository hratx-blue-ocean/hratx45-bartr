import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdbreact";

const ReplyMessage = props => (
  <MDBContainer>
    <MDBInput placeHolder="Reply..."></MDBInput>
    <MDBBtn>Send</MDBBtn>
  </MDBContainer>
);

export default ReplyMessage;
