import { Base64 } from 'pcmli.umbrella.uni-core'
import React, { useEffect, useState } from 'react'
import { Layout } from './Layout'

export default (props) => {
  const editPasswordString = props?.match?.params?.editPassword
  const [editPassword, setEditPassword] = useState(null)
  const history = props?.history

  useEffect(() => {
    try {
      if (!editPasswordString) return
      let authAtob = Base64.atob(editPasswordString)
      authAtob = JSON.parse(authAtob)

      setEditPassword(authAtob)
    } catch (e) {
      //for somehow there is error, just push ot not-found exception
      //Should navigate to error is really weird
      history.push('/error-in-app')
    }
  }, [editPasswordString])

  return <Layout editPassword={editPassword} />
}
