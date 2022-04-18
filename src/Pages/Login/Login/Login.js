import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
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

    // navigate after successfull login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if(user){
            navigate(from, { replace: true });
        }
    }, [user])

    //loading spinner
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='d-flex justify-content-center mt-5 login-container mx-auto'>
            <div className='w-100'>
                <form onSubmit={handleLogin} className='custom-form mt-4'>
                    <h2 className='form-title'>Login</h2>
                    <input type="email" name='email' placeholder='Email' required/>
                    <input type="password" name="password" placeholder='Password' required/>
                    <p>Forgot password? <span style={{cursor: 'pointer'}} className='primary-color'>Reset</span></p>
                    <button className='submit-btn' type='submit'>Login</button>
                    {error && <p className='text-danger mt-3'>{error.message}</p> }
                    <p className='mt-3'>New to Gym Freak? <Link className='text-decoration-none' style={{color: 'orange', cursor: 'pointer'}} to='/signup'>Sign Up</Link> </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;