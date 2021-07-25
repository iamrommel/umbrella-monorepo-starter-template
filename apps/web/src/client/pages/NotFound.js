import React from 'react'

export const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '70vh' }}>
          <h1>404</h1>
          <h3 className="font-bold">Page Not Found</h3>

          <div className="text-info">
            Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser.
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
