import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/routes");
      }
    });
  }

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Login</h1>
    //     <label htmlFor="username">Username</label>
    //     <input
          // type="text"
          // id="username"
          // autoComplete="off"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input
          // type="password"
          // id="password"
          // autoComplete="current-password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control            
          type="text"
          id="username"
          autoComplete="off"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control          
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

  );
}

export default Login;