import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import data from '../dummy_data/products';
import PastOffersScreen from './PastOffersScreen';
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
import {
  fetchProductsTest,
  fetchProductsByLatitudeLongitudeProximity
} from '../actions/productsActions';
import { fetchUserInformationById } from '../actions/userActions';
import '../assets/styles/UserProfileScreen.scss';
import { store } from '../index';

const UserProfile = props => {
  const userInfo = useSelector(store => store.userInfo);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);
  console.log('userInfo', userInfo);

  return userInfo.userId === -1 ? (
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
        Hello {userInfo.rows[0].first_name} {userInfo.rows[0].last_name}!
      </h2>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard className="my-5">
              <MDBCardImage
                top
                src={`${userInfo.rows[0].image}`}
                className="img-fluid img-thumbnail rounded mx-auto d-block"
              />
              <MDBRow>
                <MDBCol>
                  <MDBCardTitle>
                    {userInfo.rows[0].city}, {userInfo.rows[0].state}
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol>
                  <MDBCardText>{userInfo.rows[0].username}</MDBCardText>
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
        <PastOffersScreen />
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
  fetchUserInformationById,
  fetchProductsByLatitudeLongitudeProximity
})(UserProfile);
