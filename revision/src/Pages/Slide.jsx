import React from 'react'

export default function Slide() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://tse3.explicit.bing.net/th?id=OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK&pid=Api&P=0&h=180" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://varnitec.com/sites/default/files/2020-06/2.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}
