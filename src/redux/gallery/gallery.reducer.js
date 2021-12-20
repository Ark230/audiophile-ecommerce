import GalleryActionTypes from "./gallery.types";

const INITIAL_STATE = {
  images: null
};

const GalleryReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case GalleryActionTypes.FETCH_IMAGES_START:
      return {
        ...state,
        isFetching: false
      };
    case GalleryActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: actions.payload
      };
    case GalleryActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: actions.payload
      };

    default:
      return state;
  }
};

export default GalleryReducer;
