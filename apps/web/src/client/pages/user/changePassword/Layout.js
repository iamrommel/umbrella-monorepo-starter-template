import moment from 'moment'
import React from 'react'
import { Layout as LoginLayout } from '../login/Layout'
import { Form } from './Form'
import { AccountRegisterContainer } from '../../../components/AccountRegisterContainer'
import { Alert } from '../../../web-ui'

const LoginExpired = () => {
  return (
    <div>
      <LoginLayout alert={<Alert>Your password reset token has expired.</Alert>} isLoginScreen={false} />
    </div>
  )
}

const LoginColumns = ({ editPassword }) => {
  return (
    <AccountRegisterContainer>
      <article className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Change password</h4>
        </header>
        <Form editPassword={editPassword} />
      </article>
    </AccountRegisterContainer>
  )
}

export let Layout = ({ editPassword = {} }) => {
  const date = moment().diff(editPassword && editPassword.validTill, 'millisecond')

  if (date < 0) {
    return <LoginColumns editPassword={editPassword} />
  } else {
    return <LoginExpired />
  }
}
