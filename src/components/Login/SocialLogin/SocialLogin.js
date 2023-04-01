import React from 'react';
import auth from '../../../firebase.init';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';

import google from '../../assets/images/social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <>
            <div className='d-flex align-items-center '>
                
                <div style={{height: '1px'}} className='w-50 bg-white'></div>
                <p className='mx-2 mt-2 text-white'>Or</p>
                <div style={{height: '1px'}} className='w-50 bg-white'></div>
            </div>
            <div className="social-button">
            {/* <p className='text-danger text-center'>{errorMessage}</p> */}
                <button
                onClick={() => signInWithGoogle()}
                 className='btn btn-dark w-50 mx-auto d-block my-2'>
                    <img style={{width: "50px"}} src={google} alt="" />
                    <span>Signin With Google</span>
                </button>
                <button
                    // onClick={() => ()}
                className='btn btn-dark w-50 mx-auto d-block my-2'>
                    {/* <img src={facebook} alt="" /> */}
                    <span>Signin With FaceBook</span>
                </button>
                {/* <button 
                    onClick={() => signInWithGithub()}
                className='btn btn-dark w-50 mx-auto d-block my-2'>
                    <img src={github} alt="" />
                    <span>Signin With Github</span>
                </button> */}
            </div>
        </>
    );
};

export default SocialLogin;