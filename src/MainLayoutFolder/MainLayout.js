import './MainLayoutStyle.scss'

import React, { Component, Fragment } from "react"

import TodoComponent from '../TodoComponentFolder/TodoComponent.js'
import { useSelector } from 'react-redux'

export default class MainLayout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todosList: [{ // array of notes
        name: 'StoreTest111',
        uniqueid: '0',
        todos: [
          { text: 'lorem ipsum', isChecked: true },
          { text: 'text2', isChecked: false },
          { text: 'text1', isChecked: true }
        ]
      },
      {
        name: 'StoreTest2222222',
        uniqueid: '1',
        todos: [
          { text: 'text1', isChecked: true },
          { text: 'text2', isChecked: false },
          { text: 'text1', isChecked: false }
        ]
      },
      {
        name: 'StoreTest33333333',
        uniqueid: '2',
        todos: [
          { text: 'text1', isChecked: true },
          { text: 'text2', isChecked: false },
          { text: 'text1', isChecked: false }
        ]
      }]
    }
    this.removeNote = this.removeNote.bind(this)
  }

  removeNote(e, i) {
    var array = [...this.state.todosList] // make a separate copy of the array
    if (i !== -1) {
      array = array.filter(item => item.uniqueid != i)
      //array.splice(i, 1)
      this.setState({
        todosList: [...array]
      }, () => {console.log(this.state.todosList, array)})
    }
  }

  render() {
    return (
      <div className="layout">
      { this.state.todosList.map((todo, index) => {
        return <TodoComponent
          todo = {todo}
          key = {todo.uniqueid}
          removeNote = {this.removeNote} />
      })}
      </div>
    )
  }
}
