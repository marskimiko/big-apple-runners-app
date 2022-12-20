import React from 'react'

function Home({currentUser}) {

  if (currentUser.username) {
    return (
      <div class="container-fluid text-light p-5">
        <div class="container bg-success p-5">
        <h1 class="display-4">Welcome, {currentUser.username}!</h1>
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
        <h1 class="display-4" style={{ textAlign: "center" }}>Big Apple Runners</h1>
        <hr/>
        <p style={{ textAlign: "center" }}>Please Login or Signup</p>
        </div>
      </div>
    )
  }
}


export default Home;
