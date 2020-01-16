import React from "react";
import Axios from "axios";
import { MDBContainer } from "mdbreact";
import MessageString from "../components/MessageString.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 10,
      messageStrings: null,
      recipient_id: null
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
    this.showReply = this.showReply.bind(this);
    this.resetRecipientID = this.resetRecipientID.bind(this);
  }

  getUserMessageStrings() {
    Axios.get(
      `https://paperclip.link/api/messages?userId=${this.state.currentUser}`
    )
      .then(data => data.data)
      .then(data => {
        let thread1 = [];
        let thread2 = [];
        for (let i = 0; i < data.length; i++) {
          data[i].sender_id < this.state.currentUser ||
          data[i].recipient_id < this.state.currentUser
            ? thread1.push(data[i])
            : thread2.push(data[i]);
        }
        return this.setState({
          messageStrings: [thread1, thread2]
        });
      });
  }

  showReply(msg, threadNum) {
    let arr = this.state.messageStrings;
    let tempHold = arr[threadNum].slice();
    console.log(tempHold);
    this.setState(
      {
        recipient_id: this.state.recipient_id
          ? this.state.recipient_id
          : tempHold[1].recipient_id
      },
      () => {
        tempHold.unshift({
          sender_id: this.state.currentUser,
          recipient_id: this.state.recipient_id
            ? this.state.recipient_id
            : tempHold[2].sender_id,
          date: new Date().toJSON(),
          message: msg
        });

        arr[threadNum] = tempHold;
        this.setState({
          messageStrings: arr
        });
      }
    );
  }

  resetRecipientID() {
    this.setState({
      recipient_id: null
    });
  }
  componentDidMount() {
    this.getUserMessageStrings();
  }

  render() {
    return (
      <MDBContainer id="message-screen">
        <MDBContainer style={{ textAlign: "center" }}>Inbox</MDBContainer>
        <MDBContainer id="messageScreenListOfMessagesContainer">
          {this.state.messageStrings
            ? this.state.messageStrings.map((messageString, key) => (
                <MDBContainer key={key}>
                  <MessageString
                    key={key}
                    num={key}
                    messageString={messageString}
                    currentUser={this.state.currentUser}
                    showReply={this.showReply}
                    resetRecipientID={this.resetRecipientID}
                  />
                </MDBContainer>
              ))
            : null}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default Messages;
