import { GET_UP_FOR_TRADE } from '../actions/productsActions';

const userProducts = (state = [], action) => {
  switch (action.type) {
    case GET_UP_FOR_TRADE:
      return action.payload;
    default:
      return state;
  }
};
export default userProducts;
