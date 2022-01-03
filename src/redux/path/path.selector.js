import { createSelector } from "reselect";

const pathSelector = (state) => state.path;

export const selectPathName = createSelector(
  [pathSelector],
  (path) => path.pathName
);
