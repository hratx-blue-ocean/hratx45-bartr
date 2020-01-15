import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import UserProfile from "./screens/userProfileScreen.jsx";
import FeedScreen from "../src/screens/FeedScreen.jsx";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import UploadItemScreen from "./screens/UploadItemScreen";
import MakeOfferScreen from "./screens/MakeOfferScreen";
import TestingScreen from "./screens/testing/TestingScreen";

import MessagesScreen from "./screens/MessagesScreen";
class App extends Component {
<<<<<<< HEAD
  render() {
    return (
      <Router>
        <Navbar />
        {/* <ItemDetailPage /> */}
        {/* <TestingScreen /> */}
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
          <Route exact path="/dist/messages">
            <MessagesScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
=======
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
					<Route exact path="/dist/messages">
						<MessagesScreen />
					</Route>
				</Switch>
			</Router>
		);
	}
>>>>>>> 6ae7925d8e125622e37ef25d45f99f6b42c2fccb
}

export default App;
