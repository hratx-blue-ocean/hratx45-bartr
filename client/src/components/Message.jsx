import React from "react";
import { MDBContainer } from "mdbreact";
import { connect, useSelector, getS } from "react-redux";

const Message = props => (
  <MDBContainer>
    <MDBContainer>____________________________</MDBContainer>
    <MDBContainer>From: {props.message.sender_username}</MDBContainer>
    <MDBContainer>To: {props.message.recipient_username}</MDBContainer>
    <MDBContainer>Date: {props.message.date.slice(0, 10)}</MDBContainer>
    <MDBContainer>Time: {props.message.date.slice(11, 16)}</MDBContainer>
    <MDBContainer>{props.message.message}</MDBContainer>
  </MDBContainer>
);

export default Message;
