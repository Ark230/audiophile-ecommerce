import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";
import galleryReducer from "./gallery/gallery.reducer";
import PathReducer from "./path/path.reducer";
import CartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  gallery: galleryReducer,
  path: PathReducer,
  cart: CartReducer
});

export default rootReducer;
