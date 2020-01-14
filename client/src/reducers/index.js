import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import locationReducer from './locationReducer';
import userReducer from './userReducer';

export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  user: userReducer
});
