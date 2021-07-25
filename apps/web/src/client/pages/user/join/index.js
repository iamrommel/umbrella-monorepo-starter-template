import { useAuthFlow } from './useAuthFlow'
import React from 'react'
import { useLocalStorage } from '../../../web-ui'

export default ({ match, history }) => {
  let auth = match?.params?.auth
  const storage = useLocalStorage()

  useAuthFlow({ auth, storage, history })

  return <div>Redirecting to home page...</div>
}
