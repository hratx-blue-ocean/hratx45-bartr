import React from "react";
import {
	MDBBtn,
	MDBContainer,
	MDBDropdown,
	MDBDropdownItem,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBInput,
	MDBAvatar
} from "mdbreact";

export default function LoginScreen() {
	return (
		<MDBContainer id="LoginScreen">
			<div className="container">
				<MDBAvatar className="avatar"></MDBAvatar>
				<MDBContainer>Login</MDBContainer>
				<form className="login-form">
					<MDBInput />
					<MDBInput />
					<MDBBtn>Login</MDBBtn>
				</form>
			</div>
		</MDBContainer>
	);
}
