import paperclips from "../apis/paperclips";

export const fetchItemDetailsByItemId = prodId => {
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
      console.log("data in fetchItemDetailsByItemId dispatcher: ", data);

      dispatch({
        type: "FETCH_ITEM_DETAILS_BY_PRODUCT_ID",
        payload: data
      });
    };
  };