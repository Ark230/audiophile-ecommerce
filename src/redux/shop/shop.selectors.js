import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectShop], ({ collections }) =>
    collections
      ? collections.find((item) => item.name === categoryUrlParam)
      : {}
  );

export const selectItems = "";

export const selectIsShopLoaded = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
