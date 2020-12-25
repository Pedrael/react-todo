import './TodoComponentStyle.scss'

import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

export default function TodoComponent(props) {

  const dispatch = useDispatch()

  let todo = props.todo

  let removeNote = () => {
    dispatch({ type: 'REMOVE_TODOITEM', uniqueid: todo.uniqueid})
  }

  return (
    <Fragment>
    <div className="note-body">
      <div className="upper">

        <h2 className="name">{todo.name} ({todo.uniqueid})</h2>
        <div className="action-array">
          <Link to={'/edit/'+props.todo.uniqueid}>
            <div className="circle"><FontAwesomeIcon icon={faPencilAlt} /></div>
          </Link>
          <div className="circle" onClick={removeNote}><FontAwesomeIcon icon={faTrashAlt} /></div>
        </div>
      </div>

      <div className="todo-list">
        { todo.todos.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <p className="todo-text">{item.text}</p>
              <div className={ item.isChecked ? "checked checkbox circle" : "checkbox circle"}>
                {item.isChecked ? <FontAwesomeIcon icon={faCheck} /> : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </Fragment>
  )
}
