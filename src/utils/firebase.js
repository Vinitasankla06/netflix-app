// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdE66PixNVUTVoZ0McoiMRh7eG1L3Ql40",
  authDomain: "vinicast-77f78.firebaseapp.com",
  projectId: "vinicast-77f78",
  storageBucket: "vinicast-77f78.appspot.com",
  messagingSenderId: "479363687058",
  appId: "1:479363687058:web:e949319dab53468d91fc4b",
  measurementId: "G-EGBK3F3E7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();