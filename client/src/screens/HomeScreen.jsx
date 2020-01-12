import React from 'react';
import { MDBBtn } from 'mdbreact';

import {connect} from 'react-redux';
import {fetchProducts} from "../actions";


const HomeScreen = props => {
  return (
    <div>

    </div>
  );
};


const mapStateToProps = state => {
  return {
    products: state.products
  }
};




/*
* How to provide access to redux store to component
* export default connect(mapStateToProps, {FUNCTION_1, FUNCTION_2})(COMPONENT_NAME);
*/
export default connect(mapStateToProps, {fetchProducts})(HomeScreen);
