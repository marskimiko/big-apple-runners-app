import React from 'react';
import { NavLink } from "react-router-dom"

function Navigation({ user, setUser}) {

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
  
        <NavLink to="/routes">Routes</NavLink>
      <li className="nav-link" href="loginoutlink">
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </li>
    </nav>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">Big Apple Runners</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/routes">Routes</Nav.Link>
    //         <a class="nav-link" href="loginoutlink">
    //     {user ? (
    //       <button type="button" class="btn btn-info" onClick={handleLogoutClick}>Logout</button>
    //     ) : (
    //       <>
    //         <NavLink to="/signup">Sign Up</NavLink>
    //         <NavLink to="/login">Login</NavLink>
    //       </>
    //     )}
    //   </a>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Navigation;