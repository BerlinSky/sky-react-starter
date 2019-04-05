import React, { Component } from 'react'

import Result from './Result'

import './Numbers.css'

class Numbers extends Component {
  state = { 
    numbers: '',
    results: []
  }

  handleNumberChange = e => {
    const { target: { value } } = e

    const numbers = Array.from(value)

    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0)

    console.log('result', result)

    this.setState({
      number: value,
      results: [...this.state.results, result]
    })
  }

  render() { 
    return (  
      <div className="Numbers">
        <input type="text"
          placeholder="Write numbers here..."
          value={ this.state.numbers }
          onChange={ this.handleNumberChange }
        />

        <ul>
          { this.state.results.map( (result, i) => (
            <Result key={i} result={ result } />
          ))}
        </ul>
      </div>
    )
  }
}
 
export default Numbers;