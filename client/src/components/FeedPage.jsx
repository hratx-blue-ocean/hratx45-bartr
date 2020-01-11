import React from "react";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      menuOpen: true
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false
    });
  }

  render() {
    return (
      <div id="feedPageOuterContainer">
        <input id="feedPageSearchField"></input>
      </div>
    );
  }
}

export default FeedPage;
