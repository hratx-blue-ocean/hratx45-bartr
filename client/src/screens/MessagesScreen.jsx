import React from "react";
import Axios from "axios";
import { MDBContainer } from "mdbreact";
import MessageString from "../components/MessageString.jsx";
import { useSelector, connect } from "react-redux";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentUser: 9,
      messageStrings: null
    };
    this.getUserMessageStrings = this.getUserMessageStrings.bind(this);
  }

  getUserMessageStrings() {
    Axios.get(
      `http://paperclip.link/api/messages/threads?userId=${this.props.userInfo.userInfo.user_id}`
    )

      .then(data => data.data)
      .then(data => {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
          arr.push(data[i]);
        }
        return this.setState({
          messageStrings: arr
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
                    currentUser={this.props.userInfo.userInfo.user_id}
                  />
                </MDBContainer>
              ))
            : null}
        </MDBContainer>
      </MDBContainer>
    );
  }
}
// export default Messages;

const mapStateToProps = state => {
  return {
    products: state.products,
    location: state.location,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps, {})(Messages);
