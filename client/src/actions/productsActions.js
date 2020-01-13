// Sentry error capturing
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885"
});

// http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products
import paperclips from "../apis/paperclips";

export const fetchProductsTest = () => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/testing/test-postgres/products");
    console.log(
      `FILE: productsActions.js fetchProducts() | response: \n`,
      response
    );
    dispatch({
      type: "FETCH_PRODUCTS_TEST",
      payload: response.data
    });
  };
};

export const fetchProductsByProductId = prodId => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/productId", {
      params: {
        productId: prodId
      }
    });
    dispatch({
      type: "FETCH_PRODUCTS_BY_PRODUCT_ID",
      payload: response.data
    });
  };
};

export const fetchProductsByCategoryId = catId => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/category", {
      params: {
        categoryId: catId
      }
    });
    dispatch({
      type: "FETCH_PRODUCTS_BY_CATEGORY_ID",
      payload: response.data
    });
  };
};

export const fetchProductsByUserIdAndProximity = (userid, proximityInMiles) => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/userIdProximity", {
      params: {
        userId: userid,
        proximity: proximityInMiles
      }
    });
    dispatch({
      type: "FETCH_PRODUCTS_BY_USERID_AND_PROXIMITY",
      payload: response.data
    });
  };
};

export const fetchProductsByLatitudeLongitudeProximity = (
  latitideCoordinate,
  longitudeCoordinate,
  proximityInMiles
) => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/locationProximity", {
      params: {
        longitude: longitudeCoordinate,
        latitude: latitideCoordinate,
        proximity: proximityInMiles
      }
    });
    dispatch({
      type: "FETCH_PRODUCTS_BY_LATITUDE_LONGITUDE_PROXIMITY",
      payload: response.data
    });
  };
};
