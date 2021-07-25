import React from 'react'
import logo from './logo.png'

export const Logo = ({ className = 'logo', type = 'black', style = { height: 50 } }) => {
  const logoSrc = type === 'black' ? logo : logo
  return (
    <React.Fragment>
      <img className={className} src={logoSrc} alt=" logo" style={style} />
    </React.Fragment>
  )
}
