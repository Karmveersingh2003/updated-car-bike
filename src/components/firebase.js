// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmeHN33WbHUgL5ryccmHOaNmaf9FRWsgc",
  authDomain: "login-auth-8411c.firebaseapp.com",
  projectId: "login-auth-8411c",
  storageBucket: "login-auth-8411c.appspot.com",
  messagingSenderId: "428790322354",
  appId: "1:428790322354:web:f10e8d68b2bbfc43c4a5ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
