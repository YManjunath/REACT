import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABjWVRi2djc80ssPXLpXDDhCu86gjk1V4",
    authDomain: "linkedin-b8693.firebaseapp.com",
    projectId: "linkedin-b8693",
    storageBucket: "linkedin-b8693.appspot.com",
    messagingSenderId: "34687311901",
    appId: "1:34687311901:web:b8bfc3c1992286e66e66f4",
    measurementId: "G-96HEFEXX7C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};