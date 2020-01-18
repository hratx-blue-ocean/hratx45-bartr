import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import data from '../dummy_data/products';
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
//author -- Matt Lucas

const UserProfile = props => {
  const userInfo = useSelector(store => store.userInfo);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);
  const [switch1, setSwitch1] = useState(false);

  useEffect(() => {
    if (switch1 === false) {
      props.fetchUserInformationById(userInfo.userId);
      props.fetchProductsByLatitudeLongitudeProximity(30.26498, -97.7466, 10);
      setTimeout(() => setSwitch1(true), 5000);
    }
  }, []);
  useEffect(() => {
    console.log(userInfo);
    console.log(products);
  }, [userInfo, products]);

  return switch1 === false ? (
    <div>
      {/* loading <hr /> if not logged in, please login
      <MDBNavLink to="/login">
        <MDBBtn>Log in</MDBBtn>
      </MDBNavLink> */}
      <MDBSpinner crazy big />
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
        <MDBContainer>
          <MDBCard>
            <MDBCollapseHeader tag="h4">Completed Barters</MDBCollapseHeader>
            <MDBCollapse id="collapse2" isOpen={true}>
              <MDBCardBody>
                <div>
                  You traded a paperclip for a house
                  <hr />
                  You traded a laptop for a used laptop
                  <hr />
                  You traded a pizza for a pineapple
                </div>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
      <h1>..........</h1>
      <h1>..........</h1>
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
