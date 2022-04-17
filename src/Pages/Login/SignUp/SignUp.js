import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div className='d-flex justify-content-center mt-5 login-container mx-auto'>
            <div className='w-100'>
                <form className='custom-form mt-4'>
                    <h2 className='form-title'>Sign up</h2>
                    <input type="text" name='name' placeholder='Name' />
                    <input type="email" name='email' placeholder='Email' />
                    <input type="password" name="password" placeholder='Password' />
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' />
                    <button className='submit-btn' type='submit'>Sign up</button>
                    <p className='mt-3'>Already a user? 
                        <Link className='text-decoration-none' style={{color: 'orange', cursor: 'pointer'}} to='/login'> Login</Link> 
                    </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default SignUp;