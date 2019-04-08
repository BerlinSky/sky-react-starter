import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
  constructor() {
    super()

    this.state = {
      number1: 0,
      number2: 0,
      result: 0
    }

    // this.handleOnChange = this.handleOnChange.bind(this)
    // this.handleResult = this.handleResult.bind(this)
  }

  handleOnChange = (e) => {
    const{ target: { value, name } } = e

    this.setState({
      [name]: Number(value)
    })
  }

  handleResult = (e) => {
    this.setState({
      result: this.state.number1 + this.state.number2
    })
  }

  // handleOnChange(e) {
  //   const{ target: { value, name } } = e

  //   this.setState({
  //     [name]: Number(value)
  //   })
  // }

  // handleResult(e) {
  //   this.setState({
  //     result: this.state.number1 + this.state.number2
  //   })
  // }

  render() { 
    return (  
      <div className="Calculator">
        <input type="text" name="number1" value={ this.state.number1 }  onChange={ this.handleOnChange } />

        { '+' }

        <input type="text" name="number2" value={ this.state.number2 } onChange={ this.handleOnChange } />

        <p><button onClick={ this.handleResult }>=</button></p>

        <p className="result">{ this.state.result }</p>
      </div>
    )
  }
}
 
export default Calculator;