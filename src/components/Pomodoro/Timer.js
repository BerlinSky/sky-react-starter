import React, { Component } from 'react'

import './Timer.css'

class Timer extends Component {
  constructor() {
    super()

    this.state = {
      alert: {
        type: '',
        message: ''
      }
    }

    this.times = {
      defaultTime: 1500,
      shortBreak: 300,
      longBreak: 900
    }
  }
  
  componentDidMount() {
    this.setDefaultTime()
  }

  countDown = () => {
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: 'buz',
          message: 'Buzzzzzzzzz!'
        }
      })
    } else {
      this.setState({
        time: this.state.time - 1
      })
    }
  }

  restartInterval = () => {
    clearInterval(this.interval)

    this.interval = setInterval(this.countDown, 1000)
  }

  setTime = newTime => {
    this.restartInterval()

    this.setState({
      time: newTime
    })
  }

  setDefaultTime = () => {
    this.setState({
      time: this.times.defaultTime
    })
  }

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: 'work',
        message: 'Arbeiten!'
      }
    })

    return this.setTime(this.times.defaultTime)
  }

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: 'shortBreak',
        message: 'Mach eine kleine Pause!'
      }
    })

    return this.setTime(this.times.shortBreak)
  }
  
  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: 'longBreak',
        message: 'Mach eine lange Pause!'
      }
    })
    
    return this.setTime(this.times.longBreak)
  }

  displayTimer = (seconds) => {
    const m = Math.floor(seconds % 3600 / 60)
    const s = Math.floor(seconds % 3600 % 60)

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
  }

  render() {
    const { alert: { message, type }, time} = this.state

    return (
      <div className="Pomodoro">
        <div className={ `alert ${type}`}>
          { message }
        </div>

        <div className="timer">
          { this.displayTimer(time) }
        </div>

        <div className="types">
          <button className="start" onClick={this.setTimeForWork}>
            Arbeiten anfangen
          </button>
          <button className="short" onClick={this.setTimeForShortBreak}>
            Klein Pause
          </button>
          <button className="long" onClick={this.setTimeForLongBreak}>
            Lange Pause
          </button>
        </div>
      </div>
    )
  }
}

export default Timer