import React from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBView
} from 'mdbreact';

import { connect } from 'react-redux';
import { fetchProductsTest, getLocation } from '../actions';

const HomeScreen = props => {
  return (
    <div>
      Home
      <MDBBtn onClick={() => props.getLocation()}>get location</MDBBtn>
      <div>Lat: {props.location.latitude}</div>
      <div>Long: {props.location.longitude}</div>
      <MDBContainer>
        <MDBRow className="h-25 d-inline-block">
          <MDBCol md="12">
            <MDBView hover>
              <img
                className="h-25 d-inline-block"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg"
              />
              <MDBMask className="flex-center" overlay="red-light">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" />
              <MDBMask className="flex-center">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" />
              <MDBMask className="flex-center">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" />
              <MDBMask className="flex-center">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" />
              <MDBMask className="flex-center">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" />
              <MDBMask className="flex-center">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" />
              <MDBMask className="flex-center">
                <p className="white-text">Insert Item Name Here</p>
              </MDBMask>
            </MDBView>
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
