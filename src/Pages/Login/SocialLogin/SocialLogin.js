import React, { useEffect } from 'react';
import google from '../../../images/icons8-google.png';
import facebook from '../../../images/icons8-facebook.png';
import github from '../../../images/icons8-github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    // Google sign in
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Github sign in 
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    
    // Navigate after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if(user || gitUser){
            navigate(from, { replace: true });
        }
    }, [user, gitUser])

    return (
        <div className='my-3'>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height: '1px', width: '40%', backgroundColor: 'orange'}}></div>
                <div className='mx-2'>Or</div>
                <div style={{height: '1px', width: '40%', backgroundColor: 'orange'}}></div>
            </div>
            <div>
                <p className='text-center my-3'>Continue Using</p>
                {error && <p className='text-danger'>{error.message}</p> }
                {gitError && <p className='text-danger'>{gitError.message}</p> }
                <div className='d-flex justify-content-center align-items-center'>
                    <img onClick={() => signInWithGoogle()} style={{cursor: 'pointer'}} width={36} className='me-2' src={google} alt="google" />
                    <img style={{cursor: 'pointer'}} width={36} className='me-2' src={facebook} alt="facebook" />
                    <img onClick={() => signInWithGithub()} style={{cursor: 'pointer'}} width={36} src={github} alt="github" />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;