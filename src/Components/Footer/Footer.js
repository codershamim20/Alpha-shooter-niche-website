import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
    return (
        
            <div className="container-fluid bg-light   ">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col-3 bg-light ">
    <ul className="list-group list-group-flush ">
  <li className="list-group-item ">Home</li>
  <li className="list-group-item ">About</li>
  <li className="list-group-item ">Products</li>
  <li className="list-group-item ">Contact Us</li>
  
</ul></div>
          <div className="col-5 mx-auto my-auto">ALPHA  SHOOTERS          
          </div>
          <div className="col-4 my-auto mx-auto">
            <i class="fab fa-facebook"></i> <br />
            <i class="fab fa-linkedin"></i> <br />
            <i className="fab fa-instagram-square"></i>
                <Link className="navbar-brand container " to="/home"><img className="img-fluid" width="150" height="90" src="https://alphashooters.b-cdn.net/wp-content/uploads/2020/12/alpha-shooters-logo-text-400px.jpg" alt="" /></Link>
                </div>
                <small className="mx-auto">&copy; Copyright 2021, Alpha Shooters</small>
  </div>
</div>
        
    );
};

export default Footer;