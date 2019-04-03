import React, { Component } from 'react'
import './Coins.css'

class Coins extends Component {
  constructor() {
    super()

    this.state = {
      dollars: 0
    }
  }

  shouldComponentUpdate(props, state) {
    return state.dollars % 10 === 0
  }

  handleOnChange = e => {
    this.setState ({
      dollars: Number(e.target.value || 0)
    })
  }

  render() {
    return (
      <div className="Coins">
        <h1>Crypto Coins Kaufen</h1>

        <div className="question">
          <p>How much dollars do you have?</p>

          <p>
            <input type="text" placeholder="0" 
            onChange={ this.handleOnChange } />
          </p>
        </div>

        <div className="answer">
          <p>Crypto Coin Price: $10</p>
          <p>
            You can buy <strong>{ this.state.dollars }</strong> coins.
          </p>
        </div>
      </div>
    )
  }
}

export default Coins