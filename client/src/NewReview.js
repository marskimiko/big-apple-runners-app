import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

function NewReview( { setRoutes, routes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const params = useParams();
  
  
  const newReview = {
    title,
    body,
    rating
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview)
  
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch(`/routes/${params.id}`, configObj)
    // fetch(`/reviews`, configObj)
      .then((r) => r.json())
      .then((review) => {
        addNewReview(review);
        console.log('review',review)
      });
  }

  useEffect(() => {
  }, [routes])

  
  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form.Title">
          <Form.Label>Title</Form.Label>
          <Form.Control id="title"
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
            id="body"
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="form.Rating">
            <Form.Label>Rating: 1-5</Form.Label>
            <Form.Control 
            id="body"
            type="text"
            name="body"
            value={rating}
            onChange={(e) => setRating(e.target.value)}/>
        </Form.Group>
        <Button type="submit">Add Review</Button>
      </Form>
    </Container>
  )
  
}

export default NewReview;