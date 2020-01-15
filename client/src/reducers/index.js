import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import testReducer from "./userReducer";

export default combineReducers({
	products: productsReducer,
	location: locationReducer,
	username: testReducer
});
