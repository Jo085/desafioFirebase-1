// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCiGZssmSRadZFQGDdUweT0907kwb5xcs",
  authDomain: "crud-usuarios-8215c.firebaseapp.com",
  projectId: "crud-usuarios-8215c",
  storageBucket: "crud-usuarios-8215c.firebasestorage.app",
  messagingSenderId: "168063363496",
  appId: "1:168063363496:web:deee222dc829c30b94159d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app