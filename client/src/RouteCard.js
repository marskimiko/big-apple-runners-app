import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


function RouteCard({ route }) {
  const {name, image_url, id} = route;

  return (
    <Stack direction="horizontal" gap={3}>
    <Card style={{ width: '18rem' }}> 
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link  to={`/routes/${id}`}><Button variant="primary">more info</Button></Link>
      </Card.Body>
    </Card>
    </Stack>

  )
}

export default RouteCard;
