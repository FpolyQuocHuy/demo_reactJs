
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCvvPYx-gQKjZMwqb8WVSwynoxKi0JW7Cs",
  authDomain: "demoreactjs-a3d03.firebaseapp.com",
  projectId: "demoreactjs-a3d03",
  storageBucket: "demoreactjs-a3d03.appspot.com",
  messagingSenderId: "250033501016",
  appId: "1:250033501016:web:b6d17f64e202add5c5eb2d",
  measurementId: "G-H7VDVYP0V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = firebase.firestore();

export { firestore };