import React from 'react'
import { Card, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbars = () => {
  const [avatar, setAvatar] = React.useState([
    { id: 1, img: 'https://i.pravatar.cc/150?img=15' }
  ]);

  return (
    <Navbar bg="gray" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Gallery App</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Никита | nik.illarionov777@mail.ru</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {
              avatar.map(ava => {
                const { id, img } = ava
                return (
                  <Card.Img variant="top" key={id} src={img}
                    style={{ width: '70px', height: '70px', borderRadius: '50%' }} />
                )
              })
            }
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Item as={Link} to="/" 
                style={{marginTop: 20, fontSize: 22}}>Галерея</NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/about" 
                style={{fontSize: 22}}>Обо мне</NavDropdown.Item>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar >
  )
}

export default Navbars