// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwR-2k4Vbu6pFY3r_4qbMmIZSmNHodxB0",
  authDomain: "art-gallery-rina-34213.firebaseapp.com",
  projectId: "art-gallery-rina-34213",
  storageBucket: "art-gallery-rina-34213.firebasestorage.app",
  messagingSenderId: "830375874397",
  appId: "1:830375874397:web:d5f482a1bf6855ddd362b4",
  measurementId: "G-EXQGBNNHJK"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const googleAuth = new GoogleAuthProvider();



