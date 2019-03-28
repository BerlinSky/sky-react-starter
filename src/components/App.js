import React, { Component } from 'react'
import logo from '../shared/images/logo.svg'

import Home from './Home/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
