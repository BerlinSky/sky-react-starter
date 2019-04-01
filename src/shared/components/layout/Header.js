import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/logo.svg'

const Header = props => {

  const {
    title = "Welcome to the club",
    url = 'http://localhost:3000'
  } = props

  Header.propTypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string 
  }

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

export default Header