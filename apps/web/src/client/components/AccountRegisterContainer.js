import React from 'react'

export const AccountRegisterContainer = ({ children }) => {
  return (
    <React.Fragment>
      <section className="section-content padding-y">
        <div className="card mx-auto" style={{ maxWidth: '380px' }}>
          {children}
        </div>
      </section>
    </React.Fragment>
  )
}
