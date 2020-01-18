import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBJumbotron,
  MDBCardTitle,
  MDBNavLink,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBSpinner
} from 'mdbreact';
import ReduxThunk from 'redux-thunk';
import { connect, useSelector } from 'react-redux';
import { getLocation } from '../actions/locationActions';
import {
  fetchProductsTest,
  fetchProductsByLatitudeLongitudeProximity
} from '../actions/productsActions';

const HomeScreen = props => {
  const userInfo = useSelector(store => store.userInfo);
  const products = useSelector(store => store.products);
  const location = useSelector(store => store.location);
  const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [productsFound, setProductsFound] = useState(false);

  useEffect(() => {
    props
      .fetchProductsByLatitudeLongitudeProximity(
        location.latitude,
        location.longitude,
        10
      )
      .then(() => {
        let numProds = products.rowCount || 50;
        let numProdsArray = [0, 1, 2];
        while (numProdsArray.length < 15) {
          let checkNum = Math.floor(Math.random() * numProds);
          if (numProdsArray.indexOf(checkNum) === -1) {
            numProdsArray.push(checkNum);
          }
        }
        return setRandomArray(numProdsArray);
      })
      .then(() => setProductsFound(true));
  }, [location]);

  console.log('this is products', products);

  return !productsFound ? (
    <div>
      {' '}
      <MDBSpinner crazy />
      <MDBSpinner crazy />
      <MDBSpinner crazy />
      <MDBSpinner crazy />{' '}
    </div>
  ) : (
    <div id="home-screen">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0, margin: 0 }} id="title-image">
              <MDBCol className="text-white text-center py-0 px-0 my-0">
                <MDBCol className="py-0">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold textWhite">
                    <img
                      src="https://paperclip.link/data/images/misc/logo_white.png"
                      width="75%"
                    />
                  </MDBCardTitle>
                  <p className="mx-0 mb-0 textWhite">
                    currency-less trading is our blue ocean
                  </p>
                  <MDBBtn onClick={() => props.getLocation()}>
                    Get Location
                  </MDBBtn>
                  <MDBNavLink to="/login">
                    <MDBBtn>Log In</MDBBtn>
                  </MDBNavLink>
                  <MDBNavLink to="/signup">
                    <MDBBtn color="secondary">Sign Up</MDBBtn>
                  </MDBNavLink>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBNavLink
                to={
                  userInfo.userId === -1
                    ? '/login'
                    : `/ItemDetail/${products[randomArray[0]].product_id}`
                }
              >
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={`${products[randomArray[0]].photos[0]}`}
                    alt={products[randomArray[0]].product_name}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">our staff picks</h3>
                  <p>{products[randomArray[0]].product_name}</p>
                </MDBCarouselCaption>
              </MDBNavLink>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="2">
              <MDBNavLink
                to={
                  userInfo.userId === -1
                    ? '/login'
                    : `/ItemDetail/${products[randomArray[1]].product_id}`
                }
              >
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={`${products[randomArray[1]].photos[0]}`}
                    alt={products[randomArray[1]].product_name}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">our staff picks</h3>
                  <p>{products[randomArray[1]].product_name}</p>
                </MDBCarouselCaption>
              </MDBNavLink>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
              <MDBNavLink
                to={
                  userInfo.userId === -1
                    ? '/login'
                    : `/ItemDetail/${products[randomArray[2]].product_id}`
                }
              >
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={`${products[randomArray[2]].photos[0]}`}
                    alt={`${products[randomArray[2]].product_name}`}
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className="h3-responsive">our staff picks</h3>
                  <p>{products[randomArray[2]].product_name}</p>
                </MDBCarouselCaption>
              </MDBNavLink>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <center>
        <h1>Don't miss these items!</h1>
      </center>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={6}
          slide={true}
          showControls={false}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBNavLink
                  to={
                    userInfo.userId === -1
                      ? '/login'
                      : `/ItemDetail/${products[randomArray[3]].product_id}`
                  }
                >
                  <MDBCol md="6">
                    <MDBCard className="mb-2">
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={`${products[randomArray[3]].photos[0]}`}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          {products[randomArray[3]].product_name}
                        </MDBCardTitle>
                        <MDBCardText>
                          {products[randomArray[3]].product_description}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBNavLink>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBNavLink
                  to={
                    userInfo.userId === -1
                      ? '/login'
                      : `/ItemDetail/${products[randomArray[4]].product_id}`
                  }
                >
                  <MDBCol md="6">
                    <MDBCard className="mb-2">
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={`${products[randomArray[4]].photos[0]}`}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          {products[randomArray[4]].product_name}
                        </MDBCardTitle>
                        <MDBCardText>
                          {products[randomArray[4]].product_description}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBNavLink>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBNavLink
                  to={
                    userInfo.userId === -1
                      ? '/login'
                      : `/ItemDetail/${products[randomArray[5]].product_id}`
                  }
                >
                  <MDBCol md="6">
                    <MDBCard className="mb-2">
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={`${products[randomArray[5]].photos[0]}`}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          {products[randomArray[5]].product_name}
                        </MDBCardTitle>
                        <MDBCardText>
                          {products[randomArray[5]].product_description}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBNavLink>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="4">
                <MDBNavLink
                  to={
                    userInfo.userId === -1
                      ? '/login'
                      : `/ItemDetail/${products[randomArray[6]].product_id}`
                  }
                >
                  <MDBCol md="6">
                    <MDBCard className="mb-2">
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={`${products[randomArray[6]].photos[0]}`}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          {products[randomArray[6]].product_name}
                        </MDBCardTitle>
                        <MDBCardText>
                          {products[randomArray[6]].product_description}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBNavLink>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="5">
                <MDBNavLink
                  to={
                    userInfo.userId === -1
                      ? '/login'
                      : `/ItemDetail/${products[randomArray[7]].product_id}`
                  }
                >
                  <MDBCol md="6">
                    <MDBCard className="mb-2">
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={`${products[randomArray[7]].photos[0]}`}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          {products[randomArray[7]].product_name}
                        </MDBCardTitle>
                        <MDBCardText>
                          {products[randomArray[7]].product_description}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBNavLink>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="6">
                <MDBNavLink
                  to={
                    userInfo.userId === -1
                      ? '/login'
                      : `/ItemDetail/${products[randomArray[8]].product_id}`
                  }
                >
                  <MDBCol md="6">
                    <MDBCard className="mb-2">
                      <MDBCardImage
                        className="img-fluid d-block w-100"
                        src={`${products[randomArray[8]].photos[0]}`}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          {products[randomArray[8]].product_name}
                        </MDBCardTitle>
                        <MDBCardText>
                          {products[randomArray[8]].product_description}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBNavLink>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>

      {/* <MDBContainer className="mt-8">
        <MDBRow>
          <MDBCol md="6">
            <MDBNavLink
              to={`/ItemDetail/${products.rows[randomArray[0]].product_id}`}
            >
              <MDBView hover>
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
      </MDBContainer> */}
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
