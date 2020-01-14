export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_TEST":
      return action.payload;
    case "FETCH_PRODUCTS_BY_PRODUCT_ID":
      return action.payload;
    case "FETCH_PRODUCTS_BY_CATEGORY_ID":
      return action.payload;
    case "FETCH_PRODUCTS_BY_USERID_AND_PROXIMITY":
      return action.payload;
    case "FETCH_PRODUCTS_BY_LATITUDE_LONGITUDE_PROXIMITY":
      return action.payload;
    default:
      return state;
  }
};
