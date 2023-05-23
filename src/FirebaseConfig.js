import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "LOCATEDINPROJECT",
  authDomain: "LOCATEDINPROJECT",
  projectId: "LOCATEDINPROJECT",
  storageBucket: "LOCATEDINPROJECT",
  messagingSenderId: "LOCATEDINPROJECT",
  appId: "LOCATEDINPROJECT"
};


// Initialize Firebase
const FBapp = initializeApp(firebaseConfig);


export default FBapp;
