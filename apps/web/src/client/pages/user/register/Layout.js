import React from 'react'
import { AccountRegisterContainer } from '../../../components/AccountRegisterContainer'
import { Link } from 'react-router-dom'
import { routesDef } from '../../../config/routes'
import { Form } from './Form'
import { Alert, ShowIf } from '../../../web-ui'

export const Layout = () => {
  const [successMessage, setSuccessMessage] = React.useState(null)

  const showAlert = ({ alertMessage }) => {
    setSuccessMessage(alertMessage)
  }

  return (
    <React.Fragment>
      <AccountRegisterContainer>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Register account</h4>
          </header>

          <ShowIf condition={successMessage}>
            <Alert type="success" icon="success" text={successMessage} />
          </ShowIf>
          <a href={`/auth/google`} className="btn btn-google btn-block mb-4">
            <i className="fab fa-google" /> &nbsp; Register using Google
          </a>
          <hr />
          <Form showAlert={showAlert} />
        </article>
      </AccountRegisterContainer>

      <p className="text-center mt-4 mb-5">
        Have an account? <Link to={routesDef.LoginPage.altPath}>Log In</Link>
      </p>
    </React.Fragment>
  )
}
