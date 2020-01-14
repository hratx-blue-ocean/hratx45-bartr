import React from "react";
import { MDBContainer } from "mdbreact";

const Message = props => (
  <MDBContainer>
    <MDBContainer>____________________________</MDBContainer>
    <MDBContainer>From: {props.message.sender_id}</MDBContainer>

    <MDBContainer>Date: {props.message.date}</MDBContainer>
    <MDBContainer>{props.message.message}</MDBContainer>
  </MDBContainer>
);

export default Message;
