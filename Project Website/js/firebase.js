// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8p1_1W0cdIsp8YIO4M1WUfJLPd0gr9Co",
  authDomain: "catch-this-sport.firebaseapp.com",
  projectId: "catch-this-sport",
  storageBucket: "catch-this-sport.appspot.com",
  messagingSenderId: "709184570116",
  appId: "1:709184570116:web:9ddf4eb78d2a6e4d8a8651",
  measurementId: "G-Q8XZLEKVMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(auth);
