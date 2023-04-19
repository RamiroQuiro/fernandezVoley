// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByWNinDs24nWLQ0Lrt0CSGEh-7j9l9GOI",
  authDomain: "fv2023-fd37e.firebaseapp.com",
  databaseURL: "https://fv2023-fd37e-default-rtdb.firebaseio.com",
  projectId: "fv2023-fd37e",
  storageBucket: "fv2023-fd37e.appspot.com",
  messagingSenderId: "568713573939",
  appId: "1:568713573939:web:2bba732fd1ac2307c71546",
  measurementId: "G-JZZMMJYXL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
export const storage=getStorage(app)