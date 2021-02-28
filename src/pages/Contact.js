import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter, faSnapchat} from '@fortawesome/free-brands-svg-icons'
import './pages.css'

function Contact() {
  return (
    <div>
      <Header />
        <div className="container-fluid">
          <div className="contact-carousel d-flex justify-content-center align-items-center">
            <h1>De-Ferdinands</h1>
          </div>
        </div>

        <div className="container py-3 form-box">
          <form>
            <div className="row d-flex my-3">
              <label htmlFor="inputName" className="form-label">Name *</label>
              <div className="col-auto flex-grow-1">
                <input type="text" className="form-control" />
                <label htmlFor="inputFirstName" className="form-label form-text">First Name</label>
              </div>

              <div className="col-auto flex-grow-1">
                <input type="text" className="form-control" />
                <label htmlFor="inputLastName" className="form-label form-text">Last Name</label>
              </div>
            </div>

            <div className="my-3">
              <label htmlFor="inputEmail" className="form-label">Email *</label>
              <input type="email" className="form-control" />
            </div>

            <div className="my-3">
              <label htmlFor="inputSubject" className="form-label">Subject *</label>
              <input type="text" className="form-control" />
            </div>

            <div className="my-3">
              <label htmlFor="inputMessage" className="form-label">Message *</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
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

export default Contact
