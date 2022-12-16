import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  // function handleSubmit(e){
  //   e.preventDefault()
  //   const user = {
  //       username,
  //       password,
  //       passwordConfirmation: passwordConfirmation
  //   }
  //   fetch(`/signup`,{
  //     method:'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body:JSON.stringify(user)
  //   })
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(user => {
  //         setUser(user)
  //         navigate("/");
  //       })
  //       } else {
  //         res.json().then(json => setErrors(json.errors))
  //       }
  //     })  
  // }

  // function handleSubmit(e){
  //   e.preventDefault()

  //   const user = {
  //       username,
  //       password,
  //       passwordConfirmation: passwordConfirmation
  //   }
    
  //   fetch(`/signup`,{
  //     method:'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body:JSON.stringify(user)
  //   })
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(user => {
  //         setUser(user)
  //         // navigate("/");
  //       })
  //       } else {
  //         res.json().then(json => {
  //           setErrors(json.errors)
  //         })
  //       }
  //     })  
  // }

  function handleSubmit(e){
    e.preventDefault()

    const user = {
        username,
        password,
        passwordConfirmation: passwordConfirmation
    }
    
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          setUser(user)
          navigate("/");
        })
        } else {
          res.json().then(json => {
            setErrors(json.errors)
          })
        }
      })  
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="form.Username">
      <Form.Label>Username</Form.Label>
      <Form.Control            
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="form.Password">
      <Form.Label>Password</Form.Label>
      <Form.Control          
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
    </Form.Group>

    <Form.Group className="mb-3" controlId="form.PasswordConfirmation">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control          
        type="password"
        name="password"
        placeholder="Password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)} 
        />
    </Form.Group>
    {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
               <li key={error}>{error}</li>
            ))}
          </ul>
        )}
    <Button variant="primary" type="submit">
      SignUp
    </Button>
  </Form>
  {/* {errors? <div style={{ color: "red" }}>{errors}</div>:null} */}
  </>
  );
}

export default SignUp;

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //       password_confirmation: passwordConfirmation,
  //     }),
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //       navigate("/routes");
  //     }
  //   });
  // }
