import { combineReducers } from 'redux';
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  products: productsReducer,
  location: locationReducer
});
