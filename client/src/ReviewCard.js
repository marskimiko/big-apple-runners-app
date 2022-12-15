import React, { useState, useEffect } from 'react';
import EditReview from './EditReview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'

function ReviewCard ({review, onUpdateReview, routes, setRoutes }) {
  const {title, body, rating, id} = review;
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();

  const handleUpdateReview = (updatedReview) => {
    onUpdateReview(updatedReview);
  }

  function deleteReview(deletedReview) {
    const updatedRoutes = routes.map((route) => {
      if (parseInt(params.id) === route.id) {
        const reviews = route.reviews;
        const filteredReview = reviews.filter((review) => review.id !== deletedReview);
        route.reviews = filteredReview
        return route 
      } else {
        return route 
      }
    })
    setRoutes(updatedRoutes)
  }


  const handleDelete = () => {
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    });
    deleteReview(id)
  };



  return (
    <div class="reviewcontainer">
      <div class="reviewitem">
    <Card className="text-center">
      <Card.Header as="h5">{title}</Card.Header>
      {isEdit ?(
        <EditReview review={review} handleUpdateReview={handleUpdateReview} key={id} routes={routes} setIsEdit={setIsEdit} isEdit={isEdit}/>
      ) : (
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <Card.Text>{rating} ⭐️</Card.Text>
          <Button 
              onClick={() => setIsEdit((isEdit) => !isEdit)}
              type="button" 
              variant="outline-secondary"
              >Edit
          </Button>
          <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>
        </Card.Body>
      )}
    </Card>
    </div>
    </div>
  );

  
}



export default ReviewCard;