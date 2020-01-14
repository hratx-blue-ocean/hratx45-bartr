import React from "react";
import { MDBContainer } from "mdbreact";
import Message from "../components/Message.jsx";

class MessageString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    };
    this.getMessages = this.getMessages.bind(this);
  }

  getMessages() {
    // ! hit server for messages
    this.setState({
      messages: [6, 5, 4, 3, 2]
    });
  }

  componentDidMount() {
    this.getMessages();
  }

  render() {
    return (
      <MDBContainer id="message-string">
        <MDBContainer>
          {this.state.messages
            ? this.state.messages.map((message, key) => (
                <Message key={key} message={message} />
              ))
            : null}
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default MessageString;
