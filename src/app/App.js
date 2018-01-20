import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import {RemoteClient} from "./common/data/remoteClient";

class App extends Component {
    constructor(){
        super();
        RemoteClient.get("posts/1").subscribe((data)=>{
            console.log(data);
        });
    }

    render() {
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
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