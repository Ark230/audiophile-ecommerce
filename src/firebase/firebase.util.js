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
  measurementId: "G-B1GG0WV5LM"
};

initializeApp(firebaseConfig);

export const getCollections = async () => {
  const db = await getFirestore();
  const collections = await collection(db, "categories");
  let elements = [];

  let resources = await getDocs(collections);
  let resourcesDoc = await resources.docs;

  resourcesDoc.forEach((x) => {
    elements.push({ ...x.data(), id: x.id });
  });

  return elements;
};

export const getGalleryImages = async () => {
  const db = await getFirestore();
  const collections = await collection(db, "images");
  let elements = [];

  let resources = await getDocs(collections);
  let resourcesDoc = await resources.docs;

  resourcesDoc.forEach((x) => {
    elements.push({ ...x.data(), id: x.id });
  });

  // getDocs(collections).then((snapshot) => {
  //   let snapshotDocs = snapshot.docs;

  //   snapshotDocs.forEach((x) => {
  //     elements.push({ ...x.data(), id: x.id });
  //   });
  // });
  return elements;
};

export const customFunc = async () => {
  let elements = [];
  let test = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let response = await test.json();

  elements.push(response);

  return elements;
};
