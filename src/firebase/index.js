import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6ibwbrqMGDeN2m3xqOjrm6vtyaBnUm1o",
  authDomain: "vuejs-auth-5680d.firebaseapp.com",
  projectId: "vuejs-auth-5680d",
  storageBucket: "vuejs-auth-5680d.appspot.com",
  messagingSenderId: "582246449607",
  appId: "1:582246449607:web:02733367a766d8d01199e2",
  measurementId: "G-MZY3V4JCFZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
