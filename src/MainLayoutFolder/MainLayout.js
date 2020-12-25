//import './MainLayoutStyle.scss'

import React from "react"

import TodoComponent from '../TodoComponentFolder/TodoComponent.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function MainLayout(props) {

  let todosList = useSelector(state => state.todoState)
  const dispatch = useDispatch()
  const history = useHistory()

  let createNote = () => {
    let newId = todosList.length == 0 ? 0 : todosList[todosList.length - 1].uniqueid + 1
    dispatch({ type: 'ADD_TODOITEM', newItem: {
      name: "",
      uniqueid: newId,
      todos: []
    }})
    //history.push("/edit/"+newId)
  }

    return (
        <div className="layout">
        { todosList.length === 0 ?
          <p>List is empty!</p> :
          todosList.map((todo, index) => {
          return <TodoComponent
            todo = {todo}
            key = {todo.uniqueid}/>
        })}
          <div className="button" onClick={createNote}><FontAwesomeIcon icon={faPlus} /></div>
        </div>
    )
}
