/** @format */

import firebase from "firebase/app";

// ☆各プロジェクトの設定を記述
const firebaseConfig = {
  apiKey: "AIzaSyCS5LBSt27L2ATxqsbrMhFT6eubf4UxhQk",
  authDomain: "portfolio-d4bc7.firebaseapp.com",
  projectId: "portfolio-d4bc7",
  storageBucket: "portfolio-d4bc7.appspot.com",
  messagingSenderId: "1045205678182",
  appId: "1:1045205678182:web:461f4dbb324b1b4f6415a7",
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}
