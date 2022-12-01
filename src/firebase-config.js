// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: '',
  authDomain: 'react-cheese.firebaseapp.com',
  projectId: 'react-cheese',
  storageBucket: 'react-cheese.appspot.com',
  messagingSenderId: '788985549023',
  appId: '1:788985549023:web:0a1644841ecb124846996a',
  measurementId: 'G-F9F4YZK8EC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install firebase
