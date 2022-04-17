import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='d-flex justify-content-center mt-5 login-container mx-auto'>
            <div className='w-100'>
                <form className='custom-form mt-4'>
                    <h2 className='form-title'>Login</h2>
                    <input type="email" name='email' placeholder='Email' />
                    <input type="password" name="password" placeholder='Password' />
                    <p>Forgot password? <span style={{cursor: 'pointer'}} className='primary-color'>Reset</span></p>
                    <button className='submit-btn' type='submit'>Login</button>
                    <p className='mt-3'>New to Gym Freak? <Link className='text-decoration-none' style={{color: 'orange', cursor: 'pointer'}} to='/signup'>Sign Up</Link> </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;