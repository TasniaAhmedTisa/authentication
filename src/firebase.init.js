// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCntZMbltRtGU9n8WQxzG-DwPSw9twAGfo",
  authDomain: "authentication-97c40.firebaseapp.com",
  projectId: "authentication-97c40",
  storageBucket: "authentication-97c40.firebasestorage.app",
  messagingSenderId: "289040455128",
  appId: "1:289040455128:web:433e41e7007291ae694ead",
  measurementId: "G-WPTMW84WH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);