// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--estate-81224.firebaseapp.com",
  projectId: "mern--estate-81224",
  storageBucket: "mern--estate-81224.appspot.com",
  messagingSenderId: "1064767341094",
  appId: "1:1064767341094:web:2554153418b8d2d8951ce7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);