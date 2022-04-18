import React from 'react';
import './Benefits.css';
import team from '../../../images/team.jpg';
import equipment from '../../../images/equipment.jpg';

const Benefits = () => {
    return (
        <div className='benefits-section'>
            <h1 className='benefit-title'>FRESH AND FUN WORKOUTS</h1>
            <div className='benefits'>
                <div className='bg-light benefit-card'>
                    <img className='img-fluid' src={team} alt="" />
                    <h2 className='text-dark'>HIGHLY MOTIVATING</h2>
                    <p className='lead text-center text-dark'>Start your healthy lifestyle today</p>
                </div>
                <div className='bg-light benefit-card'>
                    <img className='img-fluid' src={equipment} alt="" />
                    <h2 className='text-dark'>NEW GYM EXPERIENCE</h2>
                    <p className='lead text-center text-dark'>Try your first training for free</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;