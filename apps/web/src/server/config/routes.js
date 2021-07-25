import { Route, routeAsyncHandler, UserController, setupRecaptchaRoute, Mailer } from 'pcmli.umbrella.backend'
import { Setting } from './setting'
import { Utils } from 'pcmli.umbrella.uni-core'

const appSettings = Setting.appSettings

export const setupRoute = (server) => {
  const route = new Route({ express: server, appSettings })

  server.get('/logout/:accessToken', routeAsyncHandler(logout))

  server.post('/request-quote', requestQuote)

  server.post('/recaptcha', setupRecaptchaRoute({ recaptchaSecretKey: appSettings.Google.recaptchaSecret }))

  return route
}

const logout = async (req, res) => {
  const controller = new UserController({ appSettings: Setting.appSettings })
  const accessToken = req?.params?.accessToken
  await controller.logout({ accessToken })
  await req?.logout()

  res.redirect('/')
}

const requestQuote = async (req, res) => {
  const { quantity, message, contact } = req?.body ?? {}
  const mailer = new Mailer({ appSettings })

  let from = 'website@panelpunches.com'
  if (Utils.isValidEmail(contact)) {
    from = contact
  }

  await mailer.send({
    to: appSettings.supportEmail,
    from,
    subject: `Request for quote from panel punches website from ${contact}`,
    message: `${message} asking for ${quantity} pieces`,
  })

  res.json({ ok: true })
}
