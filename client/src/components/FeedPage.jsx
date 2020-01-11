import React from "react";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="feedPageOuterContainer">
        <div id="feedPageNavBar">
          <div id="menuButtonFeedPage">
            <div>☰</div>
          </div>

          <div>Nav bar here</div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
