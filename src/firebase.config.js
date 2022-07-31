// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApNXkYRxS0xMaWFBn00UoYymDIPDZ5O6A",
  authDomain: "house-marketplace-app-2e81a.firebaseapp.com",
  projectId: "house-marketplace-app-2e81a",
  storageBucket: "house-marketplace-app-2e81a.appspot.com",
  messagingSenderId: "124320936921",
  appId: "1:124320936921:web:e16b65d2a7e9ef12899fc8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
