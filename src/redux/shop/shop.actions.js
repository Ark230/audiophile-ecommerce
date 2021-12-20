import { getCollections } from "../../firebase/firebase.util";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_PRODUCTS_START
});
export const fetchCollectionsSuccess = (data) => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data
});
export const fetchCollectionsFailure = (error) => ({
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const fetchCollections = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCollectionsStart());
      const data = await getCollections();
      dispatch(fetchCollectionsSuccess(data));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error));
    }
  };
};
