import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebaseConfig = {

  apiKey: "AIzaSyBw9roEaK1R5la371-ZmTPjVb1spPgTgIA",
    authDomain: "react-chat-app-43f88.firebaseapp.com",
    projectId: "react-chat-app-43f88",
    storageBucket: "react-chat-app-43f88.appspot.com",
    messagingSenderId: "510348489358",
    appId: "1:510348489358:web:80bbeb4cb96956ebb08fdf",
    measurementId: "G-RJ47JTQ4CH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);


ReactDOM.render(
 routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
