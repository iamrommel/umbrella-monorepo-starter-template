import { Authentication } from 'pcmli.umbrella.backend'
import { Setting } from './setting'

import { Base64 } from 'pcmli.umbrella.uni-core'
import moment from 'moment'

export const setupPassport = (express) => {
  const authentication = new Authentication({ appSettings: Setting.appSettings, express })
  authentication._defaultLoginCallback = _defaultLoginCallback
  authentication._generateForgotPasswordUrl = _generateForgotPasswordUrl
  authentication?.setupBasic({ useLoginCallback: true })
  authentication?.setupGoogle()
}

const _defaultLoginCallback = async ({ res, req }) => {
  const user = req?.user
  const _id = user?._id?.toString()
  const accessToken = user.accessToken

  if (user?.error) {
    return res.status(400).json(user)
  }

  const params = Base64.btoa({ _id, accessToken })
  res.redirect(`/account/join/${params}`)
}

const _generateForgotPasswordUrl = ({ validTill, user } = {}) => {
  const date = validTill ? moment(validTill, 'MMMM DD YYYY, h:mm:ss a') : moment()
  validTill = date.add(1, 'days')

  const params = Base64.btoa({ _id: user._id.toString(), validTill })
  return `${Setting.appSettings.RootUrl}/account/changePassword/${params}`
}
