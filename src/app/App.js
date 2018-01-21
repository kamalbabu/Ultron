import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import {RemoteClient} from "../shared/data/remoteClient";

class App extends Component {
    constructor(){
        super();
        this.init();
    }

    init(){
        RemoteClient.addRequestInterceptor(function(payload){
            console.log("hello");
        })

        let payload ={
            data :{
                name:"John Smith"
            }
        }
        RemoteClient.post("posts",payload).subscribe((data)=>{
            console.log(data);
        });
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