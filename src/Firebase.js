import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfp1Jrayr0ogmhCcDfaUK1lmJos1rd1KY",
  authDomain: "watch-online-18b5a.firebaseapp.com",
  projectId: "watch-online-18b5a",
  storageBucket: "watch-online-18b5a.appspot.com",
  messagingSenderId: "454103041992",
  appId: "1:454103041992:web:ce8573d9021b8ae32722fd",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
