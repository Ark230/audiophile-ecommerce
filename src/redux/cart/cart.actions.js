import CartActionTypes from "./cart.types";

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const removeItem = () => ({
  type: CartActionTypes.REMOVE_ITEM
});

export const decreaseQuantity = (productId) => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload: productId
});

export const increaseQuantity = (productId) => ({
  type: CartActionTypes.INCREASE_QUANTITY,
  payload: productId
});
