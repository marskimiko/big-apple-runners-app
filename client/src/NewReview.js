import React, { useState } from "react";
// import { useParams } from 'react-router-dom' 

function NewReview( { reviews, setReviews, setRoutes, routes }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  // const params = useParams();
  
  // const newReview = {
  //   title,
  //   body,
  // };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body
    })
  
  };

  



  // go through the routes to find the route im interested it
  // update route by adding a review
  //  set routes will all the other routes and this updated routes

  const addNewReview = (review) => {
    setReviews([...reviews, review])
    console.log('addNewReview',reviews)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // fetch(`/routes/${params.id}`, configObj)
    fetch(`/reviews`, configObj)
      .then((r) => r.json())
      .then((review) => {
        addNewReview(review);
        console.log('review',review)
      });
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