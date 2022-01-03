import PathActionTypes from "./path.types";

const INITIAL_STATE = {
  pathName: null
};

const PathReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PathActionTypes.SET_URL_PATHNAME:
      return { ...state, pathName: action.payload };

    default:
      return state;
  }
};

export default PathReducer;
