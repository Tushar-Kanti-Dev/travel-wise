import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
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
            <div className="navbar-items">
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/slick'>Slick</CustomLink>
            {/* <CustomLink to='/swiper'>Swiper</CustomLink> */}
            <CustomLink to='/login'>Login</CustomLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
