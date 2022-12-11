import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditReview({ detailReview, onUpdateReview }) {
  const { title, body, rating, id } = detailReview;


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
      onUpdateReview(updatedReview);
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
      <Button variant="success" type="submit">
        Save
      </Button>
    </Form>
    </Container>
  );
}

export default EditReview;