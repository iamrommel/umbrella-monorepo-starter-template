import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'
import { Setting } from './setting'
import { StaticRouter } from 'react-router-dom'
import App from '../../client/App'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { Html } from '../../client/components/Html'
import ReactDOM from 'react-dom/server'
import React from 'react'
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

export const setupBrowser = ({ expressApp }) => {
  expressApp.get('/*', (req, res) => {
    //get the value of access token from the session
    //it's web application so it's full of state and we can use cookies
    let accessToken = req.session?.passport?.user?.accessToken

    const client = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        fetch,
        uri: Setting.appSettings.AppService.graphqlUrl,
        headers: {
          'totalmilk-login-token': accessToken,
        },
      }),
      cache: new InMemoryCache(),
    })

    const context = {}
    const mainApp = (
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      getDataFromTree(mainApp).then((content) => {
        // Extract the entirety of the Apollo Client cache's current state
        const initialState = client.extract()

        // Add both the page content and the cache state to a top-level component
        const html = (
          <Html
            content={content}
            state={initialState}
            assets={assets}
            isProduction={process.env.NODE_ENV === 'production'}
            env={{ ...Setting.client }}
          />
        )

        // Render the component to static markup and return it
        res.status(200)
        res.send(`<!doctype html>\n${ReactDOM.renderToString(html)}`)
        res.end()
      })
    }
  })
}
