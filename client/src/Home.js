import React from 'react'
// import { UserContext } from './context/user'

function Home({ user }) {
  if (user) {
    return <div class="jumbotron p-3">
              <h1 class="text-center">Welcome, {user.username}!</h1>
            </div>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}


    // <h1>Welcome, {user.username}!</h1>;

export default Home;
