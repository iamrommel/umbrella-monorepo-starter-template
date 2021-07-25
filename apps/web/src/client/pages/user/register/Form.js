import React from 'react'
import { Utils } from 'pcmli.umbrella.uni-core'
import { Register } from '../../../web-ui'

export const Form = ({ showAlert }) => {
  const [errorMessage, setErrorMessage] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async ({ username, name }) => {
    try {
      Utils.requiredCheck(name, 'Full name')
      Utils.requiredCheck(username, 'Email')

      if (!Utils.isValidEmail(username)) throw `"${username}" is not a valid email`

      setIsLoading(true)
      setErrorMessage(errorMessage)

      const url = `/auth/basic/register`
      const registerResult = await Utils.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, name }),
      })

      const { error } = registerResult || {}
      if (error) {
        throw error
      }

      showAlert({ alertMessage: 'Successful! Please check your email to verify your account.' })
      return true
    } catch (e) {
      const errorMessage = e.message || e
      setErrorMessage(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-sm">
      <Register errorMessage={errorMessage} handleSubmit={handleSubmit} isLoading={isLoading} disabled={false} />
    </div>
  )
}
