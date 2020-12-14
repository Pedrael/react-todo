import './TodoComponentStyle.scss'

import React, { Component, Fragment } from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

export default class TodoComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: {todos: []}
    }
  }

  componentDidMount() {
    this.setState({
        todo: this.props.todo,
    })
  }

  removeNote = (e) => {
    this.props.removeNote(e, this.state.todo.uniqueid)
  }

  render() {
    return (
      <Fragment>
      <div className="note-body">
        <div className="upper">

          <h2 className="name">{this.state.todo.name} ({this.state.todo.uniqueid})</h2>
          <div className="action-array">
            <Link to={'/edit/'+this.props.todo.uniqueid}>
              <div className="circle"><FontAwesomeIcon icon={faPencilAlt} /></div>
            </Link>
            <div className="circle" onClick={this.removeNote}><FontAwesomeIcon icon={faTrashAlt} /></div>
          </div>
        </div>

        <div className="todo-list">
          { this.state.todo.todos.map((item, index) => {
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
}
