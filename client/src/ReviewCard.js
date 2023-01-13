import React, { useState, useEffect } from 'react';
import EditReview from './EditReview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'

function ReviewCard ({review, onUpdateReview, routes, setRoutes, user, setUser }) {
  const {title, body, rating, id} = review;
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();

  const handleUpdateReview = (updatedReview) => {
    onUpdateReview(updatedReview);
  }

  useEffect(() => {
  }, [setUser])

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

  // const updateUser = (user) => {
  //   console.log(user)
  // }

  // const updateUser = (review) => {
  //   // console.log('review', review)
  //   const userRoute = user.routes
  //   console.log(user.reviews)
  //   const updateRoutes = [...userRoute]
  //   // console.log("From Review Card->"+JSON.stringify(updateRoutes))
  //   user.routes = updateRoutes
  //   setUser(user)
  // }

  const handleDelete = () => {
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    });
    deleteReview(id)
    // updateUser(id)
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
    <div className="reviewcontainer">
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