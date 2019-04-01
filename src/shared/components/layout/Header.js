import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'

class Header extends Component {

  static propTypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string 
  };

  render() {
    const {
      title = "Welcome to the club",
      url = 'http://localhost:3000'
    } = this.props

    return (
      <header className="App-header">
        <a href={url}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className="App-title">{ title }</h1>
      <div></div>
      </header>
    )
  }

}

export default Header