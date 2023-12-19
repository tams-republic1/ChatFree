import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import constants from 'expo-constants';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaPIMUdP1sdtTBBvCKyexdjzOUXamr9b0",
  authDomain: "chatfree-2af1b.firebaseapp.com",
  projectId: "chatfree-2af1b",
  storageBucket: "chatfree-2af1b.appspot.com",
  messagingSenderId: "76192065496",
  appId: "1:76192065496:web:21875e62e32ff85f94f4ad"
  };
  
// Initialize Firebase
   const app = initializeApp(firebaseConfig);
   export const auth = getAuth();
   export const database = getFirestore();