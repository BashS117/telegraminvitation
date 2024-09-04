import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAKgwpBsJTA5mYBdFzVecowM3wJVerm62Y",
    authDomain: "teleginvitation.firebaseapp.com",
    projectId: "teleginvitation",
    storageBucket: "teleginvitation.appspot.com",
    messagingSenderId: "565820490241",
    appId: "1:565820490241:web:fa04338f6dde9fc498b600",
    measurementId: "G-VFXXTFXDY0"
  };


  const app = initializeApp(firebaseConfig)

  const Database = getFirestore(app)

  export {Database}