import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import service_cake from '../utils/images/cake.jpg'
import food1 from '../utils/images/food1.jpg'
import food3 from '../utils/images/food3.jpg'
import service_soup from '../utils/images/soup.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faBirthdayCake, faHeart} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTwitter, faSnapchat} from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './pages.css'

function Home() {

  AOS.init()

  return (
    <div>
      <Header />

      <div className="d-flex flex-column justify-content-center align-items-center carousel-container">
        <h1 data-aos="fade-up" data-aos-delay="1500" style={{color: 'aqua'}}>GOOD TASTE. GOOD SENSE.</h1>
        <h5 data-aos="fade-right" data-aos-duration="1000" style={{color: 'aqua'}}>Place for delicacies</h5>
        <button data-aos="flip-up" data-aos-duration="1200">Order NOW!</button>
      </div>

      {/*  Our Services*/}

      <div className="container-fluid pt-5">
        <h3>Our Services</h3>
        <div className="row service-cake mt-5">
          <div className="col-sm-12 col-lg-6 col-md-6 mw-25">
            <img data-aos="fade-up" data-aos-duration="1000" alt="cake" src={service_cake} className="img-fluid service-cake-image"/>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-6 ps-3">
            <h4>Cake</h4>
            <p className="mw-75">Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
                Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
                excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
              </p>
          </div>
        </div>

        <div className="row d-lg-flex service-soup mt-5">
          <div className="col-sm-12 order-lg-2 order-md-2 col-lg-6 col-md-6 pe-3">
            <img data-aos="fade-right" data-aos-duration="1000" alt="soup" src={service_soup} className="img-fluid"/>
          </div>
          <div className="col-sm-12 order-lg-1 order-md-1 col-lg-6 col-md-6">
            <h4>Soup</h4>
            <p>Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
                Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
                excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
              </p>
          </div>
        </div>

        <div className="row service-cake mt-5">
          <div className="flex-grow-1 col-sm-12 col-lg-6 col-md-6">
            <img data-aos="fade-up" data-aos-duration="1000" alt="rice" src={food3} className="img-fluid service-cake-image"/>
          </div>
          <div className="flex-grow-1 col-sm-12 col-lg-6 col-md-6 ps-3">
            <h4>Rice</h4>
            <p className="mw-75">Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
              Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
              excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
            </p>
          </div>
        </div>

        <div className="row d-lg-flex service-soup mt-5">
          <div className="order-lg-2 order-md-2 col-sm-12 col-lg-6 col-md-6 pe-3">
            <img data-aos="fade-right" data-aos-duration="1000" alt="pasta" src={food1} className="img-fluid"/>
          </div>
          <div className="order-lg-1 order-md-1 col-sm-12 col-lg-6 col-md-6">
            <h4>Pasta</h4>
            <p>Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
                Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
                excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
              </p>
          </div>
        </div>
      </div>

      {/* Our Package */}
      <div className="container-fluid package pt-3">
        <h3>Our Package</h3>
        <div className="row d-flex">
         <div className="d-flex flex-wrap justify-content-between text-center">
          <div className="package-birthday px-1 col-lg-4 col-md-4 col-sm-12">
            <div data-aos="flip-left" data-aos-duration="1200" data-aos-delay="1000">
              <FontAwesomeIcon icon={faBirthdayCake} size="3x" color="rgb(240, 66, 66)" />
            </div>
            
              <h5>Birthday</h5>
              <p>Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
                Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
                excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
              </p>
          </div>

          <div className="package-valentine px-1 col-lg-4 col-md-4 col-sm-12">
            <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="1000">
              <FontAwesomeIcon icon={faHeart} size="3x" color="red" />
            </div>
          
            <h5>Valentine</h5>
            <p>Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
              Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
              excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
            </p>
          </div>

          <div className="package-wedding px-1 col-lg-4 col-md-4 col-sm-12">
            <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="1000">
              <FontAwesomeIcon icon={faDrumstickBite} size="3x" color="rgba(34, 1, 1, 0.849)" />
            </div>
         
            <h5>Brunch</h5>
            <p>Culpa enim consectetur sunt nostrud non minim incididunt laboris velit ullamco. 
              Eiusmod minim consectetur minim ea nisi. Labore cillum irure reprehenderit ipsum sunt non ea anim 
              excepteur culpa. Deserunt ipsum do voluptate aute nulla Lorem in dolor dolore fugiat.
            </p>
          </div>
         </div>
        </div>
      </div>

      <div className="container-fluid py-5 text-center">
        <h3 className="mb-2">Get the latest cuisine</h3>
        <form className="row d-flex justify-content-center">
          <div className="col-auto">
            <input type="email" className="form-control-lg" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-lg btn-primary">Send</button>
          </div>
        </form>
      </div>

      <div className="container-fluid text-center py-2 brands">
          <FontAwesomeIcon className="brand-icons" icon={faFacebook} />
          <FontAwesomeIcon className="brand-icons" icon={faInstagram} /> 
          <FontAwesomeIcon className="brand-icons" icon={faTwitter} />
          <FontAwesomeIcon className="brand-icons" icon={faSnapchat} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
