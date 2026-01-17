import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9kLtCWqHDNWcSHAFA188PijWMGi23NuE",
  authDomain: "mazah-website.firebaseapp.com",
  projectId: "mazah-website",
  storageBucket: "mazah-website.firebasestorage.app",
  messagingSenderId: "157509861497",
  appId: "1:157509861497:web:2b57cb05ed844e2d4d94a8",
  measurementId: "G-FZV3TJVE4N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

signInAnonymously(auth).catch((err) => console.error(err));

