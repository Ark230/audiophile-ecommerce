import { combineReducers } from "redux";
import shopReducer from "./shop/shop.reducer";
import galleryReducer from "./gallery/gallery.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  gallery: galleryReducer,
});

export default rootReducer;
