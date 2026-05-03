// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC1NepoS8RvnB7gmjh1n18uTU3CWC-XrM",
  authDomain: "flyvora-be83f.firebaseapp.com",
  projectId: "flyvora-be83f",
  storageBucket: "flyvora-be83f.firebasestorage.app",
  messagingSenderId: "281963121411",
  appId: "1:281963121411:web:5c683973809bace590b736",
  measurementId: "G-ZFXX748SFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
