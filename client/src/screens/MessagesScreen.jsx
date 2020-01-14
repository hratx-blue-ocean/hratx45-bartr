import React from "react";
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
      messageStrings: null
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
  }

  getUserMessageStrings() {
    // ! ping server for user messageStrings
    this.setState({
      messageStrings: [1, 2, 3, 4, 5, 6, 7]
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
                <MessageString
                  key={key}
                  num={key}
                  messageString={messageString}
                />
              ))
            : null}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default Messages;
