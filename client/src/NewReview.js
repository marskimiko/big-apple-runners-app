import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

function NewReview( { setRoutes, routes, user, setUser }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const params = useParams();
  const [errors, setErrors] = useState([]);

  const style = {
    reviewForm: {
      border: "2px solid #D3D3D3",
      borderRadius: '25px',
      paddingTop: '40px',
      width: '200px',
      height: '350px'
    }
  }


  const updateUser = (review) => {
    // get the user.routes 
    // add review.route to the user route
    // update the user with setUser
    
    const userRoute = user.routes
    const reviewRoute = review.route
    
    const updateRoutes = [...userRoute, reviewRoute]

    user.routes = updateRoutes
    setUser(user)
    // setUser([...user.routes, review.route])
    // setUser([])
    // setUser()
    console.log(userRoute)
    console.log(user)
    // console.log('new user', updatedRoutes)
    // update the routes 
    // add route to user.routes 
    // user 
    // review
  }

  // function updateUser() {
  //   // setCurrentUser(current => [...current,])
  //   // user.route.id 
  //   // user.reviews.route_id
  //   // update userState with setCurrentUser

  //   // if the review.route_id is equal to the review id update the state of the current user??
  //   // [...currentUser.routes]
  //   console.log(user)
  //   console.log(user.reviews)
  // }

   const addNewReview = (review) => {
  
      const newRoutes = routes.map((route) => {
        if (parseInt(params.id) === route.id) {
          const newReviews = [...route.reviews, review]
          route.reviews = newReviews
          return route;
        } else {
          return route;
        }
      })
      setRoutes(newRoutes)
  }


  function handleSubmit(e){
    e.preventDefault()

    const review = {
      title,
      body,
      rating
    };

    fetch(`/routes/${params.id}`, {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(review)
    })

    .then(res => {
      if(res.ok){
        res.json().then(review => {
          addNewReview(review)
          updateUser(review)
          
        })
      } else {
          res.json().then(json => setErrors(json.errors))
      }
    })  
  }


  // className="square border rounded border-5"
  return (
    <Container style={style.reviewForm}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="form.Title">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="form.Body">
          <Form.Label>Body</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}             
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="form.Rating">
            <Form.Label>Rating: 1-5</Form.Label>
            <Form.Control 
            type="text"
            name="body"
            value={rating}
            onChange={(e) => setRating(e.target.value)}/>
        </Form.Group>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
               <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Button type="submit">Add Review</Button>
      </Form>
    </Container>
  )
  
}

export default NewReview;