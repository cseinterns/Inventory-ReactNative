import firebase from "firebase/compat/app"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAog0993GDdYBjun0GGXZdXo0yUdI33T2o",
    authDomain: "grocery-store-6c8e4.firebaseapp.com",
    projectId: "grocery-store-6c8e4",
    storageBucket: "grocery-store-6c8e4.appspot.com",
    messagingSenderId: "569972025200",
    appId: "1:569972025200:web:8ee85a7aa1ea1e84d3d1b5",
    measurementId: "G-8C9N9VPRRZ"
  };
// export const app = initializeApp(firebaseConfig);
// firebase.firestore
// export const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;