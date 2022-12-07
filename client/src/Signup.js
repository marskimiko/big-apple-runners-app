import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

function Signup( {signUpFunction}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorsList, setErrorsList] =useState([])
  const [isLoading, setIsLoading] = useState(false);
  // const {signup} = useContext(UserContext);
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('/signup', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //       password_confirmation: passwordConfirmation 
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(user => {
  //     if (!user.errors) {
  //       signup(user)
  //       // navigate('/');
  //     } else {
  //       setUsername("")
  //       setPassword("")
  //       setPasswordConfirmation("")
  //       const displayErrors = user.errors.map(e => <li>{e}</li>)
  //       setErrorsList(displayErrors)
  //     }
  //   })
  // }

  function handleSubmit(e) {
    e.preventDefault()
    setErrorsList([]);
    setIsLoading(true);

    fetch("/signuo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          signUpFunction(user)
        });
      } else {
        r.json().then((displayErrors) => setErrorsList(displayErrors.setErrorsList))
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> 
        <br/>
        <label>Password: </label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <br />
        <label>Confirm Password: </label>
          <input 
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        <br />
          <input type="submit"/>
      </form>
      <ul>
        {errorsList}
      </ul>
    </div>
  )
}

export default Signup;