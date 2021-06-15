import React from 'react'
import Slider from "react-slick";
import './trending.css'

const Trending = () => {
    // make sure you paste it here... confusion part
    // change var to const after paste

    const settings = {
        dots: false,
        autoplay: true,
        infinite: false,
        speed: 800,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
                <Slider {...settings}>
          <div>
          <img src="./images/bike.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/car.png" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/house.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/bike.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/bike.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/bike.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/bike.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
          <div>
          <img src="./images/bike.jpg" className="img-fluid custom-slide" alt="trend"/>
          </div>
        </Slider>
            </div>
        </div>
    )
}

export default Trending
