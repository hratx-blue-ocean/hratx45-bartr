import bartr from '../apis/bartr';



// http://api-server.escxwv87wi.us-west-2.elasticbeanstalk.com/api/testing/test-postgres/products

export const fetchProducts = () => {
  return async (dispatch, getState) =>  {
    const response =  await bartr.get('/testing/test-postgres/products');
    console.log(`FILE: productsActions.js fetchProducgs() | response: \n`, response);
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  }
};

