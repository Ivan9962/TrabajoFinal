import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA1fwaXIV2S1Zh8UNO_Sjg3Y95_E8RF0Y",
  authDomain: "cellphone-3a7c2.firebaseapp.com",
  projectId: "cellphone-3a7c2",
  storageBucket: "cellphone-3a7c2.appspot.com",
  messagingSenderId: "277224050470",
  appId: "1:277224050470:web:bf2867d361b736bb227be7",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();

// Initialize Firebase
export { db, storage };
