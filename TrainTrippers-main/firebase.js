// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA71yeaqMjx6_aXnqAfq9RkPqxI2o2tms0",
  authDomain: "traintrippers-bdb24.firebaseapp.com",
  projectId: "traintrippers-bdb24",
  storageBucket: "traintrippers-bdb24.appspot.com",
  messagingSenderId: "253922297321",
  appId: "1:253922297321:web:1f3692e66911b3c8953778",
  measurementId: "G-484QLEEFQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
