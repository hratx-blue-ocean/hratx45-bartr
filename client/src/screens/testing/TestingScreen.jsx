import React from 'react';
import {connect} from 'react-redux';

/* Import functions from actions here */
import {fetchProductsTest} from '../../actions/index';

const TestingScreen = props => {
  return (
    <div>
      <h1>TESTING</h1>
      <button
        onClick={() => props.fetchProductsTest()}
      >
        CLICK ME
        
      </button>
      <div>
      
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {posts: state.products}
};

export default connect(mapStateToProps, {fetchProductsTest})(TestingScreen);

