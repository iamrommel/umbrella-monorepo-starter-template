import React from 'react'

const images = [
  'https://res.cloudinary.com/tmmshauler/image/upload/v1614947375/panelpunches/web-header/header-specialty.jpg',
  'https://res.cloudinary.com/tmmshauler/image/upload/v1614947375/panelpunches/web-header/header-gov-military.jpg',
  'https://res.cloudinary.com/tmmshauler/image/upload/v1614947349/panelpunches/web-header/header-aerospace.jpg',
  'https://res.cloudinary.com/tmmshauler/image/upload/v1614947375/panelpunches/web-header/header-research-other.jpg',
]

function CarouselItem({ src, description, active }) {
  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      <img className="w-100 img-fluid" src={src} alt={description} />
    </div>
  )
}

function Intro() {
  return (
    <>
      <section className="section-intro  ">
        <div className="intro-banner-wrap">
          <div id="carousel1_indicator" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {images.map((url, index) => (
                <li key={url} data-target="#carousel1_indicator" data-slide-to={`${index}`} className={`${index === 0 ? 'active' : ''}`} />
              ))}
            </ol>
            <div className="carousel-inner">
              {images.map((url, index) => (
                <CarouselItem src={url} key={url} active={index === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
