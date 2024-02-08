import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaIYzfm1jJ-95ode9TZ8HBL87HRDkKtQg",
  authDomain: "nwitter-reloaded-c924f.firebaseapp.com",
  projectId: "nwitter-reloaded-c924f",
  storageBucket: "nwitter-reloaded-c924f.appspot.com",
  messagingSenderId: "659471937344",
  appId: "1:659471937344:web:e69afd7b7659702fe814a5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
