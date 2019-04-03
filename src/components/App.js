import React, { Component } from 'react'

// import Home from './Home/Home'
// import Todo from './Todo/Todo'
// import Timer from './Pomodoro/Timer'
import Coins from './Coins/Coins'

import Header from '../shared/components/layout/Header'
import Content from '../shared/components/layout/Content'
import Footer from '../shared/components/layout/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to SKY Club" />
        <Content>
          <Coins />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
