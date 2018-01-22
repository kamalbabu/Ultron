import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import {WsNativeClient} from "../shared/data/ws/wsNativeClient";

class App extends Component {
    constructor(){
        super();
        let socket = new WsNativeClient("wss://echo.websocket.org");
       socket.send("hello");
    }
    render() {
        return (<div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
        );
    }
}

export default App;