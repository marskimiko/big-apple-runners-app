import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

function NewRoute({ routes, setRoutes, addRoute }) {
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const style = {
    routeForm: {
      border: "2px solid #D3D3D3",
      borderRadius: '25px',
      paddingTop: '40px',
      width: '200px',
      height: '600px'
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('event', e)

  //   const newRoute = {
  //     name,
  //     image_url,
  //     location,
  //     time,
  //     distance
  //   }

  //   fetch('/routes', {
  //     method: "POST",
  //     headers:{'Content-Type': 'application/json'},
  //     body:JSON.stringify(newRoute)
  //   })


  //   .then((r) => r.json())
  //   .then((route) => {
  //     addRoute(route)
  //     navigate('/routes');
  //   })
  // }

  function handleSubmit(e){
    e.preventDefault()

    const newRoute = {
      name,
      image_url,
      location,
      time,
      distance
    };

    fetch('/routes', {
      method: "POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newRoute)
    })

    .then(res => {
      if(res.ok){
        res.json().then(route => {
          addRoute(route)
          navigate('/routes');
        })
      } else {
          res.json().then(json => setErrors(json.errors))
      }
    })  
  }


  return (
    <Container style={style.routeForm}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
        <Form.Label>Name:</Form.Label>
          <Form.Control
            id="name"
            type="text"
            name="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="body">Image URL:</Form.Label>
          <Form.Control
            id="image"
            type="text"
            name="body"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="body">Location:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            id="location"
            type="text"
            name="body"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="body">Time:</Form.Label>
          <Form.Control
            as="textarea"
            id="time"
            type="text"
            name="body"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Form.Label htmlFor="body">Distance:</Form.Label>
          <Form.Control
            as="textarea"
            id="distance"
            type="text"
            name="body"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </Form.Group>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
               <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Button type="submit">Create Listing</Button>
      </Form>
    </Container>
  )
}

export default NewRoute;