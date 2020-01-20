import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import userReducer from "./userReducer";
import itemDetailsReducer from "./itemDetailsReducer";
import userProducts from "./userProductsReducer";
import { activeOffers, closedOffers } from "./offersReducer";

export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  userInfo: userReducer,
  itemDetails: itemDetailsReducer,
  userProducts,
  activeOffers,
  closedOffers
});
