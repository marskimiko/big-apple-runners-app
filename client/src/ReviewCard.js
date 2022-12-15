import React, { useState } from 'react';
import EditReview from './EditReview'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function ReviewCard ({review, onUpdateReview, reviews, setReviews, routes, setRoutes }) {

  const styles = {
    main: {
      display: "flex",
      width: "18rem",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  }

  

  const {title, body, rating, id} = review;
  const [isEdit, setIsEdit] = useState(false);
  // console.log('review card', routes)

  const handleUpdateReview = (updatedReview) => {
    // console.log(updatedReview)
    onUpdateReview(updatedReview);
    console.log('updatedReview', updatedReview);
  }

  // const handleDelete = () => {
  //   // deleteListing(id);
  //   fetch(`/reviews/${id}`, {
  //     method: 'DELETE',
  //   });
  //   const updatedReviews = reviews.filter((review) => review.id !== id);
  //   setReviews(updatedReviews);
  // };

  // useEffect(() => {
  // }, [review])

  // return (
  //   <div>
  //     <h1>{title}</h1>
  //     <h2>{body}</h2>
  //     <h3>{rating} ⭐️</h3>
  //     <button>🗑</button>
  //     <EditReview review={review} handleUpdateReview={handleUpdateReview} key={id} routes={routes}/>
  //   </div>
  // )


  return (
    <Card style={styles.main}>
      <Card.Header as="h5">{title}</Card.Header>
      {isEdit ?(
        <EditReview review={review} handleUpdateReview={handleUpdateReview} key={id} routes={routes} setIsEdit={isEdit}/>
      ) : (
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <Card.Text>{rating}</Card.Text>
          <Button 
              onClick={() => setIsEdit((isEdit) => !isEdit)}
              type="button" 
              variant="outline-secondary"
              >Edit
          </Button>
          <Button variant="outline-secondary">🗑</Button>
        </Card.Body>
      )}
    </Card>
  );

  
}



export default ReviewCard;