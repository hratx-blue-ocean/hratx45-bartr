<<<<<<< HEAD
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import userReducer from "./userReducer";
=======
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import locationReducer from './locationReducer';
import userReducer from './userReducer';
>>>>>>> 7e734c7fc26dec13ea3c115516a8f51400c1cf06

export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  username: userReducer
});
