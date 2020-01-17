import React, { useEffect, useState } from "react";
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
import ReduxThunk from "redux-thunk";
import { connect, useSelector } from "react-redux";
import { getLocation } from "../actions/locationActions";
import {
  fetchProductsTest,
  fetchProductsByLatitudeLongitudeProximity
} from "../actions/productsActions";

const HomeScreen = props => {
  const userInfo = useSelector(store => store.userInfo);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);
  const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [productsFound, setProductsFound] = useState(false);

  useEffect(() => {
    console.log("hi");
    props
      .fetchProductsByLatitudeLongitudeProximity(
        location.latitude,
        location.longitude,
        10
      )
      .then(() => {
        let numProds = products.rowCount || 50;
        console.log("this is typeof numProds: ", typeof numProds);
        let numProdsArray = [];
        while (numProdsArray.length < 9) {
          console.log("jeffery");
          let checkNum = Math.floor(Math.random() * numProds);
          if (numProdsArray.indexOf(checkNum) === -1) {
            numProdsArray.push(checkNum);
          }
        }
        return setRandomArray(numProdsArray);
      })
      .then(() => setProductsFound(true));
  }, [location]);

  console.log("this is products ", products);
  console.log("this is random array", randomArray);
  console.log("this is productsFound: ", productsFound);

  return !productsFound ? (
    <div>loading</div>
  ) : (
    <div id="home-screen">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0, margin: 0 }} id="title-image">
              <MDBCol className="text-white text-center py-0 px-0 my-0">
                <MDBCol className="py-0">
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
                    Get Location
                  </MDBBtn>
                  <MDBNavLink to="/login">
                    <MDBBtn>Log In</MDBBtn>
                  </MDBNavLink>
                  <MDBNavLink to="/signup">
                    <MDBBtn>Sign Up</MDBBtn>
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
              to={`/ItemDetail/${products.rows[randomArray[0]].product_id}`}
            >
              <MDBView hover>
                {console.log(products)}
                <img
                  src={`${products.rows[randomArray[0]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[0]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>
    
            <MDBRow> */}
          <MDBCol md="6">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[1]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[1]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[1]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[2]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[2]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[2]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="4">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[3]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[3]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[3]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>
    
            <MDBRow> */}
          <MDBCol md="4">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[4]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[4]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[4]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>
    
            <MDBRow> */}
          <MDBCol md="4">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[5]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[5]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[5]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="6">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[6]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[6]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[6]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
          {/* </MDBRow>
    
            <MDBRow> */}
          <MDBCol md="6">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[7]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[7]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[7]].product_name}
                  </p>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[8]].product_id}`}
            >
              <MDBView hover>
                <img
                  src={`${products.rows[randomArray[8]].image}`}
                  className="img-fluid"
                />
                <MDBMask className="flex-center" overlay="red-light">
                  <p className="white-text">
                    {products.rows[randomArray[8]].product_name}
                  </p>
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
