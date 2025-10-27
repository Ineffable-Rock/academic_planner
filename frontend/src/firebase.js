// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUDg9yudGwwVwNYTXbADPThRAW3likqkQ",
  authDomain: "academic-planner-3c1be.firebaseapp.com",
  projectId: "academic-planner-3c1be",
  storageBucket: "academic-planner-3c1be.firebasestorage.app",
  messagingSenderId: "763903806537",
  appId: "1:763903806537:web:de022d76c5664990b14398",
  measurementId: "G-6KRDP223RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);