import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

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
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB};



