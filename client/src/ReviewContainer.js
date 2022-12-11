import NewReview from './NewReview';
import ReviewCard from './ReviewCard'
import React, { useState } from 'react';

function ReviewContainer({ detailReviews }) {
  // unsure if this is how I should handle this, ask ben
  const [reviews, setReviews] = useState(detailReviews);

  function onUpdateReview(updatedReview) {
    const updatedReviews = detailReviews.map((review) => {
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
      {detailReviews.map((detailReview) => {
        return (
          <div>
            <ReviewCard detailReview={detailReview} key={detailReview.id} onUpdateReview={onUpdateReview}/>
          </div>
        )
      })}
      <NewReview detailReviews={detailReviews} reviews={reviews} setReviews={setReviews} />
    </div>
  )
}

export default ReviewContainer;