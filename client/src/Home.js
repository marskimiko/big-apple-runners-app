import React from 'react'
// import { UserContext } from './context/user'

function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;
