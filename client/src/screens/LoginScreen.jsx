import React, { Component, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
} from 'mdbreact';
import { Link } from 'react-router-dom';
import { fetchUserInformationByUsername } from '../actions/userActions';
import { fetchProductsUpForTradeByUserId } from '../actions/productsActions';
import { connect } from 'react-redux';
import axios from 'axios';
import { store } from '../index';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authenticate: false,
      userInfo: {}
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
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

  clickHandler() {
    this.props.fetchUserInformationByUsername(this.state.username);
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
                  <Link to="/feed">
                    <MDBBtn color="danger" onClick={this.clickHandler}>
                      Login
                    </MDBBtn>
                  </Link>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    locations: state.location,
    userInfo: state.userInfo
  };
};

// * mapstatetoprops, mapdispatchtoprops (action creators)
export default connect(mapStateToProps, { fetchUserInformationByUsername })(
  LoginScreen
);
