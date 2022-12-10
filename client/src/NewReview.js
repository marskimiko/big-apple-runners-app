import React, { useState } from "react"; 

function NewReview( {detailReviews }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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
    console.log('add review')
  }

  
  return (
    <div>
      <h3>Write a new review:</h3>
      <form>
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
      </form>
    </div>
  )
  
}

export default NewReview;