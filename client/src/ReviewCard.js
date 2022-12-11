import EditReview from './EditReview'

function ReviewCard ({detailReview, onUpdateReview }) {
  console.log(detailReview)

  const {title, body, rating} = detailReview

  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <h3>{rating} ⭐️</h3>
      <EditReview detailReview={detailReview} onUpdateReview={onUpdateReview} />
    </div>
  )
}

export default ReviewCard;