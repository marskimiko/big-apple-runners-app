import React, { useState, useEffect } from 'react';

// create context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, [])

  const login = () => {

  }

  const logout = () => {

  }

  const signup = () => {

  }

  return (
    <UserContext.Provider value={{user, login, logout, signup}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider }; 

// this is the user provider, used to provider user. import useState to keep state. function is called user provider which will provide to the children whatever I pass into value, meaning any child that hook to global state will be able to access whatever I provide to them in value. Then I export UserContext (variable I declared) and UserProvider. This gives us global state by wrapping provider around the app component and can app any component that I want to have access to global state in the consumer

// this allows that everytime we referesh a page on any view, we come into here