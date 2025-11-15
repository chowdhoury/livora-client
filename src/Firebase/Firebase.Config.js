import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjZmDijZHX0DhDTC7Lw69zFVcKiQuiM1g",
  authDomain: "lirova-24b47.firebaseapp.com",
  projectId: "lirova-24b47",
  storageBucket: "lirova-24b47.firebasestorage.app",
  messagingSenderId: "373027043191",
  appId: "1:373027043191:web:6aa1cc8172a9e304bc1372",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
