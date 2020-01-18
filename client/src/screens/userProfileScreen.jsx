import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import UserProfilePastOffers from '../components/UserProfilePastOffers';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCollapse,
  MDBCollapseHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBNavLink,
  MDBSpinner
} from 'mdbreact';
import { fetchProductsByLatitudeLongitudeProximity } from '../actions/productsActions';
import '../assets/styles/UserProfileScreen.scss';
import { store } from '../index';

const UserProfile = props => {
  const userInfo = useSelector(store => store.userInfo);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);

  return userInfo.user_id === -1 ? (
    <div>
      You are not logged in. Please Sign up or log in.
      <hr />
      <MDBNavLink to="/signup">
        <MDBBtn>Sign Up</MDBBtn>
      </MDBNavLink>
      <MDBNavLink to="login">
        <MDBBtn>Log In</MDBBtn>
      </MDBNavLink>
    </div>
  ) : (
    <div id="userProfileScreen">
      <div className="userName">
        <h2>
          {props.userInfo.userInfo.first_name}{' '}
          {props.userInfo.userInfo.last_name}
        </h2>
      </div>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard style={{margin: "0 !important"}} className="profileCard my-5">
              <MDBCardImage
                top
                src={`${props.userInfo.userInfo.image}`}
                className="img-fluid img-thumbnail rounded mx-auto d-block"
              />
              <MDBRow className="userCardInfo">
                {/* <MDBCol> */}
                <MDBCardText className="username">{props.userInfo.userInfo.username}</MDBCardText>
                  <MDBCardTitle className="location">
                    {props.userInfo.userInfo.city},{' '}
                    {props.userInfo.userInfo.state}
                  </MDBCardTitle>
                {/* </MDBCol> */}
                {/* <MDBCol> */}
                  
                {/* </MDBCol> */}
              </MDBRow>
              <hr />
              <MDBRow className="userCardButtons">
                {/* <MDBCol> */}
                  <MDBNavLink to="/trade">
                    <MDBBtn color="primary">Your Items</MDBBtn>
                  </MDBNavLink>
                {/* </MDBCol> */}

                {/* <MDBCol> */}
                  <MDBNavLink to="/uploadItem">
                    <MDBBtn color="primary">Upload Item</MDBBtn>
                  </MDBNavLink>
                {/* </MDBCol> */}

                {/* <MDBCol> */}
                  <MDBNavLink to="/active-offers">
                    <MDBBtn color="primary">Active Offers</MDBBtn>
                  </MDBNavLink>
                {/* </MDBCol> */}
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <UserProfilePastOffers />
        <MDBNavLink className="seeMoreLink" to="/pastOffers">
          <MDBBtn color="primary" className="seemore">
            See More
          </MDBBtn>
        </MDBNavLink>
      </MDBContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    location: state.location,
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps, {
  fetchProductsByLatitudeLongitudeProximity
})(UserProfile);
