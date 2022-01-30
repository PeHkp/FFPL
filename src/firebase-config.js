import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {collection} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA5kaspFvmJdJg4u9ONAlSWA97akJQuFx4",
    authDomain: "ffpl-d39b3.firebaseapp.com",
    projectId: "ffpl-d39b3",
    storageBucket: "ffpl-d39b3.appspot.com",
    messagingSenderId: "748452910737",
    appId: "1:748452910737:web:5e118a3b7b87ba70c15130"
  };

  const app = initializeApp(firebaseConfig);

  export const db =  getFirestore(app)

  export const userCollectionRef = collection(db, "FFPL")