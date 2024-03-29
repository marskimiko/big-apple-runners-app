import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import React, { useEffect } from 'react'

function MyRouteCard({ route }) {

  
  const {name, image_url, id} = route;

  // useEffect(() => {
  // }, [route])

  return (
    <div className="container">
      <div className="item">
        <Card> 
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link  to={`/routes/${id}`}><Button variant="success">more info</Button></Link>
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default MyRouteCard;