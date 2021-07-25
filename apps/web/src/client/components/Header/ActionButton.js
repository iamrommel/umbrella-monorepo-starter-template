import React from 'react'

export const ActionButton = ({ onClick, icon }) => {
  return (
    <React.Fragment>
      <i className={`icon-sm rounded-circle border  text-white fas fa-${icon}`} onClick={onClick} />
    </React.Fragment>
  )
}
