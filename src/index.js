import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({

  apiKey: "AIzaSyBw9roEaK1R5la371-ZmTPjVb1spPgTgIA",
    authDomain: "react-chat-app-43f88.firebaseapp.com",
    projectId: "react-chat-app-43f88",
    storageBucket: "react-chat-app-43f88.appspot.com",
    messagingSenderId: "510348489358",
    appId: "1:510348489358:web:80bbeb4cb96956ebb08fdf",
})

ReactDOM.render(
  <div>Hello World</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
