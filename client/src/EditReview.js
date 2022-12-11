import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditReview({ review, handleUpdateReview }) {
  const { title, body, rating, id } = review;


  const [formData, setFormData] = useState({
    title: title,
    body: body,
    rating: rating
  });

  function handleEditReview(e) {
    e.preventDefault();

    fetch(`/reviews/${id}`, {
    method: "PATCH",
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   })
    .then ((response) => response.json())
    .then((updatedReview) => {
      handleUpdateReview(updatedReview);
    });
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  return (
    <Container>
    <Form onSubmit={handleEditReview}>
      <Form.Label htmlFor="title">Title:</Form.Label>
      <Form.Control
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <Form.Label htmlFor="body ">Body:</Form.Label>
      <Form.Control
        type="text"
        name="body"
        value={formData.body}
        onChange={handleChange}
      />
      <Form.Label htmlFor="body ">Rating:</Form.Label>
      <Form.Control
        type="text"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
      />
      <Button variant="success" type="submit">
        Save
      </Button>
    </Form>
    </Container>
  );
}

export default EditReview;