import React from 'react'

export const PhoneNumberLink = ({ className }) => {
  return (
    <React.Fragment>
      <a href="tel:+639293355546" className={className}>
        <i className="fa fa-phone" /> +63929-335-5546
      </a>
    </React.Fragment>
  )
}
