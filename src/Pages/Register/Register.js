import { sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {

  const [error, setError] = useState("");
  const {
    createUser,
    emailVarification,
    userInformationProviding,
    setLoading,
  } = useContext(AuthContext);
  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    console.log(email, password, name, photoUrl);

    createUser(email, password)
      .then((res) => {
      
        form.reset();
        
        console.log(res);
        userInformationProviding(name, photoUrl);
        emailVarification();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message.split('(')[1].split('/')[1].slice(0,-2).replace('-',' ').replace('-',' '));
      });
  };

  return (
    <div className="p-5 border  border-secondary">
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Enter Photo Url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p>
            Already Have an account?,
            <Link className="text-decoration-none text-warning" to="/login">
              Sign-In here
            </Link>
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <p className="text-danger">{error} </p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
