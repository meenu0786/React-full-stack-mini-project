import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import { login } from "../redux/reducers/login/userAction";

const initialUserCredState = {
  email: "",
  password: "",
};

const Login = ({ userData, login }) => {
  const [userCred, setUserCred] = useState(initialUserCredState);
  const [done, setResData] = useState(false);
  const history = useHistory();

  const signUpHandler = () => {
    history.push("/sign-up");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const resd = await login(userCred);
    history.push("/home");
    console.log("resd", resd);
    console.log("userData1", userData);
  };

  const onchangeHandler = (e) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };
  //   useEffect(() => {
  //     console.log("done", done);
  //     if (done) {
  //       console.log("userData1", userData);
  //     }
  //   }, [done]);
  return (
    <>
      <div>
        <div className="text-center">
          <h2>Login</h2>
        </div>
        <div className="m-auto w-50">
          <Form onSubmit={submitHandler}>
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
            <Button
              className="border-0 bg-white text-body pb-3 px-0 "
              onClick={signUpHandler}
            >
              Doesn't have an account, create one
            </Button>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
