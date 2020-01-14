import React from "react";
import Axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput
} from "mdbreact";
import MessageString from "../components/MessageString.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 4,
      messageStrings: null
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
  }

  getUserMessageStrings() {
    // ! ping server for user messageStrings
    Axios.get(
      `https://paperclip.link/api/messages?userId=${this.state.currentUser}`
    )
      .then(data => data.data)
      .then(data => {
        let thread1 = [];
        let thread2 = [];
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].sender_id < this.state.currentUser ||
            data[i].recipient_id < this.state.currentUser
          ) {
            thread1.push(data[i]);
          } else {
            thread2.push(data[i]);
          }
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
