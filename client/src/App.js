import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navigation from './Navigation'
import Signup from './Signup'
import Login from './Login'
import RouteContainer from './RouteContainer'
import RouteDetails from './RouteDetails' 
import NewRoute from './NewRoute'
import MyRouteContainer from './MyRouteContainer';


function App() {
  const [user, setUser] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then(data => setErrors(data.error))
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch('/users')
  //   .then((r) =>r.json())
  //   .then(setUser)
  // }, [])


  useEffect(() => {
    fetch('/routes')
    .then((r) => r.json())
    .then(setRoutes)
  },[])

  const addRoute = (route) => {
    setRoutes(current => [...current,route])
  }

  const updateUser = (currentUser) => setUser(currentUser)

  

  return (
    <div>
      <Navigation user={user} setUser={setUser} />
        <Routes>
        <Route exact path="/" element={<Home user={user} />}/>
        <Route exact path="/signup" element={<Signup setUser={setUser} updateUser={updateUser} />} />
        <Route exact path="/login" element={<Login setUser={setUser} updateUser={updateUser} />} />
        <Route exact path="/routes" element={<RouteContainer routes={routes} />}/>
        <Route exact path="/routes/:id" element={<RouteDetails routes={routes} setRoutes={setRoutes} user={user}/>}/>
        <Route exact path="/routes/new" element={<NewRoute routes={routes} setRoutes={setRoutes} addRoute={addRoute}/>}/>
        <Route exact path="/users/:id" element={<MyRouteContainer updateUser={updateUser}/>}/>

      </Routes>
    </div>
  );
}

export default App;
