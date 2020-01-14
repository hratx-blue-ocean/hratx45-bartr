import React from "react";
import { connect } from "react-redux";

/* Import functions from actions here */
import { fetchProductsByProductId } from "../../actions/index";

const TestingScreen = props => {
  return (
    <div>
      <h1>TESTING</h1>
      <button onClick={() => props.fetchProductsByProductId(8)}>
        CLICK ME
      </button>
      <div></div>
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.products };
};

export default connect(mapStateToProps, { fetchProductsByProductId })(
  TestingScreen
);
