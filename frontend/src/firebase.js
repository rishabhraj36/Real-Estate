// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e3584.firebaseapp.com",
  projectId: "real-estate-e3584",
  storageBucket: "real-estate-e3584.appspot.com",
  messagingSenderId: "742302098812",
  appId: "1:742302098812:web:44578cb2c51ea28dc830f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);