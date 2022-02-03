import CartActionTypes from "./cart.types";
import {
  addCartItem,
  increaseItemQuantity,
  sumItemsPrice,
  sumItemsQuantity,
  reduceItemQuantity,
  handleQuantity
} from "./cart.util";

const INITIAL_STATE = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      //una sola función que retorne todo con un objeto y destructurar...
      return {
        totalPrice: sumItemsPrice([...state.items], action.payload),
        totalQuantity: sumItemsQuantity([...state.items], action.payload),
        items: addCartItem([...state.items], action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return state;

    case CartActionTypes.CLEAR_CART:
      return {
        totalQuantity: 0,
        totalPrice: 0,
        items: []
      };
    //pasar todo en lugar de state.items
    case CartActionTypes.DECREASE_QUANTITY: {
      const { totalPrice, items, totalQuantity } = handleQuantity(
        action.type,
        action.payload,
        state
      );
      return {
        items,
        totalPrice,
        totalQuantity
      };
    }
    case CartActionTypes.INCREASE_QUANTITY: {
      const { totalPrice, items, totalQuantity } = handleQuantity(
        action.type,
        action.payload,
        state
      );
      return {
        items,
        totalPrice,
        totalQuantity
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
