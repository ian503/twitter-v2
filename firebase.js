// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v2-22abe.firebaseapp.com",
  projectId: "twitter-v2-22abe",
  storageBucket: "twitter-v2-22abe.appspot.com",
  messagingSenderId: "984368527105",
  appId: "1:984368527105:web:c16a0d26610f554b294d00"
};

// Initialize Firebase
const app = !getApp().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };