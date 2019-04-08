import React, { Component } from 'react'

// import Home from './Home/Home'
// import Todo from './Todo/Todo'
// import Timer from './Pomodoro/Timer'
// import Coins from './Coins/Coins'
// import Chart from './Chart/Chart'
// import Animation from './Animation/Animation'
// import Numbers from './Numbers/Numbers'
// import Xss from './Xss/Xss'
import Calculator from './Calculator/Calculator'

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
          <Calculator />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
