import React from 'react'
// import { UserContext } from './context/user'

function Home({ user, setUser }) {
  // const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (<h3>Please Login or Signup</h3>)
  } else {
    return (
      <div>
        <h3>{user.username} Home</h3>
      </div>
    )
  }
}

export default Home; 