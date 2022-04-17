import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import Preloader from '../../UI/Preloader/Preloader';
import { Link } from 'react-router-dom'

const Details = () => {

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])

  return (
    <>
      {
        isLoading
          ? <Preloader />
          : <Container>
            <Card style={{ width: '25rem', margin: '0 auto' }}>
              <Card.Body>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Title>Текст</Card.Title>
                <Card.Text style={{ marginTop: '15px' }}>
                  Я фронтенд разработчик занимаюсь разработкой более 2-ух лет.
                  <br />
                  Стек технологий : React, Redux ,TypeScript, JavaScript
                </Card.Text>
                <Nav.Link className="p-0" as={Link} to="/"><Button variant="primary">На главную</Button></Nav.Link>
              </Card.Body>
            </Card>
          </Container>
      }
    </>
  )
}

export default Details