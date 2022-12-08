import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar({ user, setUser}) {

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
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/routes">Routes</NavLink>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar;