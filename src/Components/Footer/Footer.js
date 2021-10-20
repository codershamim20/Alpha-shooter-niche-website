import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        
            <div className="container-fluid bg-secondary   ">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col-3 ">
    <ul className="list-group list-group-flush ">
  <li className="list-group-item bg-secondary">Home</li>
  <li className="list-group-item bg-secondary">About</li>
  <li className="list-group-item bg-secondary">Services</li>
  <li className="list-group-item bg-secondary">Body Care</li>
  
</ul></div>
          <div className="col-5 mx-auto my-auto">MENI DERMA CLINIC
          
          </div>
                <div className="col-4 my-auto mx-auto"><i class="fab fa-facebook"></i> <br/><i className="fab fa-instagram-square"></i>
               
                </div>
                <small className="mx-auto">&copy; Copyright 2021, MENI DERMA CLINIC</small>
  </div>
</div>
        
    );
};

export default Footer;