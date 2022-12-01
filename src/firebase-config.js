/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';

const { REACT_APP_API_KEY } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: 'react-cheese.firebaseapp.com',
  projectId: 'react-cheese',
  storageBucket: 'react-cheese.appspot.com',
  messagingSenderId: '788985549023',
  appId: '1:788985549023:web:0a1644841ecb124846996a',
  measurementId: 'G-F9F4YZK8EC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// TODO npm install firebase
