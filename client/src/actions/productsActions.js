// http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products
import bartr from '../apis/bartr';

export const fetchProducts = () => {
  return async (dispatch, getState) =>  {
    const response =  await bartr.get('/testing/test-postgres/products');
    console.log(`FILE: productsActions.js fetchProducts() | response: \n`, response);
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: response.data
    });
  }
};

