import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import GeneralSearch from './GeneralSearch'
import { UserWidget } from './UserWidget'
import Navbar from './Navbar'
import { useHistory } from 'react-router'

export const DesktopHeader = () => {
  const history = useHistory()

  return (
    <React.Fragment>
      <header className="section-header bg-primary d-none d-lg-block">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-6">
                <div className="brand-wrap">
                  <Link to="/">
                    <Logo className="img img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 ">
                <GeneralSearch history={history} />
              </div>

              <div className="col-lg-4">
                <div className=" float-md-right text-white">
                  <UserWidget />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <div className="d-none d-lg-block">
        <Navbar className="bg-light" />
      </div>
    </React.Fragment>
  )
}
