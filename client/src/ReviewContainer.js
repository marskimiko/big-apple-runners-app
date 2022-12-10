import NewReview from './NewReview';
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
      <NewReview detailReviews={detailReviews}/>
    </div>
  )
}

export default ReviewContainer;