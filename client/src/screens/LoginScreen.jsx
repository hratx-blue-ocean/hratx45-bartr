import React from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdbreact";

export default function LoginScreen() {
	return (
		<MDBContainer id="login-screen">
			<div className="login-container">
				<MDBContainer>Login</MDBContainer>
				<form className="login-form">
					<MDBInput
						label="username"
						icon="envelope"
						group
						type="username"
						validate
						error="wrong"
						success="right"
					/>
					<MDBInput
						label="password"
						icon="lock"
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
