// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "garys-rant.firebaseapp.com",
  projectId: "garys-rant",
  storageBucket: "garys-rant.appspot.com",
  messagingSenderId: "535009933290",
  appId: "1:535009933290:web:cdc5ca060dc07dc3c96493"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);