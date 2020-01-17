import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import userReducer from "./userReducer";
import itemDetailsReducer from "./itemDetailsReducer";

export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  userInfo: userReducer,
  itemDetails: itemDetailsReducer
});
