import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAppXqR3KCK1qedI3oL5lUdXCbTnWz_54k",
  authDomain: "audiophile-ecommerce-7ee66.firebaseapp.com",
  projectId: "audiophile-ecommerce-7ee66",
  storageBucket: "audiophile-ecommerce-7ee66.appspot.com",
  messagingSenderId: "1079868363479",
  appId: "1:1079868363479:web:95e21d58b234771b4a1692",
  measurementId: "G-B1GG0WV5LM",
};

initializeApp(firebaseConfig);

export const getCollections = async () => {
  const db = getFirestore();
  const collections = collection(db, "categories");
  let elements = [];

  getDocs(collections).then((snapshot) => {
    const items = snapshot.docs;
    elements = items.forEach((x) => {
      elements.push({ ...x.data(), id: x.id });
    });
  });
};
