import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { signUpServices } from "../services/signUpServices";
import { useHistory } from "react-router-dom";

const initialUserCredState = {
  name: "",
  email: "",
  password: "",
};
const SignUpForm = () => {
  const [userCred, setUserCred] = useState(initialUserCredState);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    signUpServices(userCred)
      .then((data) => {
        history.push("/");
      })
      .catch((err) => {
        alert("Somthing went wroung please try again.");
      });
  };

  const onchangeHandler = (e) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log("user", userCred);
  }, [userCred]);
  return (
    <>
      <div>
        <div className="text-center">
          <h2>Sign Up</h2>
        </div>
        <div className="m-auto w-50">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                onChange={onchangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onchangeHandler}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={onchangeHandler}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
