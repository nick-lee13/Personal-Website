
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBczZjl61iTyC94Gqst9kQMW5O9I9yL3SA",
  authDomain: "personal-website-7d997.firebaseapp.com",
  projectId: "personal-website-7d997",
  storageBucket: "personal-website-7d997.appspot.com",
  messagingSenderId: "20320870009",
  appId: "1:20320870009:web:448018f619a0d70a24bea8",
  measurementId: "G-59KKMEE90P"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);