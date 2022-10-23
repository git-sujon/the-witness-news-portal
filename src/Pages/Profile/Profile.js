import React, { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider";

// profile func 
const Profile = () => {
    const {user} =useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoUrlRef= useRef(user.photoURL)


    const onSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(photoUrlRef.current.value)

    }

    const handleNameOnChange = (event) =>  {
      setName(event.target.value)
    }
    


  return (
    <Form onSubmit={onSubmitHandler} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleNameOnChange}  defaultValue={name} type="name" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={user.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control ref={photoUrlRef} defaultValue={user.photoURL} type="text" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
