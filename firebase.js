// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Yc0hp79wFdw4URXkqGIGvAF9R9Ci2ng",
  authDomain: "fast-typer-e53d7.firebaseapp.com",
  projectId: "fast-typer-e53d7",
  storageBucket: "fast-typer-e53d7.appspot.com",
  messagingSenderId: "662113102759",
  appId: "1:662113102759:web:d87b75de8b2ead5591e482"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
