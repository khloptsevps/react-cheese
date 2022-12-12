import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const { REACT_APP_API_KEY } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: 'craft-lab-khv.firebaseapp.com',
  projectId: 'craft-lab-khv',
  storageBucket: 'craft-lab-khv.appspot.com',
  messagingSenderId: '942693787510',
  appId: '1:942693787510:web:d08ab2c15e3a1283d9fc57',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
