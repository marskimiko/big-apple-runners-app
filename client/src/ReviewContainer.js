// const renderReviews = detailReviews.map((detailReview) => {
//   return detailReview
// })

import ReviewCard from './ReviewCard'

function ReviewContainer({detailReviews}) {

  return (
    <div classname="reviews">
      {detailReviews.map((detailReview) => {
        return (
          <div>
            <ReviewCard detailReview={detailReview} key={detailReview.id}/>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewContainer;