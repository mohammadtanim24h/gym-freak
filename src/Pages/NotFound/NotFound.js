import React from 'react';
import './NotFound.css';
import notFound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img className='img-fluid' src={notFound} alt="" />
            <div>
                <h2>404 Page Not Found!</h2>
                <h3>The Page you are looking for is unavailable</h3>
            </div>
        </div>
    );
};

export default NotFound;