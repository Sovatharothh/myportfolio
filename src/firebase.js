// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrrem-svQC7X9cCzb0HgTHmrHZGFOxgbw",
  authDomain: "sovatharothel.firebaseapp.com",
  projectId: "sovatharothel",
  storageBucket: "sovatharothel.firebasestorage.app",
  messagingSenderId: "248960578336",
  appId: "1:248960578336:web:85f7544b3c6a438352dd45",
  measurementId: "G-GD042P2PH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);