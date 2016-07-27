import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to univrs.io</h1>
        </div>
        <p className="App-intro">
          To get started click <code><a href="http://univrs.io">univrs.io</a></code>
        </p>
      </div>
    );
  }
}

export default App;
