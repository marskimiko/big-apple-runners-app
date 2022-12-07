import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import RouteContainer from './RouteContainer'


function App() {
  const [user, setUser] = useState(null);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/routes')
    .then((r) => r.json())
    .then(setRoutes)
  },[])

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
        <Routes>
        <Route exact path="/" element={<Home user={user} />}/>
        <Route exact path="/signup" element={<Signup setUser={setUser}/>} />
        <Route exact path="/login" element={<Login setUser={setUser}/>} />
        <Route exact path="/routes" element={<RouteContainer routes={routes}/>}/>
      </Routes>
    </div>
  );
}

export default App;
