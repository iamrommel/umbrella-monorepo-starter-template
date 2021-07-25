import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { routesDef } from '../../../config/routes'
import { FormHelper } from './FormHelper'
import { ChangePassword } from '../../../web-ui'

class Form extends Component {
  constructor(props) {
    super(props)
    this.helper = new FormHelper({ ...this, setState: this.commonSetState, routesDef })
  }

  state = {
    errorMessage: null,
    isLoading: false,
  }

  commonSetState = (params) => {
    this.setState(params)
  }

  handleSubmit = async (params) => {
    await this.helper.handleSubmit(params)
  }

  render() {
    const { isLoading, errorMessage } = this.state

    return (
      <div className="m-t">
        <ChangePassword handleSubmit={this.handleSubmit} isLoading={isLoading} errorMessage={errorMessage} />
      </div>
    )
  }
}

Form = withRouter(Form)
export { Form }
