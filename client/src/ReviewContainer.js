// import NewReview from './NewReview';
import ReviewCard from './ReviewCard'
// import React, { useState } from 'react';
import { useParams } from 'react-router-dom' 

function ReviewContainer({ detailReviews, setRoutes, routes }) {
  const params = useParams();
  // unsure if this is how I should handle this, ask ben
  // const [reviews, setReviews] = useState(detailReviews);

  // console.log('detailreviews container', detailReviews)

  // console.log('reviews container', reviews)

  // function onUpdateReview(updatedReview) {
  //   const updatedReviews = detailReviews.map((review) => {
  //     if (review.id === updatedReview.id) {
  //       return updatedReview;
  //     } else {
  //       return review;
  //     }
  //   });
  //   setRoutes(updatedReviews);
  // }

  function onUpdateReview (updatedReview) {
    // debugger
    const updatedReviews = routes.map((route) => {
      if (parseInt(params.id) === route.id) {
        // debugger
        const editedReview = [...route.reviews, updatedReview]
        route.reviews = editedReview
        return route
      } else {
        return route;
      }
    })
    setRoutes(updatedReviews);
  }

  return (
    <div className="reviews">
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