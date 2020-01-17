import React, { Component } from 'react';
import {
	MDBBtn,
	MDBContainer,
	MDBInput,
	MDBFileInput,
	MDBCard,
	MDBCardBody,
	MDBCol
} from 'mdbreact';
import { Link } from 'react-router-dom';

class SignupScreen extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
			email: '',
			zipcode: '',
			image: null
		};

		this.firstNameHandler = this.firstNameHandler.bind(this);
		this.lastNameHandler = this.lastNameHandler.bind(this);
		this.usernameHandler = this.usernameHandler.bind(this);
		this.passwordHandler = this.passwordHandler.bind(this);
		this.emailHandler = this.emailHandler.bind(this);
		this.zipcodeHandler = this.zipcodeHandler.bind(this);
		this.uploadHandler = this.uploadHandler.bind(this);
		this.submit = this.submit.bind(this);
	}

	firstNameHandler(e) {
		let firstName = e.target.value;
		this.setState({
			firstName: firstName
		});
	}

	lastNameHandler(e) {
		let lastName = e.target.value;
		this.setState({
			lastName: lastName
		});
	}

	usernameHandler(e) {
		let username = e.target.value;
		this.setState({
			username: username
		});
	}

	passwordHandler(e) {
		let password = e.target.value;
		this.setState({
			password: password
		});
	}

	emailHandler(e) {
		let email = e.target.value;
		this.setState({
			email: email
		});
	}

	zipcodeHandler(e) {
		let zipcode = e.target.value;
		this.setState({
			zipcode: zipcode
		});
	}

	uploadHandler(e) {
		let image = e;
		this.setState(
			{
				image: image
			},
			() => {
				console.log(this.state.image);
			}
		);
	}

	submit() {
		let data = new FormData();

		data.append('first name', this.state.firstName);
		data.append('last name', this.state.lastName);
		data.append('username', this.state.username);
		data.append('password', this.state.password);
		data.append('email', this.state.email);
		data.append('zipcode', this.state.zipcode);

		axios
			.post('http://localhost:3000/api/users/signup', data, {
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			.then(result => console.log(result))
			.catch(error => console.log(error));
	}

	render() {
		return (
			<MDBContainer id="signup-screen" fluid>
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
							type="password"
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
						<MDBContainer>Upload Profile Picture</MDBContainer>
						<MDBFileInput
							getValue={this.uploadHandler}
							btnTitle="Choose File"
							textFieldTitle="Upload Image"
							btnColor="danger"
						/>
						<Link to="/dist/login">
							<MDBBtn btnColor="default">Sign-Up</MDBBtn>
						</Link>
					</form>
				</div>
			</MDBContainer>
		);
	}
}

export default SignupScreen;
