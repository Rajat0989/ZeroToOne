// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_cphN5Drqj133Qif4F5nJ7NzKT_t7a5M",
  authDomain: "flowxai-244d6.firebaseapp.com",
  projectId: "flowxai-244d6",
  storageBucket: "flowxai-244d6.appspot.com",
  messagingSenderId: "453345574552",
  appId: "1:453345574552:web:925ff797b4e75473e5daed",
  measurementId: "G-TFER1ELRHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);