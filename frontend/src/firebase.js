// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUDg9yudGwwVwNYTXbADPThRAW3likqkQ",
  authDomain: "academic-planner-3c1be.firebaseapp.com",
  projectId: "academic-planner-3c1be",
  storageBucket: "academic-planner-3c1be.appspot.com",
  messagingSenderId: "763903806537",
  appId: "1:763903806537:web:de022d76c5664990b14398",
  measurementId: "G-6KRDP223RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);

export { db };