import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader
} from "mdbreact";
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
    this.closeReply = this.closeReply.bind(this);
  }

  openMessage() {
    this.setState({
      messageOpen: true
    });
  }

  closeMessage() {
    this.setState(
      {
        messageOpen: false,
        replyOpen: false
      },
      () => this.props.resetRecipientID
    );
  }

  replyToMessage() {
    this.setState({
      replyOpen: true
    });
  }

  closeReply() {
    this.setState({
      replyOpen: false
    });
  }

  sendReplyToDB() {
    // ! send reply to database
  }

  componentDidMount() {
    this.setState({ currString: this.props.messageString });
  }

  render() {
    return this.state.messageOpen ? (
      <MDBContainer id="message-string">
        <MDBModal isOpen={this.state.messageOpen}>
          <MDBModalHeader>
            Messages with user:{" "}
            {this.props.messageString[this.props.num].sender_username}
          </MDBModalHeader>
          <MDBModalBody>
            {" "}
            {this.state.replyOpen ? (
              <MDBContainer>
                <ReplyMessage
                  showReply={this.showReply}
                  messageString={this.props.messageString}
                  num={this.props.num}
                />
              </MDBContainer>
            ) : null}
            <MDBContainer>
              {this.state.currString
                ? this.state.currString.map((message, key) => (
                    <Message key={key} message={message} num={this.props.num} />
                  ))
                : null}
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn id="closeButton" onClick={this.closeMessage}>
              Close
            </MDBBtn>
            <MDBBtn
              id="replyButton"
              onClick={
                this.state.replyOpen ? this.closeReply : this.replyToMessage
              }
            >
              Reply
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    ) : (
      <MDBContainer id="message-string" onClick={this.openMessage}>
        <MDBContainer>
          Messages with user:{" "}
          {this.props.messageString[this.props.num].sender_username}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default MessageString;
