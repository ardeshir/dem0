import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to learning to learn: Metalearn.org</h1>
        </div>
        <p className="App-intro">
          Use this platform to learn ReactJS!
        </p>
        <div className="divleft">
          <ul>
            <li>Login to cloud9 @ <a href="http://metalearn.org:8080">metalearn.org cloud9 IDE (live coding)</a></li>
            <li>Navigate to ~/dem0/src/App.js</li>
            <li>The git repository is @<a href="https://github.com/ardeshir/dem0">github.com/ardeshir/dem0</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
