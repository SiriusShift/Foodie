// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Xic13EeU0ntorcKzjGfO4-sIdQLIQ2U",
  authDomain: "foodie-1c155.firebaseapp.com",
  projectId: "foodie-1c155",
  storageBucket: "foodie-1c155.appspot.com",
  messagingSenderId: "408160972170",
  appId: "1:408160972170:web:0922c785d97cfbffc32c73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app