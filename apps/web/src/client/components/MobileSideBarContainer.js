import React from 'react'

export const MobileSideBarContainer = ({ show, onShow, header, children }) => {
  const [sidebarStyle, setSidebarStyle] = React.useState({})

  React.useEffect(() => {
    if (show) {
      setSidebarStyle({ width: '90%' })
    } else {
      setSidebarStyle({ width: 0 })
    }
  }, [show])

  return (
    <React.Fragment>
      <div className="d-block d-lg-none">
        <div className="sidebar" style={sidebarStyle}>
          <a className="close-button" onClick={() => onShow(false)}>
            <i className="fas fa-times" />
          </a>
          <div className="header">{header}</div>
          <hr className="mx-2" />
          <div className="p-2">{children}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
