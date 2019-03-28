import React, { Component } from 'react'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcom Home</h1>
      
        <p>
          C'est la vie <br></br>
          <a href="http://www.google.com">google</a>
        </p>

        <p>
          <button style={{ backgroundColor: 'gray', border: '1px solid black' }}>
            Click me!
          </button>
        </p>

      </div>
    )
  }
}

export default Home