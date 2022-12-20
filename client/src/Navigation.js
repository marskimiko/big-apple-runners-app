import React from 'react';
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

function Navigation({ currentUser, updateUser }) {


  // const {id} = user;

  function handleLogoutClick() {
    fetch("/logout", { 
      method: "DELETE"})
      .then((r) => {
        if (r.ok) {
          updateUser(false)
        }
    })
  }
  return (
    <Wrapper>
    <Nav className="navbar"> 
      <NavLink className="nav-link" to="/">Home</NavLink>
      {currentUser.username ? (
        <>
          
          <NavLink to="/routes">Routes</NavLink>
          <NavLink to="/routes/new">New Route</NavLink>
          <NavLink to={`/users/${currentUser.id}`}>My Routes</NavLink>
          <Link to="/"><Button onClick={handleLogoutClick} variant="light">Logout</Button></Link>
        </>
      ) : (
        <>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
  </Nav>
  </Wrapper>
)

  // return (
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
  //       <NavLink className="nav-link" to="/">Home</NavLink>
  //       {currentUser.username ? (
  //         <>
            
  //           <NavLink to="/routes">Routes</NavLink>
  //           <NavLink to="/routes/new">New Route</NavLink>
  //           <NavLink to={`/users/${currentUser.id}`}>My Routes</NavLink>
  //           <Link to="/"><Button onClick={handleLogoutClick} variant="light">Logout</Button></Link>
  //         </>
  //       ) : (
  //         <>
  //           <NavLink to="/signup">Sign Up</NavLink>
  //           <NavLink to="/login">Login</NavLink>
  //         </>
  //       )}
  //   </nav>
  // )
}

export default Navigation;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;


const Nav = styled.nav`
  display: flex;
  gap:154px;
  position: absolute;
  right: 8px;
`;