import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderComponent() {
  return (
    <Navbar bg="light" expand="md" data-bs-theme="light">
      <Container>
     
        <Navbar.Brand href="#home" className="fw-bold" >PrimeKit</Navbar.Brand>

      
        <Navbar.Toggle aria-controls="navbar-nav" />

       
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center fw-bold">
            <Nav.Link href="#home">Start</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

        
            <NavDropdown className=" btn-group dropend btn btn-primary fw-bold" title="Download Now" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
