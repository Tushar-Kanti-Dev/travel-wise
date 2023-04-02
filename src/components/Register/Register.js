import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Register.css'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmit = e=>{
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;

        const email = e.target.email.value;
        const password = e.target.password.value;
        const conpassword = e.target.conpassword.value

        console.log(fname, lname);
        createUserWithEmailAndPassword(email, password)

    }
    if(user){
      navigate('/')
    }
    return (
        <div className="w-50 mx-auto login-form-container bg-white">
        <h1 className="text-center">Login Form</h1>
      <Form onSubmit={handleSubmit} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='login-fname' ref={firstNameRef} type="text" name='fname' placeholder="First Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control style={{outline: 'none'}} ref={lastNameRef} type="text" name='lname' placeholder="Last Name"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={confirmPasswordRef} type="password" name='conpassword' placeholder="Confirm Password" required/>
        </Form.Group>
        <div className="row">
        <div className="d-flex justify-content-between">
        <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        
        <p className="text-white">Forget password</p>
        </div>
        </div>
        <div className="submit-button w-100 text-center">
        <Button 
        className="mx-auto w-50"
        type="submit">
          Submit
        </Button>
        <p className="text-white mt-2">Don't have an account?
        <Link style={{color: "#F9A51A", marginLeft: "10px"}} to='/register'>Create an account</Link>
        </p>
        </div>
      </Form>
      <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;<h2>This is Register</h2>