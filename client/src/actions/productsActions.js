// Sentry error capturing
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885"
});


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

/* Fetch products by product id */
export const fetchProductsByProductId = prodId => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/products/productId", {
      params: {
        productId: prodId
      }
    });
    const photos = await paperclips.get("/products/productPhotos", {
      params: {
        productId: prodId
      }
    });
    let data = response.data.rows[0];

    data.photos = photos.data.rows;
    console.log(data);
    dispatch({
      type: "FETCH_PRODUCTS_BY_PRODUCT_ID",
      payload: data
    });
  };
};

/* Fetch products by category id */
export const fetchProductsByCategoryId = catId => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/products/category", {
      params: {
        categoryId: catId
      }
    });
    dispatch({
      type: "FETCH_PRODUCTS_BY_CATEGORY_ID",
      payload: response.data.rows
    });
  };
};

/* Fetch products by user id & distance within miles */
export const fetchProductsByUserIdAndProximity = (userid, proximityInMiles) => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/products/userIdProximity", {
      params: {
        userId: userid,
        proximity: proximityInMiles
      }
    });
    console.log(`FILE: productsActions.js () | value: \n`, response);
    dispatch({
      type: "FETCH_PRODUCTS_BY_USERID_AND_PROXIMITY",
      payload: response.data
    });
  };
};

/* Fetch products by latitude and longitude proximity */
export const fetchProductsByLatitudeLongitudeProximity = (
  latitideCoordinate,
  longitudeCoordinate,
  proximityInMiles
) => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/products/locationProximity", {
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
