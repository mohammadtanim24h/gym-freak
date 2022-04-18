import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    // login hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    // login function
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();
    // navigate after successfull login
    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user])

    return (
        <div className='d-flex justify-content-center mt-5 login-container mx-auto'>
            <div className='w-100'>
                <form onSubmit={handleLogin} className='custom-form mt-4'>
                    <h2 className='form-title'>Login</h2>
                    <input type="email" name='email' placeholder='Email' required/>
                    <input type="password" name="password" placeholder='Password' required/>
                    <p>Forgot password? <span style={{cursor: 'pointer'}} className='primary-color'>Reset</span></p>
                    <button className='submit-btn' type='submit'>Login</button>
                    {error && <p className='text-danger'>{error.message}</p> }
                    <p className='mt-3'>New to Gym Freak? <Link className='text-decoration-none' style={{color: 'orange', cursor: 'pointer'}} to='/signup'>Sign Up</Link> </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;