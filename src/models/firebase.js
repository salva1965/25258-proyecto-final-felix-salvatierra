// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD92hiJ3DlqSpU3V0G9QEEfuHDxvjthx9M",
  authDomain: "proyecto-final-back.firebaseapp.com",
  projectId: "proyecto-final-back",
  storageBucket: "proyecto-final-back.firebasestorage.app",
  messagingSenderId: "115063343252",
  appId: "1:115063343252:web:ea720dca8f3b5f4d888c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };