import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import TestingScreen from "./screens/testing/TestingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

import FeedPage from "../src/screens/FeedPage.jsx";
// import FeedPage from "../src/screens/ExampleFeedPage.jsx";

import ItemDetailPage from "./screens/ItemDetailPage";

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				{/* <ItemDetailPage /> */}
				<TestingScreen />
				<LoginScreen />
				<SignUpScreen />
				<Switch>
					<Route exact path="/dist/">
						<HomeScreen />
					</Route>
					{/* <Route exact path="/dist/signup">
						<SignUpScreen />
					</Route> */}
					<Route exact path="/dist/feed">
						<FeedPage />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
