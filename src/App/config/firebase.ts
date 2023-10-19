// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPi2J5JXzHNjUkzFTdK3vHMdZZ8KpCD5s",
  authDomain: "pixelify-company.firebaseapp.com",
  projectId: "pixelify-company",
  storageBucket: "pixelify-company.appspot.com",
  messagingSenderId: "704660996586",
  appId: "1:704660996586:web:70528c0adde255c353b293",
  measurementId: "G-23XYZ2P9WX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
