import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyB85k77rCqbGvLh7yTibvw31LEVRRocJH4",
    authDomain: "fir-storage-6a6d4.firebaseapp.com",
    databaseURL: "https://fir-storage-6a6d4.firebaseio.com",
    projectId: "fir-storage-6a6d4",
    storageBucket: "fir-storage-6a6d4.appspot.com",
    messagingSenderId: "357172934329"
  };
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

