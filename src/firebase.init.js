// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCHTSKQTokbwldT7U2juN3KVRXmRhSpJg",
  authDomain: "travel-wise.firebaseapp.com",
  projectId: "travel-wise",
  storageBucket: "travel-wise.appspot.com",
  messagingSenderId: "541973262781",
  appId: "1:541973262781:web:69a1c0c0cfe4f9fdd962d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);