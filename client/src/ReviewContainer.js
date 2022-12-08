import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard'

function ReviewContainer() {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch('/reviews')
    .then((r)=> r.json())
    .then(setReviews)
  },[])

  return (
    <div>
      {reviews.map((review) => {
        return (
          <div>
            <ReviewCard key={review.id} review={review} />
          </div>
        )
      })}
    </div>
  )


}

export default ReviewContainer;