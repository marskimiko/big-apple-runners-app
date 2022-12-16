import React from 'react'
// import { UserContext } from './context/user'

// function Home({ user }) {
//   if (user) {
//     return <div class="jumbotron p-3">
//               <h1 class="text-center">Welcome, {user.username}!</h1>
//             </div>;
//   } else {
//     return <h1>Please Login or Sign Up</h1>;
//   }

// }

function Home({ user}) {
  if (user) {
    return (
      <div class="container-fluid text-light p-5">
        <div class="container bg-success p-5">
        <h1 class="display-4">Welcome, {user.username}!</h1>
        <hr/>
        <p>click routes in the nav or below to see all routes</p>
        <a href="/routes" class="btn btn-light">routes</a>
        </div>
      </div>
    )
  } else {
    return (
      <div class="container-fluid text-light p-5">
        <div class="container bg-success p-5">
        <h1 class="display-4">Please Login or Signup!</h1>
        <hr/>
        </div>
      </div>
    )
  }
}


    // <h1>Welcome, {user.username}!</h1>;

export default Home;
