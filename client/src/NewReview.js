import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

function NewReview( { setRoutes, routes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const params = useParams();
  const [errors, setErrors] = useState([]);

  const style = {
    reviewForm: {
      border: "2px solid #D3D3D3",
      borderRadius: '25px',
      paddingTop: '40px',
      width: '200px',
      height: '350px'
    }
  }

    const addNewReview = (review) => {
  
      const newRoutes = routes.map((route) => {
        if (parseInt(params.id) === route.id) {
          const newReviews = [...route.reviews, review]
          route.reviews = newReviews
          return route;
        } else {
          return route;
        }
      })
      setRoutes(newRoutes)
  }


  function handleSubmit(e){
    e.preventDefault()

    const review = {
      title,
      body,
      rating
    };

    fetch(`/routes/${params.id}`, {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(review)
    })

    .then(res => {
      if(res.ok){
        res.json().then(review => {
          addNewReview(review)
        })
      } else {
          res.json().then(json => setErrors(json.errors))
      }
    })  
  }


  // className="square border rounded border-5"
  return (
    <Container style={style.reviewForm}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form.Title">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="form.Body">
          <Form.Label>Body</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}             
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="form.Rating">
            <Form.Label>Rating: 1-5</Form.Label>
            <Form.Control 
            type="text"
            name="body"
            value={rating}
            onChange={(e) => setRating(e.target.value)}/>
        </Form.Group>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
               <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Button type="submit">Add Review</Button>
      </Form>
    </Container>
  )
  
}

export default NewReview;