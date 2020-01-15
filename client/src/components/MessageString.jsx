import React from "react";
import { MDBContainer } from "mdbreact";
import Message from "../components/Message.jsx";

const MessageString = props => (
  <MDBContainer
    id="message-string"
    value="5"
    onClick={e => props.openMessage(e)}
  >
    <MDBContainer>
      Messages with user: {props.messageString[props.num].sender_id}
    </MDBContainer>
    <MDBContainer>
      {props.messageString
        ? props.messageString.map((message, key) => (
            <Message
              key={key}
              message={message}
              num={props.num}
              messageStringOpen={props.messageStringOpen}
            />
          ))
        : null}
    </MDBContainer>
  </MDBContainer>
);

export default MessageString;
