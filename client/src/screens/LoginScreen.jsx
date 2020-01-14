import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdbreact";

class LoginScreen extends Component() {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
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
		console.log("click!");
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
						<MDBBtn color="default" onClick={this.clickHandler}>
							Login
						</MDBBtn>
					</form>
				</div>
			</MDBContainer>
		);
	}
}

export default LoginScreen;
