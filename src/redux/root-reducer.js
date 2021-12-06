import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  user: shopReducer,
});

export default rootReducer;
