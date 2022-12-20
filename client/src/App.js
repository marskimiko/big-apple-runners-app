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
  const [currentUser, setCurrentUser] = useState({routes: []});
  const [routes, setRoutes] = useState([]);
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      } else {
        r.json().then(data => setErrors(data.error))
      }
    });
  }, []);


  useEffect(() => {
    fetch('/routes')
    .then((r) => r.json())
    .then(setRoutes)
  },[])

  const addRoute = (route) => {
    setRoutes(current => [...current,route])
  }

  const updateUser = (user) => setCurrentUser(user)

  

  return (
    <div>
      <Navigation currentUser={currentUser} setUser={setCurrentUser} updateUser={updateUser} />
        <Routes>
        <Route exact path="/" element={<Home currentUser={currentUser} />}/>
        <Route exact path="/signup" element={<Signup setUser={setCurrentUser} updateUser={updateUser} />} />
        <Route exact path="/login" element={<Login setUser={setCurrentUser} updateUser={updateUser} />} />
        <Route exact path="/routes" element={<RouteContainer routes={routes} />}/>
        <Route exact path="/routes/:id" element={<RouteDetails routes={routes} setRoutes={setRoutes} user={currentUser}/>}/>
        <Route exact path="/routes/new" element={<NewRoute routes={routes} setRoutes={setRoutes} addRoute={addRoute}/>}/>
        <Route exact path="/users/:id" element={<MyRouteContainer updateUser={updateUser} currentUser={currentUser}/>}/>

      </Routes>
    </div>
  );
}

export default App;
