import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    // Getting userinfo using AuthState
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState();

    // Checkout form submit function
    const handleCheckout = (e) => {
        e.preventDefault();
        setMessage("Thanks for Booking");
        toast("Booking Confirmed");
    }
    return (
        <div className='checkout-container'>
            {message && <h2 className='theme-text text-center mt-5'>{message}</h2> }
            <div className='d-flex justify-content-center mt-5 login-container mx-auto'>
            <div className='w-100'>
                <form onSubmit={handleCheckout} className='custom-form mt-4'>
                    <h2 className='form-title mb-3'>Checkout</h2>
                    <input type="text" name='name' placeholder='Name' required/>
                    <input type="email" name="email" readOnly value={user.email} />
                    <input type="text" name="address" placeholder='Address' required/>
                    <input type="number" name="phone" placeholder='Phone Number' required/>
                    <button className='submit-btn' type='submit'>Book</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default Checkout;