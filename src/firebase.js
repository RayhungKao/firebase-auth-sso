// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmPAgu29nqaQjv2STDcrTwAUuIoh60Jhc",
  authDomain: "sso-login-f5de8.firebaseapp.com",
  projectId: "sso-login-f5de8",
  storageBucket: "sso-login-f5de8.appspot.com",
  messagingSenderId: "1025185278948",
  appId: "1:1025185278948:web:6496027f02023922acf5f1",
  measurementId: "G-2HXJ3ZELRC" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);