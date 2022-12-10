import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import RouteContainer from './RouteContainer'
import RouteDetails from './RouteDetails'


function App() {
  const [user, setUser] = useState(null);
  const [routes, setRoutes] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // console.log(routes)

  useEffect(() => {
    fetch('/routes')
    .then((r) => r.json())
    .then(setRoutes)
  },[])

  

  // useEffect(() => {
  //   fetch('/reviews')
  //   .then((r)=> r.json())
  //   .then(setReviews)
  // },[])

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
        <Routes>
        <Route exact path="/" element={<Home user={user} />}/>
        <Route exact path="/signup" element={<Signup setUser={setUser}/>} />
        <Route exact path="/login" element={<Login setUser={setUser}/>} />
        <Route exact path="/routes" element={<RouteContainer routes={routes} />}/>
        <Route exact path="/routes/:id" element={<RouteDetails routes={routes}/>}/>
      </Routes>
    </div>
  );
}

export default App;
