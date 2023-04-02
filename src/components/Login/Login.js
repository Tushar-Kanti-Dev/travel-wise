import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const Login = () => {
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();



  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  let from = location.state?.from?.pathname || '/';
  if(user){
    navigate('/')
  }

  return (
    <div className="w-50 mx-auto login-form-container">
      <h1 className="text-center">Login Form</h1>
      <Form onSubmit={handleSubmit} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <div className="row">
          <div className="d-flex justify-content-between">
            <Form.Group
              className="mb-3 text-white"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <p className="text-white">Forget password</p>
          </div>
        </div>
        <div className="submit-button w-100 text-center">
            
            <Button 
            
            className="mx-auto w-50" type="submit">
            Submit
          </Button>

          <p className="text-white mt-2">
            Don't have an account?
            <Link
              style={{ color: "#F9A51A", marginLeft: "10px" }}
              to="/register"
            >
              Create an account
            </Link>
          </p>
        </div>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
<h1>Login</h1>;
