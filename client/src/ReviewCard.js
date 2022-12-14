import EditReview from './EditReview'

function ReviewCard ({review, onUpdateReview, reviews, setReviews, routes, setRoutes }) {

  const {title, body, rating, id} = review;

  const handleUpdateReview = (updatedReview) => {
    onUpdateReview(updatedReview);
    // console.log('updatedReview', updatedReview);
  }

  // const handleDelete = () => {
  //   // deleteListing(id);
  //   fetch(`/reviews/${id}`, {
  //     method: 'DELETE',
  //   });
  //   const updatedReviews = reviews.filter((review) => review.id !== id);
  //   setReviews(updatedReviews);
  // };

  // useEffect(() => {
  // }, [review])

  return (
    <div>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <h3>{rating} ⭐️</h3>
      <button>🗑</button>
      <EditReview review={review} handleUpdateReview={handleUpdateReview} key={id}/>
    </div>
  )
}

export default ReviewCard;