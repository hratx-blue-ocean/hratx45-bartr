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
      replyOpen: false,
      replies: []
    };
    this.openMessage = this.openMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
    this.replyToMessage = this.replyToMessage.bind(this);
    this.closeReply = this.closeReply.bind(this);
    this.replyHandle = this.replyHandle.bind(this);
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
  replyHandle(msg, recipient) {
    let arr = this.state.replies;
    arr.unshift({
      sender_id: this.props.currentUser,
      recipient_id: recipient,
      date: new Date().toJSON(),
      message: msg
    });
    this.setState({
      replies: arr
    });
  }

  // "sender_id": 0,
  // "recipient_id": 1,
  // "date": "2017-06-10_11:38:14",
  // "message": "Thought four loss better out. Policy hair place. Guy only attack per have at various.",
  // "sender_username": "Thomas_0",
  // "recipient_username": "Bianca_1"

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
                  messageString={this.props.messageString}
                  num={this.props.num}
                  replyHandle={this.replyHandle}
                  recipient={
                    this.props.num === 0
                      ? this.props.msg1OtherUser
                      : this.props.msg2OtherUser
                  }
                />
              </MDBContainer>
            ) : null}
            <MDBContainer>
              {this.state.replies
                ? this.state.replies.map((message, key) => (
                    <Message key={key} message={message} />
                  ))
                : null}
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
