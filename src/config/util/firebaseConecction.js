// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF2YN_JDLiNVwhlp0nenFIcXzAwnMtYI8",
  authDomain: "restaurant20223tn046.firebaseapp.com",
  projectId: "restaurant20223tn046",
  storageBucket: "restaurant20223tn046.appspot.com",
  messagingSenderId: "218717290783",
  appId: "1:218717290783:web:6b57533ce477a2794db02a",
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
// Initialize Firebase
export { app, auth, db, storage };
