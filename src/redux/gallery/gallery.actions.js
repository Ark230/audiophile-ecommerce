import { getGalleryImages } from "../../firebase/firebase.util";
import GalleryActionTypes from "./gallery.types";

export const fetchImagesStart = () => ({
  type: GalleryActionTypes.FETCH_IMAGES_START
});

export const fetchImagesSuccess = (data) => ({
  type: GalleryActionTypes.FETCH_IMAGES_SUCCESS,
  payload: data
});

export const fetchImagesFailure = (error) => ({
  type: GalleryActionTypes.FETCH_IMAGES_FAILURE,
  payload: error
});

export const fetchImages = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchImagesStart);
      dispatch(fetchImagesSuccess(await getGalleryImages()));
    } catch (error) {
      dispatch(fetchImagesFailure(error));
    }
  };
};
