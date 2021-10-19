import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyBiyIubuZODUxG1Q5Q2QbUCEnHZniME2Cg",
  authDomain: "voy-con-chatty.firebaseapp.com",
  projectId: "voy-con-chatty",
  storageBucket: "voy-con-chatty.appspot.com",
  messagingSenderId: "30905648255",
  appId: "1:30905648255:web:9eccdb7f29ddbf87b4eb4a",
  measurementId: "G-BPDEXY9746",
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
