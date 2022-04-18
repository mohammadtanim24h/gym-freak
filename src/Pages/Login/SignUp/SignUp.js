import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [error, setError] = useState("");
    // Signup 
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confPass = e.target.confirmPassword.value;
        if(password !== confPass){
            setError("Password and Confirm Password must match");
            return;
        }
        else {
            setError("");
            createUserWithEmailAndPassword(email, password);
        }
    }
    const navigate = useNavigate();
    // Redirection after user is created
    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user])

    return (
        <div className='d-flex justify-content-center mt-5 login-container mx-auto'>
            <div className='w-100'>
                <form onSubmit={handleSignUp} className='custom-form mt-4'>
                    <h2 className='form-title'>Sign up</h2>
                    <input type="text" name='name' placeholder='Name (Optional)'/>
                    <input type="email" name='email' placeholder='Email' required/>
                    <input type="password" name="password" placeholder='Password' required/>
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' required/>
                    <button className='submit-btn' type='submit'>Sign up</button>
                    {error &&  <p className='text-danger mt-3'>{error}</p> }
                    {hookError && <p className='text-danger mt-3'>{hookError.message}</p> }
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