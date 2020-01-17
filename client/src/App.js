import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import UserProfile from './screens/userProfileScreen.jsx';
import FeedScreen from '../src/screens/FeedScreen.jsx';
import ItemDetailScreen from './screens/ItemDetailScreen';
import UploadItemScreen from './screens/UploadItemScreen';
import MakeOfferScreen from './screens/MakeOfferScreen';
import MessagesScreen from './screens/MessagesScreen';
import UpForTradeScreen from './screens/UpForTradeScreen';
import PastTransactionsScreen from './screens/PastTransactionsScreen';
import ActiveOffersScreen from './screens/ActiveOffersScreen';
import ThemeSandbox from './screens/testing/ThemeSandbox';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <ItemDetailPage /> */}
        {/* <!--<TestingScreen />  */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/signup">
            <SignupScreen />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/feed">
            <FeedScreen />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/ItemDetail">
            <ItemDetailScreen />
          </Route>
          <Route exact path="/makeOffer">
            <MakeOfferScreen />
          </Route>
          <Route exact path="/uploadItem">
            <UploadItemScreen />
          </Route>
          <Route exact path="/messages">
            <MessagesScreen />
          </Route>
          <Route exact path="/trade">
            <UpForTradeScreen />
          </Route>
          <Route exact path="/past-transactions">
            <PastTransactionsScreen />
          </Route>
          <Route exact path="/active-offers">
            <ActiveOffersScreen />
          </Route>
          <Route exact path="/theme">
            <ThemeSandbox />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
