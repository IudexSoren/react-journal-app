import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAAzQJfSR2_wU6_SHJlkvYP8w3UhZIBUA",
  authDomain: "react-app-courses-b7352.firebaseapp.com",
  projectId: "react-app-courses-b7352",
  storageBucket: "react-app-courses-b7352.appspot.com",
  messagingSenderId: "225831865721",
  appId: "1:225831865721:web:4c4829194c24720c9ef3a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}