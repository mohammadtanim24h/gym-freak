import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='d-flex justify-content-center mt-5 login-container w-50 mx-auto'>
            <div className='w-50'>
                <form className='custom-form mt-4'>
                    <h2 className='form-title'>Login</h2>
                    <input type="email" name='email' placeholder='Enter Email' />
                    <input type="password" name="password" placeholder='Password' />
                    <p>Forgot password? <span style={{cursor: 'pointer'}} className='primary-color'>Reset</span></p>
                    <button className='submit-btn' type='submit'>Login</button>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;