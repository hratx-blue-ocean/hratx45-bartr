import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdbreact";

class SignUpScreen extends Component {
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
		this.clickHandler = this.clickHandler.bind(this);
	}

	firstNameHandler(e) {
		let firstName = e.target.value;
		this.setState = {
			firstName: firstName
		};
	}

	lastNameHandler(e) {
		let lastName = e.target.value;
		this.setState = {
			lastName: lastName
		};
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

	emailHandler(e) {
		let email = e.target.value;
		this.setState = {
			email: email
		};
	}

	zipcodeHandler(e) {
		let zipcode = e.target.value;
		this.setState = {
			zipcode: zipcode
		};
	}

	clickHandler() {
		console.log("click!");
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
						<MDBBtn color="default" onClick={this.clickHandler}>
							Sign-Up
						</MDBBtn>
					</form>
				</div>
			</MDBContainer>
		);
	}
}

export default SignUpScreen;
