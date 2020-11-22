import React, { useState, useEffect, Component, Fragment } from "react"
import Context from "./context"
import Loader from "./Loader"

class MСlassComponent extends Component {

  constructor(props) {

    super(props)
    this.state = {
      classProp: ''
    }

    changeProp = (event) => {
    console.log(this.state.classProp)
    this.setState({
        classProp: event.target.value
      })
    }

    render() {
      return {
        <Fragment>
          <select value={this.state.classProp} onChange={this.changeProp}>
          <p>{this.state.classProp}</p>
        </Fragment>
      }
    }
  }
}

export default MClassComponent
