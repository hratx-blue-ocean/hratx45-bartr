import React from "react";
import { Button, Input } from "@material-ui/core";

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
        <Input id="feedPageSearchField"></Input>
      </div>
    );
  }
}

export default FeedPage;
