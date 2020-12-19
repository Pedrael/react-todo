import './EditLayoutStyle.scss'

import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function EditLayout(props) {

  let getArrayWithChange = (array, index, newValue) => {
    let newArray = [...array]
    newArray[index] = newValue
    console.log(newArray)
    return newArray // TODO: array.prototype
  }

  const [todosItem, changeItem] = useState(useSelector(state => state.todoState[props.match.params.id]))
  const dispatch = useDispatch()

  let saveChanges = () => {
    dispatch({ type: 'CHANGE_TODOITEM', index: props.match.params.id, editedItem: todosItem })
    console.log("saved")
  }

  return (

      <div className="layout">
        <div className="edit-container">

          <div className="wrap">
            <h2>Title</h2>
            <input type="text" className="input"
              value={todosItem.name}
              onChange={(e) => changeItem(Object.assign({}, todosItem, {name: e.target.value}))}/> {/*note title*/}
          </div>

          <div className="todos"> {/*todos array*/}

            {todosItem.todos.map((todo, index) => (

              <div className="wrap" key={todo.uniqueid}>
                <input type="text" className="input"
                  value={todo.text}
                  onChange={(e) => changeItem(Object.assign({}, todosItem, {
                    todos: getArrayWithChange(
                      todosItem.todos,
                      index,
                      Object.assign({}, todo, { text: e.target.value }))
                    }
                  ))}
                  />
                  <div className={todo.isChecked ? "checked checkbox circle" : "checkbox circle"}> {/* todo toggle */}
                    { todo.isChecked && <FontAwesomeIcon icon={faCheck} /> }
                  </div>
                  <div className="circle tech-button">
                    <FontAwesomeIcon icon={faTrashAlt} /> {/*remove todo*/}
                  </div>
              </div>

          ))}

            <div className="wrap">  {/*add new todo*/}
              <input type="text" className="input" v-model="todoBuf.text" />
              <div className={true ? "checked checkbox circle" : "checkbox circle"}> {/* todo toggle */}
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="circle tech-button"> {/*add new todo button */}
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>

          </div>

        </div>

        <Link to={'/'}>
          Back
        </Link>

        <button onClick={saveChanges}>Save</button>

      </div>
  )
}
