import PathActionTypes from "./path.types";

export const setUrlPathName = (pathName) => ({
  type: PathActionTypes.SET_URL_PATHNAME,
  payload: pathName
});
