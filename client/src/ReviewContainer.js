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

    const updatedReviews = routes.map((route) => {
      if (parseInt(params.id) === route.id) {
        // issue maybe happening in here for why route wont update

        const editedReview = [...route.reviews, updatedReview]
        route.reviews = editedReview
        return route
        // console.log(route)
      } else {
        return route;
      }
    })
    setRoutes(updatedReviews);
    console.log('updated reviews', updatedReviews)
  }

  console.log('review container', routes)
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