import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/signup">
            <SignupScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
