// do not store config on the client side 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Danger do not share publicly 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEg-UFCIwIG9S2sSGIbQMW-2yTcRfdAdM",
  authDomain: "simple-firebase-b608e.firebaseapp.com",
  projectId: "simple-firebase-b608e",
  storageBucket: "simple-firebase-b608e.firebasestorage.app",
  messagingSenderId: "909766773517",
  appId: "1:909766773517:web:c7e545c0eb92c7230dbe44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


