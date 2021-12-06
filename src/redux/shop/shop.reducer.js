import { fetchCollections } from "./shop.uitls";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ShopActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        collections: fetchCollections(),
      };

    default:
      return state;
  }
};

export default shopReducer;
