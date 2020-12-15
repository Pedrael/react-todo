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
      <Fragment>
        <div class="layout">
          <div class="edit-container">

            <div class="wrap">
              <h2>Title</h2>
              <input type="text" class="input" /> {/*note title*/}
            </div>

            <div class="todos"> {/*todos array*/}
              <div class="wrap">
                <input type="text" class="input" />
                  <div class="circle checkbox">
                    <div v-if="item.isChecked"><i class="fas fa-check"></i></div>
                  </div>
                  <div class="circle tech-button">
                    <i class="fas fa-trash-alt"></i> {/*remove todo*/}
                  </div>
              </div>

              <div class="wrap">  {/*add new todo*/}
                <input type="text" class="input" v-model="todoBuf.text" />
                <div class="circle checkbox"> {/* todo toggle */}
                  <div v-if="todoBuf.isChecked"><i class="fas fa-check"></i></div>
                </div>
                <div class="circle tech-button"> {/*add new todo button */}
                  <i class="fas fa-plus"></i>
                </div>
              </div>

            </div>

          </div>

        </div>

      </Fragment>
    )
  }
}
