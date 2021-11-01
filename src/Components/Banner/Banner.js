import React from "react";
import { Carousel } from "react-bootstrap";


import "./Banner.css";

const Banner = () => {
  return (
    <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.obokash.com/imgs/banners/travel-agent-in-bangladesh.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
      <h3>BEST TRAVEL AGENT</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.obokash.com/imgs/banners/international-tour-packages-from-bangladesh.jpg"
      alt="Second slide"
    />

    <Carousel.Caption >
    <h3>BEST TRAVEL AGENT</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.obokash.com/imgs/banners/umrah-packages-from-bangladesh.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>BEST TRAVEL AGENT</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;
