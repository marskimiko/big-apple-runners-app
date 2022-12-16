import React, { useState } from 'react';
import EditReview from './EditReview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'

function ReviewCard ({review, onUpdateReview, routes, setRoutes, user }) {
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

  function checkUserEditButton() {
    if (review.user_id === user.id) {
      return ( <Button onClick={() => setIsEdit((isEdit) => !isEdit)} type="button" variant="outline-secondary">Edit</Button> )
    } else {
      return null
    }
  }

  function checkUserDeleteButton() {
    if (review.user_id === user.id) {
      return ( <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button> )
    } else {
      return null
    }
  }

  <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>

  return (
    <div class="reviewcontainer">
      <div class="reviewitem">
    <Card className="text-center">
      <Card.Header as="h5">{title}</Card.Header>
      {isEdit ?(
        <EditReview
          user={user} 
          review={review} 
          handleUpdateReview={handleUpdateReview} 
          key={id} 
          routes={routes} 
          setIsEdit={setIsEdit} 
          isEdit={isEdit}
        />
      ) : (
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <Card.Text>{rating} ⭐️</Card.Text>
          {checkUserEditButton()}
          {checkUserDeleteButton()}
        </Card.Body>
      )}
    </Card>
    </div>
    </div>
  );

  
}



export default ReviewCard;