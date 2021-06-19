import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import './sell.css'

const Sell = () => {
    return (
        <div className="container-fluid">
            <Nav/>
            <br/>
            <div className="container-fluid col-md-12 shadow-lg d-flex">
                <div className="col-md-6 py-1 topleft"><h3>Sell on Amazon</h3></div>
                <div className="col-md-6 py-1 topright">
                <Link to="/signup" className="button">Sign Up</Link>
                </div>
            </div>
            <br/>
            <div className="container-fluid d-flex">
            <div className="col-md-1"></div>
                <div className="col-md-5">
                    {/* <h1 className="become">Become an Amazon Seller</h1> */}
                    <h5>More than half the units sold in our stores are from independent sellers</h5>
                </div>
                <div className="col-md-5">
                    <center><img src="./images/prime.png"/></center>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Sell
