import React from 'react'
import { Setting } from '../config/settings'

export const EmailLink = ({ className, email, onClick }) => {
  email = email ?? Setting?.appSettings?.supportEmail

  return (
    <React.Fragment>
      <a href={`mailto:${email}`} className={className} onClick={onClick}>
        <i className="fa fa-envelope" /> {email}
      </a>
    </React.Fragment>
  )
}
