import React from 'react'
import { Route } from 'react-router-dom'
import { values, filter } from 'lodash'

import Layout from '../components/layout'
import { BlankLayout } from '../components/BlankLayout'
import { Page } from '../components/Page'
import { Loadable } from '../web-ui'

export const routesDef = {
  HomePage: {
    name: 'Home',
    path: '/',
    component: Loadable({ loader: () => import('../pages/home') }),
    exact: true,
    layout: 'main',
  },

  AccountOverview: {
    name: 'Account Overview',
    path: '/account/overview',
    component: Loadable({ loader: () => import('../pages/user/profile') }),
    exact: true,
    layout: 'private',
  },
  LoginPage: {
    name: 'Login',
    path: '/account/login',
    altPath: '/account/login',
    component: Loadable({ loader: () => import('../pages/user/login') }),
    exact: true,
    layout: 'main',
  },
  JoinPage: {
    name: 'Login',
    path: '/account/join/:auth*',
    altPath: '/account/join',
    component: Loadable({ loader: () => import('../pages/user/join') }),
    exact: true,
    layout: 'blank',
  },
  RegisterPage: {
    name: 'Register',
    path: '/account/register',
    altPath: '/account/register',
    component: Loadable({ loader: () => import('../pages/user/register') }),
    exact: true,
    layout: 'main',
  },
  ChangePasswordPage: {
    name: 'ChangePassword',
    path: '/account/changePassword/:editPassword*',
    altPath: '/account/changePassword',
    component: Loadable({ loader: () => import('../pages/user/changePassword') }),
    exact: true,
    layout: 'main',
  },
}
export const routesArray = values(routesDef)
export const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
export const BlankLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <BlankLayout {...props}>
          <Component {...props} />
        </BlankLayout>
      )}
    />
  )
}
export const PrivateLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Page>
            <Component {...props} />
          </Page>
        </Layout>
      )}
    />
  )
}

const mapLayoutRoute = (arr, LayoutComponent) => {
  return arr.map((m, i) => {
    return <LayoutComponent key={i} {...m} />
  })
}

export const defaultRoute = <BlankLayoutRoute {...routesDef.HomePage} path="/" />
export const mainRoutes = mapLayoutRoute(filter(routesArray, { layout: 'main' }), MainLayoutRoute)
export const blankRoutes = mapLayoutRoute(filter(routesArray, { layout: 'blank' }), BlankLayoutRoute)
export const privateRoutes = mapLayoutRoute(filter(routesArray, { layout: 'private' }), PrivateLayoutRoute)
