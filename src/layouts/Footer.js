import React from 'react'
import './layout.css'

function Footer() {
  return (
    <div className="footer pt-3 pb-3">
      <div className="container-fluid justify-content-between ">
        <div className="row d-flex">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h1 className="logo ps-3">De-Ferdinands</h1>
          </div>
          <div className="text-left col-lg-4 col-md-4 col-sm-12">
            <address>
              Gambo Lodge, <br />
              Umuchima,<br />
              FUTO, Owerri<br />
              Imo State
            </address>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="p-0">
              <li>Home</li>
              <li>Place an order</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

    <p className="m-auto d-flex justify-content-center"> De-ferdinands &copy;{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
