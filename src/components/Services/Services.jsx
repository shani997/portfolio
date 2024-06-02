import React from 'react'
import './services.css'
import Marquee from 'react-fast-marquee'

const Services = () => {
  return (
    <section className="services section">
      <div className="services-container">
        <Marquee gradient={false} speed={60} pauseOnHover>



          <h1 className="welcome-text">WEB</h1>
          <h1 className="welcome-text">DEVELOPMENT</h1>

          <h1 className="welcome-text">FULLSTACK</h1>
          <h1 className="welcome-text">DEVELOPMENT</h1>

          <h1 className="welcome-text">FRONT-END</h1>
          <h1 className="welcome-text">DEVELOPMENT</h1>


          <h1 className="welcome-text">BACK-END</h1>
          <h1 className="welcome-text">DEVELOPMENT</h1>


          <h1 className="welcome-text">WEB</h1>
          <h1 className="welcome-text">DEVELOPMENT</h1>



          <h1 className="welcome-text">FRONT-END</h1>
          <h1 className="welcome-text">DEVELOPMENT</h1>
        </Marquee>
      </div>
    </section>
  )
}

export default Services