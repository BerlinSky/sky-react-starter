import React, { Component } from 'react'

import './Home.css'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      name: "Blue Sky Today: C'est la vie"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Bonne nuit!'
      })
    }, 1000)
  }

  render() {
    return (
      <div className="Home">
        <h1>Welcom Home</h1>

        <p>
          { this.state.name }
        </p>

      </div>
    )
  }
}

export default Home