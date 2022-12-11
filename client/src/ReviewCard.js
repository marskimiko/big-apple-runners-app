import EditReview from './EditReview'
import React, { useState, useEffect } from 'react'

function ReviewCard ({detailReview, onUpdateReview }) {

  const {title, body, rating} = detailReview

  const handleUpdateReview = (updatedReview) => {
    onUpdateReview(updatedReview);
  }

  // useEffect(() => {
  // }, [detailReview])

  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <h3>{rating} ⭐️</h3>
      <EditReview detailReview={detailReview} onUpdateReview={onUpdateReview} handleUpdateReview={handleUpdateReview} />
    </div>
  )
}

export default ReviewCard;