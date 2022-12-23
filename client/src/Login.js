import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({ setUser, updateUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault()

    const user = {
        username,
        password
    }

    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })

    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
          navigate("/");
        })
        } else {
          res.json().then(json => {
            // debugger
            setErrors(json.errors) 
          })
          // res.json().then(json => setErrors(Object.entries(json.errors)))
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
          name="body"            
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
    
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    {errors? <div style={{ color: "red" }}>{errors}</div>:null}
    </>
  );
}

export default Login;