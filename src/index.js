import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6HtrHuj-jzpcLM7KwzWyVgLs4otqFrO0",
  authDomain: "classics-ecommerce.firebaseapp.com",
  projectId: "classics-ecommerce",
  storageBucket: "classics-ecommerce.appspot.com",
  messagingSenderId: "741502190298",
  appId: "1:741502190298:web:23f48dff041cecab285be3",
  measurementId: "G-P4NMG8PKB0"
};

const app = initializeApp(firebaseConfig);

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
