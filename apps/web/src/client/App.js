import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './styles'
import './config/toastr'

import { NotFound } from './pages/NotFound'
import { blankRoutes, defaultRoute, mainRoutes, privateRoutes } from './config/routes'

export default () => {
  return (
    <Switch>
      {mainRoutes}
      {privateRoutes}
      {defaultRoute}
      {blankRoutes}
      <Route component={NotFound} />
    </Switch>
  )
}
