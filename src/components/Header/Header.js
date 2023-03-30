import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" variant="dark">
      <Container className="mt-2">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <input className="w-100 p-2 search-field m-2" type="text" placeholder="What do you want" />
            
          </Nav>
          <Nav className="text-center">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
