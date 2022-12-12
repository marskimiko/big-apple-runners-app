import NewReview from './NewReview';
import ReviewCard from './ReviewCard'
import React, { useState } from 'react';

function ReviewContainer({ detailReviews, setRoutes, routes }) {
  // unsure if this is how I should handle this, ask ben
  const [reviews, setReviews] = useState(detailReviews);

  function onUpdateReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setReviews(updatedReviews);
  }

  return (
    <div classname="reviews">
      {reviews.map((review) => {
        return (
          <div>
            <ReviewCard 
              review={review} 
              key={review.id} 
              onUpdateReview={onUpdateReview}
              reviews={reviews}
              setReviews={setReviews}
              />
          </div>
        )
      })}
      <NewReview detailReviews={detailReviews} reviews={reviews} setReviews={setReviews} setRoutes={setRoutes} routes={routes}/>
    </div>
  )
}

export default ReviewContainer;