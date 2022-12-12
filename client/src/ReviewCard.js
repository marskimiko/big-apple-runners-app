import EditReview from './EditReview'
import React, { useEffect } from "react";

function ReviewCard ({review, onUpdateReview, reviews, setReviews }) {

  const {title, body, rating, id} = review;

  const handleUpdateReview = (updatedReview) => {
    onUpdateReview(updatedReview);
  }

  const handleDelete = () => {
    // deleteListing(id);
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    });
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  useEffect(() => {
  }, [review])

  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <h3>{rating} ⭐️</h3>
      <button onClick={handleDelete}>🗑</button>
      <EditReview review={review} onUpdateReview={onUpdateReview} handleUpdateReview={handleUpdateReview} />
    </div>
  )
}

export default ReviewCard;