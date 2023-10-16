// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHGyvwr0E-0gQbHfXICn5Ha2HuYZzuyTY",
  authDomain: "simple-firebase-auth-b8.firebaseapp.com",
  projectId: "simple-firebase-auth-b8",
  storageBucket: "simple-firebase-auth-b8.appspot.com",
  messagingSenderId: "1083137839140",
  appId: "1:1083137839140:web:ce60278f8536fc9699c8b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;