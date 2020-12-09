import './MainLayoutStyle.scss'

import React, { Component, Fragment } from "react"

import TodoComponent from '../TodoComponentFolder/TodoComponent.js'

export default class MainLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todosList: [{ // array of notes
        name: 'StoreTest111',
        todos: [
          { text: 'lorem ipsum', isChecked: true },
          { text: 'text2', isChecked: false },
          { text: 'text1', isChecked: true }
        ]
      },
      {
        name: 'StoreTest2222222',
        todos: [
          { text: 'text1', isChecked: true },
          { text: 'text2', isChecked: false },
          { text: 'text1', isChecked: false }
        ]
      },
      {
        name: 'StoreTest33333333',
        todos: [
          { text: 'text1', isChecked: true },
          { text: 'text2', isChecked: false },
          { text: 'text1', isChecked: false }
        ]
      }]
    }
  }

  removeNote(i) {
    this.setState({
        todosList: this.state.todosList.splice(i, 1)
    })
  }

  render() {
    return (
      <div className="layout">
      { this.state.todosList.map((todo, index) => {
        return <TodoComponent
          todo = {todo}
          index = {index}
          key = {index}
          removeNote = {this.removeNote} />
      })}
      </div>
    )
  }
}
