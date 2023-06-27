import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "nova-safra.firebaseapp.com",
  projectId: "nova-safra",
  storageBucket: "nova-safra.appspot.com",
  messagingSenderId: "537005941365",
  appId: "1:537005941365:web:b46d20cb57915691380e3c",
  measurementId: "G-HPSLXVW3Y1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app);
