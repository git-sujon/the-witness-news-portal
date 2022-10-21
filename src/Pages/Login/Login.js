import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((res) => {
        form.reset()
        console.log(res);
      })
      .catch(error => {
        setError(error.message.split('(')[1].split('/')[1].slice(0,-2).replace('-',' ').replace('-',' '));
        console.log(error);
        
      });
  };

  return (
    <div className="p-5 border  border-secondary">
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Don't Have an account?,{" "}
            <Link className="text-decoration-none text-warning" to="/register">
              Create a Account
            </Link>{" "}
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p className="text-danger">{error} </p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
