import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand as={Link} to="/">Gallery</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Галерея</Nav.Link>
            <Nav.Link as={Link} to="/about">Обо мне</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Navbars