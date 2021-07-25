import React from 'react'
import { MobileNavBar } from './MobileNavBar'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import { ActionButton } from './ActionButton'
import { ShowIf } from '../../web-ui'
import GeneralSearch from './GeneralSearch'

export const MobileHeader = () => {
  const [showNavBar, setShowNavBar] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(false)

  return (
    <React.Fragment>
      <header className="bg-primary d-block d-lg-none py-2">
        <section className="container " style={{ height: '60px' }}>
          <div className="d-flex justify-content-between">
            <ShowIf condition={!showSearch}>
              <div className="">
                <ActionButton icon="bars" onClick={() => setShowNavBar(true)} />
              </div>

              <div className="">
                <Link to="/">
                  <Logo className="img img-fluid" type="white" />
                </Link>
              </div>

              <div className="d-flex">
                <ActionButton icon="search" onClick={() => setShowSearch(true)} />
                <div className="ml-1"></div>
              </div>
            </ShowIf>
          </div>

          <ShowIf condition={showSearch}>
            <div>
              <GeneralSearch onBack={() => setShowSearch(false)} />
            </div>
          </ShowIf>
        </section>
      </header>
      <MobileNavBar show={showNavBar} onShow={setShowNavBar} />
    </React.Fragment>
  )
}
