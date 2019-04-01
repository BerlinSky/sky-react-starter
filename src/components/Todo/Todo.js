import React, { Component } from 'react'
import './Todo.css'
import List from './List'
import uuidv4 from 'uuid/v4'

class Todo extends Component {
  constructor() {
    super()

    this.state = {
      task: '',
      items: []
    }
  }

  componentWillMount() {
    this.setState({
      items: [      
        {        
          id: uuidv4(),        
          task: 'Miete zahlen',        
          completed: false      
        },      
        {        
          id: uuidv4(),        
          task: 'Sportstudio gehen',        
          completed: false      
        },      
        {        
          id: uuidv4(),        
          task: 'Hausaufgabe machen',        
          completed: false      
        }    
      ]
    })
  }

  handleOnChange = e => {
    const { target: { value }} = e

    this.setState({
      task: value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    
    if (this.state.task.trim() !== '') {
      this.setState({
        task: '',
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            complete: false
          }
        ]
      })
    }
  }

  markAsCompleted = id => {
    const foundTask = this.state.items.find(
      task => task.id === id
    )

    foundTask.completed = true

    this.setState({
      items: [
        ...this.state.items
      ]
    })
  }

  removeTask = id => {
    const filterredTasks = this.state.items.filter(
      task => task.id !== id
    )

    this.setState({
      items: filterredTasks
    })
  }

  render() {
    return (
      <div className="Todo">
        <h1>Neue Aufgabe</h1>

        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>

        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />

      </div>
    )
  }

}

export default Todo