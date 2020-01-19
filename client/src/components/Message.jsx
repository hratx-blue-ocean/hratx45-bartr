import React from "react";
import { MDBContainer } from "mdbreact";
import { connect, useSelector, getS } from "react-redux";

const Message = props => (
  <MDBContainer>
    <MDBContainer>____________________________</MDBContainer>
    <MDBContainer>
      From:{" "}
      {props.message.sender_id === props.currString.user_one_id
        ? props.currString.user_one_name
        : props.currString.user_two_name}
    </MDBContainer>
    <MDBContainer>
      To:{" "}
      {props.message.recipient_id === props.currString.user_one_id
        ? props.currString.user_one_name
        : props.currString.user_two_name}
    </MDBContainer>
    <MDBContainer>Date: {props.message.date.slice(0, 10)}</MDBContainer>
    <MDBContainer>Time: {props.message.date.slice(11, 16)}</MDBContainer>
    <MDBContainer>{props.message.message}</MDBContainer>
  </MDBContainer>
);

export default Message;
