// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth } from "firebase/auth";

// for backend
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRmlLPVKnncSKW8II4pf8ee2JB-8iGqFM",
  authDomain: "clone-ab249.firebaseapp.com",
  projectId: "clone-ab249",
  storageBucket: "clone-ab249.appspot.com",
  messagingSenderId: "160650450853",
  appId: "1:160650450853:web:f2773fee34f04338763a4c",
  measurementId: "G-1H70MM7M3P",
};

// for backend
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const analytics = getAnalytics(app);

// export {auth};
