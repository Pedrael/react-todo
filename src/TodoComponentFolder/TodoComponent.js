import './TodoComponentStyle.scss'

import React, { Component, Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

export default class TodoComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: {todos: []},
      index: -1
    }
  }

  componentDidMount() {
    this.setState({
        todo: this.props.todo,
        index: this.props.index
    })
  }

  removeNote = (e) => {
    console.log('click', this.state.index)
    this.props.removeNote(e, this.state.index)
  }

  render() {
    return (
      <Fragment>
      <div className="note-body">
        <div className="upper">

          <h2 className="name">{this.state.todo.name} ({this.state.index})</h2>
          <div className="action-array">
            <div className="circle"><FontAwesomeIcon icon={faPencilAlt} /></div>
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
