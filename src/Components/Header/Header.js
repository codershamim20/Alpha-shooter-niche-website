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
<<<<<<< HEAD
          <Link className="navbar-brand container " to="/home"><img className="img-fluid" width="150" height="90" src="https://alphashooters.b-cdn.net/wp-content/uploads/2020/12/alpha-shooters-logo-text-400px.jpg" alt="" /></Link>
=======
          <Link className="navbar-brand container " to="/home"><img className="img-fluid" width="120" height="80" src="https://www.obokash.com/images/logo.png" alt="" /></Link>
>>>>>>> a6b5dbc676a926d9ec41bf33fd707c9987ebd38b
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className="nav-link active hover" to="/">Home</Link>
    <Link className="nav-link hover" to="/about">About</Link>
<<<<<<< HEAD
    <Link className="nav-link" to="/products">Products</Link>
    <Link className="nav-link" to="/reviews">Reviews</Link>
    <Link className="nav-link" to="/dashboard">Dashboard</Link>
    <Link className="nav-link" to="/contactus">Contact</Link>
    <Link className="nav-link" to="/register">Register</Link>
    { user.email?<Link onClick={logout} className="nav-link bg-success" to="/login">{user.displayName} Logout</Link> : <Link className="nav-link bg-success rounded-2" to="/login">Login</Link>}
=======
    <Link className="nav-link" to="/services">Services</Link>
    <Link className="nav-link" to="/addService">Add Service</Link>
    
    { user.displayName?<Link onClick={logOut} className="nav-link bg-info" to="/login">{user.displayName} Logout</Link> : <Link className="nav-link bg-info rounded-2" to="/login">Login</Link>}
>>>>>>> a6b5dbc676a926d9ec41bf33fd707c9987ebd38b
    
    </Nav>
          </Navbar.Collapse> 
          
        </Container>
        
      </Navbar>
      <br/> <h2 className="text-center">Sony Alpha Mirrorless Cameras</h2>
      </>      
    );
};

export default Header;