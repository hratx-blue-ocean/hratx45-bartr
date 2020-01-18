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
    <div>
      <h2>
        Hello {props.userInfo.userInfo.first_name}{' '}
        {props.userInfo.userInfo.last_name}!
      </h2>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard className="my-5">
              <MDBCardImage
                top
                src={`${props.userInfo.userInfo.image}`}
                className="img-fluid img-thumbnail rounded mx-auto d-block"
              />
              <MDBRow>
                <MDBCol>
                  <MDBCardTitle>
                    {props.userInfo.userInfo.city},{' '}
                    {props.userInfo.userInfo.state}
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol>
                  <MDBCardText>{props.userInfo.userInfo.username}</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol>
                  <MDBNavLink to="/trade">
                    <MDBBtn>Your Items</MDBBtn>
                  </MDBNavLink>
                </MDBCol>

                <MDBCol>
                  <MDBNavLink to="/uploadItem">
                    <MDBBtn color="secondary">Upload Item</MDBBtn>
                  </MDBNavLink>
                </MDBCol>

                <MDBCol>
                  <MDBNavLink to="/active-offers">
                    <MDBBtn>Active Offers</MDBBtn>
                  </MDBNavLink>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <UserProfilePastOffers />
        <MDBNavLink to="/pastOffers">
          <div className="seemore">
            <font color="#EFBAED">See More</font>
          </div>
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
