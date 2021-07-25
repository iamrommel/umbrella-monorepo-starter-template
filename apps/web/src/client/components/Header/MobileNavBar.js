import React from 'react'
import { Link } from 'react-router-dom'
import { routesDef } from '../../config/routes'
import { MobileSideBarContainer } from '../MobileSideBarContainer'

export const MobileNavBar = ({ show = false, onShow }) => {
  const header = <h4>Browse Panelpunches</h4>

  return (
    <MobileSideBarContainer onShow={onShow} show={show} header={header}>
      <ul className="  mt-3 list-unstyled">
        <li>
          <Link className="nav-link" to={routesDef.AccountOverview.path}>
            My account
          </Link>
        </li>
      </ul>
    </MobileSideBarContainer>
  )
}
