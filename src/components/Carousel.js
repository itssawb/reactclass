import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/slide11.jpg" className="d-block w-100" alt="No Image" style={{width:'100%'}}/>
    </div>
    <div className="carousel-item">
      <img src="./images/slide22.jpg" className="d-block w-100" alt="No Image" style={{width:'100%'}}/>
    </div>
    <div className="carousel-item">
      <img src="./images/slide33.jpg" className="d-block w-100" alt="No Image" style={{width:'100%'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel
