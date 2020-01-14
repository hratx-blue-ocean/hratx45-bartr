import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";

import FeedScreen from "../src/screens/FeedScreen.jsx";
=======
import Navbar from './components/navbar';
import HomeScreen from './screens/HomeScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';

import FeedPage from '../src/screens/FeedPage.jsx';
// import FeedPage from "../src/screens/ExampleFeedPage.jsx";

import ItemDetailPage from './screens/ItemDetailPage';
>>>>>>> e84274f90265079f5aaab1e92987c04e4ce16b03

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
<<<<<<< HEAD
        <FeedScreen />
=======
        {/* <ItemDetailPage /> */}
>>>>>>> e84274f90265079f5aaab1e92987c04e4ce16b03
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
