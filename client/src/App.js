import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import UpForTradePage from './screens/UpForTradePage';

import FeedPage from '../src/screens/FeedPage.jsx';
// import FeedPage from "../src/screens/ExampleFeedPage.jsx";

import ItemDetailPage from './screens/ItemDetailPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <ItemDetailPage /> */}
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
          <Route exact path="/dist/trade">
            <UpForTradePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
