import React from 'react'
import { useUser } from '../hooks/useUser'
import { Alert, ShowIf } from '../web-ui'
import { routesDef } from '../config/routes'

export const Page = ({ children }) => {
  const { loggedIn } = useUser()
  return (
    <React.Fragment>
      <ShowIf condition={loggedIn}>{children}</ShowIf>
      <ShowIf condition={!loggedIn}>
        <div className="mt-5 mb-5 container">
          <Alert>
            <h1 className="pt-5 pb-5 text-center">
              You do not have permission to view this page. <br />
              <small>You need to sign in first in order to view it.</small>
            </h1>
            <div className="text-center">
              <a className=" btn btn-primary" href={routesDef.LoginPage.path}>
                Sign in now!
              </a>
            </div>
          </Alert>
        </div>
      </ShowIf>
    </React.Fragment>
  )
}
