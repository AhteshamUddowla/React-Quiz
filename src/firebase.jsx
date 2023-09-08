import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWY38nmZ_vIYc3bN1aDQ0lc8rlO7Pk3LI",
  authDomain: "react-quiz-dev-40a4f.firebaseapp.com",
  projectId: "react-quiz-dev-40a4f",
  storageBucket: "react-quiz-dev-40a4f.appspot.com",
  messagingSenderId: "359132808620",
  appId: "1:359132808620:web:c26ab2f5eeb59003746609",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
