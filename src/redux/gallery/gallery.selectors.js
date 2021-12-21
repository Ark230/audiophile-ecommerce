import { createSelector } from "reselect";

const selectGallery = (state) => state.gallery;

const selectGalleryImages = createSelector(
  [selectGallery],
  (gallery) => gallery.images
);

//Cambiar por Array.find();
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

export const selectIsGalleryLoaded = createSelector(
  [selectGallery],
  (images) => images.isFetching
);
