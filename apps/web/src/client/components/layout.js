import Header from './Header'
import Footer from './footer'
import React from 'react'

export default function Layout({ children, history }) {
  return (
    <>
      <Header history={history} />
      {children}
      <Footer />
    </>
  )
}
