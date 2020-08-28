import React from "react";
import "./Navbar.css";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-top">
      <Navbar.Brand href="#home" style={{ marginLeft: "3rem" }}>
        लोकसेवाको तयारि
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ marginRight: "5rem" }}>
          <Nav.Link href="#home">होमपेज</Nav.Link>
          <Nav.Link href="#home">नमुना प्रश्नोत्तर</Nav.Link>
          <Nav.Link href="#link">हालको जानकारी</Nav.Link>

          <NavDropdown title="विषयगत अभ्यास" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">भूगोल</NavDropdown.Item>
            <NavDropdown.Item href="#link">ईतिहास</NavDropdown.Item>
            <NavDropdown.Item href="#link">राजनीति</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#link">अन्य बिषयहरु</NavDropdown.Item>
          </NavDropdown>
          <button className="login-signup">
            <Nav.Link href="#link">जोडिनुहोस</Nav.Link>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
