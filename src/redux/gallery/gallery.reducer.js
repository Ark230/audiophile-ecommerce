import GalleryActionTypes from "./gallery.types";

const INITIAL_STATE = {
  images: null,
  isFetching: false
};

const GalleryReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case GalleryActionTypes.FETCH_IMAGES_START:
      return {
        ...state,
        isFetching: true
      };
    case GalleryActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: actions.payload,
        isFetching: false
      };
    case GalleryActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: actions.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default GalleryReducer;
