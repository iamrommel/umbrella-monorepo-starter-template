import React from 'react'
import { Provider } from './Context'
import { Layout } from './Layout'

export default (props) => {
  return (
    <Provider {...props}>
      <Layout />
    </Provider>
  )
}
