import React from 'react'
import { AccountRegisterContainer } from '../../../components/AccountRegisterContainer'
import { Link } from 'react-router-dom'
import { routesDef } from '../../../config/routes'

import { Base64, Utils } from 'pcmli.umbrella.uni-core'
import { ForgotPassword, Login, ShowIf } from '../../../web-ui'

export const Layout = () => {
  const [isLoginScreen, setIsLoginScreen] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const showLoginScreen = () => {
    setIsLoginScreen(true)
  }

  const handleSubmit = async ({ username, password }) => {
    try {
      setIsLoading(true)

      let response

      response = await Utils.fetch(
        `/auth/basic`,
        {
          method: 'GET',
          headers: {
            Authorization: `Basic ${Base64.btoa(`${username}:${password}`)}`,
          },
          redirect: 'follow',
        },
        { lean: true }
      )

      if (response?.status >= 400) {
        let textResult = await response.json()
        return setErrorMessage(textResult?.error)
      }
      const redirectUrl = response?.url
      console.log(redirectUrl, 'here comes the url')
      window.location.href = redirectUrl
    } finally {
      setIsLoading(false)
    }
  }
  const forgotPasswordComponent = (
    <div className="mt-2 float-right">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          setIsLoginScreen(false)
        }}
      >
        <small>Forgot your password?</small>
      </a>
    </div>
  )

  return (
    <React.Fragment>
      <AccountRegisterContainer>
        <div className="card-body">
          <h4 className="card-title mb-4">Sign in</h4>

          <ShowIf condition={isLoginScreen}>
            <a href={`/auth/google`} className="btn btn-google btn-block mb-4">
              <i className="fab fa-google" /> &nbsp; Sign in with Google
            </a>
            <Login forgotPasswordComponent={forgotPasswordComponent} handleSubmit={handleSubmit} errorMessage={errorMessage} isLoading={isLoading} />
          </ShowIf>
          <ShowIf condition={!isLoginScreen}>
            <ForgotPassword after={showLoginScreen} />
            <div>
              <p>
                Already have login and password?
                <a href="#" onClick={showLoginScreen}>
                  &nbsp;&nbsp;Sign in
                </a>
              </p>
            </div>
          </ShowIf>
        </div>
      </AccountRegisterContainer>

      <p className="text-center mt-4 mb-5">
        Do not have account? <Link to={routesDef.RegisterPage.altPath}>Sign up</Link>
      </p>
    </React.Fragment>
  )
}
