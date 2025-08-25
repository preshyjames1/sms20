import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBS1AgOBg8A8pBrzeyGHWtCmXXwta1xtQA",
  authDomain: "schoolmanagementsystem2-bd70a.firebaseapp.com",
  projectId: "schoolmanagementsystem2-bd70a",
  storageBucket: "schoolmanagementsystem2-bd70a.firebasestorage.app",
  messagingSenderId: "807582219930",
  appId: "1:807582219930:web:c46894994c9b477167e923",
  measurementId: "G-V9MYD6MSPT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);