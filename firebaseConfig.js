// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9JRit5-LrfrueTx9PTaKxacnq8-WYQss",
  authDomain: "booking-project-bb52a.firebaseapp.com",
  projectId: "booking-project-bb52a",
  storageBucket: "booking-project-bb52a.appspot.com",
  messagingSenderId: "211550602961",
  appId: "1:211550602961:web:67eefc3c5ec27cc6f467f0",
  measurementId: "G-121JPE6NQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();