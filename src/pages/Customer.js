import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import './customer.css'

const Customer = () => {
  return (
    <div>
      <div className="container-fluid">
        <Nav />
        <div className="col-md-12 d-flex">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="CS">
              <div className="CStop">
                <h3>Hello. What can we help you with?</h3>
              </div>
              <hr />
              <h5>Somethings you can do here</h5>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss" to="#">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="#" className="linkss">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Your Orders</h5>
                      <p className="card-text">
                        Track Packages<br />
                        Edit or cancel Orders
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <hr />
            <h5><b>Search the help library</b> &nbsp; &nbsp; <i>Type something like."question about a change"</i></h5><br />
            <div className="col-md-12">
              <input type="text" name="search" placeholder="Search.." />
            </div>
            <br />
            <hr />
            <br />
            <h3>Browse Help Topics</h3>
            <div className="d-flex" style={{ border: '1px solid #C0C0C0' }}>
              <div className="col-md-4" style={{ borderRight: '1px solid #C0C0C0', backgroundColor: '' }}>


                <div className="btn-group dropend">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Recommended Topics
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Where's My Stuff</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Cancel Items or Orders</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Returns & Refunds</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Shipping Rates & Information</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Change Your Payment Method</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Manage Your Account Information</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">About Two-Step Verification</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Where's My Stuff?
                  </button>
                  <ul className="dropdown-menu">
                    <li>Where's My Stuff?</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Find a Missing Package that Shows as Delivered</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>
                <div className="btn-group dropend" style={{ width: '100%' }}>
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  More to fill
                  </button>
                  <ul className="dropdown-menu">
                    <li>Learn how to ..</li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                    <li><Link to="#" className="links" className="dropdown-item links" to="#">Menu item</Link></li>
                  </ul>
                </div>

              </div>
              <div className="col-md-8"></div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Customer
