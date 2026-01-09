// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API,
  authDomain: "dublin-firestore-5f21a.firebaseapp.com",
  projectId: "dublin-firestore-5f21a",
  storageBucket: "dublin-firestore-5f21a.firebasestorage.app",
  messagingSenderId: "82650257952",
  appId: "1:82650257952:web:2171f2eeef9b485a973a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);