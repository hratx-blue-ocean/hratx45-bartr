// Sentry error capturing
import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://7f28de32de2f4076aa054b2e8aaf4686@sentry.io/1878885"});


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
