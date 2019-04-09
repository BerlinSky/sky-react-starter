import React, { Component } from 'react'
import Popup from 'react-popup'
import Helmet from 'react-helmet'

// import Home from './Home/Home'
// import Todo from './Todo/Todo'
// import Timer from './Pomodoro/Timer'
// import Coins from './Coins/Coins'
// import Chart from './Chart/Chart'
// import Animation from './Animation/Animation'
// import Numbers from './Numbers/Numbers'
// import Xss from './Xss/Xss'
import Person from './Person/Person'

import Header from '../shared/components/layout/Header'
import Content from '../shared/components/layout/Content'
import Footer from '../shared/components/layout/Footer'

import './App.css';
import './Popup.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Helmet title="Person Information Manager" 
          meta={[
            { name: 'title, content: "Person Information System' },
            { name: 'description, content: "This page is about how to sail in the occean' },
          ]}
        />  

        <Header title="Welcome to SKY Club" />
        <Content>
          <Person />
        </Content>
        <Footer />

        <Popup />
      </div>
    );
  }
}

export default App;
