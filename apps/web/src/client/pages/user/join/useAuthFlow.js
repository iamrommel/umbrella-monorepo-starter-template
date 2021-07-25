import React from 'react'
import { Base64, Utils } from 'pcmli.umbrella.uni-core'
import { isEmpty } from 'lodash'

export const useAuthFlow = ({ auth, storage, history, joinPagePath = '/' }) => {
  React.useEffect(() => {
    if (isEmpty(auth)) return
    const authAtob = Utils.jsonTryParse(Base64.atob(auth))

    //store this also to the local storage for further request
    storage.set('totalmilk-login-token', authAtob.accessToken)
    storage.set('totalmilk-login-userId', authAtob._id)

    //navigate to proper if already signIn
    //should navigate back to the last url that was submitte
    //history.push(`${joinPagePath}`)
    //do force window navigation to refresh the page
    if (Utils.hasWindow()) {
      window.location = joinPagePath
    }
  }, [auth, history, storage, joinPagePath])
}
