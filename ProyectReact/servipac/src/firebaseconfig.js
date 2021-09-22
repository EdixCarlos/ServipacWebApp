
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCa1MrYhGzwIFq406qsTalYFRnaJCReRJk",
  authDomain: "login-7ba10.firebaseapp.com",
  projectId: "login-7ba10",
  storageBucket: "login-7ba10.appspot.com",
  messagingSenderId: "133242894995",
  appId: "1:133242894995:web:cef364e158b588a75a6b66",
  measurementId: "G-X84ZDLFPHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default getFirestore()