import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { logout, user } = useAuth();
  console.log(user)
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light"  sticky="top">
        <Container>
          <Link className="navbar-brand container " to="/home"><img className="img-fluid" width="150" height="90" src="https://alphashooters.b-cdn.net/wp-content/uploads/2020/12/alpha-shooters-logo-text-400px.jpg" alt="" /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className="nav-link active hover" to="/">Home</Link>
    <Link className="nav-link hover" to="/about">About</Link>
    <Link className="nav-link" to="/products">Products</Link>
    <Link className="nav-link" to="/reviews">Reviews</Link>
    <Link className="nav-link" to="/dashboard">Dashboard</Link>
    <Link className="nav-link" to="/contactus">Contact</Link>
    <Link className="nav-link" to="/register">Register</Link>
    { user.email?<Link onClick={logout} className="nav-link bg-success" to="/login">{user.displayName} Logout</Link> : <Link className="nav-link bg-success rounded-2" to="/login">Login</Link>}
    
    </Nav>
          </Navbar.Collapse> 
          
        </Container>
        
      </Navbar>
      <br/> <h2 className="text-center">Sony Alpha Mirrorless Cameras</h2>
      </>      
    );
};

export default Header;