import React, { Component } from 'react';
import firebase from 'firebase';
import MainScreen from './MainScreenComponent/MainScreen';
import './App.css';

const config = {
    apiKey: "AIzaSyCsE1akj2Wrc3ez8yNT84hxfayuD5PPKrA",
    authDomain: "react-chat-19c70.firebaseapp.com",
    databaseURL: "https://react-chat-19c70.firebaseio.com",
    projectId: "react-chat-19c70",
    storageBucket: "",
    messagingSenderId: "917580607277"
};

firebase.initializeApp(config);

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainScreen firebase={firebase}/>
            </div>
        );
    }
}

export default App;
