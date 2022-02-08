import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectCategory = (categoryUrlParam) =>
  createSelector([selectShop], ({ collections }) =>
    collections
      ? collections.find((item) => item.name === categoryUrlParam)
      : {}
  );

export const selectProductDetails = (productUrlParam) =>
  createSelector([selectShop], ({ collections }) =>
    collections
      ? collections
          .map((collection) =>
            collection.products.filter(
              (product) => parseInt(product.id) === parseInt(productUrlParam)
            )
          )
          .filter((products) => products.length > 0)
      : []
  );

export const selectIsShopLoaded = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
