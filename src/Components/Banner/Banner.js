import React from "react";
import { Carousel } from "react-bootstrap";


import "./Banner.css";

const Banner = () => {
  return (
    <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/t2dOkoGdh64/hqdefault.jpg"
      height="600"width="700"alt="First slide"
    />
    <Carousel.Caption >
      <h3 className="text-success">WELCOME TO THE WORLDS BEST CAMERA SHOP</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://alphashooters.b-cdn.net/wp-content/uploads/2020/12/sony-a6500-flash-front-768x580.jpg"
      height="650"width="700"alt="Second slide"
    />

    <Carousel.Caption >
    <h3>WELCOME TO THE WORLDS BEST CAMERA SHOP</h3>
      <p className="text-success">CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://alphashooters.b-cdn.net/wp-content/uploads/2020/12/sony-a7riii-500px.jpg"
      height="650" width="700"alt="Third slide"
    />

    <Carousel.Caption>
    <h3>WELCOME TO THE WORLDS BEST CAMERA SHOP</h3>
      <p>CUSTOMER SATISFACTION IS OUR PRIORITY</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;
