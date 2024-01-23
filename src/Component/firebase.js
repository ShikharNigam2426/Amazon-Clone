// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDrdjzwt3gRw34Fgbkjt4PTSG1ExPbXnak",
  authDomain: "new--clone-f2bc1.firebaseapp.com",
  projectId: "new--clone-f2bc1",
  storageBucket: "new--clone-f2bc1.appspot.com",
  messagingSenderId: "366223771158",
  appId: "1:366223771158:web:3dcad87249ebd359fc1737",
  measurementId: "G-Q1PZ785HSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore ();
const auth = firebase.auth();
export { db, auth };