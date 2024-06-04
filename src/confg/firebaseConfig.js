import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNzITxEfgAwvf5e96zij0LKrUCyXwtwO0",
  authDomain: "login-auth-3638e.firebaseapp.com",
  projectId: "login-auth-3638e",
  storageBucket: "login-auth-3638e.appspot.com",
  messagingSenderId: "1092267878232",
  appId: "1:1092267878232:web:2ff3363e6cafa62160e72d"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;