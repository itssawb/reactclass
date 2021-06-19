import React from 'react'
import { Link } from 'react-router-dom'
import './DealsSidebar.css'

const DealsSidebar = () => {
    return (
        <div>
            <div className="Sidebar">
                <h6 style={{ fontSize: '15px', padding: '15px', fontFamily: 'initial', lineHeight: '25px' }}>
                    <b>Categories</b>
                    <form>
                        <input type="reset" value="Clear all" className="clearall" />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">Mobile</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">Computers</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">Beauty</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">Books</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label">Camera & Photos</label>
                        </div>
                        <Link className="text-decoration-none" to="#">See More Categories</Link>
                    </form>
                </h6>
                <br />
                <h6 style={{ fontSize: '15px', padding: '15px', fontFamily: 'initial', lineHeight: '25px' }}>
                    <b>Deal Type</b><br />
                    <Link className="text-decoration-none" to="#">Deal of the Day</Link><br />
                    <Link className="text-decoration-none" to="#">Lightning Deals</Link><br />
                    <Link className="text-decoration-none" to="#">Savings & Sales</Link><br />
                    <Link className="text-decoration-none" to="#">Prime Early Access Deals</Link>
                </h6><br />
                <h6 style={{ fontSize: '15px', padding: '15px', fontFamily: 'initial', lineHeight: '25px' }}>
                    <b>Categories</b>
                    <form>
                        <input type="reset" value="Clear all" className="clearall" />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label">Active</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label">Upcoming</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" checked />
                            <label className="form-check-label">Missed</label>
                        </div>
                    </form>
                </h6>
                <h6 style={{ fontSize: '15px', padding: '15px', fontFamily: 'initial', lineHeight: '25px' }}>
                    <b>Price</b><br />
                    <Link className="text-decoration-none" to="#">Under $25</Link><br />
                    <Link className="text-decoration-none" to="#">$25 to $50</Link><br />
                    <Link className="text-decoration-none" to="#">$50 to $100</Link><br />
                    <Link className="text-decoration-none" to="#">$100 to $200</Link>
                    <Link className="text-decoration-none" to="#">$200 & Above</Link>
                </h6>
                <h6 style={{ fontSize: '15px', padding: '15px', fontFamily: 'initial', lineHeight: '25px' }}>
                    <b>Deal Type</b><br />
                    <Link className="text-decoration-none" to="#">10% Off or More</Link><br />
                    <Link className="text-decoration-none" to="#">25% Off or More</Link><br />
                    <Link className="text-decoration-none" to="#">50% Off or More</Link><br />
                    <Link className="text-decoration-none" to="#">70% Off or More</Link>
                </h6>
                <h6 style={{ fontSize: '15px', padding: '15px', fontFamily: 'initial', lineHeight: '25px' }}>
                    Avg. Customer Review <br />
                    <Link to="#">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="far fa-star"></span> & Up
                    </Link><br />
                    <Link to="#">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span> & Up
                    </Link><br />
                    <Link to="#">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span> & Up
                    </Link><br />
                    <Link to="#">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span> & Up
                    </Link><br />

                </h6>
            </div>
        </div>
    )
}

export default DealsSidebar
