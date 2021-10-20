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
  <li className="list-group-item ">Services</li>
  <li className="list-group-item ">Body Care</li>
  
</ul></div>
          <div className="col-5 mx-auto my-auto">MENI DERMA CLINIC
          
          </div>
                <div className="col-4 my-auto mx-auto"><i class="fab fa-facebook"></i> <br/><i className="fab fa-instagram-square"></i>
                <Link className="navbar-brand container " to="/home"><img className="img-fluid" width="120" height="80" src="https://41zz543enuttlqrp2nkjet9i-wpengine.netdna-ssl.com/wp-content/themes/meni/images/logo.png" alt="" /></Link>
                </div>
                <small className="mx-auto">&copy; Copyright 2021, MENI DERMA CLINIC</small>
  </div>
</div>
        
    );
};

export default Footer;