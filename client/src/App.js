import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import HomeScreen from './screens/HomeScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';

import FeedPage from '../src/screens/FeedPage.jsx';
// import FeedPage from "../src/screens/ExampleFeedPage.jsx";

import ItemDetailPage from './screens/ItemDetailPage';
import UploadItemScreen from './screens/UploadItemScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <ItemDetailPage /> */}
        <UploadItemScreen />
        <Switch>
          <Route exact path="/dist/REMOVEBEFOREPUSH">
            <HomeScreen />
          </Route>
          <Route exact path="/dist/signup">
            <SignupScreen />
          </Route>
          <Route exact path="/dist/feed">
            <FeedPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
