import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdbreact";

const ReplyMessage = props => (
  <MDBContainer id="reply-component">
    <MDBInput placeHolder="Reply..."></MDBInput>
    <MDBBtn id="sendReplyButton">Send</MDBBtn>
  </MDBContainer>
);

export default ReplyMessage;
