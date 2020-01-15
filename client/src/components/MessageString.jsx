import React from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import Message from "../components/Message.jsx";
class MessageString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOpen: false
    };
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
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
        </MDBContainer>

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
