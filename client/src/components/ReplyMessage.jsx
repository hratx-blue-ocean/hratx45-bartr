import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdbreact";

const ReplyMessage = props => (
  <MDBContainer id="reply-component">
    <MDBInput id="replyInputField" placeHolder="Reply..."></MDBInput>

    <MDBBtn
      id="sendReplyButton"
      onClick={() =>
        props.replyHandle(
          document.getElementById("replyInputField").value,
          props.recipient
        )
      }
    >
      Send
    </MDBBtn>
  </MDBContainer>
);

export default ReplyMessage;
