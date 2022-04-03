import React from 'react';
import { Link } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect >
      <Link to="landing"  spy={true} smooth={true} duration={1000}> 
          <Navbar.Brand  className="nav-brand justify-content-center"> 
          <i className="material-icons">donut_large</i>JONATHAN NOBLE
          </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="ml-auto nav-wrapper">
        <Link to="aboutme" offset={-80} spy={true} smooth={true} duration={1000}><Nav.Link>About Me</Nav.Link></Link>
        <Link to="projects" offset={-80} spy={true} smooth={true} duration={1000}><Nav.Link>Projects</Nav.Link></Link>
        <Link to="resume" offset={-80} spy={true} smooth={true} duration={1000}><Nav.Link>Resume</Nav.Link></Link>
        <Link to="contact" offset={-80} spy={true} smooth={true} duration={1000}><Nav.Link>Contact</Nav.Link></Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>  
  );

}

export default Navigation;
