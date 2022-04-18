import React from 'react'
import { Button, Card, Container, Nav } from 'react-bootstrap'
import Preloader from '../../UI/Preloader/Preloader';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getImagesFetchAC } from '../../redux/actions/actionCreator';

const Details = () => {
  const dispatch = useDispatch()
  const images = useSelector(state => state.getImages.images)
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      dispatch(getImagesFetchAC(images))
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
                {
                  images.map(image => {
                    const { id, thumbnailUrl, title} = image
                    return (
                      <div key={id}>
                        <Card.Img variant="top" src={thumbnailUrl} />
                        <Card.Title>{id}</Card.Title>
                        <Card.Text style={{ marginTop: '15px' }}>
                        {title}
                        </Card.Text>
                      </div>
                    )})}
                <Nav.Link className="p-0" as={Link} to="/"><Button variant="primary">На главную</Button></Nav.Link>
              </Card.Body>
            </Card>
          </Container>
      }
    </>
  )
}

export default Details