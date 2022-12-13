// import NewReview from './NewReview';
import ReviewCard from './ReviewCard'
import React, { useState } from 'react';

function ReviewContainer({ detailReviews, setRoutes, routes }) {
  // unsure if this is how I should handle this, ask ben
  // const [reviews, setReviews] = useState(detailReviews);

  console.log('detailreviews container', detailReviews)

  // console.log('reviews container', reviews)

  function onUpdateReview(updatedReview) {
    const updatedReviews = detailReviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setRoutes(updatedReviews);
  }

  return (
    <div classname="reviews">
      {detailReviews.map((review) => {
        return (
          <div>
            <ReviewCard 
              review={review} 
              key={review.id} 
              onUpdateReview={onUpdateReview}
              routes={routes}
              setRoutes={setRoutes}
              />
          </div>
        )
      })}
      {/* <NewReview detailReviews={detailReviews} reviews={reviews} setReviews={setReviews} setRoutes={setRoutes} routes={routes}/> */}
    </div>
  )
}

export default ReviewContainer;