import React from "react";
import Axios from "axios";
import { MDBContainer } from "mdbreact";
import MessageString from "../components/MessageString.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 10,
      messageStrings: null
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
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
