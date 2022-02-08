import { createSelector } from "reselect";

const selectGallery = (state) => state.gallery;

const selectGalleryImages = createSelector(
  [selectGallery],
  (gallery) => gallery.images
);

export const selectHomeImages = createSelector(
  [selectGalleryImages],
  (images) =>
    images ? images.find((directory) => directory.name === "home") : null
);

export const selectSharedImages = createSelector(
  [selectGalleryImages],
  (images) =>
    images ? images.find((directory) => directory.name === "shared") : null
);

export const selectCartImages = createSelector(
  [selectGalleryImages],
  (images) =>
    images ? images.find((directory) => directory.name === "cart") : null
);

export const selectIsGalleryLoaded = createSelector(
  [selectGallery],
  (images) => images.isFetching
);
