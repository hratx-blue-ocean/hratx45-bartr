import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import UserProfile from "./screens/userProfile.jsx";
import FeedPage from "../src/screens/FeedPage.jsx";
import ItemDetailPage from "../src/screens/ItemDetailPage.js";
import TestingScreen from "./screens/testing/TestingScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <ItemDetailPage /> */}
        <TestingScreen />
        <Switch>
          <Route exact path="/dist/">
            <HomeScreen />
          </Route>
          <Route exact path="/dist/signup">
            <SignupScreen />
          </Route>
          <Route exact path="/dist/feed">
            <FeedPage />
          </Route>
          <Route exact path="/dist/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
