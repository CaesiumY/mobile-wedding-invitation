// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5rnvp-oueQ7XbLx5pKMOKIVmh-Kb7Ko",
  authDomain: "sj-hw-wedding.firebaseapp.com",
  databaseURL:
    "https://sj-hw-wedding-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sj-hw-wedding",
  storageBucket: "sj-hw-wedding.firebasestorage.app",
  messagingSenderId: "668515912329",
  appId: "1:668515912329:web:e7433342ef03ddc9a39458",
  measurementId: "G-WJM23J12D2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const realtimeDb = getDatabase(app);
export const firestore = getFirestore(app);
