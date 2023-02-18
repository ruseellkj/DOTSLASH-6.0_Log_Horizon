import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78UjVcB6aVaa2ZxY4U99DSCxnoSV_glo",
  authDomain: "loghorizondotslash6.firebaseapp.com",
  projectId: "loghorizondotslash6",
  storageBucket: "loghorizondotslash6.appspot.com",
  messagingSenderId: "337169321652",
  appId: "1:337169321652:web:1c3fcd7e5781781812d1e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
