import React from "react";
import { Carousel } from "react-bootstrap";


import "./Banner.css";

const Banner = () => {
  return (
    <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.foreveryoungsc.com/wp-content/uploads/FY-vivace-ptb-600-v2.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
      <h3>WELCOME TO THE WORLDS BEST DERMA CLINIC</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.foreveryoungsc.com/wp-content/uploads/FY-botox-ptb-600.jpg"
      alt="Second slide"
    />

    <Carousel.Caption >
    <h3>WELCOME TO THE WORLDS BEST DERMA CLINIC</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.foreveryoungsc.com/wp-content/uploads/FY-hydrafacial-ptb-600.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>WELCOME TO THE WORLDS BEST DERMA CLINIC</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.foreveryoungsc.com/wp-content/uploads/FY-coolsculpting-ptb-600.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>WELCOME TO THE WORLDS BEST DERMA CLINIC</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;
