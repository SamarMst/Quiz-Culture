// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXvyDsd1ZgVE9DjxnFRKePt2WRpb_RKkQ",
  authDomain: "quiz-13a02.firebaseapp.com",
  projectId: "quiz-13a02",
  storageBucket: "quiz-13a02.firebasestorage.app",
  messagingSenderId: "658357622389",
  appId: "1:658357622389:web:32ae89b667be6172fc0a3c",
  measurementId: "G-JDZZ3YDQRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };