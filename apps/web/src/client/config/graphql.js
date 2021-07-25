import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { Utils } from 'pcmli.umbrella.uni-core'
import { Setting } from './settings'

export const setupApolloClient = () => {
  const win = Utils.getWindow()
  let token = win?.localStorage?.getItem?.('totalmilk-login-token')
  //switch to specific URL depending when the token is available

  const apolloState = Utils.jsonTryParse(win?.__APOLLO_STATE__)
  const cache = new InMemoryCache().restore(apolloState)

  //create the http middleware
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers, accessing the local storage should be here so it will be executed
    //everytime there is a need for context
    operation.setContext({
      headers: {
        'totalmilk-login-token': token,
        credentials: 'include',
      },
    })
    return forward(operation)
  })

  //create the http link
  const httpLink = new HttpLink({ uri: Setting.appSettings.AppService.graphqlUrl })

  //create the error link for the http only

  const link = ApolloLink.from([authMiddleware, httpLink])

  return new ApolloClient({
    link,
    cache,
    ssrForceFetchDelay: 100,
  })
}
