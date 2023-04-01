import React from "react";
import { Button, Form } from "react-bootstrap";
import googleIcon from '../../components/assets/images/social/google.png'
import './Login.css'
import SocialLogin from "./SocialLogin/SocialLogin";
const Login = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="w-50 mx-auto login-form-container">
        <h1 className="text-center">Login Form</h1>
      <Form onSubmit={handleSubmit} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="row">
        <div className="d-flex justify-content-between">
        <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Forgot Password" />
        </Form.Group>
        </div>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
<h1>Login</h1>;
