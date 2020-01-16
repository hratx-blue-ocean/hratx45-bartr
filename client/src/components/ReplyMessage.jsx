import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdbreact";

const ReplyMessage = props => (
  <MDBContainer id="reply-component">
    {console.log(props)}
    <MDBInput id="replyInputField" placeHolder="Reply..."></MDBInput>
    <MDBBtn
      id="sendReplyButton"
      onClick={() =>
        props.showReply(
          document.getElementById("replyInputField").value,
          props.num
        )
      }
    >
      Send
    </MDBBtn>
  </MDBContainer>
);

export default ReplyMessage;
