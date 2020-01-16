import React, { useEffect } from "react";
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
import {
  fetchProductsTest,
  fetchProductsByLatitudeLongitudeProximity
} from "../actions/productsActions";

const HomeScreen = props => {
  const username = useSelector(store => store.username);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);
  const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  useEffect(() => {
    props.fetchProductsByLatitudeLongitudeProximity(
      location.latitude,
      location.longitude,
      10
    );
  }, [location]);

  useEffect(() => {
    let numProds = products.rows.length;
    let numProdsArray = [];
    if (numProds > 9) {
      while (numProdsArray.length < 9) {
        let checkNum = Math.floor(Math.random() * numProds);
        if (numProdsArray.indexOf(checkNum) === -1) {
          numProdsArray.push(checkNum);
        }
      }
      setRandomArray(numProdsArray);
    }
  }, [location]);

  console.log("this is products: ", products);

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
                  <MDBNavLink to="/login">
                    <MDBBtn>log in</MDBBtn>
                  </MDBNavLink>
                  <MDBNavLink to="/signup">
                    <MDBBtn>sign out</MDBBtn>
                  </MDBNavLink>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="mt-8">
        <MDBRow>
          <MDBCol md="6">
            <MDBNavLink
              to={
                username.length > 0 ? `/ItemDetail/${props.item_id}` : "/signup"
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
                username.length > 0 ? `/ItemDetail/${props.item_id}` : "/signup"
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
                username.length > 0 ? `/ItemDetail/${props.item_id}` : "/signup"
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
                username.length > 0 ? `/ItemDetail/${props.item_id}` : "/signup"
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
                username.length > 0 ? `/ItemDetail/${props.item_id}` : "/signup"
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
export default connect(mapStateToProps, {
  fetchProductsTest,
  getLocation,
  fetchProductsByLatitudeLongitudeProximity
})(HomeScreen);
