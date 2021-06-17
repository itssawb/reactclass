import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="col-md-6 offset-md p-3 mt-3 mb-3 shadow-ld">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="mb-3">
                            Don't have Account yet? &nbsp;&nbsp;
                            <Link to="/signup">
                                <button className="btn btn-info">SignUp</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signin
