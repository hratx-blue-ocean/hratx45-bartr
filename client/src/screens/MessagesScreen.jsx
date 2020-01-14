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

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageStrings: []
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
  }

  getUserMessageStrings() {
    // ! ping server for user messages

    this.setState({});
  }

  componentDidMount() {
    this.getUserMessageStrings();
  }

  render() {
    return (
      <MDBContainer>
        <MDBContainer style={{ textAlign: "center" }}>Inbox</MDBContainer>
        <MDBContainer id="messageScreenListOfMessagesContainer">
          {this.state.messageStrings
            ? this.state.messageStrings.map((messageString, key) => (
                <Message key={key} message={messageString} />
              ))
            : null}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
export default Messages;
