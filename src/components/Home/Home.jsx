import React from 'react'
import './home.css'
import full from '../../assets/fullstack.png'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <p className="home-subtitle">Hi, welcome to my portfolio_  I'm Madhushani</p>
        <div className="home-image-container">
          <img src={full} alt="logo" className="home-image" />
        </div>
        <p className="home-desc">
          developer based in Colombo – SRI LANKA _{' '}
          <span className="home-span">passionate about building user-friendly <span className="and">&</span> responsive projects.</span>
        </p>
      </div>
      <div className="line"></div>
    </section>
  )
}

export default Home