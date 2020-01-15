<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
=======
<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
>>>>>>> 37f5bf426c0618a2f175d11bd0ba3f1bb3cd7b42
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import UserProfile from "./screens/userProfileScreen.jsx";
import FeedScreen from "../src/screens/FeedScreen.jsx";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import UploadItemScreen from "./screens/UploadItemScreen";
import MakeOfferScreen from "./screens/MakeOfferScreen";
<<<<<<< HEAD
import MessagesScreen from "./screens/MessagesScreen";
import UpForTradeScreen from "./screens/UpForTradeScreen";
=======
import TestingScreen from "./screens/testing/TestingScreen";

import MessagesScreen from "./screens/MessagesScreen";
=======
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
>>>>>>> 8890bf9ad91a837cead9fc5fb7dcdee0a2257f4b
>>>>>>> 37f5bf426c0618a2f175d11bd0ba3f1bb3cd7b42
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
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
            <ItemDetailScreen />
          </Route>
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <Route exact path="/dist/messages">
            <MessagesScreen />
          </Route>
=======
<<<<<<< HEAD
          <Route exact path="/dist/messages">
            <MessagesScreen />
          </Route>
          <Route exact path="/dist/upload">
            <UploadItemScreen />
=======
>>>>>>> 37f5bf426c0618a2f175d11bd0ba3f1bb3cd7b42
          <Route exact path="/dist/makeOffer">
            <MakeOfferScreen />
          </Route>
          <Route exact path="/dist/uploadItem">
            <UploadItemScreen />
          </Route>
          <Route exact path="/dist/messages">
            <MessagesScreen />
          </Route>
          <Route exact path="/dist/trade">
            <UpForTradeScreen />
          </Route>
>>>>>>> 8890bf9ad91a837cead9fc5fb7dcdee0a2257f4b
        </Switch>
      </Router>
    );
  }
}

export default App;
