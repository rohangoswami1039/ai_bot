// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDpWFroZohQVwCG2dKYKJAefrAj9CYoUxk",
  authDomain: "silwalk-web.firebaseapp.com",
  projectId: "silwalk-web",
  storageBucket: "silwalk-web.appspot.com",
  messagingSenderId: "331611883968",
  appId: "1:331611883968:web:17d5cc5fce80ca5a2de025",
  measurementId: "G-PRMD4XSKT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()


export {app,auth,analytics}