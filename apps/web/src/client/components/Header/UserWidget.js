import React from 'react'
import { Link } from 'react-router-dom'
import { routesDef } from '../../config/routes'
import { useUser } from '../../hooks/useUser'
import { Utils } from 'pcmli.umbrella.uni-core'
import { ShowIf } from '../../web-ui'
import { Logout } from '../Logout'

export const UserWidget = () => {
  const { loggedIn } = useUser()

  return (
    <div className="widget-header icontext">
      <div className="text">
        <ShowIf condition={loggedIn}>
          <WelcomeUser />
        </ShowIf>
        <ShowIf condition={!loggedIn}>
          <WelcomeGuest />
        </ShowIf>
      </div>
    </div>
  )
}

export const WelcomeGuest = () => {
  return (
    <>
      <div className="widget-header mr-3">
        <div className="icontext">
          <div className="text">
            <small className="title">Welcome guest!</small>
            <div>
              <Link to={routesDef.LoginPage.altPath}>Sign in</Link>
              <span className="dark-transp"> | </span>
              <Link to={routesDef.RegisterPage.altPath}> Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const WelcomeUser = () => {
  const { user } = useUser()

  return (
    <>
      <div className="widget-header">
        <small className="title">Hello {Utils.truncate(user?.profile?.name ?? '', 15)}!</small>
        <div>
          <Logout>Logout</Logout>
          <span className="dark-transp"> | </span>
          <Link to={routesDef.AccountOverview.path}> My account</Link>
        </div>
      </div>
    </>
  )
}
