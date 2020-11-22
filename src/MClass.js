import React, { useState, useEffect, Component, Fragment } from "react"

export default class MСlassComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      classProp: ''
    }
  }

  changeProp = (event) => {
  console.log(this.state.classProp)
  this.setState({
      classProp: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.classProp} onChange={this.changeProp}></input>
        <p>{this.state.classProp}</p>
        <p>{this.props.external}</p>
      </Fragment>
    )
  }
}
