import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faSnapchat} from '@fortawesome/free-brands-svg-icons'
import './pages.css'

function About() {
  return (
    <div>
      <Header />

      <div className="container-fluid">
          <div className="about-carousel" data-aos="fade-in"></div>
      </div>

      <div className="container-fluid text-center py-2 brands">
          <FontAwesomeIcon className="brand-icons" icon={faFacebook} size="3x"/>
          <FontAwesomeIcon className="brand-icons" icon={faInstagram} size="3x"/> 
          <FontAwesomeIcon className="brand-icons" icon={faTwitter} size="3x"/>
          <FontAwesomeIcon className="brand-icons" icon={faSnapchat} size="3x"/>
        </div>
      <Footer />
    </div>
  )
}

export default About
