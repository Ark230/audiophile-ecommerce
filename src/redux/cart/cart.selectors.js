import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) =>
  cart ? cart.items : null
);

export const selectCartQuantity = createSelector([selectCart], (cart) =>
  cart ? cart.totalQuantity : 0
);
