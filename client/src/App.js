import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
// import { UserProvider } from "./context/user"

// function App(props) {
//   return (
//     <div className="App">
//       <UserProvider>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/signup" element={<Signup />} />
//           <Route exact path="/login" element={<Login />} />
//         </Routes>
//       </UserProvider>
//     </div>
//   )
// }

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const signUpFunction = (user) => {
    setUser(user)
  }

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={
          <Home 
            user={user} 
            setUser={setUser} 
          />}/>
        <Route exact path="/signup" element={<Signup signUpFunction={signUpFunction} />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
