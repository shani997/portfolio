import React from 'react'
import './footer.css'
import { BsArrowUp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <p className="copyright">© Copyright – 2022 Designed & Built By <a href="https://github.com/shani997" target="_blank" className="copyright_name">Madhushani</a></p>
        <a href="#home" className="back-top-btn">
          <span className="footer_span">Back To Top</span>
          <BsArrowUp />
        </a>
      </div>
    </footer>
  )
}

export default Footer