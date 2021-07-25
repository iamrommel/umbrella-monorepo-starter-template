import { setupLogger } from 'pcmli.umbrella.backend'
import express from 'express'
import { setupMongoose } from './server/config/mongoose'
import { Setting } from './server/config/setting'

const expressApp = express()
export default expressApp

//make sure the database is connected first before doing any controller calls
setupMongoose()
  .then(() => {
    //this has dependency on mongoose to connect first
    //so require is used in order to have mongoose setup correctly before call them
    require('./server/config/routes').setupRoute(expressApp)
    require('./server/config/passport').setupPassport(expressApp)
    setupLogger({ appSettings: Setting.appSettings })
    require('./server/config/browser').setupBrowser({ express, expressApp })

    //emit that the express is ready to roll
    expressApp.emit('ready')
  })
  .catch((error) => {
    console.error(`Database Connection Error : ${error}`)
    throw error
  })
