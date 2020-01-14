import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdbreact";

export default class SignUpScreen extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			username: "",
			password: "",
			email: "",
			zipcode: ""
		};

		this.firstNameHandler = this.firstNameHandler.bind(this);
		this.lastNameHandler = this.lastNameHandler.bind(this);
		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
		this.emailHandler = this.emailHandler.bind(this);
		this.zipcodeHandler = this.zipcodeHandler.bind(this);
	}

	firstNameHandler(e) {
		console.log("first name");
	}

	lastNameHandler(e) {
		console.log("last name");
	}

	usernameHandler(e) {
		console.log("username");
	}

	passwordHandler(e) {
		console.log("password");
	}

	emailHandler(e) {
		console.log("email");
	}

	zipcodeHandler(e) {
		console.log("zipcode");
	}

	keywordHandler(e) {
		console.log("keyword");
	}

	render() {
		return (
			<MDBContainer id="signup-screen">
				<div className="container">
					<MDBContainer>Sign-Up</MDBContainer>
					<form className="signup-form">
						<div className="first-last">
							<MDBInput
								className="first-name"
								label="First Name"
								onChange={this.firstNameHandler}
							/>
							<MDBInput
								className="last-name"
								label="Last Name"
								onChange={this.lastNameHandler}
							/>
						</div>
						<MDBInput
							className="username"
							label="Username"
							onChange={this.usernameHandler}
						/>
						<MDBInput
							className="password"
							label="Password"
							onChange={this.passwordHandler}
						/>
						<MDBInput
							className="email"
							label="E-mail"
							onChange={this.emailHandler}
						/>
						<MDBInput
							className="zipcode"
							label="Zipcode"
							onChange={this.zipcodeHandler}
						/>
						<MDBBtn color="default">Sign-Up</MDBBtn>
					</form>
				</div>
			</MDBContainer>
		);
	}
}
