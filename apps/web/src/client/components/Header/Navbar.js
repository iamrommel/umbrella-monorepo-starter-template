import React from 'react'
import { Link } from 'react-router-dom'
import { routesDef } from '../../config/routes'

export default function Navbar({ className }) {
  return (
    <>
      <nav className={`navbar navbar-main navbar-expand-lg ${className}`}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={routesDef.HomePage.path} className="nav-link text-primary">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
