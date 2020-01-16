import React, { Component } from "react";
import {
	MDBBtn,
	MDBContainer,
	MDBInput,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody
} from "mdbreact";
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
			<MDBContainer className="centered" id="login-screen" fluid>
				<MDBCol md="4">
					<MDBCard>
						<MDBCardBody>
							<form>
								<p>Login</p>
								<div>
									<MDBInput
										label="Username"
										icon="user"
										group
										type="text"
										validate
										error="wrong"
										success="right"
										name="name"
										value={this.state.name}
										onInput={this.usernameHandler}
									/>
									<MDBInput
										label="Password"
										icon="lock"
										group
										type="password"
										validate
										error="wrong"
										success="right"
										name="password"
										value={this.state.email}
										onInput={this.passwordHandler}
									/>
								</div>
								<div>
									<MDBBtn
										color="danger"
										onClick={this.clickHandler}
									>
										Login
									</MDBBtn>
								</div>
							</form>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBContainer>
		);
	}
}

// * mapstatetoprops, mapdispatchtoprops (action creators)
export default connect(null, { login })(LoginScreen);
