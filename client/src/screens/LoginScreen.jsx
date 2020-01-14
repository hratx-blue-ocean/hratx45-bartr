import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdbreact";

export default class LoginScreen extends Component() {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};

		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
	}

	usernameHandler(e) {
		console.log("username");
	}

	passwordHandler(e) {
		console.log("password");
	}

	render() {
		return (
			<MDBContainer id="login-screen">
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
						<MDBBtn color="default">Login</MDBBtn>
					</form>
				</div>
			</MDBContainer>
		);
	}
}
