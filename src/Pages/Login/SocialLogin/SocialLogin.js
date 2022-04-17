import React from 'react';
import google from '../../../images/icons8-google.png';
import facebook from '../../../images/icons8-facebook.png';
import github from '../../../images/icons8-github.png';

const SocialLogin = () => {
    return (
        <div className='my-3'>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height: '1px', width: '40%', backgroundColor: 'orange'}}></div>
                <div className='mx-2'>Or</div>
                <div style={{height: '1px', width: '40%', backgroundColor: 'orange'}}></div>
            </div>
            <div>
                <p className='text-center my-3'>Or Sign Up Using</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <img style={{cursor: 'pointer'}} width={36} className='me-2' src={google} alt="google" />
                    <img style={{cursor: 'pointer'}} width={36} className='me-2' src={facebook} alt="facebook" />
                    <img style={{cursor: 'pointer'}} width={36} src={github} alt="github" />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;