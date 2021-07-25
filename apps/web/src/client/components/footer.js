import React from 'react'
import { Link } from 'react-router-dom'
import { routesDef } from '../config/routes'
import { Setting } from '../config/settings'
import { Logo } from './Logo/Logo'
import { EmailLink } from './EmailLink'
import { PhoneNumberLink } from './PhoneNumberLink'

function Footer() {
  return (
    <>
      <footer className="section-footer border-top bg-secondary text-white-50">
        <div className="container">
          <section className="footer-top padding-y">
            <div className="row">
              <aside className="col-sm-4 col-md-4">
                <article className="mr-3">
                  <Logo className="logo-footer" type="white" />

                  <ul className="list-unstyled mt-3">
                    <li>
                      <PhoneNumberLink />
                    </li>
                    <li>
                      <EmailLink />
                    </li>
                    <li>
                      <i className="fa fa-map" /> Batangas City, <br /> Batangas, PH, 4200
                    </li>
                  </ul>
                </article>
              </aside>
              <aside className="col-sm-4 col-md-4">
                <h6 className="title text-white">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to={routesDef.HomePage.path}>
                      <a>Home</a>
                    </Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-4 col-md-4">
                <h6 className="title text-white">For users</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to={routesDef.LoginPage.path}>User Login</Link>
                  </li>
                  <li>
                    <Link to={routesDef.RegisterPage.path}> User register </Link>
                  </li>
                </ul>
              </aside>
            </div>

            <div className="footer-copyright border-top">
              <p className="float-left text-muted">
                © 2021 Rommel C. Manalo, Inc. All rights reserved
                <br />
                <small>v {Setting?.version}</small>
              </p>
              <p className="float-right text-muted">
                <Link to={routesDef.HomePage.path}>Privacy &amp; Cookies</Link> &nbsp; &nbsp;
              </p>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footer
