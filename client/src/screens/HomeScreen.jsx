import React from 'react';
import { MDBBtn } from 'mdbreact';

import {connect} from 'react-redux';
import {fetchProducts, getLocation} from "../actions";



const HomeScreen = props => {
  
  
  return (
    <div>
      Home
      <MDBBtn onClick={() => props.getLocation()}>
        get location
      </MDBBtn>
      <div>Lat: {props.location.latitude}</div>
      <div>Long: {props.location.longitude}</div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    products: state.products,
    location: state.location
  }
};




/*
* How to provide access to redux store to component
* export default connect(mapStateToProps, {FUNCTION_1, FUNCTION_2})(COMPONENT_NAME);
*/
export default connect(mapStateToProps, {fetchProducts, getLocation})(HomeScreen);
