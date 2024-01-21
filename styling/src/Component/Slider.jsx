import React from "react";

export default function Slider() {
  return (
    <>
      <div>
        {/* Carousel */}
        <div id="demo" className="carousel slide p-4" data-bs-ride="carousel">
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          </div>
          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="WhatsApp Image 02.jpg"
                alt="Los Angeles"
                className="d-block"
                id="slideri1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="WhatsApp Image 01.jpg"
                alt="Chicago"
                className="d-block"
                id="slideri1"
              />
            </div>
          </div>
          {/* Left and right controls/icons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </>
  );
}