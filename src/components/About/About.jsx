import React from 'react'
import './about.css'
import cv from '../../assets/Madushani gunasekara cv.pdf'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container container">
        <div className="about-content">
          <h3 className="about-title">More about me</h3>
          <p className="about-desc">Hello! I'm Madhushani, A fullstack developer</p>
          <p className="about-desc">I've developed my talents working on a range of projects, from static websites to complex single-page applications, and work well in both collaborative and independent environments.</p>
          <p className="about-desc about-desc-mb">I am always looking to learn, up for a challenge, and excited to bring my skills and experience to a new team to help create innovative and effective solutions.</p>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            <button className="button about-button">Download CV </button>
          </a>
        </div>
        <div className="about-txt">
          <div className="about-txt-center">

          </div>
        </div>
      </div>
    </section>
  )
}

export default About