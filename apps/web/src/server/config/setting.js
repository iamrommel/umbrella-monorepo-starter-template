import pkg from '../../../package.json'
import { Base64 } from 'pcmli.umbrella.uni-core'

export const Setting = {
  appSettings: {
    debug: process.env.NODE_ENV === 'test',
    RootUrl: process.env.ROOT_URL,
    NODE_ENV: process.env.NODE_ENV,
    Logger: {
      DbUrl: process.env.LOGGER_DB_URL,
    },
    Google: {
      clientId: process.env.GOOGLE_CLIENTID,
      secret: process.env.GOOGLE_SECRET,
      apiKey: process.env.PUBLIC_GOOGLE_API_KEY,
      recaptchaSecret: process.env.GOOGLE_RECAPTCHA_SECRETKEY,
    },
    Mailgun: {
      apiKey: process.env.MAILGUN_APIKEY,
      domain: process.env.MAILGUN_DOMAIN,
      sender: process.env.MAILGUN_SECRET,
    },
    AppName: process.env.APP_NAME,
    AppFullName: process.env.APP_FULL_NAME,
    MONGO_URL: process.env.MONGO_URL,
    AppService: {
      rootUrl: process.env.SERVICE_ROOT_URL,
      graphqlUrl: `${process.env.SERVICE_ROOT_URL}/graphql/${Base64.btoa({ tenantId: process.env.TENANT_CODE })}`,
    },
    supportEmail: process.env.SUPPORT_EMAIL,
  },
  version: pkg.version,
  client: {
    appSettings: {
      RootUrl: process.env.ROOT_URL,
      Stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLEKEY,
      },
      AppService: {
        rootUrl: process.env.SERVICE_ROOT_URL,
        graphqlUrl: `${process.env.SERVICE_ROOT_URL}/graphql/${Base64.btoa({ tenantId: process.env.TENANT_CODE })}`,
      },
      Google: {
        recaptchaSiteKey: process.env.GOOGLE_RECAPTCHA_SITEKEYS,
      },
      supportEmail: process.env.SUPPORT_EMAIL,
    },

    version: pkg.version,
  },
}
