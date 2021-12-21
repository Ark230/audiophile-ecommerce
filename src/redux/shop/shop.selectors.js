import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectIsShopLoaded = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
