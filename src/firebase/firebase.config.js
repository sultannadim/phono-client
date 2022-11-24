// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyCfGNuTCn2e4-LvxqSrrYEsAFkXhZspOC0",
  //   authDomain: "phono-de478.firebaseapp.com",
  //   projectId: "phono-de478",
  //   storageBucket: "phono-de478.appspot.com",
  //   messagingSenderId: "277250283794",
  //   appId: "1:277250283794:web:e4517de8e0e65655e33bcb",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
