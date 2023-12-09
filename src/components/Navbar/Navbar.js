// Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Your Logo</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/music">
                  <Nav.Link>Music</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/page">
                  <Nav.Link>Pages</Nav.Link>
                </LinkContainer>
              </Nav>
              <div className="navbar-right">
                <LinkContainer to="/login">
                  <Button variant="outline-success" className="me-2">Sign In</Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="outline-info">Register</Button>
                </LinkContainer>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavigationBar;
