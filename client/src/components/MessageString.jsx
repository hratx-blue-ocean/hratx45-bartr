import React from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import Message from "../components/Message.jsx";
import ReplyMessage from "../components/ReplyMessage.jsx";
class MessageString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOpen: false,
      replyOpen: false
    };
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.replyToMessage = this.replyToMessage.bind(this);
  }

  openMessage() {
    this.setState({
      messageOpen: true
    });
  }

  closeMessage() {
    this.setState({
      messageOpen: false
    });
  }

  replyToMessage() {
    this.setState({
      replyOpen: true
    });
  }

  render() {
    return this.state.messageOpen ? (
      <MDBContainer id="message-string" value="5">
        <MDBContainer
          id="topPartOfMessage"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          Messages with user:{" "}
          {this.props.messageString[this.props.num].sender_id}
          <MDBBtn onClick={this.closeMessage}>close</MDBBtn>
          <MDBBtn onClick={this.replyToMessage}>Reply</MDBBtn>
        </MDBContainer>
        {this.state.replyOpen ? (
          <MDBContainer>
            <ReplyMessage />
          </MDBContainer>
        ) : null}

        <MDBContainer>
          {this.props.messageString
            ? this.props.messageString.map((message, key) => (
                <Message key={key} message={message} num={this.props.num} />
              ))
            : null}
        </MDBContainer>
      </MDBContainer>
    ) : (
      <MDBContainer id="message-string" value="5" onClick={this.openMessage}>
        <MDBContainer>
          Messages with user:{" "}
          {this.props.messageString[this.props.num].sender_id}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default MessageString;
