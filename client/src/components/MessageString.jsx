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
import Axios from "axios";
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
    this.setState({
      messageOpen: false,
      replyOpen: false
    });
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

  replyHandle(msg, recipient) {
    let arr = this.state.replies;
    console.log("run");
    // arr.unshift({
    //   sender_id: this.props.currentUser,
    //   recipient_id: recipient,
    //   date: new Date().toJSON(),
    //   message: msg,
    //   sender_username: this.props.messageString[this.props.num]
    //     .recipient_username,
    //   recipient_username: this.props.messageString[this.props.num]
    //     .sender_username
    // });
    // this.setState({
    //   replies: arr
    // });

    let dt = new Date();
    let dateToSend = `${dt
      .getFullYear()
      .toString()
      .padStart(4, "0")}-${(dt.getMonth() + 1).toString().padStart(2, "0")}-${dt
      .getDate()
      .toString()
      .padStart(2, "0")} ${dt
      .getHours()
      .toString()
      .padStart(2, "0")}:${dt
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${dt
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    Axios.post("https://paperclip.link/api/messages", {
      senderId: this.props.currentUser,
      recipientId: recipient,
      date: dateToSend,
      message: msg
    })
      .then(console.log)
      .catch(console.log);
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
            {this.props.messageString.user_one_id === this.props.currentUser
              ? this.props.messageString.user_two_name
              : this.props.messageString.user_one_name}
          </MDBModalHeader>
          <MDBModalBody>
            <MDBContainer style={{ overflowY: "scroll", height: "70vh" }}>
              {this.state.replyOpen ? (
                <MDBContainer>
                  <ReplyMessage
                    messageString={this.props.messageString}
                    num={this.props.num}
                    replyHandle={this.replyHandle}
                    currentUser={this.props.currentUser}
                  />
                </MDBContainer>
              ) : null}
              <MDBContainer>
                {this.state.currString
                  ? this.state.currString.messages.map((message, key) => (
                      <Message
                        key={key}
                        currString={this.state.currString}
                        message={message}
                        num={this.props.num}
                        currentUser={this.props.currentUser}
                      />
                    ))
                  : null}
                {this.state.replies
                  ? this.state.replies.map((message, key) => (
                      <Message key={key} message={message} />
                    ))
                  : null}
              </MDBContainer>
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
      <MDBContainer id="unopenedMessage" onClick={this.openMessage}>
        <MDBContainer id="innerUnopened">
          Messages with user:{" "}
          {this.props.messageString.user_one_id === this.props.currentUser
            ? this.props.messageString.user_two_name
            : this.props.messageString.user_one_name}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default MessageString;
