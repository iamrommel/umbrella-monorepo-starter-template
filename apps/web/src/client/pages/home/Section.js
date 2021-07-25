import React from 'react'

export default function Section({ title, children }) {
  return (
    <>
      <section className="padding-y border-top ">
        <header className="section-heading ">
          <h4 className="title-section text-uppercase">{title}</h4>
        </header>

        {children}
      </section>
    </>
  )
}
