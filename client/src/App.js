import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import UserProfile from './screens/userProfileScreen.jsx';
import FeedScreen from '../src/screens/FeedScreen.jsx';
import ItemDetailPage from './screens/ItemDetailScreen.jsx';
import UpForTradeScreen from './screens/UpForTradeScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <MessagesScreen /> */}
        <FeedScreen />
        {/* <ItemDetailPage /> */}
        {/* <!--<TestingScreen />  */}
        <Switch>
          <Route exact path="/dist/">
            <HomeScreen />
          </Route>
          <Route exact path="/dist/signup">
            <SignupScreen />
          </Route>
          <Route exact path="/dist/feed">
            <FeedScreen />
          </Route>
          <Route exact path="/dist/profile">
            <UserProfile />
          </Route>
          <Route exact path="/dist/ItemDetail">
            <ItemDetailPage />
          </Route>
          <Route exact path="/dist/trade">
            <UpForTradeScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
