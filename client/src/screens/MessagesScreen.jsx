import React from "react";
import Axios from "axios";
import { MDBContainer } from "mdbreact";
import MessageString from "../components/MessageString.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 9,
      messageStrings: null
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
  }

  getUserMessageStrings() {
    Axios.get(
      `http://paperclip.link/api/messages/threads?userId=${this.state.currentUser}`
    )

      .then(data => data.data)
      .then(data => {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
          arr.push(data[i]);
        }
        return this.setState(
          {
            messageStrings: arr
          },
          () => console.log(this.state.messageStrings)
        );
      });

    // .then(data => {
    //   let thread1 = [];
    //   let thread2 = [];
    //   for (let i = 0; i < data.length; i++) {
    //     data[i].sender_id < this.state.currentUser ||
    //     data[i].recipient_id < this.state.currentUser
    //       ? (() => {
    //           thread1.push(data[i]);
    //           return data[i].sender_id !== this.state.currentUser
    //             ? this.setState({ msg1OtherUser: data[i].sender_id })
    //             : null;
    //         })()
    //       : (() => {
    //           thread2.push(data[i]);
    //           return data[i].sender_id !== this.state.currentUser
    //             ? this.setState({ msg2OtherUser: data[i].sender_id })
    //             : null;
    //         })();
    //   }
    //   return this.setState({
    //     messageStrings: [thread1, thread2]
    //   });
    // });
  }

  componentDidMount() {
    this.getUserMessageStrings();
  }

  render() {
    return (
      <MDBContainer id="message-screen">
        <MDBContainer style={{ textAlign: "center" }}>Inbox</MDBContainer>
        <MDBContainer
          id="messageScreenListOfMessagesContainer"
          style={{ marginTop: "-5px" }}
        >
          {this.state.messageStrings
            ? this.state.messageStrings.map((messageString, key) => (
                <MDBContainer key={key}>
                  <MessageString
                    key={key}
                    num={key}
                    messageString={messageString}
                    currentUser={this.state.currentUser}
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
