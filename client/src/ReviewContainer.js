// import NewReview from './NewReview';
import ReviewCard from './ReviewCard'
// import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function ReviewContainer({ detailReviews, setRoutes, routes }) {
  const params = useParams();
  // console.log('review container', routes)
  // console.log('detail reviews in review container', detailReviews)


  function onUpdateReview (updatedReview) {

    const updatedRoutes = routes.map((route) => {
      if (parseInt(params.id) === route.id) {
        const reviews = route.reviews;
        
        const reviewsMap = reviews.map((review) => {
          if (review.id === updatedReview.id) {
            return updatedReview
          } else {
            return review;
          }
        })
        
        route.reviews = reviewsMap
        return route

      } else {
        return route;
      }
    })
    setRoutes(updatedRoutes);
  }


  return (
    <div className="container">
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
    </div>
  )
}

export default ReviewContainer;