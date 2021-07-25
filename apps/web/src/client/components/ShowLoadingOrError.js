import React from 'react'
import { Alert, Spinner } from '../web-ui'

/**
 * This should reside on umbrella.web-ui
 * @param error
 * @param loading
 * @param children
 * @returns {JSX.Element|*}
 * @constructor
 */
export const ShowLoadingOrError = ({ error, loading, children }) => {
  //when it is still loading show this
  if (loading) {
    return (
      <div className="m5">
        <Spinner />
      </div>
    )
  }

  //when there is an error and not loading, show this
  if (!loading && error) {
    return (
      <Alert type="danger">
        <h3>There is an error loading content, please to refresh your browser.</h3>
        <small>{error?.message ?? error}</small>
      </Alert>
    )
  }

  //when everything is ok, then show this
  return children
}
