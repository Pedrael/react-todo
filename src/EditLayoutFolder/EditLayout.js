import './EditLayoutStyle.scss'

import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck, faPlus, faSave, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

export default function EditLayout(props) {

  let getArrayWithChange = (array, index, newValue) => {
    let newArray = [...array]
    newArray[index] = newValue
    console.log(newArray)
    return newArray // TODO: array.prototype
  }

  const [todosItem, changeItem] = useState(
    useSelector(
      state => state.todoState.filter(item => item.uniqueid === props.match.params.id)[0]
    ))
  const [newTodo, changeNewTodo] = useState({text: "", isChecked: false, uniqueid: todosItem.todos.length})//{text: 'lorem ipsum', isChecked: true, uniqueid: '0'}
  const dispatch = useDispatch()
  const history = useHistory()

  let saveChanges = () => {
    dispatch({ type: 'CHANGE_TODOITEM', index: props.match.params.id, editedItem: todosItem })
    console.log("saved")
  }

  let removeTodoItemAndReturn = () => {
    console.log("remove")
    dispatch({ type: 'REMOVE_TODOITEM', uniqueid: todosItem.uniqueid})
    history.push("/")
  }

  return (

      <div className="edit layout">
        <div className="edit-container">

          <div className="wrap">
            <h2>Title</h2>
            <input type="text" className="input"
              value={todosItem.name}
              onChange={
                (e) => changeItem(Object.assign({}, todosItem, {name: e.target.value}))
              }/> {/*note title*/}
          </div>

          <div className="todos"> {/*todos array*/}

            {todosItem.todos.map((todo, index) => (

              <div className="wrap" key={todo.uniqueid}>
                <input type="text" className="input"
                  value={todo.text}
                  onChange={
                    (e) => changeItem(Object.assign({}, todosItem, {
                      todos: getArrayWithChange(
                        todosItem.todos,
                        index,
                        Object.assign({}, todo, { text: e.target.value }))
                      }
                    ))
                  }/>
                  <div className={todo.isChecked ? "checked checkbox circle" : "checkbox circle"}
                  onClick={
                    (e) => changeItem(Object.assign({}, todosItem, {
                      todos: getArrayWithChange(
                        todosItem.todos,
                        index,
                        Object.assign({}, todo, { isChecked: !todo.isChecked }))
                      }
                    ))
                  }> {/* todo toggle */}
                    { todo.isChecked && <FontAwesomeIcon icon={faCheck} /> }
                  </div>
                  <div className="circle tech-button"
                  onClick={
                    (e) => changeItem(Object.assign({}, todosItem, {
                      todos: todosItem.todos.filter((item) => item.uniqueid !== todo.uniqueid)
                    }))
                  }>
                    <FontAwesomeIcon icon={faTrashAlt} /> {/* remove todo */}
                  </div>
              </div>

          ))}

            <div className="wrap">  {/* add new todo */}
              <input type="text" className="input" value={newTodo.text}
              onChange={
                (e) => changeNewTodo(Object.assign({}, newTodo, {text: e.target.value}))
              }/>
              <div className={newTodo.isChecked ? "checked checkbox circle" : "checkbox circle"}
              onClick={
                (e) => changeNewTodo(Object.assign({}, newTodo, {isChecked: !newTodo.isChecked}))
              }> {/* todo toggle */}
                { newTodo.isChecked && <FontAwesomeIcon icon={faCheck} />}
              </div>
              <div className="circle tech-button"
              onClick={
                (e) => {
                  changeItem(Object.assign({}, todosItem, {
                    todos: todosItem.todos.concat(newTodo)
                  }))
                  changeNewTodo(Object.assign({}, newTodo, {
                    text: "", isChecked: false, uniqueid: todosItem.todos.length
                  }))
                }
              }> {/* add new todo button */}
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>

            <div className="wrap end"> {/* buttons array */}
              <div className="button" onClick={()=>{history.push("/")}}>
                <FontAwesomeIcon icon={faUndoAlt} />
              </div>

              <div className="button" onClick={removeTodoItemAndReturn}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </div>

              <div className="button" onClick={saveChanges}>
                <FontAwesomeIcon icon={faSave} />
              </div>
            </div>

          </div>
        </div>

      </div>
  )
}
