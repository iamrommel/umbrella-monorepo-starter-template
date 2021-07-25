import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumb = () => {
  return (
    <React.Fragment>
      <section className="py-3 bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Category name</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Sub category</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Items
            </li>
          </ol>
        </div>
      </section>
    </React.Fragment>
  )
}
