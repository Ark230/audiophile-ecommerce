import { getCollections } from "../../firebase/firebase.util";

export const fetchCollections = async () => {
  return await getCollections();
};
