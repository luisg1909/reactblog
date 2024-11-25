import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { getCurrentUser, logout } from '../utils/Auth';
import { Link, useNavigate } from 'react-router-dom';

const AppNavbar = () => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Clear the session or local storage
    navigate('/'); // Redirect to home
  };
  const handleCreate = () => {
    
    navigate('/postcreate'); // Redirect to home
  };
  return (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">BlogApp</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      {currentUser ? (
           <>
           <Nav.Link onClick={handleCreate}>Create</Nav.Link>
           <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
           </>

        ) : (
          <Nav.Link href="/login">Login</Nav.Link>

        )}
    </Nav>
  </Navbar>
);
};
export default AppNavbar;
