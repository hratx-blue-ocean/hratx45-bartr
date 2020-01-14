import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
=======
import Navbar from './components/navbar';
import HomeScreen from './screens/HomeScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import TestingScreen from "./screens/testing/TestingScreen";
>>>>>>> 68ddc4278488b8c9366463776bc8b4ebcdac3fa8

import FeedScreen from "../src/screens/FeedScreen.jsx";
import Messages from "../src/screens/Messages.jsx";
// import FeedPage from "../src/screens/ExampleFeedPage.jsx";

import ItemDetailPage from "./screens/ItemDetailPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <FeedScreen />
        {/* <ItemDetailPage /> */}
<<<<<<< HEAD
        <Messages />
        <Route exact path="/dist/feed">
          <FeedScreen />
        </Route>
=======
        <TestingScreen/>
>>>>>>> 68ddc4278488b8c9366463776bc8b4ebcdac3fa8
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
