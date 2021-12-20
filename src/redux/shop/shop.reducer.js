import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false
};

const shopReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ShopActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        collections: actions.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: actions.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default shopReducer;
