import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const { logOut, user } = useFirebase();
  // console.log(user)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light"  sticky="top">
        <Container>
          <Link className="navbar-brand container " to="/home"><img className="img-fluid" width="120" height="80" src="https://www.obokash.com/images/logo.png" alt="" /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className="nav-link active hover" to="/">Home</Link>
    <Link className="nav-link hover" to="/about">About</Link>
    <Link className="nav-link" to="/services">Services</Link>
    <Link className="nav-link" to="/addService">Add Service</Link>
    
    { user.displayName?<Link onClick={logOut} className="nav-link bg-info" to="/login">{user.displayName} Logout</Link> : <Link className="nav-link bg-info rounded-2" to="/login">Login</Link>}
    
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
      </>      
    );
};

export default Header;