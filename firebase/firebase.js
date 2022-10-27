// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT5CqCCLNYAh8NS_PWhoLE4GWcf1tQGf0",
  authDomain: "test-microservice-f8317.firebaseapp.com",
  projectId: "test-microservice-f8317",
  storageBucket: "test-microservice-f8317.appspot.com",
  messagingSenderId: "814253684185",
  appId: "1:814253684185:web:b543d408cc3f9327e495c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = {firebase};