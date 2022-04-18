import React from 'react'
import HomeContainer from './HomeContainer'
import { Card, Container } from 'react-bootstrap';

const Home = () => {

  return (
    <>
      <Container>
        <Card.Title style={{ marginTop: '20px' }}>Категория 1</Card.Title>
        <HomeContainer />
        <Card.Title style={{ marginTop: '20px' }}>Категория 2</Card.Title>
        <HomeContainer />
        <Card.Title style={{ marginTop: '20px' }}>Категория 3</Card.Title>
        <HomeContainer />
        <Card.Title style={{ marginTop: '20px' }}>Категория 4</Card.Title>
        <HomeContainer />
      </Container>
    </>
  )
}

export default Home