import React from 'react'
import { Spinner as SpinnerCore } from '../web-ui'

export const Spinner = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <SpinnerCore />
      </div>
    </React.Fragment>
  )
}
