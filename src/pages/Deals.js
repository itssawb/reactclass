import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import DealsSidebar from '../components/DealsSidebar'
import Card from '../components/Card'


const Deals = () => {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <h3>Deals and Promotions</h3>
                    <span>Shop Today's Deals, Lightning Deals and Limited-time discount</span>
                    <div className="col-md-2">
                    <DealsSidebar />
                    </div>
                    <div className="col-md-10">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Deals
