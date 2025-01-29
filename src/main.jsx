import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import Roboto fonts
import "@fontsource/outfit";
import "@fontsource/roboto";

// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmq8DBhDvOKspAPpvVCMDpWa3or1z4RH0",
  authDomain: "rothportfolio-e0ae8.firebaseapp.com",
  projectId: "rothportfolio-e0ae8",
  storageBucket: "rothportfolio-e0ae8.firebasestorage.app",
  messagingSenderId: "969667671215",
  appId: "1:969667671215:web:b5938b156f37138ef7d05a",
  measurementId: "G-QS64G86HNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized:", app);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);