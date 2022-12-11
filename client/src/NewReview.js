import React, { useState } from "react"; 

function NewReview( { detailReviews }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");

  // unsure if this is how I should handle this, ask ben
  const [reviews, setReviews] = useState(detailReviews);
  console.log('reviews state',reviews);


  const newReview = {
    title,
    body
  };

  const configObj = {
    mothod: "POST",
    headers: {
      Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("/routes/:id", configObj)
      .then((r) => r.json())
      .then((review) => {
        addNewReview(review);
      });
  }

  const addNewReview = (review) => {
    setReviews([...reviews, review])
  }

  
  return (
    <div>
      <h3>Write a new review:</h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        <label htmlFor="rating">Enter rate 1-5:</label>
          <textarea
            id="body"
            type="text"
            name="body"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></textarea>
          <button type="submit">Add Review</button>
      </form>
    </div>
  )
  
}

export default NewReview;