import './MainLayoutStyle.scss'

import React, { useState } from "react"

import TodoComponent from '../TodoComponentFolder/TodoComponent.js'
import { useSelector, useDispatch } from 'react-redux'

function MainLayout() {

  let todosList = useSelector(state => state.todoState)
  const dispatch = useDispatch()

    return (
      <div className="layout" onClick = {() => dispatch({ type: 'FLUSH', newItem: {
        name: 'ReduxStoreTest1',
        uniqueid: '0',
        todos: [
          { text: 'lorem ipsum', isChecked: true, uniqueid: '0' },
          { text: 'text2', isChecked: false, uniqueid: '1' },
          { text: 'text1', isChecked: true, uniqueid: '2' }
        ]
        } })} >
      { todosList.map((todo, index) => {
        return <TodoComponent
          todo = {todo}
          key = {todo.uniqueid} />
      })}
      </div>
    )
}

export default MainLayout
