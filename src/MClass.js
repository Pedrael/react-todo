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

  componentDidMount() {
    console.log('component mounted')
    this.randomfield = 'did mount randomfield'
    this.setState({
        classProp: 'did mount'
      })
    this.setState((state, props) => ({
      classProp2: state.classProp + ' is classProp2'
    }))
  }

  componentWillUnmount() {
    console.log('component unmounted')
    this.randomfield = 'did unmount randomfield'
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.classProp} onChange={this.changeProp}></input>
        <p>{this.state.classProp}</p>
        <p>{this.state.classProp2}</p>
        <p>{this.props.external}</p>
        <p>{this.randomfield}</p>
        <p>_____________________________</p>
      </Fragment>
    )
  }
}
