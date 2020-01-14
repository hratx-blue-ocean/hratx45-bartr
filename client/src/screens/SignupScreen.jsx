import { Component } from "react";
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
			zipcode: "",
			keywords: []
		};
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

	keywordsHandler(e) {
		console.log("first name");
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
							/>
							<MDBInput className="last-name" label="Last Name" />
						</div>
						<MDBInput className="username" label="Username" />
						<MDBInput className="password" label="Password" />
						<MDBInput className="email" label="E-mail" />
						<MDBInput className="zipcode" label="Zipcode" />
						<MDBInput
							className="keywords"
							label="Items of interest"
						/>
						<MDBBtn color="default">Sign-Up</MDBBtn>
					</form>
				</div>
			</MDBContainer>
		);
	}
}
