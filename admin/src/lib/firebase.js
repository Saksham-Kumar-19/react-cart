import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJYvB-AYhI0I_7RLEV12PYtnJLWG1yik0",
  authDomain: "react-cart-57c1d.firebaseapp.com",
  projectId: "react-cart-57c1d",
  storageBucket: "react-cart-57c1d.appspot.com",
  messagingSenderId: "502729332280",
  appId: "1:502729332280:web:19e1839714f583b29878cd",

  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
