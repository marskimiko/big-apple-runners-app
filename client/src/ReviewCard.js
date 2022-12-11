import EditReview from './EditReview'
import React, { useState } from 'react'

function ReviewCard ({detailReview, onUpdateReview }) {

  const {title, body, rating} = detailReview
  const [isEdit, setIsEdit] = useState(false)

  const handleUpdateReview = (updatedReview) => {
    setIsEdit(false);
    onUpdateReview(updatedReview);
  }

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