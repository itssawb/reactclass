import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Trending from '../components/Trending'


const Home = () => {
    return (
        <div>
            <Nav/>
            <Carousel/>
            <br/>
            <hr/>
            <br/>
            <Card/>
            <hr/>
            <Trending/>
            <Footer/>
        </div>
    )
}

export default Home
