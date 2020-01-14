import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import TestingScreen from "./screens/testing/TestingScreen";

import FeedScreen from "../src/screens/FeedScreen.jsx";
import MessagesScreen from "./screens/MessagesScreen.jsx";
// import FeedPage from "../src/screens/ExampleFeedPage.jsx";

import ItemDetailPage from "./screens/ItemDetailPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <FeedScreen /> */}
        {/* <ItemDetailPage /> */}
        <MessagesScreen />
        {/* <TestingScreen /> */}
        <Switch>
          <Route exact path="/dist/">
            <HomeScreen />
          </Route>
          <Route exact path="/dist/signup">
            <SignupScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
