import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function NewRoute({ routes, setRoutes }) {
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");

  const navigate = useNavigate();

  const newRoute = {
    name,
    image_url,
    location,
    time,
    distance
  }

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      contentType: "application/json",
    },
    body: JSON.stringify(newRoute)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/routes', configObj)
    .then((r) => r.json())
    .then((route) => {
      addNewRoute(route)
      navigate('/routes');
    })
  }

  const addNewRoute = (route) => {
    setRoutes([...routes, route])
  }

  return (
    <div>
      <h3>Create a new route:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name:</label>
          <input
            id="name"
            type="text"
            name="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <label htmlFor="body">Image URL:</label>
          <textarea
            id="image"
            type="text"
            name="body"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          ></textarea>
          <label htmlFor="body">Location:</label>
          <textarea
            id="location"
            type="text"
            name="body"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></textarea>
          <label htmlFor="body">Time:</label>
          <textarea
            id="time"
            type="text"
            name="body"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></textarea>
          <label htmlFor="body">Distance:</label>
          <textarea
            id="distance"
            type="text"
            name="body"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          ></textarea>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  )
}

export default NewRoute;