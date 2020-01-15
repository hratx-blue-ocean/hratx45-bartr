import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";
import { connect } from "react-redux";

class LoginScreen extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
			authenticate: false
		};

		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	usernameHandler(e) {
		let username = e.target.value;
		this.setState = {
			username: username
		};
	}

	passwordHandler(e) {
		let password = e.target.value;
		this.setState = {
			password: password
		};
	}

	clickHandler() {
		this.props.login("collin");
	}

	render() {
		return (
			<MDBContainer id="login-screen" fluid>
				<div className="login-container">
					<MDBContainer>Login</MDBContainer>
					<form className="login-form">
						<MDBInput
							label="username"
							icon="envelope"
							onChange={this.usernameHandler}
							group
							type="username"
							validate
							error="wrong"
							success="right"
						/>
						<MDBInput
							label="password"
							icon="lock"
							onChange={this.passwordHandler}
							group
							type="password"
							validate
							error="wrong"
							success="right"
						/>
						<Link to="/dist/feed">
							<MDBBtn color="default" onClick={this.clickHandler}>
								Login
							</MDBBtn>
						</Link>
					</form>
				</div>
			</MDBContainer>
		);
	}
}

// * mapstatetoprops, mapdispatchtoprops (action creators)
export default connect(null, { login })(LoginScreen);
