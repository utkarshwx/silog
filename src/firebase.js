// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfK6es8ClyXJxTnkhXot0NvLUYs1Yw32Q",
  authDomain: "silog-beee0.firebaseapp.com",
  projectId: "silog-beee0",
  storageBucket: "silog-beee0.appspot.com",
  messagingSenderId: "1032634910407",
  appId: "1:1032634910407:web:b5d3fa0e465e533e6ca0e2",
  measurementId: "G-Y94L5QF3GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;