//import './MainLayoutStyle.scss'

import React, { useState } from "react"

import TodoComponent from '../TodoComponentFolder/TodoComponent.js'
import { useSelector, useDispatch } from 'react-redux'

export default function MainLayout(props) {

  let todosList = useSelector(state => state.todoState)
  const dispatch = useDispatch()

    return (
      <div className="layout"> {/*() => dispatch({ type: 'FLUSH', newItem: {
        name: 'ReduxStoreTest1',
        uniqueid: '0',
        todos: [
          { text: 'lorem ipsum', isChecked: true, uniqueid: '0' },
          { text: 'text2', isChecked: false, uniqueid: '1' },
          { text: 'text1', isChecked: true, uniqueid: '2' }
        ]
      } })*/}
      { todosList.length == 0 ?
        <p>List is empty!</p> :
        todosList.map((todo, index) => {
        return <TodoComponent
          todo = {todo}
          key = {todo.uniqueid}/>
      })}
      </div>
    )
}
