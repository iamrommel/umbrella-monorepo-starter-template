import http from 'http'
import app from './server'

let currentApp = app,
  server = null

const port = process.env.PORT || 3000

app.on('ready', function () {
  server = http.createServer(app)

  server.listen(port, (error) => {
    if (error) console.error(error)
    console.info(`🚀🚀🚀🚀🚀🚀🚀🚀🚀 started at port ${port}`)
  })

  if (module.hot) {
    console.info('✅  Server-side HMR Enabled!')
    module.hot.accept('./server', () => {
      console.info('🔁  HMR Reloading `./server`...')
      server.removeListener('request', currentApp)
      const newApp = require('./server').default
      server.on('request', newApp)
      currentApp = newApp
    })
  }
})
