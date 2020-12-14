import './EditLayoutStyle.scss'

import React, { Component, Fragment } from "react"

export default class EditLayout extends Component {

  constructor(props) {
    super(props)
    //let id = parseInt(props.match.params.number, 10)
    this.state = {
    }
  }

  render() {
    return (
      <h1>Edit {this.props.match.params.id}</h1>
    )
  }
}
