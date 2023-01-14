import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3tZrGL3yS85jPpOGw9j2kVJHz3EzNRWU",
  authDomain: "bumpr-website.firebaseapp.com",
  projectId: "bumpr-website",
  storageBucket: "bumpr-website.appspot.com",
  messagingSenderId: "1031267175504",
  appId: "1:1031267175504:web:5cace6b5ccdbbde3a39555",
  measurementId: "G-7WZVSKGPSL"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
