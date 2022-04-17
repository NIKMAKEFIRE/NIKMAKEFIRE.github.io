import axios from 'axios';
import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {

  const [avatar, setAvatar] = React.useState([
    { id: 1, img: 'https://i.pravatar.cc/150?img=15' }
  ]);

  return (
    <Container>
      <Card style={{ width: '25rem', margin: '0 auto' }}>
        <Card.Body>
          <div className="d-flex align-items-center">
            {
              avatar.map(ava => {
                const { id, img } = ava
                return (
                  <Card.Img variant="top" key={id} src={img}
                    style={{ width: '90px', height: '90px', borderRadius: '50%' }} />
                )
              })
            }
            <Card.Title style={{ marginLeft: '15px', fontSize: '30px' }}>Никита</Card.Title>
          </div>
          <Card.Text style={{ marginTop: '15px' }}>
            Я фронтенд разработчик занимаюсь разработкой более 2-ух лет.
            <br />
            Стек технологий : React, Redux ,TypeScript, JavaScript
          </Card.Text>
          <Nav.Link className="p-0" as={Link} to="/"><Button variant="primary">На главную</Button></Nav.Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About
{/* <Container className="d-flex justify-content-center align-items-center">
<div className="card col-md-4">
  <div className="card-body text-dark">
    <div className="d-flex align-items-center">
      {
        avatar.map(ava => <img key={ava.id} src={ava.img} alt="avatar"
          style={{ width: '90px', height: '90px', borderRadius: '50%' }} />)
      }
      <h1 className="card-title ml-100">Bob</h1>
    </div>
    <p className="card-text text-secondary">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sed ducimus modi rem,
      molestiae doloribus iure! Quia saepe, quas nobis inventore sunt reprehenderit
      beatae quisquam iste iure earum repellendus modi?
    </p>
    
    <Nav.Link className="p-0" as={Link} to="/"><Button variant="primary">На главную</Button></Nav.Link>
  </div>
</div>
</Container> */}