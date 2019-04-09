// import React, { Component } from 'react'
import React from 'react'
import { element } from 'prop-types'
// import Popup from 'react-popup'
// import Helmet from 'react-helmet'

// import Home from './Home/Home'
// import Todo from './Todo/Todo'
// import Timer from './Pomodoro/Timer'
// import Coins from './Coins/Coins'
// import Chart from './Chart/Chart'
// import Animation from './Animation/Animation'
// import Numbers from './Numbers/Numbers'
// import Xss from './Xss/Xss'
// import Person from './Person/Person'

import Header from '../shared/components/layout/Header'
import Content from '../shared/components/layout/Content'
import Footer from '../shared/components/layout/Footer'

import './App.css';
// import './Popup.css';

const App = props => (
  <div className="App">
    <Header title="Welcome to SKY Club" />

    <Content>
      { props.children }
    </Content>

    <Footer />
  </div>
)

App.prototype = {
  children: element
}

export default App;
