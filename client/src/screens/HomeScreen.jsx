import React from "react";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBJumbotron,
  MDBCardTitle,
  MDBNavLink
} from "mdbreact";

import { connect, useSelector } from "react-redux";
import { getLocation } from "../actions/locationActions";
import { fetchProductsTest } from "../actions/productsActions";

const HomeScreen = props => {
  const username = useSelector(store => store.username);
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0, margin: 0 }}>
              <MDBCol
                className="text-white text-center py-0 px-0 my-0"
                style={{
                  backgroundImage: `url(https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555444084/shape/mentalfloss/istock_000016776361_full.jpg)`
                }}
              >
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold textWhite">
                    Welcome to PaperClip!
                  </MDBCardTitle>
                  <p className="mx-5 mb-5 textWhite">
                    The ultimate marketplace for currency-less bartering and
                    trading
                  </p>
                  <p className="mx-5 mb-5 textWhite">
                    To begin, please login, sign up, or authorize your location
                  </p>
                  <MDBBtn onClick={() => props.getLocation()}>
                    get location
                  </MDBBtn>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="mt-8">
        <MDBRow className>
          <MDBCol md="6">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>

        <MDBRow> */}
          <MDBCol md="6">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="4">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>

        <MDBRow> */}
          <MDBCol md="4">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>

        <MDBRow> */}
          <MDBCol md="4">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="6">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>

        <MDBRow> */}
          <MDBCol md="6">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBNavLink
              to={
                username.length > 0
                  ? `/dist/ItemDetail/${props.item_id}`
                  : "/dist/signup"
              }
            >
              <MDBView hover>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">Insert Item Name Here</p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    location: state.location
  };
};

/*
 * How to provide access to redux store to component
 * export default connect(mapStateToProps, {FUNCTION_1, FUNCTION_2})(COMPONENT_NAME);
 */
export default connect(mapStateToProps, { fetchProductsTest, getLocation })(
  HomeScreen
);
