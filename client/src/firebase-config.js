import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiisfjDBCxjxhZaN50FY-fIynjBwXV8xM",
  authDomain: "pawtopia-bb4ea.firebaseapp.com",
  projectId: "pawtopia-bb4ea",
  storageBucket: "pawtopia-bb4ea.appspot.com",
  messagingSenderId: "489163987876",
  appId: "1:489163987876:web:78464b4225c7d3c5a43f31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
