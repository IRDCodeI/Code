// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwsdwlGm0N8WMhu5wKNhjNz0sMQZi980s",
  authDomain: "fir-app-1e647.firebaseapp.com",
  projectId: "fir-app-1e647",
  storageBucket: "fir-app-1e647.appspot.com",
  messagingSenderId: "145819516907",
  appId: "1:145819516907:web:a6a938b8ddd8ed5d5763ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //* Activar la forma de objeto