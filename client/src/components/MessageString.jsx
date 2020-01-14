import React from "react";
import { MDBContainer } from "mdbreact";
import Message from "../components/Message.jsx";

const MessageString = props => (
  <MDBContainer id="message-string">
    <MDBContainer>
      {props.messageString
        ? props.messageString.map((message, key) => {
            console.log(message);
            return <Message key={key} message={message} />;
          })
        : null}
    </MDBContainer>
  </MDBContainer>
);

export default MessageString;
