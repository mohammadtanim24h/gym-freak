import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-text-container d-flex justify-content-start align-items-center">
                    <div>
                        <h1>KEEP YOUR BODY FIT</h1>
                        <h1>AND <span className="theme-text">STRONG</span></h1>
                        <h3 className="text-light">With Steven AKA the <span className="theme-text">GYM FREAK</span></h3>
                        <button className="contact-btn">Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
