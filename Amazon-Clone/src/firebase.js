import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4UUX5p9ZVTqvaXky7eRel2o4akdkdctw",
    authDomain: "clone-e3c73.firebaseapp.com",
    projectId: "clone-e3c73",
    storageBucket: "clone-e3c73.appspot.com",
    messagingSenderId: "525624160871",
    appId: "1:525624160871:web:015b1c442eb19d8a59dac2",
    measurementId: "G-FDZPKDFCJT"
  });

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};