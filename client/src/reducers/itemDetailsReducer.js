export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_ITEM_DETAILS_BY_PRODUCT_ID":
        return action.payload;
      default:
        return state;
    }
  };