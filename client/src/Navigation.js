import React from 'react';
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Navigation({ user, setUser}) {


  // const {id} = user;

  function handleLogoutClick() {
    fetch("/logout", { 
      method: "DELETE"})
      .then((r) => {
        if (r.ok) {
          setUser(null)
        }
    })
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <NavLink className="nav-link" to="/">Home</NavLink>
        {user ? (
          <>
            
            <NavLink to="/routes">Routes</NavLink>
            <NavLink to="/routes/new">New Route</NavLink>
            <NavLink to={`/users/${user.id}`}>My Routes</NavLink>
            <Link to="/"><Button onClick={handleLogoutClick} variant="light">Logout</Button></Link>
          </>
        ) : (
          <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
    </nav>
  )
}

export default Navigation;