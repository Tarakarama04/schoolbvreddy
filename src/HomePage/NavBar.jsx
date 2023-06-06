import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'

function NavBar() {
  return (  
    <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
      <Container>
        <img src='./images/logo.png' alt='logo'/>
        <Navbar.Brand >B.V Reddy School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <NavDropdown title="About Us" id="collasible-nav-dropdown" variant="Info">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto" >
            <NavDropdown title="Academics" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto" >
            <NavDropdown title="Admissions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto" >
            <NavDropdown title="Student Life" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto" >
            <NavDropdown title="Inrastructure" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto" >
            <NavDropdown title="Hostel" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto" >
            <NavDropdown title="Contact us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar