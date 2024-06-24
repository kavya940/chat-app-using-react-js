import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCxSeU5winO-Tqu8ZkJz4q_bmXpwbH5yhM",
  authDomain: "firstproject1-d2e7e.firebaseapp.com",
  projectId: "firstproject1-d2e7e",
  storageBucket: "firstproject1-d2e7e.appspot.com",
  messagingSenderId: "187579203617",
  appId: "1:187579203617:web:c8e3da4bbc688e828f6360",
  measurementId: "G-XPNQ478EZ8"
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
